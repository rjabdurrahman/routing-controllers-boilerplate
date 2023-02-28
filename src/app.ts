import "reflect-metadata";
import { Action, useExpressServer } from "routing-controllers";
import { useContainer } from "routing-controllers";
import { Container } from "typedi";
import { ExampleController } from "./controllers/Example.controller";
import { UserController } from "./controllers/User.controller";
import { ErrorHandler } from "./middlewares/ErrorHandler";
import express from 'express';
import expressSession from 'express-session';
import { sessionConfig } from "./config/session";
import { sequelize } from "./config/db";

useContainer(Container);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

const app = express();
app.use(expressSession(sessionConfig))

useExpressServer(app, {
  development: false,
  cors: true,
  routePrefix: '/api/v1',
  authorizationChecker: async (action: Action, roles: string[]) => {
    const token = action.request.headers['authorization'];
    console.log('Token', token);
    if (token == 1) return true;
    else return false;
  },
  currentUserChecker: async (action: Action) => {
    const token = action.request.headers['authorization'];
    return 'User' + token;
  },
  controllers: [
    ExampleController,
    UserController
  ],
  middlewares: [ErrorHandler]
})

app.listen(3000, () => console.log(`Listening on http://localhost:3000`))
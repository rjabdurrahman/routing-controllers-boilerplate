import "reflect-metadata";
import { useExpressServer } from "routing-controllers";
import { useContainer } from "routing-controllers";
import { Container } from "typedi";
import { ExampleController } from "./controllers/ExampleController";
import { ErrorHandler } from "./middlewares/ErrorHandler";
import express from 'express';
import expressSession from 'express-session';
import { sessionConfig } from "./config/session";

useContainer(Container);

const app = express();
app.use(expressSession(sessionConfig))

useExpressServer(app, {
  development: false,
  cors: true,
  controllers: [ExampleController],
  middlewares: [ErrorHandler]
})

app.listen(3000, () => console.log(`Listening on http://localhost:3000`))
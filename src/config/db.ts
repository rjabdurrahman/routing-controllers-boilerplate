import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/User';
export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: '',
  database: process.env.DB_NAME,
  port: 3306,
  models: [User],
  logging: false,
});

export async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    sequelize.sync({
      alter: true
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
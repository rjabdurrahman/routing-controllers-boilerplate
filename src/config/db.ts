import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/User';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  database: 'data_entry_hub',
  username: 'root',
  password: '',
  host: 'localhost',
  port: 3306,
  models: [User],
  logging: false,
});

export default async function connectDB() {
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
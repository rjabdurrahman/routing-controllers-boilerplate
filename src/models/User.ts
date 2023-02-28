import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ timestamps: false, tableName: 'users' })
export class User extends Model<User> {

  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column
  email: string;

  @Column
  password: string;
  
  @Column
  role: number;

  @Column
  status: number;
  
  @Column({
    type: DataType.DATE
  })
  created_at: Date;

}
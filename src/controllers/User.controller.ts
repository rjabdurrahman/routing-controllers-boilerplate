import { Body, Get, JsonController, Post } from 'routing-controllers';
import { Service } from 'typedi';
import { User } from '../models/User';

@Service()
@JsonController()
export class UserController {

  @Get('/users')
  async getUsers(): Promise<User[]> {
    return await User.findAll({
        raw: true
    });
  }

  @Post('/user')
  async create(@Body() body: any): Promise<User[]> {
    let result = await User.create(body);
    return (result as any)?.toJSON();
  }

}
import { Controller, Get } from 'routing-controllers';
import { Service } from 'typedi';
import { User } from '../models/User';

@Service()
@Controller()
export class UserController {

  @Get('/users')
  async getUsers(): Promise<User[]> {
    return await User.findAll({
        raw: true
    });
  }

}
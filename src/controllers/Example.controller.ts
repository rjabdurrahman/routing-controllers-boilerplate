import { JsonController, Get, Session, Authorized, CurrentUser } from "routing-controllers";
import { Service } from "typedi";
import { DataService } from "../services/DataService";

@Authorized()
@Service()
@JsonController("/data")
export class ExampleController {
  
  constructor(private dataService: DataService) { }

  @Get("/")
  getExample(@CurrentUser() user: any, @Session() session: any) {
    console.log(user);
    console.log(session.name);
    return this.dataService.getUsers();
  }

  @Get("/set-cookie")
  setCookie(@Session() session: any) {
    session.name = 'Abdur Rahman2';
    console.log(session)
    return "Hello, world!";
  }
}
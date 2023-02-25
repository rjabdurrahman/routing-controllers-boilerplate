import { JsonController, Get, Session } from "routing-controllers";
import { Service } from "typedi";
import { DataService } from "../services/DataService";

@Service()
@JsonController("/")
export class ExampleController {
  
  constructor(private dataService: DataService) { }

  @Get("/data")
  getExample(@Session() session: any) {
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
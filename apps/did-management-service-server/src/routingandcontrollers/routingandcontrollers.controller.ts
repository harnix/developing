import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RoutingAndControllersService } from "./routingandcontrollers.service";

@swagger.ApiTags("routingAndControllers")
@common.Controller("routingAndControllers")
export class RoutingAndControllersController {
  constructor(protected readonly service: RoutingAndControllersService) {}
}

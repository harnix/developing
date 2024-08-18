import * as graphql from "@nestjs/graphql";
import { RoutingAndControllersService } from "./routingandcontrollers.service";

export class RoutingAndControllersResolver {
  constructor(protected readonly service: RoutingAndControllersService) {}
}

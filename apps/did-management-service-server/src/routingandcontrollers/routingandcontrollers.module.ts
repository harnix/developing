import { Module } from "@nestjs/common";
import { RoutingAndControllersService } from "./routingandcontrollers.service";
import { RoutingAndControllersController } from "./routingandcontrollers.controller";
import { RoutingAndControllersResolver } from "./routingandcontrollers.resolver";

@Module({
  controllers: [RoutingAndControllersController],
  providers: [RoutingAndControllersService, RoutingAndControllersResolver],
  exports: [RoutingAndControllersService],
})
export class RoutingAndControllersModule {}

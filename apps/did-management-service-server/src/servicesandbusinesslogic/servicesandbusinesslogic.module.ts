import { Module } from "@nestjs/common";
import { ServicesAndBusinessLogicService } from "./servicesandbusinesslogic.service";
import { ServicesAndBusinessLogicController } from "./servicesandbusinesslogic.controller";
import { ServicesAndBusinessLogicResolver } from "./servicesandbusinesslogic.resolver";

@Module({
  controllers: [ServicesAndBusinessLogicController],
  providers: [ServicesAndBusinessLogicService, ServicesAndBusinessLogicResolver],
  exports: [ServicesAndBusinessLogicService],
})
export class ServicesAndBusinessLogicModule {}

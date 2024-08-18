import { Module } from "@nestjs/common";
import { DidManagementService } from "./didmanagement.service";
import { DidManagementController } from "./didmanagement.controller";
import { DidManagementResolver } from "./didmanagement.resolver";

@Module({
  controllers: [DidManagementController],
  providers: [DidManagementService, DidManagementResolver],
  exports: [DidManagementService],
})
export class DidManagementModule {}

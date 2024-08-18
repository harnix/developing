import { Module } from "@nestjs/common";
import { ConfigurationAndEnvironmentManagementService } from "./configurationandenvironmentmanagement.service";
import { ConfigurationAndEnvironmentManagementController } from "./configurationandenvironmentmanagement.controller";
import { ConfigurationAndEnvironmentManagementResolver } from "./configurationandenvironmentmanagement.resolver";

@Module({
  controllers: [ConfigurationAndEnvironmentManagementController],
  providers: [
    ConfigurationAndEnvironmentManagementService,
    ConfigurationAndEnvironmentManagementResolver
  ],
  exports: [ConfigurationAndEnvironmentManagementService],
})
export class ConfigurationAndEnvironmentManagementModule {}

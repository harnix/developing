import { Module } from "@nestjs/common";
import { IpfsIntegrationService } from "./ipfsintegration.service";
import { IpfsIntegrationController } from "./ipfsintegration.controller";
import { IpfsIntegrationResolver } from "./ipfsintegration.resolver";

@Module({
  controllers: [IpfsIntegrationController],
  providers: [IpfsIntegrationService, IpfsIntegrationResolver],
  exports: [IpfsIntegrationService],
})
export class IpfsIntegrationModule {}

import { Module } from "@nestjs/common";
import { UserAndCredentialManagementService } from "./userandcredentialmanagement.service";
import { UserAndCredentialManagementController } from "./userandcredentialmanagement.controller";
import { UserAndCredentialManagementResolver } from "./userandcredentialmanagement.resolver";

@Module({
  controllers: [UserAndCredentialManagementController],
  providers: [UserAndCredentialManagementService, UserAndCredentialManagementResolver],
  exports: [UserAndCredentialManagementService],
})
export class UserAndCredentialManagementModule {}

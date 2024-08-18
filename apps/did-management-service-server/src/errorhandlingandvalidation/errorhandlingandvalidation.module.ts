import { Module } from "@nestjs/common";
import { ErrorHandlingAndValidationService } from "./errorhandlingandvalidation.service";
import { ErrorHandlingAndValidationController } from "./errorhandlingandvalidation.controller";
import { ErrorHandlingAndValidationResolver } from "./errorhandlingandvalidation.resolver";

@Module({
  controllers: [ErrorHandlingAndValidationController],
  providers: [ErrorHandlingAndValidationService, ErrorHandlingAndValidationResolver],
  exports: [ErrorHandlingAndValidationService],
})
export class ErrorHandlingAndValidationModule {}

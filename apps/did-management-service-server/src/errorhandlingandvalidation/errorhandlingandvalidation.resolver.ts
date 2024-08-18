import * as graphql from "@nestjs/graphql";
import { ErrorHandlingAndValidationService } from "./errorhandlingandvalidation.service";

export class ErrorHandlingAndValidationResolver {
  constructor(protected readonly service: ErrorHandlingAndValidationService) {}
}

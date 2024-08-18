import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ErrorHandlingAndValidationService } from "./errorhandlingandvalidation.service";

@swagger.ApiTags("errorHandlingAndValidations")
@common.Controller("errorHandlingAndValidations")
export class ErrorHandlingAndValidationController {
  constructor(protected readonly service: ErrorHandlingAndValidationService) {}
}

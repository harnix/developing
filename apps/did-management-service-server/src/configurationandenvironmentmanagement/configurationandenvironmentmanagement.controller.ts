import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ConfigurationAndEnvironmentManagementService } from "./configurationandenvironmentmanagement.service";

@swagger.ApiTags("configurationAndEnvironmentManagements")
@common.Controller("configurationAndEnvironmentManagements")
export class ConfigurationAndEnvironmentManagementController {
  constructor(protected readonly service: ConfigurationAndEnvironmentManagementService) {}
}

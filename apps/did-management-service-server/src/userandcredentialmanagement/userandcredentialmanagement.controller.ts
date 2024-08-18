import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserAndCredentialManagementService } from "./userandcredentialmanagement.service";

@swagger.ApiTags("userAndCredentialManagements")
@common.Controller("userAndCredentialManagements")
export class UserAndCredentialManagementController {
  constructor(protected readonly service: UserAndCredentialManagementService) {}
}

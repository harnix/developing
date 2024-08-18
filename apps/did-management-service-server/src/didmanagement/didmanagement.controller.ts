import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DidManagementService } from "./didmanagement.service";

@swagger.ApiTags("didManagements")
@common.Controller("didManagements")
export class DidManagementController {
  constructor(protected readonly service: DidManagementService) {}
}

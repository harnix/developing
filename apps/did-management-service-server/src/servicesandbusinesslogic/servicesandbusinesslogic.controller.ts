import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ServicesAndBusinessLogicService } from "./servicesandbusinesslogic.service";

@swagger.ApiTags("servicesAndBusinessLogics")
@common.Controller("servicesAndBusinessLogics")
export class ServicesAndBusinessLogicController {
  constructor(protected readonly service: ServicesAndBusinessLogicService) {}
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { IpfsIntegrationService } from "./ipfsintegration.service";

@swagger.ApiTags("ipfsIntegrations")
@common.Controller("ipfsIntegrations")
export class IpfsIntegrationController {
  constructor(protected readonly service: IpfsIntegrationService) {}
}

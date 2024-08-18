import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DidService } from "./did.service";
import { DidControllerBase } from "./base/did.controller.base";

@swagger.ApiTags("dids")
@common.Controller("dids")
export class DidController extends DidControllerBase {
  constructor(protected readonly service: DidService) {
    super(service);
  }
}

import * as graphql from "@nestjs/graphql";
import { ServicesAndBusinessLogicService } from "./servicesandbusinesslogic.service";

export class ServicesAndBusinessLogicResolver {
  constructor(protected readonly service: ServicesAndBusinessLogicService) {}
}

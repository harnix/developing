import * as graphql from "@nestjs/graphql";
import { IpfsIntegrationService } from "./ipfsintegration.service";

export class IpfsIntegrationResolver {
  constructor(protected readonly service: IpfsIntegrationService) {}
}

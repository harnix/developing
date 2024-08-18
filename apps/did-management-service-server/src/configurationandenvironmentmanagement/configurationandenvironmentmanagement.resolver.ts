import * as graphql from "@nestjs/graphql";
import { ConfigurationAndEnvironmentManagementService } from "./configurationandenvironmentmanagement.service";

export class ConfigurationAndEnvironmentManagementResolver {
  constructor(protected readonly service: ConfigurationAndEnvironmentManagementService) {}
}

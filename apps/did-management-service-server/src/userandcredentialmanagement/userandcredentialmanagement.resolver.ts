import * as graphql from "@nestjs/graphql";
import { UserAndCredentialManagementService } from "./userandcredentialmanagement.service";

export class UserAndCredentialManagementResolver {
  constructor(protected readonly service: UserAndCredentialManagementService) {}
}

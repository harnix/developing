import * as graphql from "@nestjs/graphql";
import { DidManagementService } from "./didmanagement.service";

export class DidManagementResolver {
  constructor(protected readonly service: DidManagementService) {}
}

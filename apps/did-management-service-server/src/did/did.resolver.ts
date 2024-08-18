import * as graphql from "@nestjs/graphql";
import { DidResolverBase } from "./base/did.resolver.base";
import { Did } from "./base/Did";
import { DidService } from "./did.service";

@graphql.Resolver(() => Did)
export class DidResolver extends DidResolverBase {
  constructor(protected readonly service: DidService) {
    super(service);
  }
}

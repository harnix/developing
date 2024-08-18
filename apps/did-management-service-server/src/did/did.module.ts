import { Module } from "@nestjs/common";
import { DidModuleBase } from "./base/did.module.base";
import { DidService } from "./did.service";
import { DidController } from "./did.controller";
import { DidResolver } from "./did.resolver";

@Module({
  imports: [DidModuleBase],
  controllers: [DidController],
  providers: [DidService, DidResolver],
  exports: [DidService],
})
export class DidModule {}

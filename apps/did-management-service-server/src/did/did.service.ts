import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DidServiceBase } from "./base/did.service.base";

@Injectable()
export class DidService extends DidServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { Module } from "@nestjs/common";
import { DidModule } from "./did/did.module";
import { CredentialModule } from "./credential/credential.module";
import { UserModule } from "./user/user.module";
import { ConfigurationAndEnvironmentManagementModule } from "./configurationandenvironmentmanagement/configurationandenvironmentmanagement.module";
import { DidManagementModule } from "./didmanagement/didmanagement.module";
import { ErrorHandlingAndValidationModule } from "./errorhandlingandvalidation/errorhandlingandvalidation.module";
import { IpfsIntegrationModule } from "./ipfsintegration/ipfsintegration.module";
import { RoutingAndControllersModule } from "./routingandcontrollers/routingandcontrollers.module";
import { ServicesAndBusinessLogicModule } from "./servicesandbusinesslogic/servicesandbusinesslogic.module";
import { UserAndCredentialManagementModule } from "./userandcredentialmanagement/userandcredentialmanagement.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    DidModule,
    CredentialModule,
    UserModule,
    ConfigurationAndEnvironmentManagementModule,
    DidManagementModule,
    ErrorHandlingAndValidationModule,
    IpfsIntegrationModule,
    RoutingAndControllersModule,
    ServicesAndBusinessLogicModule,
    UserAndCredentialManagementModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}

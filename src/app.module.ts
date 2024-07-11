import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { PrismaModule } from "./prisma/prisma.module";
import { ConfigModule } from "@nestjs/config";
import { FavoriteCarrierModule } from './favorite-carrier/favorite-carrier.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AuthModule,
    PrismaModule,
    FavoriteCarrierModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}

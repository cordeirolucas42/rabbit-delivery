import { Module } from '@nestjs/common';
import { MenuModule } from './menu/menu.module';
import { OrderModule } from './order/order.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URL, { dbName: "rabbit-delivery" }),
    MenuModule,
    OrderModule
  ]
})
export class AppModule {}

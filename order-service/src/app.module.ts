import { Module } from '@nestjs/common';
import { MenuModule } from './menu/menu.module';
import { OrderModule } from './order/order.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://cordeirolucas42:4m0pVY5uBBSpkfw8@gearsets.4mscdf7.mongodb.net/', { dbName: "rabbit-delivery" }),
    MenuModule,
    OrderModule
  ]
})
export class AppModule {}

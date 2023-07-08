import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Order>;

class Product {
    productName: string;
    quantity: number;
    value: number;
}

@Schema()
export class Order {
    @Prop([Product])
    products: Product[];

    @Prop()
    totalAmount: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order)
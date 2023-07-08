import { Injectable } from "@nestjs/common";
import { CreateOrderDTO, OrderDTO } from "./model/order.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { Order } from "./model/order.schema";

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<Order>
  ) {}

  public async getOrderById(orderId: string): Promise<OrderDTO> {
    const order = this.orderModel.findById(new Types.ObjectId(orderId)).exec();
    return order;
  }

  public async placeOrder(createOrderDTO: CreateOrderDTO): Promise<Order> {
    const orderToCreate = this.ordersAdaptor(createOrderDTO);
    const createdOrder = new this.orderModel(orderToCreate);
    return createdOrder.save();
  }

  private ordersAdaptor(createOrderDTO: CreateOrderDTO) : Order {
    const totalAmount = createOrderDTO.products.reduce((currentTotal, product) => {
      return currentTotal + product.quantity*product.value;
    }, 0);

    return {
      ...createOrderDTO,
      totalAmount
    }
  }
}
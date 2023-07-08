import { Injectable } from "@nestjs/common";
import { CreateOrderDTO, OrderDTO } from "./model/order.dto";

@Injectable()
export class OrderService {
  constructor(
    // public readonly database: Database
  ) {}

  public async getOrderById(orderId: number): Promise<OrderDTO> {
    return;
  }

  public async placeOrder(orderToCreate: CreateOrderDTO): Promise<void> {
    return;
  }
}
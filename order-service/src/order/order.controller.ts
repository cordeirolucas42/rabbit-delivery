import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { CreateOrderDTO, OrderDTO } from './model/order.dto';

@Controller('order')
@ApiTags('Order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService
  ) {}

  @Get(':id')
  async getOrderById(
    @Param('orderId') orderId: number
  ): Promise<OrderDTO> {
    return this.orderService.getOrderById(orderId)
  }

  @Post()
  async placeOrder(
    @Body() createOrderDTO: CreateOrderDTO
  ): Promise<void> {
    return this.orderService.placeOrder(createOrderDTO)
  }
}
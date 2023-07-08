import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { CreateOrderDTO, OrderDTO } from './model/order.dto';
import { Order } from './model/order.schema';

@Controller('order')
@ApiTags('Order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService
  ) {}

  @Get(':id')
  @ApiResponse({ type: OrderDTO })
  async getOrderById(
    @Param('id') orderId: string
  ): Promise<OrderDTO> {
    return this.orderService.getOrderById(orderId)
  }

  @Post()
  async placeOrder(
    @Body() createOrderDTO: CreateOrderDTO
  ): Promise<Order> {
    return this.orderService.placeOrder(createOrderDTO)
  }
}
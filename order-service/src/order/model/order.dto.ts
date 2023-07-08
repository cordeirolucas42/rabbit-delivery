import { ApiProperty } from "@nestjs/swagger"

class ProductDTO {
    @ApiProperty({ example: "pizza" })
    productName: string
  
    @ApiProperty({ example: 2 })
    quantity: number
  
    @ApiProperty({ example: 20.99 })
    value: number
}

export class OrderDTO {
    @ApiProperty({ isArray: true, type: ProductDTO })
    products: ProductDTO[]
}

export class CreateOrderDTO extends OrderDTO {}
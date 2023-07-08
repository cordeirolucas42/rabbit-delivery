import { ApiProperty } from "@nestjs/swagger";

class MenuItemDTO {
    @ApiProperty({ example: "coke" })
    itemName: string;
    
    @ApiProperty({ example: 10 })
    price: number;
}

export class MenuDTO {
    @ApiProperty({ isArray: true, type: MenuItemDTO })
    items: MenuItemDTO[];
}
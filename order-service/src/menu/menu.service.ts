import { Injectable } from "@nestjs/common";
import { MenuDTO } from "./model/menu.dto";
import { ITEM_PRICE } from "src/resources/constants";

@Injectable()
export class MenuService {
  constructor(
    // database
  ) {}

  public async getMenu(): Promise<MenuDTO> {
    const itemNames = Object.keys(ITEM_PRICE);
    const items = itemNames.map( itemName => {
      return { itemName, price: ITEM_PRICE[itemName] }
    })
    return { items };
  }
}
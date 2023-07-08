import { Injectable } from "@nestjs/common";
import { MenuDTO } from "./model/menu.dto";

@Injectable()
export class MenuService {
  constructor(
    // public readonly database: Database
  ) {}

  public async getMenu(): Promise<MenuDTO> {
    return;
  }
}
import { Controller, Get, Headers } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MenuService } from './menu.service';
import { MenuDTO } from './model/menu.dto';

@Controller('menu')
@ApiTags('Menu')
export class MenuController {
  constructor(
    private readonly menuService: MenuService
  ) {}

  @Get()
  async getMenu(): Promise<MenuDTO> {
    return this.menuService.getMenu()
  }
}
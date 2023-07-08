import { Controller, Get, Headers } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MenuService } from './menu.service';
import { MenuDTO } from './model/menu.dto';

@Controller('menu')
@ApiTags('Menu')
export class MenuController {
  constructor(
    private readonly menuService: MenuService
  ) {}

  @Get()
  @ApiResponse({ type: MenuDTO })
  async getMenu(): Promise<MenuDTO> {
    return this.menuService.getMenu()
  }
}
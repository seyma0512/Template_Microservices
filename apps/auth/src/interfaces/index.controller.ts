import { Body, Controller, Post } from '@nestjs/common';
import { ColorDto } from '@repo/shared/dto/color.dto';

@Controller('colors')
export class ColorsController {
  @Post()
  handleColor(@Body() color: ColorDto) {
    let msg = `Color recibido: ${color.name}`;
    if (color.name.toLowerCase() === 'azul') {
      msg = 'El color azul es calmante 😌';
    }
    return { name: color.name, message: msg };
  }
}

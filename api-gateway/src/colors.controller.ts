import { Body, Controller, Post } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ColorDto } from '@repo/shared/dto/color.dto';

@Controller('colors')
export class ColorsController {
  constructor(private readonly http: HttpService) {}

  @Post()
  async createColor(@Body() color: ColorDto) {
    const response = await firstValueFrom(
      this.http.post('http://localhost:3001/colors', color),
    );

    return {
      name: response.data.name,
      message: response.data.message
    };
  }
}

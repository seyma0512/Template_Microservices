import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ColorsController } from './colors.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AppController, ColorsController],
  providers: [],
})
export class AppModule {}

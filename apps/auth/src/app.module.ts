import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {AuthModule} from './interfaces/status.module';
import { ColorsController } from './interfaces/index.controller';

@Module({
    imports:[
        ConfigModule.forRoot({ isGlobal: true}),
        AuthModule,
    ],
    controllers: [ColorsController],
    providers: [],
})

export class AppModule {}
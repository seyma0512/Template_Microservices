import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {AuthModule} from './interfaces/status.module';

@Module({
    imports:[
        ConfigModule.forRoot({ isGlobal: true}),
        AuthModule,
    ],
    controllers: [],
    providers: [],
})

export class AppModule {}
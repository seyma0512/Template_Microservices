import { Controller, Get, HttpStatus } from "@nestjs/common";

@Controller('status')
export class AppController{

    @Get()
    getStatus(){
        return {
            service: 'API Gateway',
            status: 'Alive',
            version: 'Beta 1.0.0',
            port: 3000,
            timestamp: new Date(),
            code: HttpStatus.OK
        }
    };
}

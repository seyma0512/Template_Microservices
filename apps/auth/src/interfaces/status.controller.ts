import { Controller, Get, HttpStatus } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";

@ApiTags('Status')
@Controller('status')
export class StatusController {
    
    @Get()
    @ApiOperation({ summary: 'Service status' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Service is up and running',
        schema: {
            example: {
                service: 'Auth MS',
                status: 'Alive',
                version: 'Beta 1.0.0',
                port: 3001,
                timestamp: '2023-10-01T12:00:00.000Z',
                code: HttpStatus.OK
            }
        }
    })
    getStatus(){
        return {
            service: 'Auth MS',
            status: 'Alive',
            version: 'Beta 1.0.0',
            port: 3001,
            timestamp: new Date(),
            code: HttpStatus.OK
        }
    }
}
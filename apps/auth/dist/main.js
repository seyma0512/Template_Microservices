"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    //Swagger Config
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Auth Microservice')
        .setDescription('API auth monorepo')
        .setVersion('Beta 1.0.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3001); //PORT
    console.log('Auth microservice running on http://localhost:3001');
}
bootstrap();

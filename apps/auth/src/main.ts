import { NestFactory } from "@nestjs/core";
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    //Swagger Config
    const config = new DocumentBuilder()
        .setTitle('Auth Microservice')
        .setDescription('API auth monorepo')
        .setVersion('Beta 1.0.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3001); //PORT
    console.log('Auth microservice running on http://localhost:3001')
}
bootstrap();
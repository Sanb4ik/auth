import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 8888;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('auth')
    .setDescription('Documentation for authentication')
    .setVersion('1.0.0')
    .addTag('will become a node developer')
    .build()
  
    const document = SwaggerModule.createDocument(app,config)
    SwaggerModule.setup('/api', app, document)

  await app.listen(PORT, () => console.log(`app listening on ${PORT}`));
}
start();

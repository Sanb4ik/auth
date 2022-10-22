import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 8888;
  const app = await NestFactory.create(AppModule);

  await app.listen(PORT, () => console.log(`app listening on ${PORT}`));
}
start();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix(process.env.BASE_URL)
  app.enableCors({ })
  await app.listen(3000)
  
}
bootstrap();

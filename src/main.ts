import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { OpenApi } from './app.openapi';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.setGlobalPrefix('api'); 
  OpenApi(app);
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, Access-Control-Allow-Credentials');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

  app.enableCors();
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  await app.listen(3000);
}
bootstrap();

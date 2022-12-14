import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModuleModule } from './todo-module/todo-module.module';
import { TodoControllerController } from './todo-module/todo-controller.controller';

@Module({
  imports: [PremierModule, TodoModuleModule],
  controllers: [AppController, TodoControllerController],
  providers: [AppService],
})
export class AppModule {}

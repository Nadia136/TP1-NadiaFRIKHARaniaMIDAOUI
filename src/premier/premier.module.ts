import { Delete, Get, Module, Post, Put, Patch } from '@nestjs/common';
import { PremierController } from './premier.controller';

@Module({
  controllers: [PremierController],
})
export class PremierModule {
  @Get()
  getHello(): string {
    return this.getHello();
  }

  @Post()
  create(): string {
    return this.create();
  }
  @Delete()
  remove() {
    return this.remove();
  }
  @Put()
  update(): string {
    return this.update();
  }
  @Patch()
  patchHello(): string {
    return this.patchHello();
  }
}

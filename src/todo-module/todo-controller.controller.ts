import { Controller, Get, Post, Delete, Put, Param } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UpdateDto } from './update-dto';
@Controller('todo-controller')
export class TodoControllerController {
  private todos = [];
  @Get()
  getTodos() {
    return this.todos;
  }
  @Get(':id')
  getTodo(@Param('id') id) {
    return this.todos.find((todo) => todo.id == id);
  }
  @Post()
  create(): string {
    return this.create();
  }
  @Delete()
  remove() {
    return this.remove();
  }
  @Delete(':id')
  deleteTodo(@Param('id') id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    return 'done';
  }
  @Put()
  update(): string {
    return this.update();
  }
  @Put(':id')
  updateTodo(@Param('id') id, @Body() UpdateDto: UpdateDto) {
    const todo = this.todos.find((todo) => todo.id == id);

    if (UpdateDto.name) {
      todo.name = UpdateDto.name;
    }
    if (UpdateDto.description) {
      todo.description = UpdateDto.description;
    }
    if (UpdateDto.status) {
      todo.status = UpdateDto.status;
    }
    return todo;
  }
}

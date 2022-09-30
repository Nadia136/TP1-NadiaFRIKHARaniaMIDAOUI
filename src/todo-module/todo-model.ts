import { TodoStatusEnum } from './todo-status-enum';
import { v4 as uuidv4 } from 'uuid';

export class TodoModel {
  id: string;
  name: string;
  description: string;
  DateDeCreation: Date;
  status: TodoStatusEnum.waiting;
  /* constructor(id, name, description, DateDeCreation, status) {
    this.id = uuidv4();
    this.name = name;
    this.description = description;
    this.DateDeCreation = new Date();
    this.status = TodoStatusEnum['waiting'];
  }*/
}

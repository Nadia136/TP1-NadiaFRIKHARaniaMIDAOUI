import { TodoStatusEnum } from './todo-status-enum';
export class UpdateDto {
  name: string;
  description: string;
  status: TodoStatusEnum;
}

type Category = 'job' | 'home' | 'other';
type Status = 'todo' | 'done' | 'inProgress' | 'backlog';

export interface Todo {
  title: string;
  id: number;
  category: Category;
  status: Status;
}


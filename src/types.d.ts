type Todo = {
    id: number,
    text: string,
    done: boolean,
  }


type ToggleTodo = (selectedTodo:Todo) => void;
type HandleChange = (e:ChangeEvent<HTMLInputElement>) => void;
type AddTodo = (todo:string) => void;

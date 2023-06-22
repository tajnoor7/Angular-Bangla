
import { Component } from '@angular/core';
import { Todo } from './model';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todolist: Todo []=[];

  todo: Todo = this.initTodo;

  get initTodo():Todo {
    return{
      Title: '',
    Id: null
    }
  }

   
  addTodo(): void {
    console.log(this.todo);

    if(this.todo.Id){
      this.todolist = this.todolist.map(o => {
        if(o.Id == this.todo.Id){
          o.Title = this.todo.Title;
        }
        return o;
      })
    }
    else{
      this.todo.Id = Date.now();  //incresing Id number ++
      this.todolist.push({...this.todo});  //push to todo list
    }

    console.log(this.todolist)

    this.todo = this.initTodo;
  }


  editTodo(todo: Todo): void {
    this.todo = {...todo};
  }

  
  deleteTodo(id:number):void {
    this.todolist = this.todolist.filter(o=> o.Id!=id)
  }


}

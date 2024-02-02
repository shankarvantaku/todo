import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{

  todoList : String []=[];
  inputvalue : String ="";

  removetodo(name : String){
    this.todoList=this.todoList.filter(value => value!==name);

  }
  addtodo(){
   if(this.inputvalue !=""){
    this.todoList.push(this.inputvalue);
    this.inputvalue="";
   }
   else{
    alert("please enter a proper value");
   }
  }

  constructor(){ }

  ngOnInit() : void{

    this.todoList=["Task 1","Task 2","Task 3","Task 4"];
  }

}

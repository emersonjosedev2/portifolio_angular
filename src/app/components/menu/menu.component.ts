import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menu = true
  recolher = false
  counter = 0
  classTolbar = ['on', 'off']
  click(){
    this.menu = !this.menu
    console.log(this.menu)
  }
  clickRecolher(){
    this.recolher = !this.recolher
   
    if(this.counter === 0){
      this.counter ++
     
     
    
    }
   else{
    this.counter --
   }
   console.log(this.counter)
   
  }
}

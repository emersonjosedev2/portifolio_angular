import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menu = true
  recolher = false
  click(){
    this.menu = !this.menu
    console.log(this.menu)
  }
  clickRecolher(){
    this.recolher = !this.recolher
  }
}

import { Component } from '@angular/core';



@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.css']
})
export class SelectButtonComponent {

  selected: any = null;

  values = [
    {key: 'Both', value: null},
    {key: 'Read', value: false},
    {key: 'Write', value: true}
  ]

  select(e: any){
    this.selected = e;
  }

  styleClass(v: any){
    return {
      'btn-primary': v.value === this.selected, 
      'btn-secondary': v.value !== this.selected}
      ;
  }

}

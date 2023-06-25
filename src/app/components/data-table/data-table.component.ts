import { Component } from '@angular/core';
import {faSort, faSortUp, faSortDown} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {

  columns: {code: string, value: string, sortable: boolean}[]= [
    {code: 'brand', value: 'Brand', sortable: true},
    {code: 'model', value: 'Model', sortable: true},
    {code: 'price', value: 'Price', sortable: false}
  ];

  data: any[] = [
    {brand:'Asus', model: 'rtx 4090', price: 1800},
    {brand:'Asus', model: 'rtx 4070', price: 740},
    {brand:'MSI', model: 'rtx 4080', price: 1220},
    {brand:'Gigabyte', model: 'rtx 4070 ti', price: 960}
  ];

  selected: any = null;

  sort: {column: string, value: number} = null;

  setSort(column: string){
    if(this.sort?.column === column) this.sort.value = (this.sort.value + 2) % 3 -1;
    else this.sort = {column, value: 1};
  }

  getSortIcon(column: string){
    if(this.sort?.column !== column || this.sort.value === 0) return faSort;
    else if(this.sort.value === 1) return faSortUp
    else return faSortDown
  }

}

import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { JeloltClass, viewOptions } from '../jelolt.model';

@Component({
  selector: 'app-column-picker',
  templateUrl: './column-picker.component.html',
  styleUrls: ['./column-picker.component.scss']
})
export class ColumnPickerComponent implements OnInit{

  options: string[] = ["Elérhetőségek", "Adatok", "Beosztás", "Összes"];

  headers:string[] = Object.keys(new JeloltClass());
  picked: string[] = Object.keys(new JeloltClass());

  view = {
    [this.options[0]]: viewOptions[0],
    [this.options[1]]: viewOptions[1],
    [this.options[2]]: viewOptions[2],
    [this.options[3]]: [...this.headers]
  }

  @Input() initPicked?: string[];
  @Output() columns = new EventEmitter<string[]>();
  constructor() { }

  ngOnInit(): void {
    // console.log(this.headers);
    
    this.picked = this.initPicked || Object.keys(new JeloltClass());
    // console.log(this.picked);
    
  }

  setColumn(checked: boolean, name: string) {
    if (checked) {
      this.picked.splice(this.headers.indexOf(name), 0, name);
    }
    else {
      this.picked.splice(this.picked.indexOf(name), 1);
    }
    this.columns.emit(this.picked);
  }

  getChecked(name:string):boolean {
    if (this.picked.includes(name)) return true;
    return false;
  }

  onSelectChanged(key: string) {
    this.picked = this.view[key];
    this.columns.emit(this.picked);
  }

}

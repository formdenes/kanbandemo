import { Component, EventEmitter, Output } from '@angular/core';
import { JeloltClass } from '../jelolt.model';

@Component({
  selector: 'app-column-picker',
  templateUrl: './column-picker.component.html',
  styleUrls: ['./column-picker.component.scss']
})
export class ColumnPickerComponent {

  headers:string[] = Object.keys(new JeloltClass());
  picked: string[] = Object.keys(new JeloltClass());

  @Output() columns = new EventEmitter<string[]>();
  constructor() { }

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

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.scss']
})
export class ClassesListComponent implements OnInit {

  constructor() { }
  @Input() ClassesList:any = {};
  ngOnInit() {}
  ToAdd(){
    console.log(111111);
  }

  _allChecked = false;
  _indeterminate = false;
  _displayData = [];

  _CalculationRatio(data){
    let rotia = data.number/data.count * 100;

    // return Math.round(parseFloat(rotia.toString())*100)/100+'%';
    return rotia.toFixed(2)+'%';
  }
  _displayDataChange($event) {
    this._displayData = $event;
    this._refreshStatus();
  }

  _refreshStatus() {
    const allChecked = this._displayData.every(value => value.checked === true);
    const allUnChecked = this._displayData.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
  }

  _checkAll(value) {
    if (value) {
      this._displayData.forEach(data => {
        data.checked = true;
      });
    } else {
      this._displayData.forEach(data => {
        data.checked = false;
      });
    }
    this._refreshStatus();
  }

}

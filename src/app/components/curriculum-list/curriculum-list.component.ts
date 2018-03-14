import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curriculum-list',
  templateUrl: './curriculum-list.component.html',
  styleUrls: ['./curriculum-list.component.scss']
})
export class CurriculumListComponent implements OnInit {

  constructor() { }
  @Input() CurriculumList:any = {};
  ngOnInit() {
  }
  ToAdd(){
    console.log(11111111);
  }
}

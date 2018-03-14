import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  constructor() { }
  navData = [
    {
      title: '内部管理',
      url: ''
    },
    {
      title: '班级',
      url: ''
    },
    {
      title: '列表',
      url: ''
    },
  ]
  ngOnInit() {
  }

}

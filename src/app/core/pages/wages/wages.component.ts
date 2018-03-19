import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wages',
  templateUrl: './wages.component.html',
  styleUrls: ['./wages.component.scss']
})
export class WagesComponent implements OnInit {

  constructor() { }
  navData = [
    {
      title: '工资管理',
      url: ''
    },
    {
      title: '工资',
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

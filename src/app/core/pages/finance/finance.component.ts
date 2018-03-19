import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  constructor() { }
  navData = [
    {
      title: '财务管理',
      url: ''
    },
  ]
  ngOnInit() {
  }

}

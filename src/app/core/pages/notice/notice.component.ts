import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navData = [
    {
      title: '信息通知',
      url: ''
    },
    {
      title: '通知',
      url: ''
    },
    {
      title: '列表',
      url: ''
    },
  ]
}

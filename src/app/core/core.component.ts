import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  isCollapsed = false;
  menuData = [
    {
      title: '工作台',
      icon: 'icon-computer',
      menuList: []
    },
    {
      title: '内部管理',
      icon: 'icon-flag',
      menuList: [
        { title: '校区', url: '/campus'},
        { title: '员工', url: '/stall'},
        { title: '通知', url: '/notice'},
        { title: '工资', url: ''},
        { title: '财务', url: ''}
      ]
    },
    {
      title: '课程管理',
      icon: 'icon-createtask',
      menuList: [
        { title: '课程', url: ''},        
        { title: '开课', url: ''}
      ]
    },
    {
      title: '招生员管理',
      icon: 'icon-people',
      menuList: []
    }
  ]
}

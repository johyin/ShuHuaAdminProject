import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  jumpMark: Array <number> = [1,0];
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
        { title: '校区', url: '/core/campus'},
        { title: '员工', url: '/core/stall'},
        { title: '通知', url: '/core/notice'},
        { title: '工资', url: '/core/wages'},
        { title: '财务', url: '/core/finance'}
      ]
    },
    {
      title: '课程管理',
      icon: 'icon-createtask',
      menuList: [
        { title: '课程', url: '/core/curriculum'},        
        { title: '班级', url: '/core/classes'}
      ]
    },
    {
      title: '招生员管理',
      icon: 'icon-people',
      menuList: []
    }
  ]

  constructor() { }

  ngOnInit() {
    console.log(window.location.href)
    // 当前页面导航激活
    if(JSON.parse(localStorage.getItem("SHJumpMark"))){
      this.jumpMark = JSON.parse(localStorage.getItem("SHJumpMark"))
    };
    this.Jump(this.jumpMark);
  }


  Jump(data) {
    this.jumpMark = data;
    localStorage.setItem('SHJumpMark', JSON.stringify(data));
  }





}

import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======

>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0
@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

<<<<<<< HEAD
  jumpMark: Array <number> = [1,0];
=======
  constructor() { }

  ngOnInit() {
  }


>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0
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
<<<<<<< HEAD
        { title: '校区', url: '/core/campus'},
        { title: '员工', url: '/core/stall'},
        { title: '通知', url: '/core/notice'},
        { title: '工资', url: '/core/wages'},
        { title: '财务', url: '/core/finance'}
=======
        { title: '校区', url: '/campus'},
        { title: '员工', url: '/stall'},
        { title: '通知', url: '/notice'},
        { title: '工资', url: ''},
        { title: '财务', url: ''}
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0
      ]
    },
    {
      title: '课程管理',
      icon: 'icon-createtask',
      menuList: [
<<<<<<< HEAD
        { title: '课程', url: '/core/curriculum'},        
        { title: '班级', url: '/core/classes'}
=======
        { title: '课程', url: ''},        
        { title: '开课', url: ''}
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0
      ]
    },
    {
      title: '招生员管理',
      icon: 'icon-people',
      menuList: []
    }
  ]
<<<<<<< HEAD

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





=======
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0
}

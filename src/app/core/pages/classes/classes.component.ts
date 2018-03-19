import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

<<<<<<< HEAD
  // 自定义显示项
  private AllCostom = false;
  private costomItem = [
    
    { label: '人数', value: 'number', checked: true },
    { label: '满班率', value: 'number', checked: true },
    { label: '成班人数', value: 'number', checked: true },
    { label: '教师', value: 'number', checked: false },
    { label: '教室', value: 'number', checked: false },
    { label: '所属课程', value: 'number', checked: true },
    { label: '课程类别', value: 'number', checked: true },
    { label: '收费标准', value: 'number', checked: false },
    { label: '开班校区', value: 'number', checked: true },
    { label: '开班日期', value: 'number', checked: true },
    { label: '结班日期', value: 'number', checked: false },
    { label: '上课时间', value: 'number', checked: false },
    { label: '招生状态', value: 'number', checked: true },
    { label: '创建日期', value: 'number', checked: true },
    { label: '创建人', value: 'number', checked: false },
    { label: '备注', value: 'number', checked: false }
  ]
  private indeterminate = false;

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
  classesData = [
    {
      sign: 0,
      type: '少儿',
      className: '2018暑假一期汉韵书法（成人名师班）1班',
      count: '50',
      number: '49',
      belongName: '2018暑假一期汉韵书法（成人名师班）1班',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 0
    },
    {
      sign: 0,
      type: '少儿',
      className: '市桥2019寒假一期精品书法1班 拷贝',
      count: '50',
      number: '5',
      belongName: '市桥2019寒假一期精品书法1班 拷贝',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 1
    },
    {
      sign: 1,
      type: '少儿',
      className: '市桥2019寒假一期趣味素描初级1班',
      count: '92',
      number: '77',
      belongName: '市桥2019寒假一期趣味素描初级1班',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 1
    },
    {
      sign: 0,
      type: '少儿',
      className: '市桥2019寒假一期精品书法1班 拷贝',
      count: '158',
      number: '12',
      belongName: '市桥2019寒假一期精品书法1班 拷贝',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 0
    },
    {
      sign: 1,
      type: '少儿',
      className: '市桥2019寒假一期趣味素描初级1班',
      count: '92',
      number: '80',
      belongName: '市桥2019寒假一期趣味素描初级1班',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 1
    },
    {
      sign: 0,
      type: '少儿',
      className: '市桥2019寒假一期精品书法1班 拷贝',
      count: '158',
      number: '12',
      belongName: '市桥2019寒假一期精品书法1班 拷贝',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 0
    },
    {
      sign: 1,
      type: '少儿',
      className: '市桥2019寒假一期趣味素描初级1班',
      count: '92',
      number: '1',
      belongName: '市桥2019寒假一期趣味素描初级1班',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 1
    },
    {
      sign: 0,
      type: '少儿',
      className: '市桥2019寒假一期精品书法1班 拷贝',
      count: '158',
      number: '158',
      belongName: '市桥2019寒假一期精品书法1班 拷贝',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 0
    },
    {
      sign: 1,
      type: '少儿',
      className: '市桥2019寒假一期趣味素描初级1班',
      count: '92',
      number: '92',
      belongName: '市桥2019寒假一期趣味素描初级1班',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 1
    },
    {
      sign: 0,
      type: '少儿',
      className: '市桥2019寒假一期精品书法1班 拷贝',
      count: '158',
      number: '12',
      belongName: '市桥2019寒假一期精品书法1班 拷贝',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 0
    },
    {
      sign: 1,
      type: '少儿',
      className: '市桥2019寒假一期趣味素描初级1班',
      count: '92',
      number: '1',
      belongName: '市桥2019寒假一期趣味素描初级1班',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 1
    },
    {
      sign: 0,
      type: '少儿',
      className: '市桥2019寒假一期精品书法1班 拷贝',
      count: '158',
      number: '12',
      belongName: '市桥2019寒假一期精品书法1班 拷贝',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 0
    },
    {
      sign: 1,
      type: '少儿',
      className: '2018暑假一期汉韵书法（成人名师班）1班',
      count: '451',
      number: '337',
      belongName: '2018暑假一期汉韵书法（成人名师班）1班',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 1
    },
    {
      sign: 0,
      type: '少儿',
      className: '2018暑假一期汉韵书法（成人名师班）1班',
      count: '50',
      number: '12',
      belongName: '2018暑假一期汉韵书法（成人名师班）1班',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 0
    },
    {
      sign: 0,
      type: '少儿',
      className: '市桥2019寒假一期精品书法1班 拷贝',
      count: '50',
      number: '5',
      belongName: '市桥2019寒假一期精品书法1班 拷贝',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 1
    },
    {
      sign: 1,
      type: '少儿',
      className: '市桥2019寒假一期趣味素描初级1班',
      count: '92',
      number: '1',
      belongName: '市桥2019寒假一期趣味素描初级1班',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 1
    },
    {
      sign: 0,
      type: '少儿',
      className: '市桥2019寒假一期精品书法1班 拷贝',
      count: '158',
      number: '12',
      belongName: '市桥2019寒假一期精品书法1班 拷贝',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 0
    },
    {
      sign: 1,
      type: '少儿',
      className: '2018暑假一期汉韵书法（成人名师班）1班',
      count: '451',
      number: '337',
      belongName: '2018暑假一期汉韵书法（成人名师班）1班',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 1
    },
    {
      sign: 0,
      type: '少儿',
      className: '2018暑假一期汉韵书法（成人名师班）1班',
      count: '50',
      number: '12',
      belongName: '2018暑假一期汉韵书法（成人名师班）1班',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 0
    },
    {
      sign: 0,
      type: '少儿',
      className: '市桥2019寒假一期精品书法1班 拷贝',
      count: '50',
      number: '5',
      belongName: '市桥2019寒假一期精品书法1班 拷贝',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 1
    },
    {
      sign: 1,
      type: '少儿',
      className: '市桥2019寒假一期趣味素描初级1班',
      count: '92',
      number: '1',
      belongName: '市桥2019寒假一期趣味素描初级1班',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 1
    },
    {
      sign: 0,
      type: '少儿',
      className: '市桥2019寒假一期精品书法1班 拷贝',
      count: '158',
      number: '12',
      belongName: '市桥2019寒假一期精品书法1班 拷贝',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 0
    },
    {
      sign: 1,
      type: '少儿',
      className: '2018暑假一期汉韵书法（成人名师班）1班',
      count: '451',
      number: '337',
      belongName: '2018暑假一期汉韵书法（成人名师班）1班',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 1
    },
    {
      sign: 0,
      type: '少儿',
      className: '2018暑假一期汉韵书法（成人名师班）1班',
      count: '50',
      number: '12',
      belongName: '2018暑假一期汉韵书法（成人名师班）1班',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 0
    },
    {
      sign: 0,
      type: '少儿',
      className: '市桥2019寒假一期精品书法1班 拷贝',
      count: '50',
      number: '5',
      belongName: '市桥2019寒假一期精品书法1班 拷贝',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 1
    },
    {
      sign: 1,
      type: '少儿',
      className: '市桥2019寒假一期趣味素描初级1班',
      count: '92',
      number: '1',
      belongName: '市桥2019寒假一期趣味素描初级1班',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 1
    },
    {
      sign: 0,
      type: '少儿',
      className: '市桥2019寒假一期精品书法1班 拷贝',
      count: '158',
      number: '12',
      belongName: '市桥2019寒假一期精品书法1班 拷贝',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 0
    },
    {
      sign: 1,
      type: '少儿',
      className: '2018暑假一期汉韵书法（成人名师班）1班',
      count: '451',
      number: '337',
      belongName: '2018暑假一期汉韵书法（成人名师班）1班',
      campusName: '星河湾校区',
      time: '2018-03-10',
      enrollState: 1
    },
  ]
  ngOnInit() {
  }

  updateAllChecked() {
    this.indeterminate = false;
    if (this.AllCostom) {
      this.costomItem.forEach(item => item.checked = true);
    } else {
      this.costomItem.forEach(item => item.checked = false);
    }
  }

  updateSingleChecked() {
    if (this.costomItem.every(item => item.checked === false)) {
      this.AllCostom = false;
      this.indeterminate = false;
    } else if (this.costomItem.every(item => item.checked === true)) {
      this.AllCostom = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
=======
  constructor() { }

  ngOnInit() {
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0
  }

}

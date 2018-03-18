import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  constructor() { }
  DataList = [
    {
      index: 1,
      type: '少儿',
      name: "3至6岁课程",
      desc: '专门针对4-5岁幼儿开设的课程',
      number: '1542'
    },
    {
      index: 2,
      type: '少儿',
      name: "6至9岁课程",
      desc: '专门针对6-9岁幼儿开设的课程',
      number: '362'
    },
    {
      index: 3,
      type: '少儿',
      name: "9至12岁课程",
      desc: '专门针对9-12岁幼儿开设的课程',
      number: '4353'
    },
    {
      index: 4,
      type: '少儿',
      name: "12岁以上课程",
      desc: '专门针对12岁以上幼儿开设的课程',
      number: '1542'
    },
    {
      index: 5,
      type: '国际',
      name: "本科作品集培训",
      desc: '国际留学帮你开启无限机遇',
      number: '4252'
    },
    {
      index: 6,
      type: '国际',
      name: "研究生作品集培训",
      desc: '国际留学帮你开启无限机遇',
      number: '23231'
    },
    {
      index: 7,
      type: '国际',
      name: "国际留学",
      desc: '国际留学帮你开启无限机遇',
      number: '522'
    },
    {
      index: 8,
      type: '国际',
      name: "美国肯德艺术学院本科",
      desc: '国际留学帮你开启无限机遇',
      number: '4252'
    },
    {
      index: 9,
      type: '国际',
      name: "美国肯德艺术学院硕士",
      desc: '国际留学帮你开启无限机遇',
      number: '4252'
    },
    {
      index: 10,
      type: '国际',
      name: "英国硕科",
      desc: '国际留学帮你开启无限机遇',
      number: '4252'
    },
    {
      index: 11,
      type: '国际',
      name: "本科作品集培训",
      desc: '国际留学帮你开启无限机遇',
      number: '4252'
    },
    {
      index: 12,
      type: '国际',
      name: "研究生作品集培训",
      desc: '国际留学帮你开启无限机遇',
      number: '23231'
    },
    {
      index: 13,
      type: '国际',
      name: "国际留学",
      desc: '国际留学帮你开启无限机遇',
      number: '522'
    },
    {
      index: 14,
      type: '国际',
      name: "美国肯德艺术学院本科",
      desc: '国际留学帮你开启无限机遇',
      number: '4252'
    },
    {
      index: 15,
      type: '国际',
      name: "美国肯德艺术学院硕士",
      desc: '国际留学帮你开启无限机遇',
      number: '4252'
    },
    {
      index: 16,
      type: '国际',
      name: "英国硕科",
      desc: '国际留学帮你开启无限机遇',
      number: '4252'
    },
    {
      index: 17,
      type: '国际',
      name: "本科作品集培训",
      desc: '国际留学帮你开启无限机遇',
      number: '4252'
    },
    {
      index: 18,
      type: '国际',
      name: "研究生作品集培训",
      desc: '国际留学帮你开启无限机遇',
      number: '23231'
    },
    {
      index: 19,
      type: '国际',
      name: "国际留学",
      desc: '国际留学帮你开启无限机遇',
      number: '522'
    },
    {
      index: 20,
      type: '国际',
      name: "美国肯德艺术学院本科",
      desc: '国际留学帮你开启无限机遇',
      number: '4252'
    },
    {
      index: 21,
      type: '国际',
      name: "美国肯德艺术学院硕士",
      desc: '国际留学帮你开启无限机遇',
      number: '4252'
    },
    {
      index: 22,
      type: '国际',
      name: "英国硕科",
      desc: '国际留学帮你开启无限机遇',
      number: '4252'
    },
    {
      index: 23,
      type: '国际',
      name: "本科作品集培训",
      desc: '国际留学帮你开启无限机遇',
      number: '4252'
    },
    {
      index: 24,
      type: '国际',
      name: "研究生作品集培训",
      desc: '国际留学帮你开启无限机遇',
      number: '23231'
    },
    {
      index: 25,
      type: '国际',
      name: "国际留学",
      desc: '国际留学帮你开启无限机遇',
      number: '522'
    },
    {
      index: 26,
      type: '国际',
      name: "美国肯德艺术学院本科",
      desc: '国际留学帮你开启无限机遇',
      number: '4252'
    },
    {
      index: 27,
      type: '国际',
      name: "美国肯德艺术学院硕士",
      desc: '国际留学帮你开启无限机遇',
      number: '4252'
    },
    {
      index: 28,
      type: '国际',
      name: "英国硕科",
      desc: '国际留学帮你开启无限机遇',
      number: '4252'
    },
    {
      index: 29,
      type: '国际',
      name: "本科作品集培训",
      desc: '国际留学帮你开启无限机遇',
      number: '4252'
    },
    {
      index: 30,
      type: '国际',
      name: "研究生作品集培训",
      desc: '国际留学帮你开启无限机遇',
      number: '23231'
    },
    {
      index: 31,
      type: '国际',
      name: "国际留学",
      desc: '国际留学帮你开启无限机遇',
      number: '522'
    },
    {
      index: 32,
      type: '国际',
      name: "美国肯德艺术学院本科",
      desc: '国际留学帮你开启无限机遇',
      number: '4252'
    },
    {
      index: 33,
      type: '国际',
      name: "美国肯德艺术学院硕士",
      desc: '国际留学帮你开启无限机遇',
      number: '4252'
    },
    {
      index: 33,
      type: '国际',
      name: "英国硕科",
      desc: '国际留学帮你开启无限机遇',
      number: '4252'
    }
  ]
  DataList1 = []
  navData = [
    {
      title: '课程管理',
      url: ''
    },
    {
      title: '课程',
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

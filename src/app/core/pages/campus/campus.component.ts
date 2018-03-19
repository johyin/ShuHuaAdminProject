import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.scss']
})
export class CampusComponent implements OnInit {

<<<<<<< HEAD
  constructor( private router: Router ) {  }
  allcampusList = [
    {
      index: 1,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 2,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 3,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 4,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 5,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 6,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 7,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 8,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 9,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 10,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 11,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 12,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 13,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 14,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 15,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 16,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 17,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 18,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 20,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 21,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 22,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 23,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 24,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 25,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 2,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 3,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 4,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 5,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 6,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 7,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 8,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 9,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 10,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 11,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 12,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 13,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 14,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 15,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 16,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 17,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 18,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 20,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 21,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 22,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 23,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 24,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 25,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 2,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 3,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 4,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 5,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 6,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 7,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 8,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 9,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 10,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 11,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 12,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 13,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 14,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 15,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 16,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 17,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 18,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 20,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 21,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 22,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 23,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 24,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 25,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 2,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 3,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 4,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 5,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 6,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 7,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 8,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 9,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 10,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 11,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 12,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 13,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 14,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 15,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 16,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 17,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 18,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 20,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 21,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 22,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 23,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 24,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 25,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 2,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 3,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 4,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 5,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 6,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 7,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 8,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 9,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 10,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 11,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 12,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 13,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 14,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 15,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 16,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 17,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 18,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 20,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 21,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 22,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 23,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 24,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 25,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 2,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 3,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 4,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 5,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 6,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 7,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 8,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 9,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 10,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 11,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 12,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 13,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 14,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 15,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 16,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 17,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 18,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 20,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 21,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 22,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 23,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 24,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 25,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 2,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 3,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 4,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 5,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 6,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 7,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 8,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 9,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 10,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 11,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 12,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 13,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 14,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 15,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 16,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 17,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 18,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 20,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 21,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 22,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 23,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 24,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 25,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 2,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 3,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 4,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 5,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 6,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 7,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 8,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 9,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 10,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 11,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 12,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 13,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 14,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 15,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 16,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 17,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 18,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 20,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 21,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 22,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 23,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 24,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 25,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 2,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 3,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 4,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 5,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 6,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 7,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 8,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 9,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 10,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 11,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 12,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 13,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 14,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 15,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 16,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 17,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 18,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 20,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 21,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 22,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 23,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 24,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 25,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 2,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 3,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 4,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 5,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 6,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 7,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 8,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 9,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 10,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 11,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 12,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 13,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 14,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 15,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 16,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 17,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 18,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 20,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 21,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    },
    {
      index: 22,
      campusType: '总部',
      campusName: "珠海总部",
      contactOne: '020-84017591',
      contactTwo: '18922192635',
      address: '广州市海珠区昌岗东路271号'
    },
    {
      index: 23,
      campusType: '直营校区',
      campusName: "东晓南校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州海珠区东晓南路1522号'
    },
    {
      index: 24,
      campusType: '直营校区',
      campusName: "同福校区",
      contactOne: '020-80929012',
      contactTwo: '',
      address: '海珠区同福中路340号7楼（海珠区少年宫对面）'
    },
    {
      index: 25,
      campusType: '直营校区',
      campusName: "滨江东校区",
      contactOne: '18923179254',
      contactTwo: '',
      address: '广州市怡海路42-44号A29-A31档'
    }
  ]
  allcampusList1 = []
  allcampusList2 = []
  navData = [
    {
      title: '内部管理',
      url: ''
    },
    {
      title: '校区管理',
      url: ''
    },
    {
      title: '列表',
      url: ''
    },
  ]
  ngOnInit() {
    // this.router.navigate(['/campus/campuslist'])
    
  }


  _nzSelectedIndexChange(){
  }
  _nzSelectChange(){
  }
=======
  constructor() { }

  ngOnInit() {
  }

>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0
}

import { Component, OnInit } from '@angular/core';


import { MapOptions } from 'angular2-baidu-map'
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private options: MapOptions;
  private currentModal;
  private coordinate;

  constructor( private ms: NzModalService ) { 
    this.options = {
      centerAndZoom: {
        lat: 22.537951,
        lng: 113.998903,
        zoom: 16,
      },
      enableKeyboard: true,
      enableScrollWheelZoom: true
    }
  }

  ngOnInit() {
  }

  getMapCoordinate( opt: any ){
    console.log(`X::${opt.point.lng}====Y::${opt.point.lat}`);
  }

  // showModal
  showModalForTemplate(titleTpl, contentTpl) {
    this.currentModal = this.ms.open({
      title       : titleTpl,
      content     : contentTpl,
      maskClosable: false,
      width       : 688,
      style       : {
        'border-radius': 0
      },
      onOk() {
        console.log('Click ok');
      }
    });
  }
}

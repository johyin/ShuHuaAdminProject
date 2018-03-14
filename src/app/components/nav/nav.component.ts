import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() NavBack:string;
  @Input() NavIcon:string;
  @Input() NavTitle:string;
  private showNavBack:boolean = false;
  constructor() { }

  ngOnInit() {
    if(this.NavBack == 'back'){
      this.showNavBack = true;
    }
  }

}

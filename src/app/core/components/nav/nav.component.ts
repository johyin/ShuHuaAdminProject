<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
<<<<<<< HEAD
  @Input() NavBack:string;
  @Input() NavIcon:string;
  @Input() NavTitle:string;
  private showNavBack:boolean = false;
  constructor() { }

  ngOnInit() {
    if(this.NavBack == 'back'){
      this.showNavBack = true;
    }
=======

  constructor() { }

  ngOnInit() {
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0
  }

}

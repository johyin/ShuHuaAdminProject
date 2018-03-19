<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0

@Component({
  selector: 'app-campus-list',
  templateUrl: './campus-list.component.html',
  styleUrls: ['./campus-list.component.scss']
})
export class CampusListComponent implements OnInit {

<<<<<<< HEAD
  @Input() CampusList:any = {};
  constructor( private router: Router ) { }

  ToAddCampus(){
    this.router.navigate(['/core/addcampus'])
  }
  ngOnInit() {
    // this.CampusList = []
    if(!this.CampusList.length){
      // this.router.navigate(['/home/campus'])
    }
=======
  constructor() { }

  ngOnInit() {
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0
  }

}

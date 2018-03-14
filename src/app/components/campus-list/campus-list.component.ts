import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-campus-list',
  templateUrl: './campus-list.component.html',
  styleUrls: ['./campus-list.component.scss']
})
export class CampusListComponent implements OnInit {

  @Input() CampusList:any = {};
  constructor( private router: Router ) { }

  ToAddCampus(){
    this.router.navigate(['/addcampus'])
  }
  ngOnInit() {
    // this.CampusList = []
    if(!this.CampusList.length){
      // this.router.navigate(['/home/campus'])
    }
  }

}

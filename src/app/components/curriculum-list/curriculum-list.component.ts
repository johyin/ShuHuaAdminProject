import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curriculum-list',
  templateUrl: './curriculum-list.component.html',
  styleUrls: ['./curriculum-list.component.scss']
})
export class CurriculumListComponent implements OnInit {

  constructor( private router: Router ) { }
  @Input() CurriculumList:any = {};
  ngOnInit() {
  }
  ToAdd(){
    this.router.navigate(['/addcurriculum'])
  }
}

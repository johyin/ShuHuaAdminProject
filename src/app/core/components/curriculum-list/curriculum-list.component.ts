<<<<<<< HEAD
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0

@Component({
  selector: 'app-curriculum-list',
  templateUrl: './curriculum-list.component.html',
  styleUrls: ['./curriculum-list.component.scss']
})
export class CurriculumListComponent implements OnInit {
<<<<<<< HEAD
  validateForm: FormGroup;
  private isVisible = false;
  private modalStyle: any = {
    top: '50%',
    transfrom: 'translateY(-50%)',
    width: '280px'
  }
  private mCurriculumName:string = '';
  private mCurriculumDesc:string = '';


  constructor( private router: Router, private fb: FormBuilder  ) { }
  @Input() CurriculumList:any = {};
  ngOnInit() {


    this.validateForm = this.fb.group({
      curriculumName: [ null, [ Validators.required ] ],
      curriculumDesc: [ null, [ Validators.required ] ],
    })

  }
  ToAdd(){
    this.router.navigate(['/core/addcurriculum'])
  }




  _submitForm = (value) => {
    console.log(this.validateForm.value);

  };

  editShowModal = (data) => {
    this.isVisible = true;
    this.mCurriculumName = data.name;
    this.mCurriculumDesc = data.desc;
  }
  cancel(){
    this.isVisible = false;
    return false;
  }
  
  handleOk = () => {
    this.isVisible = false;
    
    // this.CurriculumList = this.CurriculumList.
  }










=======

  constructor() { }

  ngOnInit() {
  }
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0

}

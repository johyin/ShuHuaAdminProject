import { Component, OnInit } from '@angular/core';


import { UploadFile  } from  '../../components/upload/interface'
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';



@Component({
  selector: 'app-add-campus',
  templateUrl: './add-campus.component.html',
  styleUrls: ['./add-campus.component.scss']
})
export class AddCampusComponent implements OnInit {

  private ckeditorContent = '';

  // nav
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
      title: '添加校区',
      url: ''
    }
  ]

  // image Upload
  validateForm: FormGroup;
  fileList = [{
    uid: -1,
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  }];
  previewImage = '';
  previewVisible = false;
  

  constructor(private fb: FormBuilder) {}


  handlePreview = (file: UploadFile) => {
    console.log(file);
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }

  
  _submitForm(){
    let data = this.validateForm.value;
    console.log(data);
  }
  resetForm($event: MouseEvent) {
    $event.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsPristine();
    }
  }
  ngOnInit() {
    this.validateForm = this.fb.group({
      campusName: [ null, [ Validators.required ] ], 
      campusType: [ 'A' ],
      address_sheng: [ null, [ Validators.required ] ],
      address_shi: [ null, [ Validators.required ] ],
      address_qu: [ null, [ Validators.required ] ],
      address_desc: [ null, [ Validators.required ] ],
      telephoneOne: [ null, [ Validators.required ] ],
      telephoneTow: [ null ],
      introduce: [ null ],
    });
  }

}

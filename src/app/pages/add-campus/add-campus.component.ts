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
  private radioValue = 'A';

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
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }

  
  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      select: [ 'one']
    });
  }

}

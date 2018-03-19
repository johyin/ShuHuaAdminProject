import { Component, OnInit } from '@angular/core';
import { UploadFile  } from  '../../components/upload/interface'

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-add-curriculum',
  templateUrl: './add-curriculum.component.html',
  styleUrls: ['./add-curriculum.component.scss']
})
export class AddCurriculumComponent implements OnInit {
  validateForm: FormGroup;
  fileList = [{
    uid: -1,
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  }];
  previewImage = '';
  previewVisible = false;


  // nav
  navData = [
    {
      title: '内部管理',
      url: ''
    },
    {
      title: '课程',
      url: ''
    },
    {
      title: '添加新的课程',
      url: ''
    }
  ]

  // ckeditor 配置
  CKEditorConfig = {
    toolbar: [
    { name: 'document',     items : [ 'Source', 'Templates' ] }, 
    { name: 'basicstyles',  items : [ 'Bold','Italic','Underline','Strike','-','RemoveFormat' ] },  
    { name: 'paragraph',    items : [ 'NumberedList','BulletedList','Blockquote','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },  
    { name: 'links',        items : [ 'Link','Unlink' ] },
    { name: 'insert',       items : [ 'Image','Table','HorizontalRule','SpecialChar','PageBreak' ] },  
    '/',
    { name: 'styles',       items : [ 'Styles','Format','FontSize' ] },  
    { name: 'colors',       items : [ 'TextColor','BGColor' ] },  
    { name: 'tools',        items : [ 'Maximize', 'ShowBlocks' ] }
    ],

    filebrowserBrowseUrl: '&&&&&', 
    filebrowserUploadUrl: '&&&'  
  }


  constructor( private fb: FormBuilder ) {}

  handlePreview = (file: UploadFile) => {
    console.log(file);
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }

  _submitForm(){
    console.log(111111)
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      curriculumName: [ null, [ Validators.required ] ],
      desc: [ null, [ Validators.required ] ],
      introduce: [ null, [ Validators.required ] ],
      curriculum_type: [ '1' ],
      curriculumPrice: [ null , [ Validators.required ]  ],
      period: [ 0 , [ Validators.required ]  ],
      charge_stage_type: [ null, [ Validators.required ] ],
      charge_year_type: [ null, [ Validators.required ] ],
    })
  }


}

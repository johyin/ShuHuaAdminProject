import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD

import { UploadFile  } from  '../../components/upload/interface'
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';



=======
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0
@Component({
  selector: 'app-add-campus',
  templateUrl: './add-campus.component.html',
  styleUrls: ['./add-campus.component.scss']
})
export class AddCampusComponent implements OnInit {

<<<<<<< HEAD
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
  


  // ckeditor 配置
  CKEditorConfig = {
    // 默认
    // { name: 'document',     items : [ 'Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ] },  
    // { name: 'clipboard',    items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },  
    // { name: 'editing',      items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },  
    // { name: 'forms',        items : [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },  
    // '/',  
    // { name: 'basicstyles',  items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },  
    // { name: 'paragraph',    items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },  
    // { name: 'links',        items : [ 'Link','Unlink','Anchor' ] },  
    // { name: 'insert',       items : [ 'Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe' ] },  
    // '/',  
    // { name: 'styles',       items : [ 'Styles','Format','Font','FontSize' ] },  
    // { name: 'colors',       items : [ 'TextColor','BGColor' ] },  
    // { name: 'tools',        items : [ 'Maximize', 'ShowBlocks','-','About' ] }  
    // removeButtons: 'Underline,JustifyCenter',
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
=======
  constructor() { }

  ngOnInit() {
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0
  }

}

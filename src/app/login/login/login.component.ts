import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
<<<<<<< HEAD
import { Router } from '@angular/router'


=======
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
<<<<<<< HEAD

=======
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0
  validateForm: FormGroup;
  private isLoading = false;
  private isVisible = false;
  private modalStyle: any = {
    top: '50%',
    transfrom: 'translateY(-50%)',
    width: '280px'
  }

<<<<<<< HEAD
  constructor(private fb: FormBuilder, private router: Router) {

=======
  constructor(private fb: FormBuilder) {
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0
  }

  ngOnInit() {
    //页面初始化时，如果帐号密码cookie存在则填充
    if( this.getCookie('SHuser') && this.getCookie('SHpswd')){
      
      this.validateForm = this.fb.group({
        userName: [ this.getCookie('SHuser'), [ Validators.required ] ],
        password: [ this.getCookie('SHpswd'), [ Validators.required ] ],
        remember: [ true ],
      });

    }else{
      this.validateForm = this.fb.group({
        userName: [ null, [ Validators.required ] ],
        password: [ null, [ Validators.required ] ],
        remember: [ false ],
      });
    }
  }


  _submitForm = (value) => {
    console.log(this.validateForm.value)
    if(this.validateForm.value.remember){
      this.setCookie('SHuser', this.validateForm.value.userName ,7); //保存帐号到cookie，有效期7天
      this.setCookie('SHpswd', this.validateForm.value.password ,7); //保存密码到cookie，有效期7天
    }else{
      this.delCookie('SHuser');
      this.delCookie('SHpswd');
    }
    this.isLoading = true;

<<<<<<< HEAD
    //模拟登陆成功
    setTimeout(_ => {
      this.isLoading = true;
      this.router.navigate(['/core/campus'])
    }, 1000);


    //模拟登陆失败
    // setTimeout(_ => {
    //   this.isLoading = false;

    //   this.showModal();
    // }, 1000);
=======
    //模拟登陆失败
    setTimeout(_ => {
      this.isLoading = false;

      this.showModal();
    }, 1000);
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0
  };
  handleCancel(){
    this.handleOk();
  }
  resetForm() {
    this.validateForm.reset();
  }

  showModal = () => {
    this.isVisible = true;
  }

  handleOk = () => {
    this.isVisible = false;
    this.resetForm();
  }







    //设置cookie
    setCookie(name,value,day){
      var date = new Date();
      date.setDate(date.getDate() + day);
      document.cookie = name + '=' + value + ';expires='+ date;
    };

    //获取cookie
    getCookie(name){
      var reg = RegExp(name+'=([^;]+)');
      var arr = document.cookie.match(reg);
      if(arr){
        return arr[1];
      }else{
        return '';
      }
    };
    //删除cookie
    delCookie(name){
      this.setCookie(name,null,-1);
    };
}

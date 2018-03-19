<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';// Zorro
import { CKEditorModule } from 'ng2-ckeditor';// 富文本
import { BaiduMapModule } from 'angular2-baidu-map'// 百度地图



import { NgModule , Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCampusComponent } from './pages/add-campus/add-campus.component';
import { AddCurriculumComponent } from './pages/add-curriculum/add-curriculum.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { CampusComponent } from './pages/campus/campus.component';
=======
import { NgModule, Optional,  SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCampusComponent } from './pages/add-campus/add-campus.component';
import { CampusComponent } from './pages/campus/campus.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0
import { NoticeComponent } from './pages/notice/notice.component';
import { StaffComponent } from './pages/staff/staff.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CampusListComponent } from './components/campus-list/campus-list.component';
import { CurriculumListComponent } from './components/curriculum-list/curriculum-list.component';
import { HeaderComponent } from './components/header/header.component';
import { MapComponent } from './components/map/map.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
<<<<<<< HEAD
import { CoreComponent } from './core.component';
import { FinanceComponent } from './pages/finance/finance.component';
import { WagesComponent } from './pages/wages/wages.component';
import { AddClassesComponent } from './pages/add-classes/add-classes.component';
import { ClassesListComponent } from './components/classes-list/classes-list.component';
=======
import { UploadComponent } from './components/upload/upload.component';
import { CoreComponent } from './core.component';










import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { RouterModule, Routes } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';// 富文本
import { BaiduMapModule } from 'angular2-baidu-map'// 百度地图

import { NgZorroAntdModule } from 'ng-zorro-antd';
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    redirectTo: '/login',
    // redirectTo: '/core/campus',
    pathMatch: 'full'
  },
  {
    path: 'core',
=======
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0
    redirectTo: '/core/campus',
    pathMatch: 'full'
  },
  {
    path: 'core',
    component: CoreComponent,
    children: [
      {
        path: 'campus',
        component: CampusComponent,
      },
      {
        path: 'addcampus',
        component: AddCampusComponent
      },
      {
        path: 'stall',
        component: StaffComponent,
      },
      {
        path: 'notice',
        component: NoticeComponent,
      },
      {
        path: 'curriculum',
        component: CurriculumComponent,
      },
      {
<<<<<<< HEAD
        path: 'addcurriculum',
        component: AddCurriculumComponent,
      },
      {
        path: 'classes',
        component: ClassesComponent,
      },
      {
        path: 'addclasses',
        component: AddClassesComponent,
      },
      {
        path: 'finance',
        component: FinanceComponent,
      },
      {
        path: 'wages',
        component: WagesComponent,
      }
    ]
  }
]


@NgModule({

  imports: [
    
    CommonModule,
    RouterModule.forRoot(routes),
  
    
    FormsModule,
    ReactiveFormsModule,

=======
        path: 'classes',
        component: ClassesComponent,
      }
    ]
  },
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0
    HttpClientModule,
    CKEditorModule,
    BaiduMapModule,
    BaiduMapModule.forRoot({ak: 'XaBx5ZvBxSYT3OxHCgWIqYDfN7DVItjP'}),
<<<<<<< HEAD
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
    
  ],
  exports: [RouterModule],
  declarations: [CoreComponent, AddCampusComponent, AddCurriculumComponent, CurriculumComponent, ClassesComponent, CampusComponent, NoticeComponent, StaffComponent, BreadcrumbComponent, CampusListComponent, CurriculumListComponent, HeaderComponent, MapComponent, NavComponent, SearchComponent, FinanceComponent, WagesComponent, AddClassesComponent ,ClassesListComponent]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
    private routerInfo :ActivatedRoute
  ) {
    if (parentModule) {
      throw new Error('CoreModule 已经装载，请仅在 AppModule 中引入该模块。');
    }
    this.routerInfo.params.subscribe((params) => {
      console.log(params);
    });
  }
}
=======
    RouterModule.forRoot(routes),
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [AddCampusComponent, CampusComponent, ClassesComponent, CurriculumComponent, NoticeComponent, StaffComponent, BreadcrumbComponent, CampusListComponent, CurriculumListComponent, HeaderComponent, MapComponent, NavComponent, SearchComponent, UploadComponent, CoreComponent],

  exports: [RouterModule]
})
export class CoreModule {
  
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule 已经装载，请仅在 AppModule 中引入该模块。');
    }
  }

}



>>>>>>> e2e5a04b70305eadf9aecbfe2f89cc92dc1a8ee0

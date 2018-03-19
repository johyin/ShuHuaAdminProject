import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CKEditorModule } from 'ng2-ckeditor';// 富文本
import { BaiduMapModule } from 'angular2-baidu-map'// 百度地图


import { AppComponent } from './app.component';
import { CampusComponent } from './pages/campus/campus.component';
import { CampusListComponent } from './components/campus-list/campus-list.component';
import { HeaderComponent } from './components/header/header.component';
import { AddCampusComponent } from './pages/add-campus/add-campus.component';
import { StaffComponent } from './pages/staff/staff.component';
import { NoticeComponent } from './pages/notice/notice.component';
import { SearchComponent } from './components/search/search.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { NavComponent } from './components/nav/nav.component';
import { MapComponent } from './components/map/map.component';
import { CurriculumListComponent } from './components/curriculum-list/curriculum-list.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { AddCurriculumComponent } from './pages/add-curriculum/add-curriculum.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/campus',
    pathMatch: 'full'
  },
  {
    path: 'campus',
    component: CampusComponent,
    // children: [
    //   {
    //     path: 'campuslist',
    //     component: CampusListComponent
    //   }
    // ]
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
    path: 'addcurriculum',
    component: AddCurriculumComponent,
  },
  {
    path: 'classes',
    component: ClassesComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CampusComponent,
    CampusListComponent,
    AddCampusComponent,
    HeaderComponent,
    StaffComponent,
    NoticeComponent,
    SearchComponent,
    BreadcrumbComponent,
    NavComponent,
    MapComponent,
    CurriculumListComponent,
    CurriculumComponent,
    ClassesComponent,
    AddCurriculumComponent 
  ],
  imports: [
    BrowserModule,
    
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
    CKEditorModule,
    BaiduMapModule,
    BaiduMapModule.forRoot({ak: 'XaBx5ZvBxSYT3OxHCgWIqYDfN7DVItjP'}),
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

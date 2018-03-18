import { NgModule, Optional,  SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCampusComponent } from './pages/add-campus/add-campus.component';
import { CampusComponent } from './pages/campus/campus.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { NoticeComponent } from './pages/notice/notice.component';
import { StaffComponent } from './pages/staff/staff.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CampusListComponent } from './components/campus-list/campus-list.component';
import { CurriculumListComponent } from './components/curriculum-list/curriculum-list.component';
import { HeaderComponent } from './components/header/header.component';
import { MapComponent } from './components/map/map.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import { UploadComponent } from './components/upload/upload.component';
import { CoreComponent } from './core.component';










import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { RouterModule, Routes } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';// 富文本
import { BaiduMapModule } from 'angular2-baidu-map'// 百度地图

import { NgZorroAntdModule } from 'ng-zorro-antd';

const routes: Routes = [
  {
    path: '',
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
    HttpClientModule,
    CKEditorModule,
    BaiduMapModule,
    BaiduMapModule.forRoot({ak: 'XaBx5ZvBxSYT3OxHCgWIqYDfN7DVItjP'}),
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




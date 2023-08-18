import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from 'src/modules/contact/contact.component';
import { DocsComponent } from 'src/modules/docs/docs.component';
import { HomeComponent } from 'src/modules/home/home.component';
import { HomeviewComponent } from 'src/modules/homeview/homeview.component';
import { LoginComponent } from 'src/modules/login/login.component';

const routes: Routes = [
  { path: '', 
    component: HomeComponent ,
    data: { title: 'Trang chủ' },
    children:[
      { path: 'home', component: HomeviewComponent ,data: { title: 'Trang chủ' }},
      { path: 'docs', component: DocsComponent ,data: { title: 'Tài liệu' }},
      { path: 'contact', component: ContactComponent ,data: { title: 'Liên hệ' }}
    ]
  },
  { path: 'login', component: LoginComponent ,data: { title: 'Đăng nhập' }},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

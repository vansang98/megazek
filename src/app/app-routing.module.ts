import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/modules/home/home.component';
import { LoginComponent } from 'src/modules/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent ,data: { title: 'Trang chủ' }},
  { path: 'login', component: LoginComponent ,data: { title: 'Đăng nhập' }},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

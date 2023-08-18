import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ngclass : any = 1;

  constructor(  private router: Router) { }
  
  changeClass(event : any){
    this.ngclass = event;
    if(event == 1)
    {
      this.router.navigate(['/home']);
    }
    if(event == 2)
    {
      this.router.navigate(['/contact']);
    }
    if(event == 3)
    {
      this.router.navigate(['/docs']);
    }
  }
}

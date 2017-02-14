import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  // styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {

  constructor(private router: Router){}

  ngOnInit() {
  }

  goToTest11(){

    // this.router.navigate(['../test1/test11']);
    // this.router.navigateByUrl('../test1/test11');
    this.router.navigateByUrl('/test1/test11');

  }
}

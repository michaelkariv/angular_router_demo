import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test11Component } from './test11/test11.component';

const routes: Routes = [
  {path: 'test1', component: Test1Component,
    children: [
      {path: '', redirectTo: 'test11', pathMatch: 'full'},
      {path: 'test11', component: Test11Component},

    ]
  },
  {path: 'test2', component: Test2Component},
  {path: '', redirectTo: 'test1/test11', pathMatch: 'full'},
  {path: '**', redirectTo:'test1/test11'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

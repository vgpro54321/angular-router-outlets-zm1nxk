import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlueComponent } from './components/blue.component';
import { RedComponent } from './components/red.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
       { 
        path: '', 
        component: BlueComponent,
      }, 
      { 
        path: '', 
        component: BlueComponent,
        outlet: 'header1'   
      }, 
      {
        path:'',
        component: BlueComponent,
        outlet: 'header2'
      },

      { 
        path: 'test', 
        component: RedComponent,
      },
      {
        path:'test',
        component: RedComponent,
        outlet: 'header1'
      },
      {
        path:'test',
        component: RedComponent,
        outlet: 'header2'
      },
    ])
  ],
  exports : [
    RouterModule
  ]
})
export class AppRouting {

}
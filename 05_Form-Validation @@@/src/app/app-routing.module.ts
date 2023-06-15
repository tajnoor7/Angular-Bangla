import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { FaComponent } from './fa/fa.component';
import { FbComponent } from './fb/fb.component';
import { SecondComponent } from './second/second.component';
import { CommonModule } from '@angular/common';
import { SaComponent } from './sa/sa.component';
import { SbComponent } from './sb/sb.component';



const routes: Routes = [
  {
    path: '', component: FirstComponent,
    children: [
      {
        path: 'child-fa', component: FaComponent
      },{
        path: 'child-fb', component: FbComponent
      }
    ]
  },{
    path: 's', component: SecondComponent,
    children: [
      {
        path: 'child-sa', component: SaComponent
      },{
        path: 'child-sb', component: SbComponent
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
  ], 
  exports: [RouterModule],
})
export class AppRoutingModule { }

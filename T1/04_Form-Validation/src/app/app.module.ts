import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FirstComponent } from './first/first.component';
// import { SecondComponent } from './second/second.component';
// import { RouterModule, Routes } from '@angular/router';
// import { FaComponent } from './fa/fa.component';
// import { FbComponent } from './fb/fb.component';
// import { SaComponent } from './sa/sa.component';
// import { SbComponent } from './sb/sb.component';  //imported
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// const routes: Routes = [
//   {
//     path: '', component: FirstComponent,
//     children: [
//       {
//         path: 'child-a', component: FaComponent
//       },{
//         path: 'child-b', component: FbComponent
//       }
//     ]
//   },{
//     path: 's', component: SecondComponent
//   }
// ]

@NgModule({
  declarations: [
    AppComponent,
    // FirstComponent,
    // SecondComponent,
    // FaComponent,
    // FbComponent,
    // SaComponent,
    // SbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(routes)
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { FetchSpeakersComponent } from './fetch-speakers.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [{ path: '', component: FetchSpeakersComponent }] },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class FetchSpeakersRoutingModule { }

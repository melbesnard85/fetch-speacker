import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { FetchSpeakersComponent } from './fetch-speakers.component';
import { SpeackerinfoComponent } from './speackerinfo/speackerinfo.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [{ path: '', component: FetchSpeakersComponent }] },
  { path: '', component: LayoutComponent, children: [{ path: 'information/:name', component: SpeackerinfoComponent}]},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class FetchSpeakersRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchSpeakersComponent } from './fetch-speakers.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { FetchSpeakersRoutingModule } from './fetch-speakers-routing.module';

@NgModule({
  declarations: [
    FetchSpeakersComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FetchSpeakersRoutingModule
  ]
})

export class FetchSpeakersModule { }

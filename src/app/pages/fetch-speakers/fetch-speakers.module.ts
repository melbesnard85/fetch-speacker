import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchSpeakersComponent } from './fetch-speakers.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { FetchSpeakersRoutingModule } from './fetch-speakers-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FetchSpeakersComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    LayoutModule,
    FetchSpeakersRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ]
})

export class FetchSpeakersModule { }

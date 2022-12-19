import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchSpeakersComponent } from './fetch-speakers.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { FetchSpeakersRoutingModule } from './fetch-speakers-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ResultTableComponent } from './result-table/result-table.component';


@NgModule({
  declarations: [
    FetchSpeakersComponent,
    SearchBarComponent,
    ResultTableComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    LayoutModule,
    FetchSpeakersRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ]
})

export class FetchSpeakersModule { }

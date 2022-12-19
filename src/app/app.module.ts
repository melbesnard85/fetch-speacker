import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { DetailModule } from './detail/detail.module';
import { FetchSpeakersModule } from './pages/fetch-speakers/fetch-speakers.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DetailModule,
    FetchSpeakersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

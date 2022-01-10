import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ContentComponent } from './content/content.component';
import {MatIconModule} from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { meteoReducer } from './store/meteo.reducer';
import { MeteoEffects } from './store/meteo.effects';
import { httpInterceptorProviders } from './http-interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    StoreModule.forRoot({meteo:meteoReducer}),
    EffectsModule.forRoot([MeteoEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })

  ],
  providers: [HttpClientModule,httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

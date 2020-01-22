import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// MDB Angular Free

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent  } from './basic/basic.component';
import { ModalTryComponent } from './modal-try/modal-try.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ModalTryComponent,
    
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

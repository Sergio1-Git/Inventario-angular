import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './components/dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductosComponent,
    ProductoComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  entryComponents: [DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

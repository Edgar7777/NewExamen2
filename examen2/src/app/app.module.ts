import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntrenadorComponent } from './entrenador/entrenador.component';
import { HttpClientModule }    from '@angular/common/http';
import { BuscadorComponent } from './buscador/buscador.component';
import { BotonCargarMasComponent } from './boton-cargar-mas/boton-cargar-mas.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrenadorComponent,
    BuscadorComponent,
    BotonCargarMasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

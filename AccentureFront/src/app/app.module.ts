import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders  } from './app.routing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormularioInscripcionComponent } from './components/formulario-inscripcion/formulario-inscripcion.component';
import { FormularioCreditoComponent } from './components/formulario-credito/formulario-credito.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { SolicitarCreditoComponent } from './components/solicitar-credito/solicitar-credito.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FormularioInscripcionComponent,
    FormularioCreditoComponent,
    MenuComponent,
    SolicitarCreditoComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

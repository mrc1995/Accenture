import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioInscripcionComponent } from './components/formulario-inscripcion/formulario-inscripcion.component';
import { FormularioCreditoComponent } from './components/formulario-credito/formulario-credito.component';
import { SolicitarCreditoComponent } from './components/solicitar-credito/solicitar-credito.component';

const appRoutes: Routes = [
    { path: '', component: FormularioInscripcionComponent},
    { path: 'inscripcion', component: FormularioInscripcionComponent, data: { state: 'inscripcion' } },
    { path: 'validar-registro', component: FormularioCreditoComponent, data: { state: 'validar-registro' }, },
    { path: 'solicitar-credito', component: SolicitarCreditoComponent, data: { state: 'solicitar-credito' }, },
]; 

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
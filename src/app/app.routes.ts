import { Routes } from '@angular/router';

import { PersonaListComponent } from './component/persona-list/persona-list.component';
import { MotivoListComponent } from './component/motivo-list/motivo-list.component';
import { HistorialListComponent } from './component/historial-list/historial-list.component';


export const routes: Routes = [
{path : 'personas', component: PersonaListComponent},
{path : 'motivos', component: MotivoListComponent},
{path: 'historial', component: HistorialListComponent},
{path : '', redirectTo: 'personas', pathMatch: 'full'}
];
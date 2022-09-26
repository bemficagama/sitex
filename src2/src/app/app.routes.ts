import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { ServicosComponent } from './servicos/servicos.component'

export const ROUTES: Routes = [
    {path: '', component: HomeComponent },
    {path: 'servicos', component: ServicosComponent }
]
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { CitaPageComponent } from './pages/cita-page/cita-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatSidenavContainer } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    CitaPageComponent,
    ListPageComponent,
    NewPageComponent,
    LayoutPageComponent,
    SearchPageComponent,
    
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    MaterialModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavContainer,

    RouterModule
  ]
})
export class CitasModule { }

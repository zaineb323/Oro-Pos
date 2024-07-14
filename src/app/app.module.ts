import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Ensure this is imported
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
//import { FeatherIconsModule } from './feather-icons'; // Importez le module contenant i-feather

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionsComponent } from './orders/actions/actions.component';
import { FiltersComponent } from './orders/filters/filters.component';
import { OrdersTableComponent } from './orders/orders-table/orders-table.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Import Angular Material modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent,
    FiltersComponent,
    OrdersTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // Ensure this is included
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    //FeatherIconsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Ajoutez ce schéma

})
export class AppModule { }

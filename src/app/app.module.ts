import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Ensure this is imported
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
//import { FeatherIconsModule } from './feather-icons'; // Importez le module contenant i-feather
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

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
import { OrderActionComponent } from './orders/order-action/order-action.component';
import { ModalInfoComponent } from './modal/modal-info/modal-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent,
    FiltersComponent,
    OrdersTableComponent,
    OrderActionComponent,
    ModalInfoComponent,

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
    MatDialogModule,
    MatInputModule
    //FeatherIconsModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {} // Ajoutez cette ligne pour fournir une valeur par défaut
    },
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],// Ajoutez ce schéma
})
export class AppModule { }

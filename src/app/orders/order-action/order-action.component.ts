import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ModalInfoComponent } from '../../modal/modal-info/modal-info.component';
@Component({
  selector: 'app-order-action',
  templateUrl: './order-action.component.html',
  styleUrl: './order-action.component.scss'
})
export class OrderActionComponent {
  @Output() tabChanged: EventEmitter<string> = new EventEmitter<string>();
  /////////////

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalInfoComponent, {
      width: '300px',
      data: { /* données à passer à la modal si nécessaire */ }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('La modal a été fermée');
    });
  }
  ///////////

  onTabChange(event: any) {
    let filterValue = '';
    switch (event.index) {
      case 0:
        filterValue = 'Order Info';
        break;
      case 1:
        filterValue = 'Edit';
        break;
      case 2:
        filterValue = 'Send';
        break;
      case 3:
        filterValue = 'Settel';
        break;
      case 4:
        filterValue = 'Split';
        break;
      case 5:
        filterValue = 'Close Order';
        break;
    }
    this.tabChanged.emit(filterValue);
  }

}

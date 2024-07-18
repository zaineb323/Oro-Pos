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
  selectedRowId: string | null = null;

  constructor(private dialog: MatDialog) { }


  onRowSelected(Id: string): void {
    this.selectedRowId = Id;
  }
  openDialog(): void {
    if (this.selectedRowId) {
      const dialogRef = this.dialog.open(ModalInfoComponent, {
        width: '300px',
        data: { id: this.selectedRowId }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    } else {
      alert('No row selected');
    }
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

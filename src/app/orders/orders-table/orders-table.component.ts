import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['Id', 'Token', 'Server', 'Created', 'Customer', 'Dadress', 'Ddate', 'Type', 'Status', 'Total', 'Due'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filterPredicate = (data: PeriodicElement, filter: string) => {
      const transformedFilter = filter.trim().toLowerCase();
      return data.Type.trim().toLowerCase().includes(transformedFilter) ||
        data.Id.trim().toLowerCase().includes(transformedFilter) ||
        data.Token.trim().toLowerCase().includes(transformedFilter) ||
        data.Server.trim().toLowerCase().includes(transformedFilter) ||
        data.Created.trim().toLowerCase().includes(transformedFilter) ||
        data.Customer.trim().toLowerCase().includes(transformedFilter) ||
        data.Dadress.trim().toLowerCase().includes(transformedFilter) ||
        data.Ddate.trim().toLowerCase().includes(transformedFilter) ||
        data.Status.trim().toLowerCase().includes(transformedFilter) ||
        data.Total.trim().toLowerCase().includes(transformedFilter) ||
        data.Due.trim().toLowerCase().includes(transformedFilter);
    };
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface PeriodicElement {
  Id: string;
  Token: string;
  Server: string;
  Created: string;
  Customer: string;
  Dadress: string;
  Ddate: string;
  Type: string;
  Status: string;
  Total: string;
  Due: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Id: 'A3651', Token: 'William White', Server: '$14,000', Created: '04 items', Customer: 'Jekob Fashion', Dadress: '', Ddate: '12/06/2024', Type: 'All', Status: 'Open', Total: '8.3', Due: '8.3' },
  { Id: 'A3652', Token: 'Isabella Anderson', Server: '$3,000', Created: '02 items', Customer: 'Novartix LTD', Dadress: '', Ddate: '12/06/2024', Type: 'Pizza ++', Status: 'Open', Total: '8.3', Due: '8.3' },
  { Id: 'A3653', Token: 'Mason Martinez', Server: '$450', Created: '05 items', Customer: 'Forv Motor', Dadress: '', Ddate: '12/06/2024', Type: 'Delivery & Pick Up', Status: 'Open', Total: '8.3', Due: '8.3' },
  { Id: 'A3654', Token: 'Sophia Jones', Server: '$28,000', Created: '03 items', Customer: 'Northrop LTD', Dadress: '', Ddate: '12/06/2024', Type: 'All', Status: 'Open', Total: '8.3', Due: '8.3' },
  { Id: 'A3655', Token: 'Thomas Moser', Server: '$17,000', Created: '02 items', Customer: 'Goldman', Dadress: '', Ddate: '12/06/2024', Type: 'Pizza ++', Status: 'Open', Total: '8.3', Due: '8.3' }
];

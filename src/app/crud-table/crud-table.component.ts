import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CrudTableService } from './crud-table.service';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { DialogComponent } from './../dialog/dialog.component';

import { USER_DATA, IUsersData } from './../MOCK_DATA';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss']
})

export class CRUDTableComponent implements OnInit, AfterViewInit {

  title = 'crud-table';
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'gender', 'ip_address', 'action'];
  dataSource = new MatTableDataSource<IUsersData>();
  selection = new SelectionModel<IUsersData>(true, []);

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public _crudTableService: CrudTableService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsersData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getUsersData() {
    // this.appService.showLoader(true);
    this._crudTableService.usersData().subscribe((data: any) => {
      console.log(data);
      this.dataSource.data = data;
      // this.appService.showLoader(false);
    },
      (error) => {
        // this.appService.showLoader(false);
        alert(error.error.message);
      },
    );
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Add') {
        this.addRowData(result.data);
      } else if (result.event === 'Update') {
        this.updateRowData(result.data);
      } else if (result.event === 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(rowObj) {
    this.dataSource.data.push({
      id: this.dataSource.data[this.dataSource.data.length - 1].id + 1,
      first_name: rowObj.first_name,
      last_name: rowObj.last_name,
      email: rowObj.email,
      gender: rowObj.gender,
      ip_address: rowObj.ip_address,
    });
    this.table.dataSource = this.dataSource.data;
    this.table.renderRows();

  }

  updateRowData(rowObj) {
    this.dataSource.data = this.dataSource.data.filter((value, key) => {
      if (value.id === rowObj.id) {
        value.first_name = rowObj.first_name;
      }
      return true;
    });
  }

  deleteRowData(rowObj) {
    this.dataSource.data = this.dataSource.data.filter((value, key) => {
      return value.id !== rowObj.id;
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    // console.log(numSelected,numRows);
    return numSelected === numRows;
  }

}

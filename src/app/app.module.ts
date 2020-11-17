import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SharedService } from './shared.service';
import { ErrorService } from './error.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrudTableService } from './crud-table/crud-table.service';

import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DialogComponent } from './dialog/dialog.component';
import { MatSortModule } from '@angular/material/sort';

import { CRUDTableComponent } from './crud-table/crud-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    CRUDTableComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    AppService,
    SharedService,
    ErrorService,
    CrudTableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

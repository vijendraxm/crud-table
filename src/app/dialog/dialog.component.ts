import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UsersData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  ip_address: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent {

  action: string;
  localData: any;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.localData = { ...data };
    this.action = this.localData.action;
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.localData });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}

import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirmation',
  templateUrl: './dialog-confirmation.component.html',
  styleUrls: ['./dialog-confirmation.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class DialogConfirmationComponent {
  constructor( public dialog: MatDialogRef<DialogConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string){}

    reject(): void {
      this.dialog.close(false);
    }
    confirmed(): void {
      this.dialog.close(true);
    }
}

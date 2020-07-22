import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingModalComponent } from './stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer: number;
  @Output() trainingExit = new EventEmitter<void>();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.startOrResumeTimer();
  }

  onStop(): void {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingModalComponent, {
      data: { progress: this.progress }
    });

    dialogRef.afterClosed().subscribe((isConfirmed: boolean) => {
      if (isConfirmed) {
        this.trainingExit.emit();
        return;
      }

      this.startOrResumeTimer();
    });
  }

  startOrResumeTimer(): void {
    this.timer = setInterval(() => {
      this.progress = this.progress + 5;

      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }
}

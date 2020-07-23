import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingModalComponent } from './stop-training.component';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer: number;

  constructor(private dialog: MatDialog, private trainingService: TrainingService) {}

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
        this.trainingService.cancelExercise(this.progress);
        return;
      }

      this.startOrResumeTimer();
    });
  }

  startOrResumeTimer(): void {
    const step = (this.trainingService.getRunningExercise().duration / 100) * 1000;

    this.timer = setInterval(() => {
      this.progress = this.progress + 1;

      if (this.progress >= 100) {
        this.trainingService.completeExercise();
        clearInterval(this.timer);
      }
    }, step);
  }
}

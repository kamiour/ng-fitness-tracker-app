import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingModalComponent } from './stop-training.component';
import { TrainingService } from '../training.service';
import * as fromTraining from '../training.reducer';
import { Store } from '@ngrx/store';
import { Exercise } from '../exercise.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer: number;

  constructor(
    private dialog: MatDialog,
    private trainingService: TrainingService,
    private store: Store<fromTraining.State>
  ) {}

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
    this.store
      .select(fromTraining.getActiveTraining)
      .pipe(take(1))
      .subscribe((exercise: Exercise) => {
        const step = (exercise.duration / 100) * 1000;

        this.timer = setInterval(() => {
          this.progress = this.progress + 1;

          if (this.progress >= 100) {
            this.trainingService.completeExercise();
            clearInterval(this.timer);
          }
        }, step);
      });
  }
}

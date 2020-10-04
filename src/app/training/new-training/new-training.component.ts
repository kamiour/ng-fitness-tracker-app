import { Component, OnInit, OnDestroy } from '@angular/core';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import * as fromRoot from '../../app.reducer';
import * as fromTraining from '../training.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  exercises$: Observable<Exercise[]>;
  isLoading$: Observable<boolean>;

  constructor(private trainingService: TrainingService, private store: Store<fromTraining.State>) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.exercises$ = this.store.select(fromTraining.getAvailableExercises);

    this.fetchExercises();
  }

  fetchExercises(): void {
    this.trainingService.cancelFbSubs();
    this.trainingService.fetchAvailableExercises();
  }

  onStartTraining(form: NgForm): void {
    this.trainingService.startExercise(form.value.exercise);
  }

  ngOnDestroy(): void {
    this.trainingService.cancelFbSubs();
  }
}

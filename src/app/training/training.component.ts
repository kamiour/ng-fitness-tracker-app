import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrainingService } from './training.service';
import { Subscription } from 'rxjs';
import { Exercise } from './exercise.model';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit, OnDestroy {
  ongoingTraining = false;
  exerciseSubscription: Subscription;

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe((ex: Exercise) => {
      if (ex) {
        this.ongoingTraining = true;
      } else {
        this.ongoingTraining = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.exerciseSubscription.unsubscribe();
  }
}

import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { UIService } from '../shared/ui.service';
import * as UI from '../shared/ui.actions';
import * as fromTraining from './training.reducer';
import * as Training from './training.actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private fbSubs: Subscription[] = [];

  constructor(
    private db: AngularFirestore,
    private uiService: UIService,
    private store: Store<fromTraining.State>
  ) {}

  fetchAvailableExercises(): void {
    this.store.dispatch(new UI.StartLoading());

    this.fbSubs.push(
      this.db
        .collection('availableExercises')
        .snapshotChanges()
        .pipe(
          map(docArray => {
            return docArray.map(item => {
              return {
                id: item.payload.doc.id,
                name: item.payload.doc.data()['name'],
                duration: item.payload.doc.data()['duration'],
                calories: item.payload.doc.data()['calories']
              };
            });
          })
        )
        .subscribe(
          (resultArray: Exercise[]) => {
            this.store.dispatch(new UI.StopLoading());
            this.store.dispatch(new Training.SetAvailableTrainings(resultArray));
          },
          error => {
            this.store.dispatch(new UI.StopLoading());
            this.uiService.showSnackbar(
              'Fetching exercises failed. Please try again later',
              null,
              3000
            );
            this.store.dispatch(new Training.StopTraining());
          }
        )
    );
  }

  cancelFbSubs(): void {
    this.fbSubs.forEach(sub => {
      sub.unsubscribe();
    });
    this.fbSubs.length = 0;
  }

  startExercise(selectedId: string): void {
    this.store.dispatch(new Training.StartTraining(selectedId));
  }

  completeExercise(): void {
    this.store
      .select(fromTraining.getActiveTraining)
      .pipe(take(1))
      .subscribe(ex => {
        this.addDataToDatabase({ ...ex, date: new Date(), state: 'completed' });
        this.store.dispatch(new Training.StopTraining());
      });
  }

  cancelExercise(progress: number): void {
    this.store
      .select(fromTraining.getActiveTraining)
      .pipe(take(1))
      .subscribe(ex => {
        this.addDataToDatabase({
          ...ex,
          duration: ex.duration * (progress / 100),
          calories: ex.calories * (progress / 100),
          date: new Date(),
          state: 'cancelled'
        });
        this.store.dispatch(new Training.StopTraining());
      });
  }

  fetchCompletedOrCancelledExercises(): void {
    this.fbSubs.push(
      this.db
        .collection('finishedExercises')
        .valueChanges()
        .subscribe((exercises: Exercise[]) => {
          this.store.dispatch(new Training.SetFinishedTrainings(exercises));
        })
    );
  }

  private addDataToDatabase(exercise: Exercise): void {
    this.db.collection('finishedExercises').add(exercise);
  }
}

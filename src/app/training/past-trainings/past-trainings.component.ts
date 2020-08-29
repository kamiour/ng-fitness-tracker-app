import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.scss']
})
export class PastTrainingsComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource: MatTableDataSource<Exercise> = new MatTableDataSource<Exercise>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private exChangedSubscription: Subscription;

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.exChangedSubscription = this.trainingService.finishedExercisesChanged.subscribe(
      (exercises: Exercise[]) => {
        this.dataSource.data = exercises;
      }
    );
    this.trainingService.fetchCompletedOrCancelledExercises();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(value: string): void {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  ngOnDestroy(): void {
    if (this.exChangedSubscription) {
      this.exChangedSubscription.unsubscribe();
    }

    this.trainingService.cancelFbSubs();
  }
}

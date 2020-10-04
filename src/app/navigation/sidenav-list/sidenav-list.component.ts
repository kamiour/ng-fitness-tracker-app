import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose: EventEmitter<void> = new EventEmitter<void>();
  isAuth$: Observable<boolean>;

  constructor(private auth: AuthService, private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
  }

  onCloseSidenav(): void {
    this.sidenavClose.emit();
  }

  onLogout(): void {
    this.onCloseSidenav();
    this.auth.logout();
  }
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle: EventEmitter<void> = new EventEmitter<void>();
  isAuth$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>, private auth: AuthService) {}

  ngOnInit(): void {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
  }

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }

  onLogout(): void {
    this.auth.logout();
  }
}

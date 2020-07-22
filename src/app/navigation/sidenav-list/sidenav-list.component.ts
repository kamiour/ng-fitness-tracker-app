import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() sidenavClose: EventEmitter<void> = new EventEmitter<void>();
  isAuth: boolean = false;
  isAuthSubscription: Subscription;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.isAuthSubscription = this.auth.authChange.subscribe(
      (authStatus: boolean) => (this.isAuth = authStatus)
    );
  }

  onCloseSidenav(): void {
    this.sidenavClose.emit();
  }

  ngOnDestroy(): void {
    this.isAuthSubscription.unsubscribe();
  }
}

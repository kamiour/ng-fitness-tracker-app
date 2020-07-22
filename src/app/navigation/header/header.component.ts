import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle: EventEmitter<void> = new EventEmitter<void>();
  isAuth: boolean = false;
  isAuthSubscription: Subscription;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.isAuthSubscription = this.auth.authChange.subscribe(
      (authStatus: boolean) => (this.isAuth = authStatus)
    );
  }

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }

  ngOnDestroy(): void {
    this.isAuthSubscription.unsubscribe();
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { UIService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  maxDate: Date;
  isLoading: boolean = false;
  private loadingSub: Subscription;

  constructor(private auth: AuthService, private uiService: UIService) {}

  ngOnInit(): void {
    this.loadingSub = this.uiService.loadingStateChanged.subscribe((isLoading: boolean) => {
      this.isLoading = isLoading;
    });

    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm): void {
    this.auth.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }

  ngOnDestroy(): void {
    if (this.loadingSub) {
      this.loadingSub.unsubscribe();
    }
  }
}

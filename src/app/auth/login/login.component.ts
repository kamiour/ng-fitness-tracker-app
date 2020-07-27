import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UIService } from 'src/app/shared/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  isLoading: boolean = false;
  private loadingSub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private uiService: UIService
  ) {}

  ngOnInit(): void {
    this.loadingSub = this.uiService.loadingStateChanged.subscribe((isLoading: boolean) => {
      this.isLoading = isLoading;
    });

    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    this.auth.login({
      email: this.formGroup.value.email,
      password: this.formGroup.value.password
    });
  }

  ngOnDestroy(): void {
    this.loadingSub.unsubscribe();
  }
}

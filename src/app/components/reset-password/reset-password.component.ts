import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/_helpers';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styles: [
    `
      @media screen and (max-width: 540px) {
        .modal-content,
        .modal-card {
          width: auto;
        }
      }
    `,
  ],
})
export class ResetPasswordComponent implements OnInit {
  @Output() closeBtn: EventEmitter<any> = new EventEmitter<any>();
  email;
  message;
  errors;
  loading: boolean = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  closeModal() {
    this.closeBtn.emit();
  }

  sendResetEmail(form) {
    this.loading = true;
    this.errors = '';
    if (this.email) {
      this.authService.resetPassword(this.email).then(
        (data) => {
          this.loading = false;
          this.message = 'Password Reset instructions have been sent to your email';
          form.resetForm();
        },
        (error) => {
          this.errors = error.code;
          this.loading = false;
        }
      );
    }
  }
}

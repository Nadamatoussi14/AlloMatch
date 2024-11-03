import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  email: string;
  verificationCode: (number | null)[] = [null, null, null, null];

  constructor(private authService: AuthServiceService, private toastController: ToastController, private router: Router) {}

  ngOnInit() {}

  sendVerificationCode() {
    this.authService.sendVerificationCode(this.email).then(() => {
      console.log('Verification code sent');
      this.router.navigate(['/verify']);
    });
  }

  verifyCode() {
    const codeEntered = this.verificationCode.join('');
    this.authService.verifyCode(codeEntered).then(isValid => {
      if (isValid) {
        this.router.navigate(['/create-password']);
      } else {
        this.presentToast('Invalid verification code');
      }
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}

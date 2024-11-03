import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth-service.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {
  email: string;  // Ajoute la propriété email
  verificationCode: (number | null)[] = [null, null, null, null];  // Ajoute la propriété verificationCode

  constructor(
    private authService: AuthServiceService,
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {}

  verifyCode() {
    // Concatène les valeurs des champs du code de vérification en une chaîne
    const codeEntered = this.verificationCode.join('');
    // Appelle le service pour vérifier le code
    this.authService.verifyCode(codeEntered).then((isValid: boolean) => {
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

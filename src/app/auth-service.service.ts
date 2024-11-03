import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';

export interface Users {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private profileImageUrl = new BehaviorSubject<string>('../assets/images/Ellipse 5.png');
  profileImage$ = this.profileImageUrl.asObservable();

  // Variable temporaire pour stocker le code
  private verificationCode: string | null = null;

  constructor(public ngFireAuth: AngularFireAuth) {}

  async registerUser(email: string, password: string, name: string) {
    return await this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  async loginUser(email: string, password: string) {
    return await this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  async resetPassword(email: string) {
    return await this.ngFireAuth.sendPasswordResetEmail(email);
  }

  async getProfile(): Promise<User | null> {
    return new Promise<User | null>((resolve, reject) => {
      this.ngFireAuth.onAuthStateChanged(
        (user) => {
          if (user) {
            this.profileImageUrl.next(user.photoURL || '../assets/images/Ellipse 5.png');
            resolve(user as User);
          } else {
            resolve(null);
          }
        },
        reject
      );
    });
  }

  updateProfileImage(newImageUrl: string) {
    this.profileImageUrl.next(newImageUrl);
  }

  async signOut() {
    return await this.ngFireAuth.signOut();
  }

  // Méthode pour envoyer le code de vérification
  sendVerificationCode(email: string): Promise<void> {
    return new Promise((resolve, reject) => {
      // Génération d'un code aléatoire de 4 chiffres
      this.verificationCode = Math.floor(1000 + Math.random() * 9000).toString();

      console.log(`Code de vérification pour ${email} est : ${this.verificationCode}`);

      // Simule l'envoi d'un email (à implémenter avec une API backend réelle)
      resolve();
    });
  }

  // Méthode pour vérifier le code entré
  verifyCode(code: string): Promise<boolean> {
    return new Promise((resolve) => {
      const isValid = code === this.verificationCode;
      resolve(isValid);
    });
  }
}

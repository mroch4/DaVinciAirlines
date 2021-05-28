import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

export interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly authState$ = this.fireAuth.authState;

  isloggedIn: boolean = false;

  constructor(
    private fireAuth: AngularFireAuth
  ) {
    fireAuth.onAuthStateChanged((user)=>{
      if (user) {
        this.isloggedIn = true;
      } else {
        this.isloggedIn = false;
      }
    })
  }

  async login(credentials: Credentials) {
    await this.fireAuth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  logout() {
    return this.fireAuth.signOut();
  }

  register(credentials: Credentials) {
    return this.fireAuth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

}

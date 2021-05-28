import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router,
    private toast: MatSnackBar
  ) { }

  loggedIn = this.authService.isloggedIn;
  userName: any;

  logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['']))
      .then(() => this.toast.open('Pomyślnie wylogowano!', '', { panelClass: 'toast-success' }));
    localStorage.removeItem('userName');
  }

  ngOnInit() {
    this.userName = localStorage.getItem('userName');
  }
}

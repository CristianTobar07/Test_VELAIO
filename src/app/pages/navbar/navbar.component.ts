import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { selectErrorMessage } from '../../store/selectors';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { FlotingAlertComponent } from '../../shared/components/floting-alert/floting-alert.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    FlotingAlertComponent,
    NgIf,
  ],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isErrorAlert: boolean = false;
  message: string = '';
  good: boolean = false;

  suscription: Subscription = new Subscription();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.suscription = this.store
      .select(selectErrorMessage)
      .subscribe((data) => {
        this.isErrorAlert = data.isError;
        this.message = data.message;
        this.good = data.good;
      });
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }
}

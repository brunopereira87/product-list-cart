import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { getConfirmOrderModalIsOpen } from './states/modal/modal.selectors';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ConfirmModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isModalOpen = signal(false);
  store = inject(Store)
  ngOnInit(): void {
    this.store.select(getConfirmOrderModalIsOpen).subscribe((modalState) => {
      console.log(modalState);
      this.isModalOpen.set(modalState)
    })
  }
}

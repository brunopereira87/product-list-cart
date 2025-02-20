import { Component, inject, OnInit, TemplateRef, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  modal = viewChild<TemplateRef<any>>('modal');
  store = inject(Store)
  ngOnInit(): void {
      
  }
}

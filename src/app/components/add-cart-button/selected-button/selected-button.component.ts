import { Component, input } from '@angular/core';

@Component({
  selector: 'button[selectedAddCartButton]',
  standalone: true,
  imports: [],
  templateUrl: './selected-button.component.html',
  styleUrl: './selected-button.component.scss'
})
export class SelectedButtonComponent {
  qtyProducts = input<number>(0);
}

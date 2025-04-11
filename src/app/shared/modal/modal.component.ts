import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent } from 'rxjs';
import { modalActions } from '../../states/modal/modal.actions';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements AfterViewInit {
  private dialogEl = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  store = inject(Store);
  ngAfterViewInit(): void {
    this.dialogEl().nativeElement.showModal();
    fromEvent(this.dialogEl().nativeElement,'close')
      .subscribe(() => {
        this.store.dispatch(modalActions.closeConfirmModal());
      })
  }
}

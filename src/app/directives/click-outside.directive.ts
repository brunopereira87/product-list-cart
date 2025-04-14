import { Directive, ElementRef, HostListener, inject, output } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  standalone: true
})
export class ClickOutsideDirective {

  private _elementRef = inject(ElementRef);
  constructor() { }

  public clickOutside = output<MouseEvent>();
  
  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if(!targetElement) {
      return;
    }
    
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);

    if(!clickedInside) {
      this.clickOutside.emit(event);
    }
  }


}

import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  constructor(private eobj : ElementRef) { }

  @HostListener('mouseenter')onmouseover() 
  {
    this.eobj.nativeElement.style.background='yellow';
  }

  @HostListener('mouseleave')onmouseleave() 
  {
    this.eobj.nativeElement.style.background='blue';
  }
}

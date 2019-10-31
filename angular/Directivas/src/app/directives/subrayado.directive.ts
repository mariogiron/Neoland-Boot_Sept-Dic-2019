import { Directive, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[subrayado]'
})
export class SubrayadoDirective {

  constructor(elem: ElementRef) {
    elem.nativeElement.style.textDecoration = 'underline';
    elem.nativeElement.style.fontSize = '24px';
  }

}

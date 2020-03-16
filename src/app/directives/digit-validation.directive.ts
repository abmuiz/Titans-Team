import { Directive, ElementRef,HostListener,Input } from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
  selector: '[appDigitValidation]'
})
export class DigitValidationDirective {

  constructor(private el : ElementRef) { }

  @HostListener('input',['$event']) inInputChange(event)
  {
    let value:  string = this.el.nativeElement.value;
    // console.log(event);
    
    this.el.nativeElement.value = value.replace(/[^0-9]*/g,'');

    if(value !== this.el.nativeElement.value){}
      event.stopPropagation();
  }

}

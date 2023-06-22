import { Directive, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit, AfterViewInit{

  constructor(private el: ElementRef) { }

  ngAfterViewInit(){
  }

  ngOnInit(){
    this.el.nativeElement.focus()
  }
}

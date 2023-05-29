import { Directive, ElementRef, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[appDragDrop]',
})
export class DragDropDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {}
}

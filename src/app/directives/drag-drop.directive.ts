import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDragDrop]',
})
export class DragDropDirective implements OnInit {
  constructor(private el: ElementRef, private ren: Renderer2) {}

  ngOnInit(): void {}
}

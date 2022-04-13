import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRandomColor]'
})
export class RandomColorDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  getRandomColor() {
    const colors = ['#f4f4f4', '#eef7fb', '#f8f1ff', '#f2f7ef', '#ebfdf5', '#f8e8e8'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.getRandomColor());
  }
}
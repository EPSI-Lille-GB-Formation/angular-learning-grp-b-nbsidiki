import {
  Directive,
  HostListener,
  ElementRef,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[highlight]',
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor')
  bgColor = 'transparent';

  @Input('default-color')
  bgHighLightColor = 'transparent';

  constructor() {}

  ngAfterViewInit() {
    this.bgColor = this.bgHighLightColor;
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgColor = 'yellow';
  }

  /*@HostListener('click')
  onClick() {
    alert('no open');
  }*/
  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgColor = this.bgHighLightColor;
  }
}

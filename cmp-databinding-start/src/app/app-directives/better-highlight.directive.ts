import { Directive, OnInit,Renderer2, ElementRef, HostListener, HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    @Input() defaultBColor: string = 'yellow';
    @Input() highlightBColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultBColor;
   // @HostBinding('style.color') color: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(){

      this.backgroundColor=this.defaultBColor
      //alert(this.backgroundColor);
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
    ngAfterContentInit()
    {
        //this.backgroundColor=this.defaultBColor;
    }
    @HostListener('mouseenter') mouseover(eventData: Event){
        //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        //this.renderer.setStyle(this.elRef.nativeElement, 'color', this.highlightTColor);
        this.backgroundColor = this.highlightBColor;
    }
    @HostListener('mouseleave') mouseleave(eventData: Event){
        //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
       // this.renderer.setStyle(this.elRef.nativeElement, 'color', this.defaultTColor);
        //this.color = 'black';
        this.backgroundColor = this.defaultBColor;
    }

}

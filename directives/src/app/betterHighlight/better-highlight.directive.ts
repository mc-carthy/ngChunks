import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

    @Input() defaultColour: string = 'transparent';
    @Input() highlightColour: string = 'blue';

    @HostBinding('style.backgroundColor') backgroundColor: string;  

    @HostListener('mouseenter') mouseOver(eventData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')     
        this.backgroundColor = this.highlightColour;   
    }
    
    @HostListener('mouseleave') mouseLeave(eventData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')        
        this.backgroundColor = this.defaultColour
    }

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
        this.backgroundColor = this.defaultColour;
    }

}

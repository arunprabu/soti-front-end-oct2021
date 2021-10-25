import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]' // attribute selector
})
export class ColorizerDirective {

  constructor( private elRef: ElementRef, private renderer: Renderer2) { // Dependency Injection
    console.log("Inside Constructor");
    console.log(this.elRef.nativeElement);

    // 1. find the element in which appColorizer is used --- ElementRef 
    let el = this.elRef.nativeElement; // this will give you details about the element in which diretive is applied.
    
    // 2. change the bg color, color, height of that element using Renderer2
    this.renderer.setStyle(el, "backgroundColor", "red");
    this.renderer.setStyle(el, "color", "#fff");
    this.renderer.setStyle(el, "height", "400px");
    // Learn more methods such as createElement, appendChild

    // Old fashioned using JS */
    // el.style.backgroundColor = "red";
    // el.style.color = "#fff";
    // el.style.height = "400px";
  }

  // Handling Click Events in Directives 
  @HostListener('click', ['$event'])  // event.target will give you el the event occured on
  handleClick(event: any): void{
    console.log(event);
    this.renderer.setStyle(event.target, "backgroundColor", "yellow");
    this.renderer.setStyle(event.target, "color", "#000");
  }

  // Handling Mouseover Events in Directives 
  // @HostListener('mouseover', ['$event.target'])  // event.target will give you el the event occured on
  // handleMouseOver(element: any): void{
  //   console.log(element);
  //   this.renderer.setStyle(element, "backgroundColor", "green");
  //   this.renderer.setStyle(element, "color", "#fff");
  // }

   // Handling Mouseleave Events in Directives 
   @HostListener('mouseleave', ['$event.target'])  // event.target will give you el the event occured on
   handleMouseLeave(element: any): void{
     console.log(element);
     this.renderer.setStyle(element, "backgroundColor", "red");
     this.renderer.setStyle(element, "color", "#fff");
   }

   // TODO: Learn about @HostBinding()

}

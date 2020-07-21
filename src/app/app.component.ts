import { Component, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'personal-website';

  constructor(private elementRef: ElementRef){
    
  }

  ngOnInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#303030';
  }
}

import { Component,ViewChild,AfterViewInit,ElementRef,ViewChildren, QueryList} from '@angular/core';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  @ViewChild(HelloComponent,{static:false})hello:HelloComponent;
  @ViewChild('pRef', {static: false}) pRef: ElementRef;
  @ViewChildren(HelloComponent) hellos: QueryList<any>;
   ngAfterViewInit() {
    console.log('Hello ', this.hello.name); 
    console.log(this.pRef.nativeElement.innerHTML); 
    this.pRef.nativeElement.innerHTML = "DOM updated successfully!!!"; 
    this.hellos.forEach(hello => console.log(hello));
  }
}

import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input() parentData:any;
  @Input() productsData:any;
  @ContentChild("head") heading:any;
  @ViewChild("hookChild") viewChild:any;

  count:number=0;
  interval:any;

  constructor(){
    console.log("Constructor called....");
  }

  ngOnInit(){
    console.log("ngOnInit called...");
    this.interval = setInterval(()=>{
      this.count = this.count+1;
      console.log(this.count); 
    },1000)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("OnChanges called...",changes);
  }

  ngDoCheck() {
    console.log("ngDoCheck called...", this.productsData);
    
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called...", this.heading);
    //this.heading.nativeElement.setAttribute("style", `color:${this.parentData}`)
    
  }

  ngAfterContentChecked() {
    console.log("AfterContentChecked called.....");
    this.heading.nativeElement.setAttribute("style", `color:${this.parentData}`)
  }
  
  ngAfterViewInit(){
    console.log("ngAfterViewInit called...");
    //this.viewChild.nativeElement.setAttribute("style", `background-color:${this.parentData}`)

  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called...');
    this.viewChild.nativeElement.setAttribute("style", `background-color:${this.parentData}`)
      
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called...');
    clearInterval(this.interval);
      
  }
  
  
}

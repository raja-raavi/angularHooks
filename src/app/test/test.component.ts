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

  //called only once
  ngOnInit(){
    console.log("ngOnInit called...");
    this.interval = setInterval(()=>{
      this.count = this.count+1;
      console.log(this.count); 
    },1000)
  }

  //called multiple times when change occurs
  ngOnChanges(changes: SimpleChanges) {
    console.log("OnChanges called...",changes);
  }

  //called multiplle times when change occurs similar to onChanges
  ngDoCheck() {
    console.log("ngDoCheck called...", this.productsData);
    
  }

  //called only once
  ngAfterContentInit() {
    console.log("ngAfterContentInit called...", this.heading);
    //this.heading.nativeElement.setAttribute("style", `color:${this.parentData}`)
    
  }

  //called multiple times when change in content
  ngAfterContentChecked() {
    console.log("AfterContentChecked called.....");
    this.heading.nativeElement.setAttribute("style", `color:${this.parentData}`)
  }
  
  //called only once
  ngAfterViewInit(){
    console.log("ngAfterViewInit called...");
    //this.viewChild.nativeElement.setAttribute("style", `background-color:${this.parentData}`)

  }

  //called multiple times when change in view
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called...');
    this.viewChild.nativeElement.setAttribute("style", `background-color:${this.parentData}`)
      
  }

  //to destroy the routing 
  ngOnDestroy() {
    console.log('ngOnDestroy called...');
    clearInterval(this.interval);
      
  }
  
  
}

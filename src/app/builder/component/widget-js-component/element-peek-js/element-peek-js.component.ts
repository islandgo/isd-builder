import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-element-peek-js',
  templateUrl: './element-peek-js.component.html',
  styleUrls: ['./element-peek-js.component.less']
})
export class ElementPeekJsComponent implements OnInit {
  @Input() region;
  @Input() widget;
  constructor() { }

  ngOnInit() {
    
  }

}

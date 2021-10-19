import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-element-peek-html',
  templateUrl: './element-peek-html.component.html',
  styleUrls: ['./element-peek-html.component.less']
})
export class ElementPeekHtmlComponent implements OnInit {
  @Input() public widget;
  @Input() public regionClassName;

  constructor() { }

  ngOnInit() {
    console.log(this.regionClassName)
  }

}

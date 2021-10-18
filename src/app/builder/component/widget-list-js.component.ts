import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'widget-list-js',
  templateUrl: './widget-list-js.component.html',
  styleUrls: ['./widget-list-js.component.less']
})
export class WidgetListJsComponent implements OnInit {
  @Input() region;
  @Input() widget;
  constructor() { }

  ngOnInit() {
  }

}

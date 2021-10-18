import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'widget-list-css',
  templateUrl: './widget-list-css.component.html',
  styleUrls: ['./widget-list-css.component.less']
})
export class WidgetListCssComponent implements OnInit {
  @Input() region;
  @Input() widget;
  constructor() { }

  ngOnInit() {
  }

}

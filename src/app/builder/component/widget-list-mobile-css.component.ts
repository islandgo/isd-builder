import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'widget-list-mobile-css',
  templateUrl: './widget-list-mobile-css.component.html',
  styleUrls: ['./widget-list-mobile-css.component.less']
})
export class WidgetListMobileCssComponent implements OnInit {
  @Input() region;
  @Input() widget;
  constructor() { }

  ngOnInit() {
  }

}

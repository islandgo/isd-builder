import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.less']
})
export class WidgetListComponent implements OnInit {
  @Input() regionClassName;
  @Input() widget;
  constructor() { }

  ngOnInit() {
  }

}

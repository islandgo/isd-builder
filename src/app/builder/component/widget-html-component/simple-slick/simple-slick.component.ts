import { RegionsService } from '../../../services/regions.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'simple-simple-slick',
  templateUrl: './simple-slick.component.html',
  styleUrls: ['./simple-slick.component.less']
})
export class SimpleSlickComponent implements OnInit {
  @Input() public widget;
  @Input() public regionClassName;

  slickItem: any;
  widgetType: any;

  constructor(
    public RegionsService: RegionsService
  ) { }

  ngOnInit() {
    this.widgetType = this.widget[1]["name"];
    if (this.widgetType = this.widget[1]["name"] == 'simple-slick') {

      this.slickItem = +this.widget[1]["settings"]['number_of_item']['value'];
    }
    
  }

}

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

  constructor(
    public RegionsService: RegionsService
  ) { }

  ngOnInit() {
    
  }

}

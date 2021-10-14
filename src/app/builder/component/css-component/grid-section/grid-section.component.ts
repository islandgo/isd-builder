import { RegionsService } from './../../../services/regions.service';
import { PageService } from './../../../services/page.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-section',
  templateUrl: './grid-section.component.html',
  styleUrls: ['./grid-section.component.less']
})
export class GridSectionComponent implements OnInit {
  @Input() public region;
  constructor(
    public PageService: PageService,
    public RegionsService: RegionsService
  ) { }

  ngOnInit() {

  }

}

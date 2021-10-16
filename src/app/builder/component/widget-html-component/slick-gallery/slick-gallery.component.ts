import { RegionsService } from './../../../services/regions.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slick-gallery',
  templateUrl: './slick-gallery.component.html',
  styleUrls: ['./slick-gallery.component.less']
})
export class SlickGalleryComponent implements OnInit {
  @Input() public widget;
  @Input() public regionClassName;

  constructor(
    public RegionsService: RegionsService
  ) { }

  ngOnInit() {
  }

}

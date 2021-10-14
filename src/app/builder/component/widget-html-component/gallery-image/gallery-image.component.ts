import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.less']
})
export class GalleryImageComponent implements OnInit {
  @Input() public regionChild;
  @Input() public regionClassName;
  
  widgetType;
  constructor() { }

  ngOnInit() {
    console.log(this.regionClassName);
    if (this.regionChild[1]["widgets"]) {
      this.widgetType = this.regionChild[1]["widgets"][0]["name"];
    }
  }

}

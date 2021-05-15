import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'builder-root',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class BuilderComponent {
  title = 'isd-builder';
}

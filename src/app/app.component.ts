import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div class="site-main-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'isd-builder';
}

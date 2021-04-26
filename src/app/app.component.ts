import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div class="site-main-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'isd-builder';
}

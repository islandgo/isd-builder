import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { RegionsService } from "src/app/builder/services/regions.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-quick-search-css",
  templateUrl: "./quick-search-css.component.html",
  styleUrls: ["./quick-search-css.component.less"],
})
export class QuickSearchCssComponent implements OnInit {
  @Input() public widget;
  constructor(public RegionsService: RegionsService) {}
  counter = 1;
  ngOnInit() {}
  resetCounter() {
    if (this.widget[1]["name"] == "quick-search") {
      return this.RegionsService.convertNumberToWord(this.counter++);
    }
  }
}

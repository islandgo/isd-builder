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
  ngOnInit() {
    console.log(
      this.widget[1]["settings"]["site_title"]["selectTextValues"]["column"]
    );
  }
  resetCounter() {
    return this.RegionsService.convertNumberToWord(this.counter++);
  }
}

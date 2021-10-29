import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { RegionsService } from "src/app/builder/services/regions.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-quick-search",
  templateUrl: "./quick-search.component.html",
  styleUrls: ["./quick-search.component.less"],
})
export class QuickSearchComponent implements OnInit {
  @Input() public widget;
  counter = 1;
  constructor(public RegionsService: RegionsService) {}

  ngOnInit() {
    if (this.widget[1]["name"] == "quick-search") {
      // console.log(this.widget[1]["settings"]);
    }
  }

  resetCounter() {
    return this.RegionsService.convertNumberToWord(this.counter++);
  }
}

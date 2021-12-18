import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { forkJoin, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PageService {
  pageSettings;
  enablePagePopUpModal: boolean = false;
  enablePageSplitNav: boolean = false;
  enablePageBurgerMenu: boolean = false;
  enablePageNormalHeader: boolean = false;
  headerType: string;
  navHover: string;
  enablePageFloatingMenu: boolean;
  floatingMenuType: any;
  enablePageSocialFiXNav: boolean;
  socialFixNavType: any;
  socialFixNavList: any;
  enablePageGoogleTranslator: boolean;
  enableHeaderContact: boolean;
  enableSeparatorNav: boolean;
  enablePageDoubleTap: boolean;
  enablePageIntroVideo: boolean;
  enableCombineContactAndNav: boolean;
  skipButton: any;
  circleBackground: any;
  headerData: any;
  headerDataMenu: any;
  behavior: any;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  getPage() {
    let pageSetUp = localStorage.getItem("__pageSetUp");
    if (!pageSetUp || pageSetUp == "undefined") {
      return this.httpClient.get("assets/model/page-config.json");
    }
    return of(JSON.parse(pageSetUp));
  }

  setPageSetUp(jsonData) {
    return of(localStorage.setItem("__pageSetUp", JSON.stringify(jsonData)));
  }

  resetPageSetUp() {
    return of(localStorage.removeItem("__pageSetUp"));
  }

  jsonFormatter(regions) {
    let jsonFormatter = {};

    regions.forEach(function (value) {
      jsonFormatter[value[0]] = value[1];
    });
    return jsonFormatter;
  }

  getPageSettings() {
    //reset settings
    this.enablePagePopUpModal = false;
    this.enablePageSplitNav = false;
    this.enablePageBurgerMenu = false;
    this.enablePagePopUpModal = false;
    this.enablePagePopUpModal = false;
    this.enablePageNormalHeader = false;
    this.enablePageFloatingMenu = false;
    this.enablePageSocialFiXNav = false;
    this.enablePageGoogleTranslator = false;
    this.enableSeparatorNav = false;
    this.enablePageDoubleTap = false;
    this.enablePageIntroVideo = false;
    this.enableHeaderContact = false;
    this.enableCombineContactAndNav = false;
    this.getPage().subscribe((data) => {
      if (data) {
        this.pageSettings = Object.entries(data);

        this.pageSettings.forEach((obj) => {
          if (obj[1]["enable"]) {
            if (obj[0] == "popup_modal") {
              this.enablePagePopUpModal = true;
            }
            if (obj[0] == "split_nav") {
              this.enablePageSplitNav = true;
            }
            if (obj[0] == "burger_menu") {
              this.enablePageBurgerMenu = true;
              this.headerData = obj[1]["settings"];
            }
            if (obj[0] == "google_translator") {
              this.enablePageGoogleTranslator = true;
            }
            if (obj[0] == "double_tap") {
              this.enablePageDoubleTap = true;
            }
            if (obj[0] == "social_fix_nav") {
              this.enablePageSocialFiXNav = true;
              this.socialFixNavType = obj[1]["settings"]["position"]["value"];
              this.socialFixNavList =
                obj[1]["settings"]["socialIcons"]["checkListSetting"];
              this.circleBackground =
                obj[1]["settings"]["circle_background"]["value"];
              this.behavior = obj[1]["settings"]["behavior"]["value"];
            }
            if (obj[0] == "intro_video") {
              this.enablePageIntroVideo = true;
              this.skipButton = obj[1]["settings"]["skipButton"]["value"];
            }
            if (obj[0] == "floating_menu") {
              this.enablePageFloatingMenu = true;
              this.floatingMenuType =
                obj[1]["settings"]["floatingPosition"]["value"];
            }
            if (obj[0] == "header") {
              this.headerType = obj[1]["settings"]["headerType"]["value"];
              this.navHover = obj[1]["settings"]["navHover"]["value"];
              if (
                obj[1]["settings"]["headerType"]["value"] == "normal-header"
              ) {
                this.headerDataMenu = obj[1]["settings"];
                this.enablePageNormalHeader = true;
              }
              if (obj[1]["settings"]["contactUs"]["value"] == "true") {
                this.enableHeaderContact = true;
              }
              if (obj[1]["settings"]["separatorNav"]["value"] == "true") {
                this.enableSeparatorNav = true;
              }
              if (
                obj[1]["settings"]["combineContactUsAndNav"]["value"] == "true"
              ) {
                this.enableCombineContactAndNav = true;
              }
            }
          }
        });
      }
    });
  }

  indexTracker(index: number) {
    return index;
  }
}

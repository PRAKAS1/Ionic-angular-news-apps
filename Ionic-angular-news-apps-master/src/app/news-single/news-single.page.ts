import { Component, OnInit } from "@angular/core";
import { StateServiceService } from "../state-service.service";

@Component({
  selector: "app-news-single",
  templateUrl: "./news-single.page.html",
  styleUrls: ["./news-single.page.scss"]
})
export class NewsSinglePage implements OnInit {
  constructor(private stateService: StateServiceService) {}
  currentNews: any;
  ngOnInit() {
    this.currentNews = this.stateService.data;
    console.log(this.currentNews);
  }
}

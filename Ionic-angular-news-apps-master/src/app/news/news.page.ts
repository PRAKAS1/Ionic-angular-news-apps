import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Navigation, Router } from '@angular/router';
import { StateServiceService } from '../state-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  headlines:any;

  constructor(private newsServices: NewsService,private router:Router,private stateService: StateServiceService) { 
    newsServices.getHeadlines().subscribe(res => {
      console.log(res);
      this.headlines=res.articles;
    })
  }

  ngOnInit() {
  
  }
  getNewsDetails(data)
  {
    console.log("Working");
    this.stateService.data =data;
    this.router.navigate(['/tabs/tab3/detail']);
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-data-page',
  templateUrl: '../../view/data-page/data-page.component.html',
  styleUrls: ['../../view/data-page/data-page.component.css']
})
export class DataPageComponent implements OnInit {
  GouvernoratList:any
  constructor(    private serviceData: DataService
    ) { }

  ngOnInit(): void {
    this.serviceData
    .getData()
    .subscribe((data) => {
      this.GouvernoratList = data.buckets;
    });
  }

}

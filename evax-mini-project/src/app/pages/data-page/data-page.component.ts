import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-data-page',
  templateUrl: './data-page.component.html',
  styleUrls: ['./data-page.component.css']
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

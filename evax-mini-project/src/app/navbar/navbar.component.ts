import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from 'src/config/constants.config';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  routes:any;
  constructor() {this.routes=CONSTANTS }

  ngOnInit(): void {
  }

}

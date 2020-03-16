import { Component, OnInit } from '@angular/core';
import AboutMeData from '../../assets/json/about_me.json';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  aboutMeData : any;

  ngOnInit() {
    this.aboutMeData = AboutMeData;
  }

}

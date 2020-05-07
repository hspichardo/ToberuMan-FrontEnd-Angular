import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  static URL = 'welcome';
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokensService} from '../shared/tokens.service';
import {LoginModel} from '../shared/login.model';

@Component({
  selector: 'app-home',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  static URL = 'welcome';
  dni: string;
  password: string;
  isManagerOrOperator: boolean;

  constructor(private tokensService: TokensService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.tokensService.login(this.dni, this.password).subscribe(
      () => {
        this.router.navigate(['home']);
        this.isManagerOrOperator = this.tokensService.isManager() || this.tokensService.isOperator();
      });
  }

}

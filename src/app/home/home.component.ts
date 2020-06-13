import {Component, OnInit} from '@angular/core';
import {TokensService} from '../shared/tokens.service';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _opened = false;
  _animate = true;
  _trapFocus = true;
  _autoFocus = true;
  _keyClose = false;
  _autoCollapseHeight = 600;
  _autoCollapseWidth = 500;
  _MODES: Array<string> = ['over', 'push', 'slide'];
  _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];
  sideBarClass = 'demo-sidebar';
 username: string;
 isManager: boolean;
 isAdmin: boolean;
 isWaiter: boolean;
  isCousine: boolean;
  constructor(private tokensService: TokensService, router: Router) {
    this.username = tokensService.getName();
    this.isManager = tokensService.isManager();
    this.isAdmin = tokensService.isAdmin();
    this.isWaiter = tokensService.isOperator();
    this.isCousine = tokensService.isCousine();
    console.log(this.isAdmin);
    if (tokensService.getName() === '???') { router.navigate(['welcome']); }
  }

  ngOnInit(): void {
  }

  _toggleOpened(): void {
    this._opened = !this._opened;
  }

  _onOpenStart(): void {
    console.info('Sidebar opening');
  }

  _onOpened(): void {
    console.info('Sidebar opened');
  }

  _onCloseStart(): void {
    console.info('Sidebar closing');
  }

  _onClosed(): void {
    console.info('Sidebar closed');
  }

  _onTransitionEnd(): void {
    console.info('Transition ended');
  }

}

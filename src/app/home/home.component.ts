import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _opened = false;
  _animate: boolean = true;
  _trapFocus: boolean = true;
  _autoFocus: boolean = true;
  _keyClose: boolean = false;
  _autoCollapseHeight: number = 600;
  _autoCollapseWidth: number = 500;
  _MODES: Array<string> = ['over', 'push', 'slide'];
  _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];
  sideBarClass = 'demo-sidebar';

  constructor() {
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

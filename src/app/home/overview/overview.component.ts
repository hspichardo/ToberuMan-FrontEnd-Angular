import {Component, OnInit} from '@angular/core';
import {TokensService} from '../../shared/tokens.service';
import {Router} from '@angular/router';
import {TableService} from '../../shared/table.service';
import {Table} from '../../shared/table.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {
  breakpoint: number;
  tables: Table[];
  constructor(private tableService: TableService, router: Router) {
   this.tableService.readAll().subscribe(
     data => {
       this.tables = data;
       console.log(this.tables);
     }
   );
  }
  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
  }
}

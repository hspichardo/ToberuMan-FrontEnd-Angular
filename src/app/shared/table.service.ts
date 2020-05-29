import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from './http.service';
import {Table} from './table.model';

@Injectable()
export class TableService {

  constructor(private httpService: HttpService) {
  }
  create(table: Table): Observable<Table> {
    return this.httpService.successful().post('/table', table);
  }
  readAll(): Observable<Table[]> {
    return this.httpService.successful().get('/table');
  }

  readOne(id: string): Observable<Table> {
    return this.httpService.get('/table' + '/' + id);
  }

  update(id: string, table: Table): Observable<Table> {
    return this.httpService.put('/table' + '/' + id, table);
  }
  delete(table: Table): Observable<void> {
    return this.httpService.delete('/table' + '/' + table._id);
  }
}

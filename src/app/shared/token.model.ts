import {Role} from './role.model';

export interface Token {
  token: string;
  id?: string;
  name?: string;
  roles?: Array<Role>;
}

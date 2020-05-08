import {Role} from './role.model';

export interface Token {
  token: string;
  username?: number;
  name?: string;
  roles?: Array<Role>;
}

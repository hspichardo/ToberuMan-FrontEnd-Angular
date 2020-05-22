export class MenuModel {
  _id?: string;
  name: string;
  description: string;
  menuType: string;
  price: {
    $numberDecimal: number
  };
  isAviable: boolean;
}

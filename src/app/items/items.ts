// items.ts
// export class Item {
//   _id: string;
//   name: string;
//   phoneNo: string;
//   description: string;
  
//   constructor(_id: string, name: string, phoneNo: string, description: string) {
//   this._id = _id;
//   this.name = name;
//   this.phoneNo = phoneNo;
//   this.description = description;
//   }
//   }

export interface Item {
  _id?: string;
  name: string;
  phoneNo: number;
  address: string;
  description?: string;
  }
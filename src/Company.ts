import faker from "faker";

export class Company {
  companyName: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.description = faker.commerce.productDescription()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string{
    return `Company ${this.companyName}'s best product: ${this.description}`;
  }
}

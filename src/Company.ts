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
    return `
    <div>
    <h2>Company ${this.companyName} </h2> 
    We have the best product in the world: ${this.description}
    </div>
    `;
  }
}

import faker from "faker";

export class User {
  name: string;
  phrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.phrase = faker.hacker.phrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `
    <div>
    <h2> User ${this.name} </h2>
    Our security phrase: ${this.phrase}
    </div>
    `;
  } 
}

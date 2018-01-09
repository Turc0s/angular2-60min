import { Component } from '@angular/core';

@Component({
    selector: 'user',
    template: `<h1>{{name}}</h1>
    <p><strong>Email: </strong>{{email}}</p>
    <p><strong>Address: </strong>{{address.street}} {{address.city}}, {{address.state}}</p>
    <button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
    <div *ngIf="showHobbies">
    <h3>Hobbies</h3>
        <ul>
            <li *ngFor="let hobby of hobbies; let i = index">
                {{hobby}}<button (click)="deleteHobby(i)">x</button>
            </li>
        </ul>
    </div>
    <hr />
    <h3>Edit User</h3>
    <form (submit)="addHobby(hobby.value)">
        <label>Add Hobby: </label> <br/>
        <input type="text" #hobby /> <br />
    </form>
    <form >
        <label>Name: </label><br/>
        <input type="text" name="name" [(ngModel)]="name" />
        <label>Email: </label><br/>
        <input type="text" name="email" [(ngModel)]="email" />
        <label>Street: </label><br/>
        <input type="text" name="address.street" [(ngModel)]="address.street" />
        <label>City: </label><br/>
        <input type="text" name="address.city" [(ngModel)]="address.city" />
        <label>State: </label><br/>
        <input type="text" name="address.state" [(ngModel)]="address.state" />
    </form>
  `,
})
export class UserComponent  { 

    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;

constructor() {
    this.name = "John Doe",
    this.email = "john@gmail.com",
    this.address = {
        street: "12 Main st",
        city: "Boston",
        state: "MA"
    }
    this.hobbies = ["Music", "Moview", "Sports"];
    this.showHobbies = false;
  }

  toggleHobbies() {
      if(this.showHobbies == true) {
          this.showHobbies = false;
      } else {
        this.showHobbies = true;
    }
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }
  
  deleteHobby(i) {
      this.hobbies.splice(i, 1);
  }
}

interface address {
    street: string;
    city: string;
    state: string;
}
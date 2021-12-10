import { Component } from '@angular/core';
import { NaamService } from './naam.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  name: any;
  liter_amt:any;
  dateConsumption:any;


  constructor(private service: NaamService) {}

  change_name(e: any) {
    this.name = e.target.value;
  }
  change_liters_amt(e: any) {
    this.liter_amt = e.target.value;
  }
  change_DateConsumption(e: any) {
    this.dateConsumption = e.target.value;
  }
  post() {
    this.service.post('consumption', { name:this.name,liter_amt:this.liter_amt,date:this.dateConsumption }).subscribe((data) => {
      console.log(data);
    });
  }


}

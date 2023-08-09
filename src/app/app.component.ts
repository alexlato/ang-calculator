import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ang-calculator';

  calValue: number = 0;
  funcT: any = 'NoFunction';

  onClickValue(val: string, type: any) {
    console.log(val, type);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemon';

  /*   test() {
      var foo = 123;
      if (true) {
        var foo = 456; // foo est accessible et est reaffecte
      }
      console.log(foo); // 456
  
      let foo2 = 123;
      if (true) {
        let foo2 = 456; // la variable est une nouvelle variable, car pas dans le meme bloc
      }
      console.log(foo2); // 123
  
    } */

  transferData;

  onValueChange($event) {

    console.log("App onValueChange event = ");
    console.log($event);
    this.transferData = $event;
  }

}

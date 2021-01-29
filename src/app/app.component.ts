import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app-componentinteraction';
  toReceiveFromChild1:any;
  toReceiveFromChild2:any;

  datatoChild1:object={
    cardImage:'https://media.credencys.com/wp-content/uploads/2019/05/Front-end-technologies.jpg',
    cardTitle:'Frontend Technologies',
    cardBody:'The part of a website that user interacts with directly is termed as front end. It is also referred to as the ‘client side’ of the application. It includes everything that users experience directly: text colors and styles, images, graphs and tables, buttons, colors, and navigation menu. HTML, CSS, and Javascript are the languages used for Front End development.',

};
  datatoChild2:object={
    cardImage:'https://ares.decipherzone.com/blog-manager/uploads/banner_ac2604e5-f04f-489d-a176-85841a9dccf8.jpg',
    cardTitle:'Backend-Technologies',
    cardBody:'Backend is server side of the website. It stores and arranges data, and also makes sure everything on the client-side of the website works fine. It is the part of the website that you cannot see and interact with. It is the portion of software that does not come in direct contact with the users. The parts and characteristics developed by backend designers are indirectly accessed by users through a front-end application.',

  };

}

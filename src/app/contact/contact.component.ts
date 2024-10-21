import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  sendEmail(){
    window.location.href = "mailto:bfmeza@unimayor.edu.co";
  }

  download() {
    window.location.href = "https://drive.google.com/uc?export=download&id=1H6if7IwVA1chwLhQFO-m1Sf_csotX5ro";
  }

  linkedin(){
    window.location.href = "https://www.linkedin.com/in/brayan-meza-pantoja-2234b9233/";
  }
}

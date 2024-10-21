import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  sendEmail(){
    window.location.href = "mailto:bfmeza@unimayor.edu.co";
  }

  download() {
    window.location.href = "https://drive.google.com/uc?export=download&id=1H6if7IwVA1chwLhQFO-m1Sf_csotX5ro";
  }
}

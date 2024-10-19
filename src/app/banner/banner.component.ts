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

  dowload(){
    //window.location.href = ""
  }
}

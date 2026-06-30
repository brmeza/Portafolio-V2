import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  sendEmail(){
    window.location.href = "mailto:bfmeza@unimayor.edu.co";
  }

    download() {
    const url = '/assets/docs/cv_Brayan_Meza.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cv_Brayan_Meza.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  linkedin(){
    window.location.href = "https://www.linkedin.com/in/brayan-meza-pantoja-2234b9233/";
  }
}

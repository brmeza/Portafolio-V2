import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
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
}

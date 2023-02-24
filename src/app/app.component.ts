import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'soundon';
  ngOnInit(){
   this.charge()
  }
  charge(){
    let btn_image1 = document.querySelectorAll('nav .div_image .btn_image1');
    btn_image1.forEach(img => img.addEventListener('click', () =>{
      let i = img.id;
      let bg = document.querySelector('.bg');
      // @ts-ignore
      let chg: string | null;

      if (i == "1"){
        chg = "assets/D00qO4pA.jpg"
      }else
      if(i == "2"){
        chg = "assets/JAAVOt48.jpg"
      }else {
        chg = "assets/N8LsPSeF.jpg"
      }
      // @ts-ignore
      bg.setAttribute("src", chg)
    }))
    if (document.body.offsetWidth < 1024){
      let br = document.querySelector('.texte br')
      // @ts-ignore
      br.style.display='none';
    }
  }
}


import { Component, OnInit,ViewChild } from '@angular/core';
import {ColorEvent} from 'ngx-color';
@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  

  title = "CodeSandbox";
 topText: string="people";
   bottomText: string="";
  fileEvent:any;
  textColor:string='#000000';
  backgroundColor='#F9F9FB';
  @ViewChild('memeCanvas',{static:false}) myCanvas;


  



      preview(e: any) {
        this.fileEvent = e;
        let canvas = this.myCanvas.nativeElement;
        let ctx = canvas.getContext("2d");
    
        let render = new FileReader();
        render.readAsDataURL(e.target.files[0]);
        render.onload = function (event) {
          console.log("this is onload function");
          const img = new Image();
          console.log(img);
          img.src = event.target.result as string;
          console.log(img);
          img.onload = function () {
            ctx.drawImage(img, 50, 150, 600, 500);
          };
        };
        console.log("i am at preview end function");
      }

      downloadImg()
      {
        let canvas = this.myCanvas.nativeElement;
        let img = canvas.toDataURL('image/png');
        let link = document.createElement('a');
        link.download = 'memeimage.png';
        link.href = img;
        link.click();





      }

    drawText() {
      let canvas=this.myCanvas.nativeElement;
      let ctx=canvas.getContext('2d');
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle=this.backgroundColor;
      ctx.fillRect(0,0,canvas.width,canvas.height);
      this.preview(this.fileEvent);
      ctx.fillStyle=this.textColor;
      ctx.font='50px Comic Sans MS'
      ctx.fillText(this.topText,canvas.width/2,100);
      ctx.fillText(this.bottomText,canvas.width/2,800);
  
      console.log("this is from draw text");
    }
    

    canvasTextColor($event: ColorEvent) {
      console.log("this is text color");
      this.textColor = $event.color.hex;
      this.drawText();
    }
  
    canvasBackgroundColor($event: ColorEvent) {
      console.log("this is background color");
      this.backgroundColor = $event.color.hex;
      this.drawText();
    }
    constructor() { }
  
    ngOnInit(): void {
    }
  


      
    }
  

 
  

 

  




  
  

  

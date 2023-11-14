import { AfterViewInit, Component, ElementRef, OnInit,ViewChild,ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit{
  @ViewChild('screenshot1', { static: false }) screenshot1?: ElementRef;
  @ViewChild('screenshot2', { static: false }) screenshot2?: ElementRef;
  @ViewChild('screenshot3', { static: false }) screenshot3?: ElementRef;

  private images: ElementRef[] = [];
  private currentIndex = 0;

  constructor() {}

  ngOnInit() {
    // ViewChild ile elde edilen resim referanslarını diziye ekleyin
    if (this.screenshot1 && this.screenshot2 && this.screenshot3) {
      this.images.push(this.screenshot1, this.screenshot2, this.screenshot3);
    }

    // Belirli aralıklarla resimleri değiştirmek için bir zamanlayıcı kullanın
    setInterval(() => console.log("Selam"), 1000);
  }

  private showNextImage() {
    // Mevcut resmi gizle
    this.hideCurrentImage();

    // Bir sonraki resmi göster
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.showImage(this.currentIndex);
  }

  private hideCurrentImage() {
    if (this.images.length > 0 && this.images[this.currentIndex]) {
      this.images[this.currentIndex].nativeElement.style.display = 'none';
    }
  }

  private showImage(index: number) {
    if (this.images.length > 0 && this.images[index]) {
      this.images[index].nativeElement.style.display = 'block';
    }
  }
 
}

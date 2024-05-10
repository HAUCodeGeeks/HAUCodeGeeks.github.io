import { Component, Input, OnInit } from '@angular/core';

interface CarouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})


export class GalleryComponent implements OnInit {
  images: CarouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = true;
  @Input() slideInterval = 3000;

  selectedIndex = 0;
  titleIndex = 0;
  descIndex = 0;
  intervalId: any;

  t1: string = `hello`;
  d1: string = `Students under the School of Computing department are eligible to join without any specific requirements.`;

  t2: string = `hi`;
  d2: string = `minion`;

  t3: string = `boo`;
  d3: string = `wahhh`;

  t4: string = `pengu`;
  d4: string = `noot noot`;

  t5: string = `hello`;
  d5: string = `Students under the School of Computing department are eligible to join without any specific requirements.`;

  t6: string = `hi`;
  d6: string = `minion`;

  t7: string = `boo`;
  d7: string = `wahhh`;

  t8: string = `pengu`;
  d8: string = `noot noot`;
  
  title: string[] = [
    this.t1,
    this.t2,
    this.t3,
    this.t4,
    this.t5,
    this.t6,
    this.t7,
    this.t8
  ];

  description: string[] = [
    this.d1,
    this.d2,
    this.d3,
    this.d4,
    this.d5,
    this.d6,
    this.d7,
    this.d8
  ];

  ngOnInit(): void {
    this.images = [
      {
        imageSrc:
          '../assets/web-design-comp.jpg',
        imageAlt: 'web-design-comp',
      },
      {
        imageSrc:
          '../assets/ADWF.jpg',
        imageAlt: 'ADWF',
      },
      {
        imageSrc:
          '../assets/GA.png',
        imageAlt: 'ga-event',
      },
      {
        imageSrc:
          '../assets/immfi-present.jpg',
        imageAlt: 'IMMFI',
      },
      {
        imageSrc:
          '../assets/org-festival.jpg',
        imageAlt: 'org-festival',
      },
      {
        imageSrc:
          '../assets/outreach.jpg',
        imageAlt: 'outreach',
      },
      {
        imageSrc:
          '../assets/remote-webinar.jpg',
        imageAlt: 'remote-webinar',
      },
      {
        imageSrc:
          '../assets/SEO-webinar.png',
        imageAlt: 'SEO-webinar',
      },
    ];

    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  selectImage(index: number) {
    this.selectedIndex = index;
    this.titleIndex = index;
    this.descIndex = index;
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
      this.titleIndex = this.title.length - 1;
      this.descIndex = this.description.length - 1;
    } else {
      this.selectedIndex--;
      this.titleIndex--;
      this.descIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
      this.titleIndex = 0;
      this.descIndex = 0;
    } else {
      this.selectedIndex++;
      this.titleIndex++;
      this.descIndex++;
    }
  }

  autoSlideImages(): void {
    this.intervalId = setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

}
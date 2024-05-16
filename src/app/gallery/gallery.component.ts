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
  @Input() slideInterval = 5000;

  selectedIndex = 0;
  titleIndex = 0;
  descIndex = 0;
  intervalId: any;

  t1: string = `Web Design Competition`;
  d1: string = `Students who participated in our Web Competition have displayed their utmost skills and talent in Web design. We\’re truly grateful for all the participants of this special event. As we recognize various talented students who shared their passion with our course Web Development.`;

  t2: string = `Days with The Foxes`;
  d2: string = `On March 12 and 13, Holy Angel University\’s School of Computing hosted the event “Days With The Foxes” which was guided by the SOC\’s Student Council and Organizations. This very event welcomed students from various schools as they were introduced to and walked through the life of a fox under different courses and majors of the School of Computing.`;

  t3: string = `General Assembly`;
  d3: string = `Code Geeks took part in this annual event to welcome the School of Computing students for the Academic Year 2023-2024, providing an opportunity to connect with the administration, faculty, staff, the college student council, and various organizations. The event concluded with joy and success as it marks the start of the Academic year for the Foxes to Make IT happen!`;

  t4: string = `Visit to IMMFI`;
  d4: string = `On the visit to Inocencio Magtoto Memorial Foundation, Inc. (IMMFI) last April 23, We delivered practical training on website management, covering fundamental WordPress concepts and important upkeep duties to assist the team in improving their online presence. It was a rewarding experience. We are incredibly appreciative of the Foundation's staff for their kind hospitality and engaged involvement, which made our stay genuinely remarkable.`;

  t5: string = `Org Festival 2023`;
  d5: string = `A new chapter begins! ✨ The very first event that Code Geeks participated in was the Org Festival held on July 14, 2023, from students across the Holy Angel University campus. The org festival was a fantastic experience for everyone which was made especially for the freshmen students who were new to the grounds of Holy Angel University.`;

  t6: string = `Outreach Initiative`;
  d6: string = `As we look back on the incredible day of March 15, 2024, when SOC-CSC, Code Geeks, and other SOC groups came together for an outreach program at Sapang Libutad's Rafael Lazatin Integrated School. Every organization covers a separate grade level while enlightening students on a range of technology-related subjects.`;

  t7: string = `New Normal Workplace`;
  d7: string = `We extend our heartfelt gratitude to the students who attended our first webinar for this A.Y., with the title "Remote: A New Normal Workplace," on November 6, 2023. Special thanks to Mr. John Rey Casingal for sharing his invaluable insights all about working remotely as a new setup considered as the new normal in the workplace.`;

  t8: string = `SEO Rank & Rise Webinar`;
  d8: string = `With the title "SEO Rank & Rise: The Beginner's Blueprint to Web Winning," a webinar held on February 17, 2024, hosted by the Code Geeks, was a significant experience for web development students. Special thanks to Mr. Adrian T. Dioneso for his invaluable insights as he introduced us to the importance of Search Engine Optimization as we associate it with our very course, Web Development.`;
  
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
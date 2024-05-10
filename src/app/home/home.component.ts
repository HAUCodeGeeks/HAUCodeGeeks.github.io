import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
  q1: string = `What is the purpose of the organization?<br><br>`;
  a1: string = `The primary objective of the organization is to facilitate the development of coding skills among individuals. This is achieved by organizing coding competitions, conducting workshops, and providing a plethora of resources. Our organization aims to create an environment of growth and learning for individuals who are passionate about coding and aspire to become proficient in this field.`;

  q2: string = `How can students get involved in the organization?<br><br>`;
  a2: string = `One way for students to engage with the organization is by attending regular meetings, taking an active part in various events and activities, joining committees, or seeking leadership roles. These opportunities not only help students develop their professional networks but also provide them with a platform to hone their leadership, communication, and team-building skills.`;

  q3: string = `What are the benefits of joining the organization?<br><br>`;
  a3: string = `Attendees of our webinars and workshops will be eligible for a range of benefits, including the acquisition of certificates, discounts on merchandise purchases, and waived registration fees. These benefits are exclusive to members of our organization and are designed to provide added value to your participation in our events.`;

  q4: string = `Are there any membership requirements?<br><br>`;
  a4: string = `Students under the School of Computing department are eligible to join without any specific requirements.`;

  q5: string = `What activities or events does the organization host?<br><br>`;
  a5: string = `The organization has the potential to conduct various events such as workshops, webinars, coding competitions, and review sessions to enhance the knowledge and expertise of its members.`;

  q6: string = `Are there leadership opportunities within the organization?<br><br>`;
  a6: string = `There are several leadership positions available within our organization, including the roles of president, vice president, and committee heads assigned to manage specific tasks or events.`;

  q7: string = `How can students stay updated on organization news and events?<br><br>`;
  a7: string = `To remain up-to-date with the organization's latest happenings, students can follow its social media page, check their email for updates, or attend meetings.`;

  q8: string = `Is there a faculty advisor for the organization?<br><br>`;
  a8: string = `Student organizations are overseen by a faculty advisor, who provides guidance and support to ensure the organization operates smoothly while aligning with the school's policies and goals.`;

  questions: string[] = [
    this.q1,
    this.q2,
    this.q3,
    this.q4,
    this.q5,
    this.q6,
    this.q7,
    this.q8
  ];

  answers: string[] = [
    this.a1,
    this.a2,
    this.a3,
    this.a4,
    this.a5,
    this.a6,
    this.a7,
    this.a8
  ];

  currentQuestionIndex = 0;
  currentAnswerIndex = 0;
  hidePageSize = true;

  constructor() {}

  onPageChange(event: any) {
    this.currentQuestionIndex = event.pageIndex;
    this.currentAnswerIndex = event.pageIndex;
  }

  onNextQuestion() {
    this.currentQuestionIndex = (this.currentQuestionIndex + 1) % this.questions.length;
    this.currentAnswerIndex = (this.currentAnswerIndex + 1) % this.answers.length;
    this.paginator.nextPage();
  }

  onPreviousQuestion() {
    this.currentQuestionIndex = (this.currentQuestionIndex - 1 + this.questions.length) % this.questions.length;
    this.currentQuestionIndex = (this.currentAnswerIndex - 1 + this.answers.length) % this.answers.length;
    this.paginator.previousPage();
  }
}
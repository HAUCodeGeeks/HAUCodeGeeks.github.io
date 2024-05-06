import { Component } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  questions: string[] = [
    'Question 1',
    'Question 2',
    'Question 3',
    'Question 4',
    'Question 5',
    'Question 6',
    'Question 7',
    'Question 8'
  ];
  currentQuestionIndex = 0;

  hidePageSize = true;
  pageSizeOptions = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private paginatorIntl: MatPaginatorIntl) {
    this.paginatorIntl.itemsPerPageLabel = 'Items per page:';
    this.paginatorIntl.nextPageLabel = 'Next page';
    this.paginatorIntl.previousPageLabel = 'Previous page';
  }

  onNextQuestion() {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.questions.length) {
      this.currentQuestionIndex = 0; // Wrap around to the first question
    }
  }

  onPreviousQuestion() {
    this.currentQuestionIndex--;
    if (this.currentQuestionIndex < 0) {
      this.currentQuestionIndex = this.questions.length - 1; // Wrap around to the last question
    }
  }

  onPageChange(event: any) {
    this.currentQuestionIndex = event.pageIndex * 1; // Multiply by page size
    console.log("Current Question Index:", this.currentQuestionIndex);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service';

const MAX_RATING_WIDTH = 100;
const MAX_RATING_VALUE = 5;

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
})
export class ReviewsComponent implements OnInit {
  @Input() offerId!: string;
  isLoading = false;

  constructor(
    private reviewsService: ReviewsService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.reviewsService.loadReviews(this.offerId).subscribe(() => this.isLoading = false);
  }

  get reviews() {
    return this.reviewsService.getReviews(this.offerId);
  }

  getRatingString(rating: number) {
    return `${((Math.round(rating) * MAX_RATING_WIDTH) / MAX_RATING_VALUE)}%`
  }
}

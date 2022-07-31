import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
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
    private reviewsService: ReviewsService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.reviewsService.loadReviews(this.offerId).subscribe(() => this.isLoading = false);
  }

  get reviews() {
    return this.reviewsService.getReviews(this.offerId);
  }

  get authorized() {
    return this.userService.getAuthorized();
  }

  getRatingString(rating: number) {
    return `${((Math.round(rating) * MAX_RATING_WIDTH) / MAX_RATING_VALUE)}%`
  }
}

import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import IReviewForm from 'src/app/models/IReviewForm';
import { ReviewsService } from '../../services/reviews.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews-form',
  templateUrl: './reviews-form.component.html',
  imports: [CommonModule, ReactiveFormsModule],
})
export class ReviewsFormComponent {
  @Input() offerId!: string;
  readonly starValues = [ 5, 4, 3, 2, 1 ];
  readonly ratingTitles = [ 'perfect', 'good', 'not bad', 'badly', 'terribly'];
  isSubmitting = false;
  reviewForm =  new FormGroup({
    rating: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(5)
    ]),
    comment: new FormControl('', [
      Validators.required,
      Validators.minLength(50),
      Validators.maxLength(300)
    ])
  });

  constructor(
    private reviewsService: ReviewsService
  ) {}

  handleSubmit() {
    if (this.reviewForm.valid) {
      const reviewForm: IReviewForm = {
        comment: this.reviewForm.value.comment || '',
        rating: this.reviewForm.value.rating || 1
      }
      this.isSubmitting = true;
      this.reviewsService.postReview(this.offerId, reviewForm)
        .subscribe(() => {
          this.isSubmitting = false;
          this.reviewForm.reset();
        });
    }
  }
}

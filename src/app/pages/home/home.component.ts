import { Component } from '@angular/core';
import { HomeService } from '../../services/home/home.service';
import { Reviewer } from '../../models/home.model';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = '🎯 Web Random Reviewer';
  reviewers: Reviewer[] = [];
  mainReviewer = "Boom";
  selectedReviewer: string | null = null;
  mergeRequestUrl: string = '';
  copied: boolean = false; // To show the "Copied" message
  urlPattern: string = '^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)\\.com(\\/.*)?$';

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  async getEmployees() {
    try {
      this.reviewers = await this.homeService.getReviewers() as Reviewer[];  // Fetch employees
      console.log(this.reviewers);  // Log the data for debugging purposes
    } catch (error) {
      console.error('Error fetching employees:', error);  // Handle errors
    }
  }

  pickRandomReviewer() {
    const index = Math.floor(Math.random() * this.reviewers.length);
    this.selectedReviewer = this.reviewers[index].name;
    this.copied = false; // Reset copied state when a new reviewer is selected
  }

  copyMessage(urlInput: any) {
    // Reset validation errors when the message is copied
    urlInput.control.markAsUntouched();  // Reset touched status
    urlInput.control.setErrors(null);    // Clear validation errors

    const message = `🙏 Please review and approve my merge request, @${this.mainReviewer} @${this.selectedReviewer} 👉 ${this.mergeRequestUrl}`;

    // Use the Clipboard API to copy the message
    navigator.clipboard.writeText(message).then(() => {
      this.copied = true; // Show the "Copied" state after copying
      this.resetForm(); // Reset the form after copying
    }).catch((err) => {
      console.error('Error copying text: ', err);
    });
  }

  resetForm() {
    this.selectedReviewer = null;
    this.mergeRequestUrl = '';
  }
}
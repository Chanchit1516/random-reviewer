import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = '🎯 Web Random Reviewer';
  reviewers = ['Alice', 'Bob', 'Charlie', 'Diana', 'Ethan'];
  mainReviewer = "Boom";
  selectedReviewer: string | null = null;
  mergeRequestUrl: string = '';
  copied: boolean = false; // To show the "Copied" message
  urlPattern: string = '^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)\\.com$';

  pickRandomReviewer() {
    const index = Math.floor(Math.random() * this.reviewers.length);
    this.selectedReviewer = this.reviewers[index];
    this.copied = false; // Reset copied state when a new reviewer is selected
  }

  copyMessage(urlInput: any) {
    // Reset validation errors when the message is copied
    urlInput.control.markAsUntouched();  // Reset touched status
    urlInput.control.setErrors(null);    // Clear validation errors

    const message = `Please review and approve my merge request, @${this.selectedReviewer} 👉 ${this.mergeRequestUrl}`;

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

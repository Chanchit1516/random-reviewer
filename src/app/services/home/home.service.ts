import { inject, Injectable } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';  // Correct Firebase Firestore imports from @angular/fire
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private firestore: Firestore = inject(Firestore); // Inject Firestore properly
  constructor() { }

  async getReviewers() {
    const ReviewerRef = collection(this.firestore, 'Reviewer'); // Get reference to the 'employees' collection
    const snapshot = await getDocs(ReviewerRef); // Fetch documents from the collection
    const reviewerList = snapshot.docs.map(doc => doc.data()); // Map through docs and return their data
    return reviewerList;
  }
}

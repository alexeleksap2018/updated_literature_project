
import {Component, inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ApiService} from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchForm: FormGroup;
  selectedOutputFormat: string;
  id: string | number;

  outputFormats = ['IEEE', 'ACM', 'APA'];
  private readonly apiService = inject(ApiService);


  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      authorQuery: ['', [Validators.pattern('^[a-zA-Z ,.]*$')]],
      yearQuery: ['', [Validators.pattern('^[0-9]*$')]],
      titleQuery: ['', [Validators.pattern('^[a-zA-Z0-9 ]*$')]],
      sectionQuery: ['', [Validators.pattern('^[a-zA-Z0-9 ]*$')]]
    });
  }

  search() {
    if (this.searchForm.valid) {
      const formData = this.searchForm.value;
      console.log('Search initiated', formData);
    }
  }

  changeOutputFormat(event: any) {
    this.selectedOutputFormat = event.target.value;
  }

  deleteRecord(): void {
    this.apiService.deleteRecordById(this.id).subscribe({
      next: () =>  {
        this.apiService.showSuccess("Record deleted successfully")
        console.log('Record deleted successfully.');
        // You can update your UI as needed.
      },
      complete: () => {},
      error: (error) => {
        this.apiService.showError("Record not deleted")
        console.error('Error deleting record:', error);
        // Handle error or show an error message.
      }
    });
  }
}


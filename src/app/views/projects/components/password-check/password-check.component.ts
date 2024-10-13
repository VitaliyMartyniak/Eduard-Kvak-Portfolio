import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Location } from "@angular/common";

@Component({
  selector: 'app-password-check',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    NgIf
  ],
  templateUrl: './password-check.component.html',
  styleUrl: './password-check.component.scss'
})
export class PasswordCheckComponent implements OnInit {
  @Output() passwordChecked = new EventEmitter();
  constructor(private location: Location) {
  }

  inputValue = '';
  error = false;

  ngOnInit() {
    if (localStorage.getItem('password') === 'Pixel') {
      this.passwordChecked.emit();
    }
  }

  closeModal() {
    this.location.back();
  }

  typeEvent() {
    this.error = false;
  }

  submitPassword() {
    if (this.inputValue !== 'Pixel') {
      this.error = true;
    } else {
      localStorage.setItem('password', this.inputValue);
      this.passwordChecked.emit();
    }
  }
}

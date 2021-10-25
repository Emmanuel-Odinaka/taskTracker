import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
})
export class FeatureComponent implements OnInit {
  titleDesc: string[];
  success: string;

  featureForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) {}
  ngOnInit() {
    this.featureForm = this.formBuilder.group({
      taskTitle: ['', [Validators.required, Validators.maxLength(15)]],
      taskDescription: ['', [Validators.required, Validators.maxLength(15)]],
    });
  }

  get first() {
    return this.featureForm.controls;
  }

  onSubmitted() {
    if (this.featureForm.invalid) {
      return;
    }
    this.titleDesc = [
      this.featureForm.value.taskTitle,
      this.featureForm.value.taskDescription,
    ];

    this.messageService.emit<any>(this.titleDesc);
    this.success = 'Task added successfully';
    this.featureForm.reset();
  }

  
}

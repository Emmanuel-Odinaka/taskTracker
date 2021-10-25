import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  displayData = [];
  progressData = [];
  doneData = [];
  storeData;
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.on<any>().subscribe((data) => {
      this.storeData = data;
      this.displayData.push(this.storeData);
    });
  }

  drop(event) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      moveItemInArray(
        this.displayData,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

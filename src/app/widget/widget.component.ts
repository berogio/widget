import { Component, OnInit } from '@angular/core';
import { BonusDataService } from '../services/bonus-data.service';
import { Bunus } from '../interfaces/bunus';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent implements OnInit {
  isActive: boolean = false;
  bonusData: Bunus[] = [];
  showCloseIcon: boolean = false;
  constructor(private bonusDataService: BonusDataService) {}

  ngOnInit(): void {
    this.getBonusData();
  }

  getBonusData() {
    this.bonusDataService.getBonus().subscribe(
      (data: Bunus[]) => {
        this.bonusData = data;
        if (this.bonusData[0].summe > 0) {
          this.isActive = true;
        }
      },
      (error) => {
        console.error('Error fetching bonus data:', error);
      }
    );
  }
  toggleSpan() {
    this.showCloseIcon = !this.showCloseIcon;
  }
}

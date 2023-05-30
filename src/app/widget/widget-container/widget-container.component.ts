import { Component, OnInit } from '@angular/core';
import { BonusDataService } from '../../services/bonus-data.service';
import { Bunus } from '../../interfaces/bunus.interface';

@Component({
  selector: 'app-widget',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.scss'],
})
export class WidgetComponent implements OnInit {
  isActive = false;
  bonusData: Bunus[] = [];
  bonusSumme = 0;
  showCloseIcon = false;
  showTotalInfos = false;

  constructor(private bonusDataService: BonusDataService) { }

  ngOnInit(): void {
    this.getBonusData();
  }

  getBonusData() {
    this.bonusDataService.getBonus().subscribe(
      {
        next: (data: Bunus[]) => {
          this.bonusData = data;
          this.bonusSumme = data[0].summe;
          if (this.bonusSumme > 0) {
            this.isActive = true;
          }
        },
        error: (error) => {
          console.error('Error fetching bonus data:', error);
        }
      }
    );
  }
  toggleShowInfos() {
    if (this.bonusSumme > 0) {
      this.showCloseIcon = !this.showCloseIcon;
      this.showTotalInfos = !this.showTotalInfos;
    }
  }
}

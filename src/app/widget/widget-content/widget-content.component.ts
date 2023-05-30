import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Bunus } from 'src/app/interfaces/bunus.interface';
import { BonusDataService } from 'src/app/services/bonus-data.service';

@Component({
  selector: 'app-widget-content',
  templateUrl: './widget-content.component.html',
  styleUrls: ['./widget-content.component.scss'],
})
export class WidgetContentComponent implements AfterViewInit {
  authBonus: number = 0;
  depositBonus: number = 0;
  bigWin: number = 0;
  constructor(private bonusDataService: BonusDataService) {}

  ngAfterViewInit(): void {
    this.getBonusData();
  }

  getBonusData() {
    this.bonusDataService.getBonus().subscribe(
      (data: Bunus[]) => {
        this.authBonus = data[0].AuthBonus;
        this.depositBonus = data[0].DepositBonus;
        this.bigWin = data[0].BigWin;
      },
      (error) => {
        console.error('Error fetching bonus data:', error);
      }
    );
  }
}

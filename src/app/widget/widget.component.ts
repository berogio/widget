import { Component, OnInit } from '@angular/core';
import { BonusDataService } from '../services/bonus-data.service';
import { Bunus } from '../interfaces/bunus';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent implements OnInit {
  isActive: boolean = true;
  bonusData: Bunus[] = [];
  constructor(private bonusDataService: BonusDataService) {}

  ngOnInit(): void {
    this.getBonusData();
  }

  getBonusData() {
    this.bonusDataService.getBonus().subscribe(
      (data: Bunus[]) => {
        this.bonusData = data;
        console.log(this.bonusData);
      },
      (error) => {
        console.error('Error fetching bonus data:', error);
      }
    );
  }
}

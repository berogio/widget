import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Bunus } from 'src/app/interfaces/bunus.interface';
import { BonusDataService } from 'src/app/services/bonus-data.service';

@Component({
  selector: 'app-widget-content',
  templateUrl: './widget-content.component.html',
  styleUrls: ['./widget-content.component.scss'],
})
export class WidgetContentComponent implements AfterViewInit {
  // ტიპებს გაწერა აღარ უნდა ექსფლისითად როცა მნიშნებლობას ანიჭებ
  authBonus = 0;
  depositBonus = 0;
  bigWin = 0;
  constructor(private bonusDataService: BonusDataService) { }

  ngAfterViewInit(): void {
    // აქ რატო ეძახი NgOnInit დაუძახე. ეს life cycle hook დაიგვინებს.
    this.getBonusData();
  }

  getBonusData() {
    // ეს სინტაქსი დეფრიქეითედ არის, ხაზი მაგტიომ აქვს გადასმული ესე დაწერე აწი
    // {
    //   next:(data:Bunus[])=>{},
    //   error:(error)=>{}
    // }
    this.bonusDataService.getBonus().subscribe(
      {
        next: (data: Bunus[]) => {
          this.authBonus = data[0].AuthBonus;
          this.depositBonus = data[0].DepositBonus;
          this.bigWin = data[0].BigWin;
        },
        error: (error) => {
          console.error('Error fetching bonus data:', error);
        }
      }
    );
  }
}

import { Component } from '@angular/core';
import { CbPipe } from '../../../../shared/pipes/cb-pipe';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CbPipe, CurrencyPipe],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
})
export class DashboardPage {}

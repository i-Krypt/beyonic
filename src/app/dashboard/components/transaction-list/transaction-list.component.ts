import { Component, OnInit } from '@angular/core';
import { Dayjs } from 'dayjs';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
})
export class TransactionListComponent implements OnInit {
  transactions = [
    {
      name: 'john dembe',
      amount: '56890',
      currency: 'ugx',
      status: 'completed',
      date: '',
      type: 'send_money',
    },
    {
      name: 'mary kaikara',
      amount: '56890',
      currency: 'ugx',
      status: 'completed',
      date: '',
      type: 'collect',
    },
    {
      name: 'phillip kinyangi',
      amount: '56890',
      currency: 'ugx',
      status: 'completed',
      date: '',
      type: 'withdraw',
    },
    {
      name: 'nelson kiza',
      amount: '56890',
      currency: 'ugx',
      status: 'failed',
      date: '',
      type: 'send_money',
    },
    {
      name: 'alice mukassa',
      amount: '56890',
      currency: 'ugx',
      status: 'pending',
      date: '',
      type: 'send_money',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

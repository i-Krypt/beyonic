import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Dayjs } from 'dayjs';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
})
export class TransactionListComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  transactions = [
    {
      name: 'john dembe',
      amount: '56890',
      currency: 'ugx',
      status: 'completed',
      date: '20 min',
      type: 'send money',
      icon: this.sanitizer
        .bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>`),
    },
    {
      name: 'mary kaikara',
      amount: '56890',
      currency: 'ugx',
      status: 'completed',
      date: '45 min',
      type: 'collect',
      icon: this.sanitizer
        .bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18" />
    </svg>`),
    },
    {
      name: 'phillip kinyangi',
      amount: '56890',
      currency: 'ugx',
      status: 'completed',
      date: '1 hr',
      type: 'withdraw',
      icon: this.sanitizer.bypassSecurityTrustHtml(`            <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>`),
    },
    {
      name: 'nelson kiza',
      amount: '56890',
      currency: 'ugx',
      status: 'failed',
      date: '3 hr',
      type: 'send money',
      icon: this.sanitizer
        .bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>`),
    },
    {
      name: 'alice mukassa',
      amount: '56890',
      currency: 'ugx',
      status: 'pending',
      date: '1 d',
      type: 'send money',
      icon: this.sanitizer
        .bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>`),
    },
  ];

  ngOnInit(): void {}

  renderStatus(status: string | undefined): string {
    if (status?.toLowerCase() == 'completed') {
      return `<span class="text-green-700">${status}</span>`;
    }
    if (status?.toLowerCase() == 'pending') {
      return `<span class="text-yellow-600">${status}</span>`;
    }

    return `<span class="text-red-700">${status}</span>`;
  }
}

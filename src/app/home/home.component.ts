import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public router: Router) {}


  isAtHome(): boolean {
    return this.router.url === '/home';
  }

  menuItems = [
    { label: 'Inicio', icon: '🏠', route: '/home' },       // 👈 Esta es la opción Home
    { label: 'Características', icon: '✨', route: '/features' },
    { label: 'Precios', icon: '💰', route: '/pricing' }
  ];

}

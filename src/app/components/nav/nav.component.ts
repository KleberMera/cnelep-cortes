import { Component } from '@angular/core';

interface NavItem {
  name: string;
  url: string;
}

const navItems: NavItem[] = [

  { name: 'Services', url: '#' },
  { name: 'Pricing', url: '#' },
  { name: 'Contact', url: '#' },
];

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  navItems = navItems;

}

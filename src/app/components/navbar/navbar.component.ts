import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let hamMenuIcon = document.getElementById('ham-menu') as HTMLElement;
    let navBar = document.getElementById('nav-bar') as HTMLElement;
    let list = document.querySelectorAll('.nav-link');
    let subcontainer = document.querySelector('.sub-menu-container');
    let subMenu = document.querySelectorAll('.sub-item');

    hamMenuIcon.addEventListener('click', () => {
      navBar.classList.toggle('active');
    });

    list.forEach((linkItem, index) => {
      linkItem.addEventListener('click', () => {
        document.querySelector('.ative')?.classList.remove('ative');
        linkItem.classList.add('ative');
      });
    });

    subMenu.forEach((linkItem, index) => {
      linkItem.addEventListener('click', () => {
        navBar.classList.toggle('active');
      });
    });
  }
}

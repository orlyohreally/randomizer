import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatTabsModule } from '@angular/material';
import { Router } from '@angular/router';
import { MenuNavService } from '../menu-nav.service';
@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss']
})
export class MenuNavComponent implements OnInit {
  navLinks: any[];
  
  constructor(private router: Router, private menuNavService: MenuNavService) { 
    
  }
   
  ngOnInit() {
    this.navLinks = this.menuNavService.getNavMenu();
    console.log("this.navLinks", this.navLinks);
  
  }

  
}

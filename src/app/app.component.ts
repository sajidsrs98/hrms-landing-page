import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderSectionComponent } from "./header-section/header-section.component";
import { WhyHrmsSectionComponent } from "./why-hrms-section/why-hrms-section.component";
import { AllInOneHrSectionComponent } from "./all-in-one-hr-section/all-in-one-hr-section.component";
import { FooterSectionComponent } from "./footer-section/footer-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderSectionComponent, WhyHrmsSectionComponent, AllInOneHrSectionComponent, FooterSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HRMS';
}

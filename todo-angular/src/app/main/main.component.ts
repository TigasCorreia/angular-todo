import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContainerComponent } from '../container/container.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ContainerComponent], 
  template: '<app-container></app-container>',
  styleUrl: './main.component.css',
})

export class MainComponent {

}
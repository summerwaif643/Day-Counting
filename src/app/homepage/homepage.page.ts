import { Component, OnInit } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})

export class HomepagePage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;
  date: string;

  cancel() {
    this.name = "";
    this.date = ""; 
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    // do what you need 
    console.log(this.name, this.date)

    // Dismiss procedure
    this.name = "";
    this.date = ""; 
    this.modal.dismiss(null, 'confirm');
  }

  onWillDismiss(event: Event) {
    
  }

  constructor() { }

  ngOnInit() {
  }

}

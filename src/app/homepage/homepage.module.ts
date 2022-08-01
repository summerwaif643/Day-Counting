import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomepagePageRoutingModule } from './homepage-routing.module';

import { HomepagePage } from './homepage.page';
import { EventComponent } from '../event/event.component';
import { EventItemComponent } from '../event-item/event-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepagePageRoutingModule,
  ],
  declarations: [HomepagePage,
                    EventComponent,
                    EventItemComponent]
})
export class HomepagePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from '../common/components/header/header.component';
import { PostitComponent } from '../postit/postit.component';
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatFormFieldModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        LayoutModule,
        NgOptimizedImage,
        MatInputModule,
        MatDividerModule


    ],
    declarations: [DashboardComponent, HeaderComponent, PostitComponent]
})
export class DashboardModule { }
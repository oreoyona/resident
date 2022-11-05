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


    ],
    declarations: [DashboardComponent, HeaderComponent, PostitComponent]
})
export class DashboardModule { }
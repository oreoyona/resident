import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { LayoutModule } from '@angular/cdk/layout';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
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
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { ProductsComponent } from 'src/app/modules/products/products.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatFormFieldModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatDialogModule, MatInputModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { AlertModule, ButtonsModule } from 'ngx-bootstrap';
import { DailogBodyComponent } from 'src/app/modules/dailog-body/dailog-body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { UpdateDialogComponent } from 'src/app/modules/update-dialog/update-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UsersComponent } from 'src/app/modules/users/users.component';
import { PendingUsersComponent } from 'src/app/modules/pending-users/pending-users.component';
import { RegisteredUsersComponent } from 'src/app/modules/registered-users/registered-users.component';
import { PromotionsComponent } from 'src/app/modules/promotions/promotions.component';
import { PromotionsDialogComponent } from 'src/app/modules/promotions-dialog/promotions-dialog.component';
import { PromoService } from 'src/app/services/promo.service';
import { UploadService } from 'src/app/services/upload.service';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { LoginService } from 'src/app/services/login.service';
import { FeedbackComponent } from 'src/app/modules/feedback/feedback.component';
import { PreorderComponent } from 'src/app/modules/preorder/preorder.component';
import { NavBarComponent } from 'src/app/modules/preorder/subComponents/nav-bar/nav-bar.component';
import { PendingPreordersComponent } from 'src/app/modules/preorder/subComponents/pending-preorders/pending-preorders.component';
import { DialogComponent } from 'src/app/modules/preorder/subComponents/dialog/dialog.component';
import { AcceptedPreordersComponent } from 'src/app/modules/preorder/subComponents/accepted-preorders/accepted-preorders.component';
import { ReportsComponent } from 'src/app/modules/reports/reports.component';
let DefaultModule = class DefaultModule {
};
DefaultModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            DefaultComponent,
            DashboardComponent,
            PostsComponent,
            ProductsComponent,
            DailogBodyComponent,
            UpdateDialogComponent,
            UsersComponent,
            PendingUsersComponent,
            RegisteredUsersComponent,
            PromotionsComponent,
            PromotionsDialogComponent,
            LoginComponent,
            FeedbackComponent,
            PreorderComponent,
            NavBarComponent,
            PendingPreordersComponent,
            AcceptedPreordersComponent,
            DialogComponent,
            ReportsComponent
        ],
        entryComponents: [
            DailogBodyComponent,
            UpdateDialogComponent,
            PromotionsDialogComponent,
            DialogComponent
        ],
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatDialogModule,
            RouterModule,
            SharedModule,
            MatSidenavModule,
            MatDividerModule,
            FlexLayoutModule,
            MatCardModule,
            MatPaginatorModule,
            MatTableModule,
            MatFormFieldModule,
            MatInputModule,
            MatTableModule,
            MatPaginatorModule,
            MatSortModule,
            MatProgressSpinnerModule,
            AlertModule.forRoot(),
            ButtonsModule.forRoot(),
            BrowserAnimationsModule,
            ToastrModule.forRoot(),
        ],
        providers: [
            DashboardService,
            ProductsService,
            PromoService,
            UploadService,
            LoginService
        ]
    })
], DefaultModule);
export { DefaultModule };
//# sourceMappingURL=default.module.js.map
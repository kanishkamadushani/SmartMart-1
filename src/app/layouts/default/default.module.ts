import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { ProductsComponent } from 'src/app/modules/products/products.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatFormFieldModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatInputModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { AlertModule, ButtonsModule } from 'ngx-bootstrap';
import { DailogBodyComponent } from 'src/app/modules/dailog-body/dailog-body.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { UpdateDialogComponent } from 'src/app/modules/update-dialog/update-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';
import { UsersComponent } from 'src/app/modules/users/users.component';
import { PendingUsersComponent } from 'src/app/modules/pending-users/pending-users.component';
import { RegisteredUsersComponent } from 'src/app/modules/registered-users/registered-users.component';

@NgModule({
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
  ],
  entryComponents:[
    DailogBodyComponent,
    UpdateDialogComponent,

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
    ProductsService
  ]
})
export class DefaultModule { }

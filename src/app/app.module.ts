import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppRoutingModule }        from './app-routing.module';
import { AppComponent }            from './app.component';
import { BrowserAnimationsModule }   from '@angular/platform-browser/animations';
import { MatButtonModule }           from "@angular/material/button";
import { TopNavComponent }           from './components/top-nav/top-nav.component';
import { MatIconModule }             from "@angular/material/icon";
import { MatToolbarModule }          from "@angular/material/toolbar";
import { MatSidenavModule }          from "@angular/material/sidenav";
import { MatFormFieldModule }        from "@angular/material/form-field";
import { MatSelectModule }           from "@angular/material/select";
import { MatListModule }             from "@angular/material/list";
import { MatBadgeModule }            from "@angular/material/badge";
import { NotificationIconComponent } from './components/notification-icon/notification-icon.component';
import { MatMenuModule }             from "@angular/material/menu";
import { MatCardModule }             from "@angular/material/card";
import { MatTooltipModule }          from "@angular/material/tooltip";

@NgModule(
    {
        declarations: [
            AppComponent,
            TopNavComponent,
            NotificationIconComponent,
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            MatButtonModule,
            MatIconModule,
            MatToolbarModule,
            MatSidenavModule,
            MatFormFieldModule,
            MatSelectModule,
            MatListModule,
            MatBadgeModule,
            MatMenuModule,
            MatCardModule,
            MatTooltipModule
        ],
        providers:    [],
        bootstrap:    [AppComponent]
    }
)
export class AppModule {
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {appRoutes} from './routes';
import {TestModule} from './features/test/test.module';
import {StylingModule} from './features/styling/styling.module';
import {RouterModule} from '@angular/router';
import {SidebarModule} from './sidebar/sidebar.module';
import {SidebarComponent} from './sidebar/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SidebarModule,
    StylingModule,
    TestModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}) // <-- debugging purposes only
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

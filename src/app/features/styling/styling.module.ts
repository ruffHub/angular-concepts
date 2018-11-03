import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StylingComponent} from './styling/styling.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'styling', component: StylingComponent}
    ])
  ],
  declarations: [StylingComponent]
})
export class StylingModule {
}

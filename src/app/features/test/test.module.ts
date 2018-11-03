import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {TestComponent} from './test/test.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'test', component: TestComponent}
    ])
  ],
  declarations: [TestComponent]
})
export class TestModule {
}

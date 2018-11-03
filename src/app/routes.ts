/**
 * @created 03.11.18
 *
 * @author Ruslan Smolovyk <ruslan.smolovik@nurd.com>
 * @copyright NURD 2018
 */
import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  {path: '', redirectTo: 'test', pathMatch: 'full'},
  {path: 'styling', loadChildren: 'app/features/styling/styling.module#StylingModule'},
  {path: 'test', loadChildren: 'app/features/test/test.module#TestModule'},
  {path: '**', redirectTo: 'test'}
];

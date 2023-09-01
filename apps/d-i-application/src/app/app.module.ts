import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BookPaperParentModule, CustomDIModule, SelectModule, TodoSelectModule } from '@d-i/custom-d-i';
import {
  BookPaperBackModule
} from '../../../../libs/custom-d-i/src/lib/ng-if-view-child/book-paper-back/book-paper-back.module';
import {
  BookPaperGrandModule
} from '../../../../libs/custom-d-i/src/lib/ng-if-view-child/book-paper-grand/book-paper-grand.module';
import {
  BookPaperParentContentModule
} from '../../../../libs/custom-d-i/src/lib/ng-if-view-child/book-paper-parent-content/book-paper-parent-content.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    CustomDIModule,
    CustomDIModule.forRoot(),
    CustomDIModule.forChild(),
    BookPaperParentModule,
    SelectModule,
    TodoSelectModule,
    BookPaperBackModule,
    BookPaperGrandModule,
    BookPaperParentContentModule,
    // DIInAngularModule,
    // ResolutionModifiersModule,
    // ProvidersViewprovidersModule,
    // HierarchicalDIModule,
    // DIInActionModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

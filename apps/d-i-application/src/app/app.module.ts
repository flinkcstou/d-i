import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
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
import {
  AbstractFactoryPatternModule
} from '../../../../libs/custom-d-i/src/lib/abstact-factory-pattern/abstract-factory-pattern/abstract-factory-pattern.module';
import {
  DIForwardRefModule
} from '../../../../libs/custom-d-i/src/lib/d-i-forward-ref/d-i-forward-ref/d-i-forward-ref.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomDIModule,
    CustomDIModule.forRoot(),
    CustomDIModule.forChild(),
    BookPaperParentModule,
    SelectModule,
    TodoSelectModule,
    BookPaperBackModule,
    BookPaperGrandModule,
    BookPaperParentContentModule,
    AbstractFactoryPatternModule,
    DIForwardRefModule,
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

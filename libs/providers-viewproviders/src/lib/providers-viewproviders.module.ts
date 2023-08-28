import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProvidersViewprovidersComponent } from './providers-viewproviders.component';
import { ChildComponent } from './child/child.component';
import { InspectorComponent } from './inspector/inspector.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  exports: [ProvidersViewprovidersComponent],
  declarations: [ProvidersViewprovidersComponent, ChildComponent, InspectorComponent],
  bootstrap: [ProvidersViewprovidersComponent],
})
export class ProvidersViewprovidersModule {
}

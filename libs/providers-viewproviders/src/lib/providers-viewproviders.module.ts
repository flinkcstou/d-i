import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProvidersViewprovidersComponent } from './providers-viewproviders.component';
import { ChildComponent } from './child/child.component';
import { InspectorComponent } from './inspector/inspector.component';
import { ChildInspectorComponent } from './child-inspector/child-inspector.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  exports: [ProvidersViewprovidersComponent],
  declarations: [
    ProvidersViewprovidersComponent,
    ChildComponent,
    InspectorComponent,
    ChildInspectorComponent,
  ],
  bootstrap: [ProvidersViewprovidersComponent],
})
export class ProvidersViewprovidersModule {
}

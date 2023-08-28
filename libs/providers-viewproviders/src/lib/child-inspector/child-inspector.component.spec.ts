import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildInspectorComponent } from './child-inspector.component';

describe('ChildInspectorComponent', () => {
  let component: ChildInspectorComponent;
  let fixture: ComponentFixture<ChildInspectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildInspectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildInspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeProyectsComponent } from './iframe-proyects.component';

describe('IframeProyectsComponent', () => {
  let component: IframeProyectsComponent;
  let fixture: ComponentFixture<IframeProyectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IframeProyectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IframeProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

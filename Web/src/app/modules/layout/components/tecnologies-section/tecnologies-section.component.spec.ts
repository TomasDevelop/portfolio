import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiesSectionComponent } from './tecnologies-section.component';

describe('TecnologiesSectionComponent', () => {
  let component: TecnologiesSectionComponent;
  let fixture: ComponentFixture<TecnologiesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnologiesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

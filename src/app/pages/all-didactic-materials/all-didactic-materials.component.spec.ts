import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDidacticMaterialsComponent } from './all-didactic-materials.component';

describe('AllDidacticMaterialsComponent', () => {
  let component: AllDidacticMaterialsComponent;
  let fixture: ComponentFixture<AllDidacticMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDidacticMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDidacticMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

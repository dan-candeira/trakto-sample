import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DidacticMaterialsComponent } from './didactic-materials.component';

describe('DidacticMaterialsComponent', () => {
  let component: DidacticMaterialsComponent;
  let fixture: ComponentFixture<DidacticMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DidacticMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DidacticMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

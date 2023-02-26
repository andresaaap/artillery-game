import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtilleryControllersComponent } from './artillery-controllers.component';

describe('ArtilleryControllersComponent', () => {
  let component: ArtilleryControllersComponent;
  let fixture: ComponentFixture<ArtilleryControllersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtilleryControllersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtilleryControllersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

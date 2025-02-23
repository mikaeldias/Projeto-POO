import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCadastroPlatinumComponent } from './new-cadastro-platinum.component';

describe('NewCadastroPlatinumComponent', () => {
  let component: NewCadastroPlatinumComponent;
  let fixture: ComponentFixture<NewCadastroPlatinumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCadastroPlatinumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCadastroPlatinumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoasVindasClienteComponent } from './boas-vindas-cliente.component';

describe('BoasVindasClienteComponent', () => {
  let component: BoasVindasClienteComponent;
  let fixture: ComponentFixture<BoasVindasClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoasVindasClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoasVindasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

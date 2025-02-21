import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoasVindasFuncionarioComponent } from './boas-vindas-funcionario.component';

describe('BoasVindasFuncionarioComponent', () => {
  let component: BoasVindasFuncionarioComponent;
  let fixture: ComponentFixture<BoasVindasFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoasVindasFuncionarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoasVindasFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

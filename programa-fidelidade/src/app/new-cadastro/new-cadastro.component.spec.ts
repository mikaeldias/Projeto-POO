import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCadastroComponent } from './new-cadastro.component';

describe('NewCadastroComponent', () => {
  let component: NewCadastroComponent;
  let fixture: ComponentFixture<NewCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

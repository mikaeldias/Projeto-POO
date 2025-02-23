import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCadastroBlackComponent } from './new-cadastro-black.component';

describe('NewCadastroBlackComponent', () => {
  let component: NewCadastroBlackComponent;
  let fixture: ComponentFixture<NewCadastroBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCadastroBlackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCadastroBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

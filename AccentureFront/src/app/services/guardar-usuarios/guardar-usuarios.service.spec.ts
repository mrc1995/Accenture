import { TestBed } from '@angular/core/testing';

import { GuardarUsuariosService } from './guardar-usuarios.service';

describe('GuardarUsuariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardarUsuariosService = TestBed.get(GuardarUsuariosService);
    expect(service).toBeTruthy();
  });
});

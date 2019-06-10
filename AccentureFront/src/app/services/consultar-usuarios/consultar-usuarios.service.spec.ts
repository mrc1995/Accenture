import { TestBed } from '@angular/core/testing';

import { ConsultarUsuariosService } from './consultar-usuarios.service';

describe('ConsultarUsuariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultarUsuariosService = TestBed.get(ConsultarUsuariosService);
    expect(service).toBeTruthy();
  });
});

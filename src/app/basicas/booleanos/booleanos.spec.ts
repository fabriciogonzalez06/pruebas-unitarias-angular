import { usuarioIngresado } from './booleanos';


describe('Prueba de booleanos', () => {

    it('debe retornar true', () => {

        const resp = usuarioIngresado();

        expect(resp).toBeTruthy(true);
    });
});
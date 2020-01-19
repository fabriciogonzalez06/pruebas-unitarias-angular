import { mensaje } from './string';
describe('Prueba de string ', () => {


    it('Debe de regresar un string', () => {

        const resp = mensaje('Fernando');

        expect(typeof resp).toBe('string');
    });

    it('Debe retornar el saludo con el nombre enviado', () => {

        const nombre = 'Juan';
        const resp = mensaje(nombre);


        expect(resp).toContain(nombre);
    });

});
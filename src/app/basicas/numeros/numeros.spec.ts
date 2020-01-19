import { incrementar } from './numeros';


describe('Pruebas de números', () => {

    it('Debe de retornar 100 si el número retornado es mayor a 100', () => {


        const resp = incrementar(200);

        expect(resp).toBe(100);
    });



    it('Debe de retornar el numero ingresado +1 si no es mayor a 100', () => {


        const resp = incrementar(20);

        expect(resp).toBe(21);
    });
});
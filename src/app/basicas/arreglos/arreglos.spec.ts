import { robots } from './arreglos';


describe('Prueba de arreglos', () => {


    it('Debe de retornar 3 robots ', () => {

        let respuesta = robots();

        //que la respuesta sea mayor o igual a3
        expect(respuesta.length).toBeGreaterThanOrEqual(3);
    });


    it('debe de existir Robo2 y Robo4', () => {

        let res = robots();

        expect(res).toContain('Robo2');
        expect(res).toContain('Robo4');
    });
});
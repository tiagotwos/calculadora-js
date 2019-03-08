describe('suite de teste de subtração', function(){

    var Calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 5 para 8 e 3', function(){
        expect(Calculadora.subtrair(8,3)).toEqual(5);
    });

    it('deve retornar 5 para  8 e 3 no formato texto', function(){
        expect(Calculadora.subtrair('8','3')).toEqual(5);
    });

    it('deve retornar 4 para 5.5 e 1.5', function(){
        expect(Calculadora.subtrair(5.5,1.5)).toEqual(4);
        expect(Calculadora.subtrair('5.5','1.5')).toEqual(4);
    });

    it('deve retornar 0 para o n1 undefined', function(){
        expect(Calculadora.subtrair(undefined, 5)).toEqual(0)
    });

    it('deve retornar 0 para o n2 undefined', function(){
        expect(Calculadora.subtrair(5, undefined)).toEqual(0)
    });
    
})
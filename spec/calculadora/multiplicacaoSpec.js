describe('suite de teste de multiplicação', function(){

    var Calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 12 para 6 e 2', function(){
        expect(Calculadora.multiplicar(6,2)).toEqual(12);
    });

    it('deve retornar 12 para 6 e 2 em formato string', function(){
        expect(Calculadora.multiplicar('6','2')).toEqual(12);
    });

    it('deve retornar 4.5 para 3 e 1.5', function(){
        expect(Calculadora.multiplicar(3,1.5)).toEqual(4.5);
    });
    
    it('deve retornar 0 para 6 e 0', function(){
        expect(Calculadora.multiplicar(6,0)).toEqual(0);
    });

    it('deve retornar 0 para n1 invalido', function(){
        expect(Calculadora.multiplicar(undefined,5)).toEqual(0);
    });

    it('deve retornar 0 para n2 invalido', function(){
        expect(Calculadora.multiplicar(5,undefined)).toEqual(0);
    });

})
describe('suite de teste de divisao', function(){

    var Calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 6 para 12 e 2', function(){
        expect(Calculadora.dividir(12,2)).toEqual(6);
    });

    it('deve retornar 2 para 6 e 3 no formato texto', function(){
        expect(Calculadora.dividir('6','3')).toEqual(2);
    });
    
    it('deve retornar 1.5 para 4.5 e 3', function(){
        expect(Calculadora.dividir(4.5,3)).toEqual(1.5);
    });

    it('deve retornar "Erro" para divisao por 0', function(){
        expect(Calculadora.dividir(2,0)).toEqual('Erro');
    });

    it('deve retornar 0 para n1 undefined', function(){
        expect(Calculadora.dividir(undefined,5)).toEqual(0);
    });

    it('deve retornar 0 para n2 undefined', function(){
        expect(Calculadora.dividir(5,undefined)).toEqual(0);
    });
})
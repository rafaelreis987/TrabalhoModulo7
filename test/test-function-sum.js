const { assert } = require("chai");
const functionSum = require("../function-sum")

describe('Quantos Parâmetros forem necessários', function(){
    describe('1º Teste: Somente um parâmetro', function(){
        it('Recebendo somente um parâmentro', async function(){
            const retornaResultado = await functionSum(1);
            assert.equal(retornaResultado, 1);
        });
    })
    describe('2º teste: Recebendo dois parâmetros', function(){
        it('Espera receber o cálculo de dois parâmetros', async function(){
            const retornaResultado = await functionSum(10, 50);
            assert.equal(retornaResultado, 60);
        })
    })
    describe('3º teste: Recebendo string', function(){
        it('Espera receber uma concatenação', async function(){
            const retornaResultado = await functionSum(10, 'A');
            assert.equal(retornaResultado, '10A');
        })
    })
    describe('4º teste: Recebendo dez parâmetros', function(){
        it('Espera receber o cálculo de dez parâmetros', async function(){
            const retornaResultado = await functionSum(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
            assert.equal(retornaResultado, 550);
        })
    })
    describe('5º teste: Recebendo um parâmetro negativo e um positivo', function(){
        it('Espera receber o cálculo de um parâmetro negativo e um positivo', async function(){
            const retornaResultado = await functionSum(10, -7);
            assert.equal(retornaResultado, 3);
        })
    })
    describe('6º teste: Recebendo dois parâmetros negativos', function(){
        it('Espera receber o cálculo de dois parâmetros negativos', async function(){
            const retornaResultado = await functionSum(-50, -40);
            assert.equal(retornaResultado, -90);
        })
    })
    describe('7º teste: Recebendo valor booleano', function(){
        it('Espera receber true para um valor booleano qualquer', async function(){
            const retornaResultado = await functionSum(true);
            assert.equal(retornaResultado, true);
        })
    })
    describe('8º teste: Recebendo número decimal', function(){
        it('Espera receber um número decimal', async function(){
            const retornaResultado = await functionSum(0.000001);
            assert.equal(retornaResultado, 0.000001);
        })
    })
    describe('9º teste: Recebendo dois números decimais', function(){
        it('Espera receber o cálculo de dois números decimais', async function(){
            const retornaResultado = await functionSum(0.0008, 0.0020);
            assert.equal(retornaResultado, 0.0028);
        })
    })
})
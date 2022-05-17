const { assert } = require("chai");
const functionDiv = require("../function-div")

describe('Quantos Parâmetros forem necessários', function(){
    describe('1º Teste: Somente um parâmetro', function(){
        it('Recebendo somente um parâmentro', async function(){
            const retornaResultado = await functionDiv(9);
            assert.equal(retornaResultado, 9);
        });
    })
    describe('2º teste: Recebendo dois parâmetros', function(){
        it('Espera receber o cálculo de dois parâmetros', async function(){
            const retornaResultado = await functionDiv(7, 28);
            assert.equal(retornaResultado, 0.25);
        })
    })
    describe('3º teste: Recebendo três parâmetros positivos seguidos de dois negativos', function(){
        it('Espera receber um número positivo como resultado', async function(){
            const retornaResultado = await functionDiv(46, 8, 1, -5, -1);
            assert.equal(retornaResultado, 1.15);
        })
    })
    describe('4º teste: Recebendo um parâmetro negativo e um positivo', function(){
        it('Espera receber o cálculo de um parâmetro negativo e um positivo', async function(){
            const retornaResultado = await functionDiv(-290, 4);
            assert.equal(retornaResultado, -72.5);
        })
    })
    describe('5º teste: Recebendo dois parâmetros negativos', function(){
        it('Espera receber o cálculo de dois parâmetros negativos', async function(){
            const retornaResultado = await functionDiv(-45, -12);
            assert.equal(retornaResultado, 3.75);
        })
    })
    describe('6º teste: Recebendo valor booleano', function(){
        it('Espera receber true para um valor booleano qualquer', async function(){
            const retornaResultado = await functionDiv(true);
            assert.equal(retornaResultado, true);
        })
    })
    describe('7º teste: Recebendo número decimal', function(){
        it('Espera receber um número decimal', async function(){
            const retornaResultado = await functionDiv(0.000015);
            assert.equal(retornaResultado, 0.000015);
        })
    })
    describe('8º teste: Recebendo dois números decimais', function(){
        it('Espera receber o cálculo de dois números decimais', async function(){
            const retornaResultado = await functionDiv(0.0072, 0.005);
            assert.equal(retornaResultado, 1.44);
        })
    })
})
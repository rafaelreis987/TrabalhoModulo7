const { assert } = require("chai");
const functionSub = require("../function-sub")

describe('Quantos Parâmetros forem necessários', function(){
    describe('1º Teste: Somente um parâmetro', function(){
        it('Recebendo somente um parâmentro', async function(){
            const retornaResultado = await functionSub(1);
            assert.equal(retornaResultado, 1);
        });
    })
    describe('2º teste: Recebendo três parâmetros', function(){
        it('Espera receber o cálculo de três parâmetros', async function(){
            const retornaResultado = await functionSub(17, 62, 80);
            assert.equal(retornaResultado, -125);
        })
    })
    describe('3º teste: Recebendo cinco parâmetros', function(){
        it('Espera receber o cálculo de cinco parâmetros', async function(){
            const retornaResultado = await functionSub(100, 50, 31, 17, 50);
            assert.equal(retornaResultado, -48);
        })
    })
    describe('4º teste: Recebendo um parâmetro negativo e um positivo', function(){
        it('Espera receber o cálculo de um parâmetro negativo e um positivo', async function(){
            const retornaResultado = await functionSub(10, -7);
            assert.equal(retornaResultado, 17);
        })
    })
    describe('5º teste: Recebendo dois parâmetros negativos', function(){
        it('Espera receber o cálculo de dois parâmetros negativos', async function(){
            const retornaResultado = await functionSub(-50, -60);
            assert.equal(retornaResultado, 10);
        })
    })
    describe('6º teste: Recebendo valor booleano', function(){
        it('Espera receber true para um valor booleano qualquer', async function(){
            const retornaResultado = await functionSub(true);
            assert.equal(retornaResultado, true);
        })
    })
    describe('7º teste: Recebendo número decimal', function(){
        it('Espera receber um número decimal', async function(){
            const retornaResultado = await functionSub(0.000001);
            assert.equal(retornaResultado, 0.000001);
        })
    })
    describe('8º teste: Recebendo dois números decimais', function(){
        it('Espera receber o cálculo de dois números decimais', async function(){
            const retornaResultado = await functionSub(0.0004, 0.0057);
            assert.equal(retornaResultado, -0.0053);
        })
    })
})
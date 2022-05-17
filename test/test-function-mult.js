const { assert } = require("chai");
const functionMult = require("../function-mult")

describe('Quantos Parâmetros forem necessários', function(){
    describe('1º Teste: Somente um parâmetro', function(){
        it('Recebendo somente um parâmentro', async function(){
            const retornaResultado = await functionMult(1);
            assert.equal(retornaResultado, 1);
        });
    })
    describe('2º teste: Recebendo dois parâmetros', function(){
        it('Espera receber o cálculo de dois parâmetros', async function(){
            const retornaResultado = await functionMult(7, 28);
            assert.equal(retornaResultado, 196);
        })
    })
    describe('3º teste: Recebendo três parâmetros positivos seguidos de dois negativos', function(){
        it('Espera receber um número positivo como resultado', async function(){
            const retornaResultado = await functionMult(46, 2, 4, -10, -63);
            assert.equal(retornaResultado, 231840);
        })
    })
    describe('4º teste: Recebendo um parâmetro negativo e um positivo', function(){
        it('Espera receber o cálculo de um parâmetro negativo e um positivo', async function(){
            const retornaResultado = await functionMult(10, -7);
            assert.equal(retornaResultado, -70);
        })
    })
    describe('5º teste: Recebendo dois parâmetros negativos', function(){
        it('Espera receber o cálculo de dois parâmetros negativos', async function(){
            const retornaResultado = await functionMult(-50, -90);
            assert.equal(retornaResultado, 4500);
        })
    })
    describe('6º teste: Recebendo valor booleano', function(){
        it('Espera receber true para um valor booleano qualquer', async function(){
            const retornaResultado = await functionMult(true);
            assert.equal(retornaResultado, true);
        })
    })
    describe('7º teste: Recebendo número decimal', function(){
        it('Espera receber um número decimal', async function(){
            const retornaResultado = await functionMult(0.000008);
            assert.equal(retornaResultado, 0.000008);
        })
    })
    describe('8º teste: Recebendo dois números decimais', function(){
        it('Espera receber o cálculo de dois números decimais', async function(){
            const retornaResultado = await functionMult(0.00034, 0.00042);
            assert.equal(retornaResultado, 0.0000001428);
        })
    })
})
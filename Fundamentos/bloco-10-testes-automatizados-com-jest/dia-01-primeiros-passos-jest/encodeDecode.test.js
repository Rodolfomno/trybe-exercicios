const { encode, decode} = require('./encodeDecode');

describe('Testa funcao encode e decode', () => {
    it('verifica se encode e funcao', () => {
        expect(typeof encode).toEqual('function');
    })
    it('verifica se transforma a vogal em numero', () => {
        expect(encode('banana')).toEqual('b1n1n1');
    })
    it('verifica se transforma e vogal em numero', () => {
        expect(encode('ele')).toEqual('2l2');
    })
    it('verifica se transforma i vogal em numero', () => {
        expect(encode('xixi')).toEqual('x3x3');
    })
    it('converte a vogal "o" no número 4', () => {
        expect(encode('ovo')).toEqual('4v4');
    });
    it('converte a vogal "u" no número 5', () => {
        expect(encode('nu')).toEqual('n5');
    });
    it('checa se o retorno da função tem o mesmo número de caracteres', () => {
        expect(encode('trybe').length).toEqual(5);;
      });
    it('verifica funcao decode e definida', () => {
        expect(decode).toBeDefined();
    })
    it('decode é uma função', () => {
        expect(typeof decode).toEqual('function');
    });
    it('converte apenas o número 1 na vogal a', () => {
        expect(decode('1n1')).toEqual('ana');
    });
    it('converte apenas o número 2 na vogal e', () => {
        expect(decode('2l2')).toEqual('ele');
    });
    it('converte apenas o número 3 na vogal i', () => {
      expect(decode('x3x3')).toEqual('xixi');
    });
    it('converte apenas o número 4 na vogal o', () => {
      expect(decode('4v4')).toEqual('ovo');
    });
    it('converte apenas o número 5 na vogal u', () => {
      expect(decode('n5')).toEqual('nu');
    });
      it('checa se o retorno da função tem o mesmo número de caracteres', () => {
      expect(decode('trybe').length).toEqual(5);
    });
})
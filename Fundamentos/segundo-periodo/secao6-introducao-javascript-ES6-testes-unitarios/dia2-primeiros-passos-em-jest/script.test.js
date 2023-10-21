const { removeItem, myFizzBuzz, encode, decode } = require('./script')


describe('A função removeItem recebe um array arr e retorna uma cópia desse array sem o elemento item, caso ele exista no array.', () => {
    test('Testa se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado.', () => {
        expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    })

    test('Testa se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].', () => {
        expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    })
    test('Testa se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado.', () => {
        expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })
});

describe('A função myFizzBuzz recebe um número num como parâmetro.', () => {
    test('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz"', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    })
    test('Caso num seja um número divisível apenas por 3, a função retorna "fizz"', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    })
    test('Caso num seja um número divisível apenas por 5, a função retorna "buzz"', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    })
    test('Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num', () => {
        expect(myFizzBuzz(1)).toBe(1);
    })
    test('Caso num não seja um número, a função retorna false.', () => {
        expect(myFizzBuzz('string')).toBeFalsy();
    })
});


describe('Testa encode', () => {
    test('Testa se encode é uma função.', () => {
        expect(typeof encode).toBe('function');
    })
    test('Testa se encode recebe aeiou e converte em 12345.', () => {
        expect(encode('aeiou')).toBe('12345');
    })
    test('Testa se a string retornada por encode tem o mesmo número de caracteres que a string parâmetro', () => {
        expect(encode('3f5ae').length).toEqual(5);
    })
    test('Testa se encode recebe a letra a e retorna 1', () => {
        expect(encode('a')).toBe('1');
    })    
    test('Testa se encode recebe a letra e e retorna 2', () => {
        expect(encode('e')).toBe('2');
    })
    test('Testa se encode recebe a letra i e retorna 3', () => {
        expect(encode('i')).toBe('3');
    })
    test('Testa se encode recebe a letra o e retorna 4', () => {
        expect(encode('o')).toBe('4');
    })
    test('Testa se encode recebe a letra u e retorna 5', () => {
        expect(encode('u')).toBe('5');
    })
});

describe('Testa decode', () => {
    test('Testa se decode é uma função.', () => {
        expect(typeof decode).toBe('function');
    })
    test('Testa se decode recebe 12345 e converte em aeiou.', () => {
        expect(decode('12345')).toMatch('aeiou');
    })
    test('Testa se a string retornada por decode tem o mesmo número de caracteres que a string parâmetro', () => {
        expect(decode('aefo3').length).toEqual(5);
    })
    test('Testa se decode recebe a string 1 e retorna a', () => {
        expect(decode('1')).toMatch('a');
    })    
    test('Testa se decode recebe a string 2 e retorna b', () => {
        expect(decode('2')).toMatch('e');
    })
    test('Testa se decode recebe a string 3 e retorna b', () => {
        expect(decode('3')).toMatch('i');
    })
    test('Testa se decode recebe a string 4 e retorna b', () => {
        expect(decode('4')).toMatch('o');
    })
    test('Testa se decode recebe a string 5 e retorna b', () => {
        expect(decode('5')).toMatch('u');
    })
});


/*

*/
const { removeItem, myFizzBuzz } = require('./script')


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
}
)

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

/*


*/
// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  //test orientado a comportamiento 

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it('debería retornar true para "4083952015263"', () => {
      expect(validator.isValid("4083952015263")).toBeTruthy();
    });

    it('debería retornar true para "79927398713"', () => {
      expect(validator.isValid("79927398713")).toBeTruthy();
    });

    it('debería retornar false para "1234567890"', () => {
      expect(validator.isValid("1234567890")).toBeFalsy();
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(validator.maskify(4556364607935616)).stringMatching("############5616");
    });
  });
});


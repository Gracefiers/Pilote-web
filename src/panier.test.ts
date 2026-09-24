import { describe, it, expect } from 'vitest';
import { totalPanier, appliquerRemise } from './panier';

describe('totalPanier', () => {
  it('renvoie 0 pour un panier vide', () => {
    expect(totalPanier([])).toBe(0);
  });

  it('multiplie le prix par la quantité', () => {
    expect(totalPanier([{ nom: 'Stylo', prix: 2, quantite: 3 }])).toBe(6);
  });
});

describe('appliquerRemise', () => {
  it('applique 10 % de remise', () => {
    expect(appliquerRemise(100, 10)).toBe(90);
  });

  it('refuse un pourcentage invalide', () => {
    expect(() => appliquerRemise(100, 150)).toThrow('Pourcentage invalide');
  });
});
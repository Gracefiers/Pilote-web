import { describe, it, expect } from 'vitest';
import { totalPanier, appliquerRemise } from '../src/panier';

describe('Scénario : commande complète', () => {
  it('calcule le total du panier puis applique une remise', () => {
    const panier = [
      { nom: 'Cahier', prix: 5, quantite: 4 },
      { nom: 'Stylo', prix: 2, quantite: 5 },
    ];

    const total = totalPanier(panier); // 20 + 10 = 30
    expect(total).toBe(30);
    expect(appliquerRemise(total, 10)).toBe(27);
  });
});
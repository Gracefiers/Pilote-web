import { add } from './utils';

export interface Article {
  nom: string;
  prix: number;
  quantite: number;
}

export function totalPanier(articles: Article[]): number {
  return articles.reduce((total, a) => add(total, a.prix * a.quantite), 0);
}

export function appliquerRemise(total: number, pourcentage: number): number {
  if (pourcentage < 0 || pourcentage > 100) {
    throw new Error('Pourcentage invalide');
  }
  return total - (total * pourcentage) / 100;
}

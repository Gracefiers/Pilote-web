import { launch } from 'chrome-launcher';
import lighthouse from 'lighthouse';

const URL_A_TESTER = 'http://localhost:4173';
const SEUIL = 0.8; // 80 / 100

const chrome = await launch({ chromeFlags: ['--headless'] });

try {
  const resultat = await lighthouse(URL_A_TESTER, {
    port: chrome.port,
    onlyCategories: ['performance'],
    output: 'json',
  });

  const score = resultat.lhr.categories.performance.score;
  const scoreSur100 = Math.round(score * 100);

  console.log(`Score de performance Lighthouse : ${scoreSur100}/100 (seuil : ${SEUIL * 100})`);

  if (score < SEUIL) {
    console.error(`Échec : le score (${scoreSur100}) est sous le seuil (${SEUIL * 100}).`);
    process.exitCode = 1;
  }
} finally {
  await chrome.kill();
}
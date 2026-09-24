import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.test.ts'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.test.ts', 'src/main.ts', 'src/counter.ts', 'src/vite-env.d.ts'],
      reporter: ['text', 'json-summary'],
      thresholds: { lines: 80, functions: 80, branches: 80, statements: 80 },
    },
  },
});
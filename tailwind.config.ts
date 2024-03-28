import formsPlugin from '@tailwindcss/forms';
import headlessuiPlugin from '@headlessui/tailwindcss';
import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        navbarBlack: 'rgba(16, 16, 16, 0.85)',
        navbarWhite: 'rgba(255, 255, 255, 0.85)',
      },
    },
  },
  plugins: [formsPlugin, headlessuiPlugin],
} satisfies Config;

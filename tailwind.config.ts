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
    },
  },
  plugins: [formsPlugin, headlessuiPlugin],
} satisfies Config;

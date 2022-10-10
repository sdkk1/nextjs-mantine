/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // NOTE: Mantine と一致させる
    // (cf. https://mantine.dev/styles/responsive/)
    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1400px',
    },
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // NOTE: Matine の NormalizeCSS と競合するため、Tailwind 側の設定をOFFにする
    // (cf. https://tailwindcss.com/docs/preflight)
    preflight: false,
  },
}

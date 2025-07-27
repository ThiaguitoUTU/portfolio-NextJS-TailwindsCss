import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],    
    theme: {
        extend: {
        colors: {
            secondary: '#F5741C',
            darkBg: '#131424',
            
        },
        backgrundImage: {
            "gradient-cover":
                'linear-gradient(90.21deg, rgba(70, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0-5) 111.58%)',
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        },
    },
    plugins: [],
};
export default config;
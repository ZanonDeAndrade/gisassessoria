import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem'
      },
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        // Cores principais ajustadas
        primary: {       // usado para destaques e botões
          DEFAULT: 'hsl(0, 85%, 50%)', // vermelho
          foreground: 'hsl(0, 0%, 100%)',
          glow: 'hsl(0, 85%, 65%)'
        },
        secondary: {     // textos ou badges secundários
          DEFAULT: 'hsl(30, 100%, 55%)', // laranja para contraste
          foreground: 'hsl(0, 0%, 100%)'
        },
        destructive: {   // Urgente
          DEFAULT: 'hsl(0, 85%, 50%)',
          foreground: 'hsl(0, 0%, 100%)'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(0, 70%, 55%)',   // vermelho mais suave
          foreground: 'hsl(0, 0%, 100%)'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },

      // Gradientes personalizados
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, hsl(0, 85%, 50%), hsl(0, 70%, 55%))',
        'gradient-hero': 'linear-gradient(90deg, hsl(0, 85%, 50%), hsl(30, 100%, 55%))',
        'gradient-card': 'var(--gradient-card)'
      },

      boxShadow: {
        elegant: 'var(--shadow-elegant)',
        card: 'var(--shadow-card)',
        glow: 'var(--shadow-glow)'
      },
      transitionTimingFunction: {
        smooth: 'var(--transition-smooth)'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

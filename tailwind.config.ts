
import type { Config } from "tailwindcss";

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
			padding: '2rem',
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
				// Custom colors for the spiritual/natural theme
				beige: {
					50: '#FAF7F2',
					100: '#F5E8DA',
					200: '#EFDCC5',
					300: '#E8CEB0',
					400: '#E1C09B',
					500: '#DAB286',
					600: '#C47F5A',
					700: '#8B5E3C',
					800: '#6B4A32',
					900: '#4A3328'
				},
				terracotta: {
					50: '#FDF6F3',
					100: '#F8E6DF',
					200: '#F0CCBB',
					300: '#E8B297',
					400: '#E09873',
					500: '#C47F5A',
					600: '#A6693A',
					700: '#8B5E3C',
					800: '#6B4A32',
					900: '#4A3328'
				},
				earth: {
					50: '#F7F5F3',
					100: '#EDEAE6',
					200: '#D9D0C7',
					300: '#C5B6A8',
					400: '#B19C89',
					500: '#8B5E3C',
					600: '#7A5235',
					700: '#69462E',
					800: '#583A27',
					900: '#472E20'
				},
				gold: {
					50: '#FDF9F3',
					100: '#F9F0E6',
					200: '#F0DDBF',
					300: '#E7CA98',
					400: '#DEB771',
					500: '#D4A373',
					600: '#C4915E',
					700: '#B47F49',
					800: '#A46D34',
					900: '#945B1F'
				},
				olive: {
					50: '#F8F8F7',
					100: '#F0F1EF',
					200: '#DCDDD9',
					300: '#C8C9C3',
					400: '#B4B5AD',
					500: '#6B705C',
					600: '#5C6150',
					700: '#4D5244',
					800: '#3E4338',
					900: '#2F342C'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
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
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				'scale-in': {
					"0%": {
						transform: "scale(0.95)",
						opacity: "0"
					},
					"100%": {
						transform: "scale(1)",
						opacity: "1"
					}
				},
				'pulse-gentle': {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0.8" }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.4s ease-out',
				'pulse-gentle': 'pulse-gentle 3s ease-in-out infinite'
			},
			fontFamily: {
				'serif': ['Playfair Display', 'serif'],
				'sans': ['Inter', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

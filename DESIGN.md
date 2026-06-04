---
name: Organic Tech Portfolio
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#424844'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#727973'
  outline-variant: '#c2c8c2'
  surface-tint: '#496455'
  primary: '#173124'
  on-primary: '#ffffff'
  primary-container: '#2d4739'
  on-primary-container: '#98b5a3'
  inverse-primary: '#b0cdbb'
  secondary: '#3c692b'
  on-secondary: '#ffffff'
  secondary-container: '#baeea0'
  on-secondary-container: '#406d2f'
  tertiary: '#3a2800'
  on-tertiary: '#ffffff'
  tertiary-container: '#563d00'
  on-tertiary-container: '#d7a63e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ccead6'
  primary-fixed-dim: '#b0cdbb'
  on-primary-fixed: '#062014'
  on-primary-fixed-variant: '#324c3e'
  secondary-fixed: '#bdf1a3'
  secondary-fixed-dim: '#a1d489'
  on-secondary-fixed: '#052100'
  on-secondary-fixed-variant: '#255015'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#f3be54'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4200'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 120px
  container-max: 1280px
  gutter: 24px
  card-padding: 32px
---

## Brand & Style

This design system establishes a dialogue between the structured world of full-stack engineering and the fluid, calming aesthetics of the natural world. The brand personality is poised, intellectual, and deeply intentional, moving away from the aggressive aesthetics of traditional "tech" portfolios. It is designed to evoke a sense of digital craftsmanship that feels as "grown" as it is "built."

The visual language follows a **Refined Glassmorphic** style. It utilizes the transparency and light refraction of glass to create depth, layered over a warm, organic color palette. This approach ensures the interface feels breathable and high-end, prioritizing clarity and premium finishes over loud decorations. The emotional response should be one of tranquility and professional trust, positioning the developer as a calm, capable architect of complex systems.

## Colors

The palette is rooted in a "Modern Meadow" concept. **Forest Green** serves as the primary anchor, providing the necessary weight and professional "developer" feel. **Meadow Green** and **Sage** provide a lush, energetic contrast for highlights and success states.

**Warm Beige** and **Cream** replace harsh whites or grays for the background, creating a more sophisticated, "paper-like" quality that reduces eye strain. **Sunset Gold** and **Soft Orange** are used sparingly as call-to-action accents, mimicking the way light hits a landscape at dusk. This ensures that while the system is grounded in earth tones, it possesses "digital sparks" that guide user attention to interactive elements.

## Typography

The typography strategy balances the geometric precision of **Montserrat** for headings with the systematic clarity of **Inter** for body text. 

Headings should be treated as architectural elements, using tighter letter-spacing and substantial weight to feel grounded. For large display text, a slight negative letter-spacing is required to maintain the "premium" editorial look. Body text leverages generous line-heights (1.5–1.6) to ensure that technical descriptions remain accessible and easy to digest against the soft-colored backgrounds. **Label-caps** are utilized for categorizing projects or skills, providing a clear structural hierarchy without overwhelming the page.

## Layout & Spacing

This design system employs a **Fixed Centered Grid** for desktop (12 columns) and a fluid 4-column grid for mobile. The layout philosophy is defined by "The Breathable Canvas"—using extreme whitespace to separate key thoughts and sections.

Section vertical gaps are intentionally large (120px+) to allow the glassmorphic elements "room to glow" without overlapping visually. Padding within components is generous, ensuring that text never feels crowded by the soft borders of the cards. On mobile, the margins should stay at a comfortable 24px to maintain the elegant, non-cramped aesthetic.

## Elevation & Depth

Depth is achieved through **Soft-Layered Glassmorphism** rather than traditional heavy shadows. Surfaces are defined by three distinct layers:

1.  **Backdrop Blur:** A minimum of 20px - 40px blur to create a frosted glass effect on the Cream/Beige background.
2.  **Translucent Fill:** A white or cream fill at 40-60% opacity.
3.  **The "Silk" Border:** A very thin (1px or 1.5px) border with a low-opacity white or light-green tint, which catches "light" at the edges of the components.

Shadows, when used, are highly diffused (e.g., 40px blur) with very low alpha (5-8%), tinted with a hint of Forest Green to ground the element in the palette rather than using neutral grays.

## Shapes

The shape language is inspired by river stones—smooth, substantial, and approachable. A base roundedness of **0.5rem (8px)** is used for small interactive elements like input fields. 

Larger containers and glassmorphic cards use **1rem (16px)** to emphasize the "soft" nature of the design. High-interaction points, such as primary buttons or specialized tags/chips, should use a fully **Pill-shaped (999px)** radius to provide a distinct visual contrast against the more structural card layouts.

## Components

### Glassmorphic Cards
Cards are the primary container for project showcases and tech stacks. They feature a 1px solid border in `rgba(255, 255, 255, 0.5)` and a subtle `drop-shadow` that only appears on hover to indicate interactivity.

### Rounded Buttons
Primary buttons use a solid **Forest Green** fill with white text for maximum contrast. Secondary buttons use a **Meadow Green** ghost style with a 2px border. All buttons have a transition effect that slightly increases the background blur of the elements behind them when hovered.

### Elegant Timeline
The experience timeline consists of a single 2px vertical line in **Sage Green**. Each "node" is a 12px circular "pip" with a Sunset Gold center. The text associated with each timeline entry is offset to the right, using `headline-sm` for titles and `body-md` for descriptions.

### Input Fields & Forms
Forms use a "Soft Inset" style—minimal background color, 1px border in Sage Green, and a subtle inner shadow to suggest a slight depression in the "paper" surface of the UI. Focus states are highlighted with a Sunset Gold glow.

### Project Tags / Chips
Used to categorize languages and frameworks. These should be small, pill-shaped, with a Meadow Green background at 15% opacity and Forest Green text, keeping them legible but secondary to the main content.

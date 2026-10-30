# Design system

## Direction
Minimalist editorial layout for a software developer portfolio. The interface should feel calm, considered, readable, and credible to recruiters and developers.

## Color tokens
- Background: `#FFFFFF`
- Main text: `#111111`
- Muted text: `#666A73`
- Accent: `#2563EB`
- Accent hover: `#1D4ED8`
- Soft surface: `#F4F5F7`
- Borders: `#E7E8EB`

Use electric blue selectively for links, focus states, small labels, and primary actions.

## Typography
- Display/headings: Space Grotesk
- Body: DM Sans
- Technical labels: DM Mono

## Layout
- Centered content container, maximum width 1180px.
- 12-column editorial grid on wide screens.
- Single-column flow on small screens.
- Generous whitespace and thin separators.
- 8px-based spacing rhythm.

## Motion
- Prefer CSS transitions between 160ms and 240ms.
- Respect `prefers-reduced-motion`.
- Avoid scroll hijacking, parallax, and blocking intro animations.

## Accessibility
- Semantic landmarks and heading order.
- Visible keyboard focus.
- Links have meaningful labels.
- Mobile navigation has an accessible toggle label.
- Color is not the only way information is communicated.

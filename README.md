# React Project with Dark Mode Implementation (Daisy UI)

This project implements a dark mode feature using Daisy UI themes and Tailwind CSS dark classes.

## Dark Mode Implementation Guide

### Overview

The dark mode functionality is implemented using:

- **Daisy UI themes** for component styling
- **Tailwind CSS dark classes** for custom styling
- **Local storage** for theme persistence
- **React hooks** for state management

### Implementation Steps

#### 1. Index.css Configuration

Copy the following configuration to your `index.css` file:

```css
@import "tailwindcss";
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
}

@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));

/* You can change 'dark' to any Daisy UI theme name */
/* Available themes: dark, cupcake, forest, black, luxury, night, synthwave, etc. */
```

#### 2. Navbar Theme Toggle

Add this theme toggle input field to your Navbar component:

```jsx
{
  /* Theme Toggle */
}
<input
  type="checkbox"
  value="dark"
  className="toggle theme-controller mr-6"
  checked={theme === "dark"}
  onChange={handleThemeChange}
/>;
```

#### 3. React Hook Implementation

Add these hooks and functions to your component:

```jsx
import { useState, useEffect } from "react";

const [theme, setTheme] = useState(
  localStorage.getItem("theme") === "light" ? "light" : "dark"
);

// Load theme from localStorage on component mount
useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  setTheme(savedTheme);
  document.querySelector("html").setAttribute("data-theme", savedTheme);
}, [theme]);

// Toggle theme function
const handleThemeChange = (event) => {
  const newTheme = event.target.checked ? "dark" : "light";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
};
```

### Customizing Dark Theme

To use a different Daisy UI theme for dark mode:

1. Open `src/index.css`
2. Change the `[data-theme="dark"]` and the before of `--prefersdark` part to your preferred theme:

   ```css
   /* This is for enabling night theme for the dark mode */

   @plugin "daisyui" {
     themes: light --default, night --prefersdark;
   }
   @custom-variant dark (&:where([data-theme=night], [data-theme=night] *));
   ```

### Available Daisy UI Dark Themes

- `dark` - Standard dark theme
- `forest` - Dark green theme
- `black` - Pure black theme
- `luxury` - Dark with gold accents
- `night` - Dark blue theme
- `synthwave` - Neon dark theme

### Using Tailwind Dark Classes

For custom components, you can use Tailwind's dark mode classes:

```jsx
<div className="bg-white dark:bg-gray-800 text-black dark:text-white">
  Content that adapts to theme
</div>
```

### Features

- ✅ Automatic theme persistence
- ✅ System preference detection
- ✅ Smooth theme transitions
- ✅ Component-level theme support
- ✅ Easy theme customization

## Useful Resources

- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)
- [DaisyUI](https://daisyui.com/docs/install/)
- [DaisyUI Themes](https://daisyui.com/docs/themes/)
- [Tailwind Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [React Router](https://reactrouter.com/start/data/installation)
- [Firebase](https://firebase.google.com/docs/auth/web/start)
- [Firebase Console](https://console.firebase.google.com/u/0/)

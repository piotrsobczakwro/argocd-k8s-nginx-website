# Language Translation Guide

This document explains how to add or modify translations for the website's PL/ENG language switcher.

## Overview

The website supports bilingual content switching between:
- **English (ENG)** - Default language
- **Polish (PL)** - Secondary language

The language preference is stored in the browser's localStorage and persists across sessions.

## How It Works

The translation system uses:
1. **translations.js** - Contains all translation strings in a structured object
2. **data-i18n attributes** - HTML elements with this attribute are automatically translated
3. **localStorage** - Saves user's language preference

## Adding New Translations

### Step 1: Add Translation Keys

Open `website/translations.js` and add your new translation keys to both `en` and `pl` objects:

```javascript
const translations = {
    en: {
        // ... existing translations
        new_section_title: "New Section Title",
        new_section_description: "Description text here"
    },
    pl: {
        // ... existing translations
        new_section_title: "Tytuł Nowej Sekcji",
        new_section_description: "Opis tutaj"
    }
};
```

### Step 2: Update HTML

Add the `data-i18n` attribute to HTML elements you want to translate:

```html
<h2 data-i18n="new_section_title">New Section Title</h2>
<p data-i18n="new_section_description">Description text here</p>
```

**Important Notes:**
- The `data-i18n` value must match the key in the translations object
- The text inside the HTML element serves as the default/fallback text
- For elements with emojis or icons, wrap only the translatable text in a `<span>`:
  ```html
  <h3>🏆 <span data-i18n="about_experience_title">15+ Years Experience</span></h3>
  ```

### Step 3: Update ConfigMap (for Kubernetes deployment)

After modifying `website/translations.js`, update the ConfigMap:

```bash
cd /path/to/repository
./update-configmap.sh  # If available, or manually update k8s/configmap.yaml
```

Or manually rebuild the ConfigMap to include the updated translations.js file.

## Translation Keys Structure

Translation keys follow this naming convention:

- `nav_*` - Navigation menu items
- `hero_*` - Hero section (main banner)
- `service_*` - Services section
- `about_*` - About/Why Choose Us section
- `contact_*` - Contact section
- `footer_*` - Footer section

## Modifying Existing Translations

1. Open `website/translations.js`
2. Find the key you want to modify in both `en` and `pl` objects
3. Update the text value
4. Save the file
5. Update the ConfigMap if deploying to Kubernetes
6. Test the changes by switching languages

## Testing Translations

1. Open the website in a browser
2. Click the **ENG** or **PL** button in the navigation bar
3. Verify all text updates correctly
4. Check that the language preference persists after page reload
5. Test on mobile devices to ensure the switcher is accessible

## Accessibility

The language switcher buttons include:
- `aria-label` attributes for screen readers
- Visual active state indication
- Keyboard navigation support
- Focus indicators for accessibility

## Browser Support

The language switcher uses:
- localStorage API (supported in all modern browsers)
- ES6 JavaScript features
- CSS3 for styling

Minimum browser requirements:
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## Troubleshooting

**Translations not appearing:**
- Check that the translation key in `data-i18n` exactly matches the key in translations.js
- Verify the translations.js file is loaded (check browser console for errors)
- Clear browser cache and reload the page

**Language preference not persisting:**
- Check browser localStorage is enabled
- Verify no errors in browser console
- Test in a different browser/incognito mode

**New translations not working in Kubernetes:**
- Ensure the ConfigMap has been updated with the new translations.js content
- Restart the pods to load the updated ConfigMap
- Check pod logs for any errors

## Example: Adding a New Section

To add a new "Pricing" section:

1. **Add translations:**
```javascript
// In translations.js
en: {
    pricing_title: "Our Pricing",
    pricing_desc: "Transparent and competitive rates"
}
pl: {
    pricing_title: "Nasze Ceny", 
    pricing_desc: "Przejrzyste i konkurencyjne stawki"
}
```

2. **Add HTML:**
```html
<section id="pricing">
    <h2 data-i18n="pricing_title">Our Pricing</h2>
    <p data-i18n="pricing_desc">Transparent and competitive rates</p>
</section>
```

3. **Test and deploy**

That's it! The new section will now support both languages.

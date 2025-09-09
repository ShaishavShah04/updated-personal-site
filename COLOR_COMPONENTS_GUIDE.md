# Color Components Usage Guide

Your personal website now supports custom color functionality in markdown content! Here's how to use the new color components.

## Available Components

### 1. ColorText - Custom Text Colors
```jsx
<ColorText color="#ff6b6b">This text will be pink</ColorText>
<ColorText color="rgb(255, 107, 107)">RGB colors work too</ColorText>
<ColorText color="hsl(0, 100%, 50%)">HSL colors are supported</ColorText>
```

### 2. ColorBackground - Custom Background Colors
```jsx
<ColorBackground color="#e1f5fe">This text has a light blue background</ColorBackground>
<ColorBackground color="#ffecb3">Yellow background</ColorBackground>
```

### 3. ColorBorder - Custom Border Colors
```jsx
<ColorBorder color="#4caf50">Green border</ColorBorder>
<ColorBorder color="#f44336" width="3px" style="dashed">Red dashed border</ColorBorder>
<ColorBorder color="#9c27b0" width="1px" style="dotted">Purple dotted border</ColorBorder>
```

### 4. Preset Color Components
For common colors, use these shortcut components:

```jsx
<RedText>Red text</RedText>
<BlueText>Blue text</BlueText>
<GreenText>Green text</GreenText>
<YellowText>Yellow text</YellowText>
<PurpleText>Purple text</PurpleText>
<OrangeText>Orange text</OrangeText>
```

### 5. Highlight - Text Highlighting
```jsx
<Highlight>Default yellow highlight</Highlight>
<Highlight color="#ffcdd2">Custom pink highlight</Highlight>
```

## Color Format Support

The components support multiple color formats:
- **Hex**: `#ff0000`, `#f00`
- **RGB**: `rgb(255, 0, 0)`
- **RGBA**: `rgba(255, 0, 0, 0.5)`
- **HSL**: `hsl(0, 100%, 50%)`
- **HSLA**: `hsla(0, 100%, 50%, 0.5)`
- **Named colors**: `red`, `blue`, `green`, etc.

## Usage in Outstatic Editor

1. Open your Outstatic CMS at `/outstatic`
2. Edit any page or create new content
3. Use the components directly in your markdown content
4. The components will render with the specified colors on your live site

## Safety Features

- **Color validation**: Invalid colors are ignored and fallback to default styling
- **Accessibility**: Very light colors get automatic text shadows for better readability
- **Dark mode compatible**: Colors work well in both light and dark themes

## Examples

Here's a complete example you can copy into your markdown:

```jsx
# My Colorful Content

Regular text with <RedText>red highlights</RedText> and <BlueText>blue accents</BlueText>.

<Highlight>Important information</Highlight> stands out with highlighting.

<ColorBorder color="#4caf50" width="2px">
This entire paragraph has a green border around it for emphasis.
</ColorBorder>

Mix and match: <ColorText color="#e91e63">Custom magenta text</ColorText> with 
<ColorBackground color="#f3e5f5">purple background</ColorBackground>.
```

## Performance Notes

- Colors are applied via inline styles for maximum compatibility
- Components include smooth transitions for a polished feel
- Minimal bundle size impact - only loads when used

Enjoy your new colorful markdown capabilities! 🎨
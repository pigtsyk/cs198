# CSS (Cascading Style Sheets)

<p>Group of styles with 3 parts:</p>
- selector
- rule name
- value

```
<selector> {
  <rule name>: <value>;
}

Example: Changing text color
p {
  color: red;
  font-weight: bold;
}
```

## Link Tag
```
<html lang="en">
  <head>
    <link rel="stylesheet" href="../style/about.css" />
  </head>
</html>

<!-- This tag usually goes in the head of the HTML document -->
```

## style attribute
```
<h1 style="color: blue; text-align: center;">Header</h1>

<!-- In this example, the h1 has color blue and center aligns itself -->
```

- style attribute: override any style set globally

## style tags
```
<html lang="en">
  <head>
    <style>
      h1 {
        color: red;
      }
      p {
        color: blue;
      }
    </style>
  </head>
</html>

<!-- This stylesheet lies within the HTML document and will affect the entire HTMl page -->
```

- Overrides external stylesheets

## CSS Selectors
- tag selectors: select elements by tags (ie. `<h1>`)
- class selector: specify class with `.`
- ID selector: specify ID with `#`
- Only one element given an ID
- universal selector: affects all elements in the document; `html`
- grouping selector: apply a group of styles an element that matches any selector in a set, separate them using a `,`

```
h1,
h2,
p {
  text-align: center;
  color: red;
}

/* All h1, h2, p elements will be affected. */
```

- AND grouping selector: apply a group of styles to an element that matches ALL the selectors in a set

```
h1.my-title.red-text {
  color: red;
  font-size: 50px;
}

/*This applies the styles to ONLY h1 classes that have both the my-title and red-text classes.*/
```

## Common Properties
- color: changes color of the text
- font-size: changes size of the text
- font-weight: changes heaviness of font. lower = lighter, higher = bolder

200: Ultra Light
300: Light
400: Regular
500: Medium
600: Semibold
700: Bold
800: Heavy

- font-family: type of font face being used
- text-decoration: allows you to modify lines on your text (underline, etc.)
- text-align: change the alignment of your text (defaults to center)
- border-style
- border-weight
- border-color
- border-radius: roundness of border corner

## Positions

# HTML (Hypertext Markup Language)
`.html` = primary document (content of file)

`.css` = visuals

`.js` = functionality

```
<br> = break rule
<b> = bold
<i> = italize

<b>This text is bold!</b><br />
<i>This text is italicized!</i>
```

## Attributes
```
<a href="https://webatberkeley.org">This is a link!</a>
```

![image](https://github.com/user-attachments/assets/a0af4f80-ebec-4c19-9735-ef25742c8c37)

## Nesting
<b>This text is bold and <i>italicized!</i></b>
```
<b>This text is bold and <i>italicized!</i></b>
```

## File Layout
`<!DOCTYPE html>` ⇒ Declares the document as being of type html

`<p> <html>` ⇒ anything within this tag is to be interpreted as html </p>
  
`<head>` ⇒ holds the metadata for the document
  
`<body>` ⇒ contains all the actual html that will be displayed on the site

```
<!DOCTYPE html>
<html>
  <head>
    <!-- *Metadata goes in here -->
  </head>

  <body>
    <!-- *Actual Content Goes in Here -->*
    <b>Hello World!</b>
  </body>
</html>
```

## Common HTML Tags
`<p>` tag → Just regular text
`<h1>` - <h6> tags → Headers

```
<div>
  <h1>I'm a big header!</h1>
  <h3>I'm a slightly smaller header.</h3>
  <h5>I'm a small header.</h5>
</div>
```

<button> tag → Buttons
```
<a href="https://webatberkeley.org/">
  <button>
    <p>Go to Web Dev at Berkeley's site</p>
  </button>
</a>
```

`<span>` tag (optional) → Spans
`<img>` tag → Image
Inputs → `<input>` tag
```
<div>
  <input />
  <input type="color" />
  <input type="file" />
  <input type="number" />
  <input type="datetime-local" />
  <input type="radio" />
  <input type="checkbox" />
</div>
```

`<select>`, `<option>` tags → Selects and Option
```
<div>
  <select id="farm-animals">
    <option class="animal" value="pig">Pig</option>
    <option class="animal" value="cow">Cow</option>
    <option class="animal" value="rooster">Rooster</option>
  </select>
</div>
```

`<div>` tag → Divs
- Short for division
- Generic container tag

`<form>` tag → Form
  
```
<form>
  <input type="text" />
  <textarea></textarea>
</form>
```
`<ul>`, `<ol>`, `<li>` tags → Lists
`<textarea>` tag → Textarea
  
```
<textarea
  id="textarea-id"
  placeholder="this is temporary text"
  rows="4"
></textarea>
```

`<table>`, `<tr>`, `<td>` tags → Table
- table creates a table
- tr stands for table row
- td stands for table data, basically represents a cell in your table

```
<table id="coordinates">
  <tr class="top-row">
    <td>(0,0)</td>
    <td>(1,0)</td>
  </tr>
  <tr class="bottom-row">
    <td>(0,1)</td>
    <td>(1,1)</td>
  </tr>
</table>
```

## Meta HTML

```
<html>
  <head>
    <!-- *Metadata goes in here -->
    *
    <title>Page Title</title>
  </head>

  <body>
    <!-- *Actual Content Goes in Here -->*
    <p>Hello World!</p>
  </body>
</html>
```

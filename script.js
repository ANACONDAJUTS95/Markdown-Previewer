const initialMarkdown = `
### Headers

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5

### List
- List item one
- List item two
- List item three

### Link
[FreeCodeCamp](https://www.freecodecamp.org)
[Google](https://www.google.com)

### Text Decoration
*italic*

**bold**

***bold and italic text***

### Images
![alt text](https://wallpapers.com/images/hd/cute-marvel-lcjj8y05qp927saf.jpg)

### Blockquote

> To Be, or not to be

### Code
\`npm install create-react-app -g\`

### Codeblock
\`\`\`
function addToNumbers(a,b){
 return a+b;
}
\`\`\`
`;

// Simple function to convert markdown to HTML
function markdownToHTML(markdown) {
    return markdown
        .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
        .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
        .replace(/\*\*\*(.*)\*\*\*/gim, '<b><i>$1</i></b>')
        .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
        .replace(/\*(.*)\*/gim, '<i>$1</i>')
        .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
        .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
        .replace(/\`(.*?)\`/gim, '<code>$1</code>')
        .replace(/\n$/gim, '<br />')
        .replace(/\n/gim, '<br />');
}

// Set initial content
document.getElementById('editor').value = initialMarkdown;
document.getElementById('preview').innerHTML = markdownToHTML(initialMarkdown);

// Update preview as user types
document.getElementById('editor').addEventListener('input', function() {
    const markdownText = this.value;
    document.getElementById('preview').innerHTML = markdownToHTML(markdownText);
});

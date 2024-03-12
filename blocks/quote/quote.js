/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
export default function decorate(block) {
  // Decorate the quote block as a blockquote element
  const quoteDiv = block.querySelector(':scope > div > div');
  const blockquote = document.createElement('blockquote');
  blockquote.innerHTML = `"${quoteDiv.innerHTML}"`;
  quoteDiv.parentElement.replaceWith(blockquote);

  // decorate the autor
  const authorDiv = block.querySelector(':scope > div > div');
  if (authorDiv) {
    const p = document.createElement('p');
    p.innerHTML = `<em> - ${authorDiv.innerHTML} </em>`;
    authorDiv.parentElement.replaceWith(p);
  }
}

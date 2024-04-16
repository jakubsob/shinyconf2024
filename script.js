
const containers = document.querySelectorAll('div[data-animateid]');
containers.forEach(container => {
  const id = container.getAttribute('data-animateid');
  const pre = container.querySelector('pre.sourceCode')
  pre.setAttribute('data-id', id)
})

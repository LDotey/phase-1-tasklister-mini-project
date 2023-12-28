document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit',(e) => {
    e.preventDefault()
    buildTask(e.target['new-task-description'].value)
    form.reset()
  })
});
function buildTask(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = ' X '
  p.textContent = `${todo}  `
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
//listen for a submit event on the <form> element
//invoke preventDefault() method on the submit event when our event listener "sees" the event
//see the task string that I provided appear in the DOM after the submit button has been activated
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form');
  const input = document.querySelector('input');
  const tasks = document.querySelector('#tasks');
  
  let counter = 0
  form.addEventListener('submit', function(e) {
    let task = input.value;
    if(task) {
      counter++;
      let li = document.createElement("li");
      li.innerHTML = `${task}<span id="item_${counter}_x" class="x"> [x]</span>`;
      tasks.appendChild(li);
      input.value = "";
      
      let x = document.querySelector(`#item_${counter}_x`);
      x.addEventListener('click', function(event) {
        li.remove();
        event.stopPropagation();
      });
    }
    e.preventDefault();
  });
});



// we add this "document.addEventListener("DOMContentLoaded") because we want that all these thing happen after my DOM conten loded

document.addEventListener("DOMContentLoaded",()=>{
    const todoinput = document.getElementById("todo-input");
    const addtaskbutton = document.getElementById("add-task-btn");
    const todolist = document.getElementById("todolist");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    // we are going to store the tasks provided by us in an array and we  use || so that if we reload the page then it grab items from localstorage and using JSON.parse to parese it in string

    tasks.forEach(task => rendertask(task));

    addtaskbutton.addEventListener("click", () => {
      const tasktext = todoinput.value.trim();
      // Value use this for grabbing the value of our input and trim for removing extra space
      if (tasktext === "") return;

      const newtask = {
        id: Date.now(), // we give to get a unique id so that for every new task we have an object
        text: tasktext,
        completed: false,
      };
      tasks.push(newtask); // newtask (object ) is pushed in the array
      savetask();
      rendertask(newtask)
      todoinput.value = ""; // to clear the value of todoinput so that we can write new task
      console.log(tasks);
    });

    function rendertask(task) {
        const li=document.createElement("li")
        li.setAttribute("data-id",task.id)
        if(task.completed) li.classList.add("completed")
        li.innerHTML=`
        <span>${task.text}</span>
        <button>delete</button>`
   li.addEventListener("click",(e)=>{
    if(e.target.tagname=="BUTTON")  return;
    task.completed=!task.completed // it turns true to false and false to true
    li.classList.toggle("completed")
    savetask()
   });

   li.querySelector("button").addEventListener("click", (e)=>{
    e.stopPropagation() // prevent toggle from fring
    tasks=tasks.filter(t=> t.id !== task.id)
    li.remove()
    savetask();
   })

        todolist.appendChild(li)
    }

    // now we are adding task in local storage by pushing the array into local storage
    function savetask() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      // localstorage is an in built api and setitem() is used to provide item in it and here setitem take "key as string" and "value as string" so to convert our array we use JSON.stringfy and we want to save the task in local storage so we call this function before clearing the input
    }
})


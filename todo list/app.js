const taskinput = document.getElementById("input");
        const button = document.querySelector(".btn");
        const continueTodo = document.querySelector(".list");
        const pop = document.querySelector(".delete");

        function add() {
            const trimmedValue = taskinput.value.trim();
            if (trimmedValue !== "") {
                continueTodo.innerHTML+=`
                    <li class='a'>Password: ${trimmedValue}
                        <button class="delete" onclick="deleteItem(this)">Delete</button>
                    </li>`
                
                taskinput.value = ""; 
            }
        }

      
        button.addEventListener("click", add);

       
        function deleteItem(button) {
            button.parentElement.remove(); 
        }

        // Clear all tasks
        pop.addEventListener("click", () => {
            const allTasks = document.querySelectorAll(".a");
            allTasks.forEach(task => task.remove()); 
        });

// let num = Math.round(Math.random() * 100); // Generates a random number between 0 and 100
// let number = prompt("ededi daxil edin");

// while(num!=number){
//     if(num>number){
//         alert("boyuk ")
//         number = prompt("ededi daxil edin");
//     }else if(num<number){
//         alert("kicik eded daxil edin" )
//         number = prompt("ededi daxil edin");
//     }else{
//         alert("tebrikler")
//         break;
//     }
// }
const localdata=JSON.parse(localStorage.getItem("cartlist"))
console.log(localdata)

let list=[]
if(localdata){
    list=localdata
}


const  burger=document.querySelector(".pizzas")

list.forEach(item => {
    burger.innerHTML += `
      <div class="pizza">
        <img src=${item.img} alt="${item.name}"  onerror="this.src='https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'">
        <h3>${item.name}</h3>
        <div class="btn">
          <p>$${item.price}</p>
          <button> ${item.count}</button>
        </div>
      </div>
    `;
  });

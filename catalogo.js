window.addEventListener("DOMContentLoaded", ()=>{
    const orderButtons= document.querySelectorAll("button[data-order]");
    console.log(orderButtons)
    orderButtons.forEach(item => {
        item.addEventListener('click', (event)=> {
            const button = event.currentTarget;
            const container = button.parentNode;
            let order={
                title: container.querySelector('.title').innerText,
                price: container.querySelector('.price').innerText,
                id: button.getAttribute("data-order")
            }
            localStorage.setItem("order", JSON.stringify(order));
            const url = window.location.href.replace("catalogo.html","order.html");
            window.location.href = url;
        })
    })
})
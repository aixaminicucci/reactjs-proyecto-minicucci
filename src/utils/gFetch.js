let productos = [
    { id: 'macarons' ,categoria: 'dulce', nombre: "Macarons",   precio: 450, foto:'https://ayulem.com.ar/wp-content/uploads/2022/09/Macarons-2-Ayulem.jpg' },
    { id: 'brownie' ,categoria: 'dulce', nombre: "Mini Brownie", precio: 950, foto:'https://ayulem.com.ar/wp-content/uploads/2019/03/Ayulem-115_MiniBrownie.jpg' },
    { id: 'lemonpie' ,categoria: 'dulce', nombre: "Lemon pie", precio: 3500, foto:'https://imgs.search.brave.com/-5q-uknzi7A5KmcPDLpMhmj1CtCI3D2Dhev_8RJRt6k/rs:fit:1024:768:1/g:ce/aHR0cHM6Ly9tZWRp/YS50b2RvanVqdXku/Y29tL2FkanVudG9z/LzIyNy9pbWFnZW5l/cy8wMDAvMjE1LzAw/MDAyMTU1MjYuanBn' },
    { id: 'croissant' ,categoria: 'salado', nombre: "Croissant", precio: 590, foto:'https://ayulem.com.ar/wp-content/uploads/2020/07/croissant-ayulem-1.jpg' },
    { id: 'cremona' ,categoria: 'salado', nombre: "Mini cremona", precio: 600, foto:'https://ayulem.com.ar/wp-content/uploads/2020/08/cremona-ayulem-81.jpg' },
    { id: 'bizcochos' ,categoria: 'salado', nombre: "Bizchochitos salados", precio: 650, foto:'https://ayulem.com.ar/wp-content/uploads/2020/08/biscochitos-de-grasa-ayulem.jpg' }  
  ] 


export const gFetch = (id) => {
    return new Promise((resolve)=>{
       
        setTimeout(()=>{
          
            resolve(id ? productos.find(prod => prod.id === id) : productos) 
        }, 1000)
    })
} 

const products = [ 
    {id:1,name:'producto1',category:'RUGBY',price:1,stock:1,initial:0},
    {id:2,name:'producto2',category:'FUTBOL',price:2,stock:2,initial:1},
    {id:3,name:'producto3',category:'BASQUET',price:3,stock:3,initial:2},
    {id:4,name:'producto4',category:'RUNNING',price:4,stock:4,initial:3},
    {id:5,name:'producto5',category:'RUNNING',price:5,stock:5,initial:4},
    {id:6,name:'producto6',category:'GIMNASIO',price:6,stock:6,initial:5},
    {id:7,name:'producto7',category:'GIMNASIO',price:7,stock:7,initial:6},
    {id:8,name:'producto8',category:'GIMNASIO',price:8,stock:8,initial:7},
    {id:9,name:'producto9',category:'CROSSFIT',price:9,stock:9,initial:8},
    {id:10,name:'producto10',category:'CROSSFIT',price:10,stock:10,initial:10}
  ]

export const task = new Promise((resolve, reject) => {
    if(products.length>0){
        setTimeout(()=>{

            resolve(products)

        },3000);
    } else {
        setTimeout(()=>{

            reject('No existen productos')

        },3000)
    }
})
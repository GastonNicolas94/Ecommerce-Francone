const products = [ 

    {id:'1',name:'producto1',category:'SHORTS',sport:'RUNNING',price:1,stock:1,initial:0, img:"https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-puma-running-favourite-5-pulgadas-petroleo-640020520215042-1.jpg"},
    
    {id:'2',name:'producto2',category:'SHORTS',sport:'FUTBOL',price:2,stock:2,initial:1,img:"https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-de-boca-adidas-alternativo-ni_o-blanco-100020gl4172001-1.jpg"},
    
    {id:'3',name:'producto3',category:'SHORTS',sport:'RUNNING',price:3,stock:3,initial:2,img:"https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-topper-running-mix-blanco-800020164407001-1.jpg"},
    
    {id:'4',name:'producto4',category:'SHORTS',sport:'FUTBOL',price:4,stock:4,initial:3,img:"https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-de-rugby-flash-azul-270020042010ma0-1.jpg"},
    
    {id:'5',name:'producto5',category:'GUANTES',sport:'FUTBOL',price:5,stock:5,initial:4,img:"https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/g/u/guantes-de-arquero-adidas-predator-lge-unisex-negro-100040fs0404001-1.jpg"},
    
    {id:'6',name:'producto6',category:'CALZAS',sport:'GIMNASIO',price:6,stock:6,initial:5,img:"https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/calza-termica-umbro-ar-2022-negra-7550211tw084577-1.jpg"},
    
    {id:'7',name:'producto7',category:'CALZAS',sport:'GIMNASIO',price:7,stock:7,initial:6,img:"https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/calza-corta-procer-entrenamiento-negra-690020000061001-1.jpg"},
    
    {id:'8',name:'producto8',category:'CALZAS',sport:'CROSSFIT',price:8,stock:8,initial:7,img:"https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/calza-corta-gilbert-lycra-azul-340020000602003-1.jpg"},
    
    {id:'9',name:'producto9',category:'REMERAS',sport:'CROSSFIT',price:9,stock:9,initial:8,img:"https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-basica-2561164-800020163534001-1.jpg"},
    
    {id:'10',name:'producto10',category:'REMERAS',sport:'FUTBOL',price:10,stock:10,initial:10,img:"https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-de-boca-adidas-arquero-rosa-100020ga7548001-1.jpg"}
  
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

export const getFech = new Promise((resolve, reject) => {
    const condition = true
    if(condition){

        resolve(products)
    }else {
        reject('404')
    }
})
const express= require("express");

const app= express();

const PORT= 3000;


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const productos=[
    {
        id: 1,
        nombre:"manzana" ,
        cantidad: 0,
        precio: 1000 ,
        stock:200
    },
    {
        id: 2,
        nombre: "pera",
        cantidad: 0,
        precio: 1200,
        stock: 200
    },
    {
        id: 3,
        nombre: "mandarinas",
        cantidad: 0,
        precio: 1500,
        stock:200
    },
    {
        id:4,
        nombre:"palta",
        cantidad:0,
        precio:3000,
        stock:50
    }
];


app.get(`/`, (req, res)=>{                  
    res.send(`inicio`)
});

app.get(`/api/productos/:nombre`,(req,res)=>{
    const nombre= req.params.nombre;
    const resultado= productos.find((prod)=>prod.nombre==nombre)
    resultado?(res.send(JSON.stringify(resultado.nombre))):(res.status(404).send("producto no encontrado",404))
    console.log(req.query.dulces)
});

app.get(`/products`,(req,res)=>{
    const limit= req.query.limit||productos.length //typeof num 
    res.json(productos.slice(0,limit))
});

app.get(`/products/:id`,(req,res)=>{
    const id= parseInt(req.params.id);
    
    const producto=productos.find((prod)=>prod.id==id);
    producto?(res.send({producto})):(res.send("no se encontro el producto"))
})






app.listen(PORT,()=>{
    console.log(`servidor escuchando en el puerto ${PORT}`)
})
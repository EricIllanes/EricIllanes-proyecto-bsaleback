# BackEnd proyecto test de Bsale

El proyecto fue realizado con Sequelize y MySQL


Rutas:

#
## 1.- RUTAS DE PRODUCTOS:
 * GET ALL PRODUCTS:
```
bsaletest-back.herokuapp.com/product
```

- Respuesta de servidor:


```
[{
"id": 5,
"name": "ENERGETICA MR BIG",
"url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
"price": 1490,
"discount": 20,
"category": 1,
"categories": {
"name": "bebida energetica"
}
},
{
"id": 6,
"name": "ENERGETICA RED BULL",
"url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
"price": 1490,
"discount": 0,
"category": 1,
"categories": {
"name": "bebida energetica"
}
},
{...}
]
```
* GET PRODUCT BY NAME:
```
bsaletest-back.herokuapp.com/productsearch?name=
```
- Respuesta del servidor (ejemplo búsqueda "fanta"):
```
[
{
"id": 52,
"name": "Fanta",
"url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/fanta_2lt5236.jpg",
"price": 1500,
"discount": 0,
"category": 4,
"categories": {
"name": "bebida"
}
}
]
```
## 2.- RUTAS DE CATEGORÍAS:
*GET ALL CATEGORIES:
```
bsaletest-back.herokuapp.com/category
```
- Respuesta del servidor:
```
[
"bebida energetica",
"pisco",
"ron",
"bebida",
"snack",
"cerveza",
"vodka"
]
```

```
LINK ASOCIADOS
```
* Puede probar el deploy (hecho con vercel y heroku) acá: 
    - FrontEnd: https://frontend-bsale-j1xi2njn4-ericillanes.vercel.app/
    - Backend: https://bsaletest-back.herokuapp.com/

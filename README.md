# objetos en Javascript

hemos vistos los objetos primitivos de javascript como:

- Numbers
- Booleans
- Strings
- Symbols
- Null
- Undefined 

otros elementos de javascript muy utilzados, pero que no son primitivos, ya que tienen "superpoderes"(métodos) son:

- Arreglos
- Objetos

Ejemplos

```Javascript
var arr = []
var abj = {}
```
Los arreglos se declaran utilizando `[]` y los objetos se declaran con `{}`.

Los arreglos tienen sus elementos ordenados por indice en cambios los objetos no tienen indice. Sus elementos se rescatan u obtienen mediante **llaves**. Ejemplo

``` javascript
var hero = {
    name: "Thor",
    weapon: "Martillo"
    hair: "Rubio"
}
console.log(hero["name"])
console.log(hero["weapon"])
console.log(hero["hair"])
```
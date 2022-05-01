# alkemy2

Alkemy Challenge Movies

TODO:

Char-Movie -> Many to Many

Character searches:
● GET /characters?name=nombre
● GET /characters?age=edad
● GET /characters?movies=idMovie

Movie Searches:

El término de búsqueda, filtro u ordenación se deberán especificar como parámetros de query:
● GET /movies?name=nombre
● GET /movies?genre=idGenero
● GET /movies?order=ASC | DESC

---Low Priority
Envío de emails

Al registrarse en el sitio, el usuario deberá recibir un email de bienvenida. Es recomendable, la
utilización de algún servicio de terceros como SendGrid.

Documentación

Es deseable documentar los endpoints utilizando alguna herramienta como Postman o
Swagger.

Tests

De forma opcional, se podrán agregar tests de los diferentes endpoints de la APP, verificando
posibles escenarios de error:

● Campos faltantes o con un formato inválido en BODY de las peticiones
● Acceso a recursos inexistentes en endpoints de detalle
Los tests pueden realizarse utilizando Mocha + Chai.

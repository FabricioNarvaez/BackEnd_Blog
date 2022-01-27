# BackEnd_Blog
BackEnd de blog desarrollado en NodeJS

En este proyecto se encuentra el backend de un blog que se conecta a la base de datos no relacional MondoDB.

Por un lado, en "controllers/article.js", están desarrolladas las acciones que van a permitir hacer cambios o peticiones al servidor.

Por otro lado, en "models/article.js", se especifica la estructura que cada artículo van a tener a la hora de guardarlos en la base de datos.

En "routes/article.js" se especifican las direcciones válidas para hacer las peticiones al servidor. 

Y por último, en el archivo "app.js" se definen los MiddLewares y CORS. Y en el archivo "index.js" se hace la conexión a la base de datos con el módulo de "mongoose".

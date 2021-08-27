# GITHUB
Github es la plataforma online para trabajar con proyectos en git, en simples palabras es utilizar git de forma remota pero entiendase que son cosas totamente distintas

## Crear una cuenta en Github
Para comenzar a trabajar con github tienes que crear una nueva cuenta, es gratis así que no pierdes nada en este punto :)

## Crear una nuevo repositorio
Para subir nuestro proyecto debemos crear un nuevo repositorio, al momento de la creación nos mostrará una serie de comandos para subir el proyecto.

```
git remote add origin https://github.com/bluuweb/tutorial-github.git
git push -u origin master
```

Al ejecutar estas líneas de comando te pedirá el usuario y contraseña de tu cuenta de github.

``` js
// Nos muestra en que repositorio estamos enlazados remotamente.
git remote -v
```

## Subir los tags
Por defecto si creaste un proyecto con diferentes versiones no subirá los tags, para eso tenemos el siguiente comando.

```
git push --tags
```

## Push
Al ejecutar el comando `git push` estaremos subiendo todos los cambios locales al servidor remoto de github, ten en cuenta que tienes que estar enlazado con tu repositorio, para eso puedes utilizar `git remote -v` luego ejecuta:

```
git push
```

## Pull
Cuando realizamos cambios directamente en github pero no de forma local, es esencial realizar un pull, donde descargaremos los cambios realizados para seguir trabajando normalmente. <br>
Es importante estar enlazados remotamente, puedes verificar con: `git remote -v`, luego ejecuta:

```
git pull
```

## Fetch
Este comando hace la comparación de nuestros archivos locales con los del servidor, si existiera alguna diferencia nos pediría realizar un `get pull` para realizar un match de nuestros arhivos locales.

```
git fetch
```

## Clonar repositorio
Para descargar un repositorio completo basta con tomar la url ej: `https://github.com/bluuweb/tutorial-github.git` y ejecutar el siguiente comando en alguna carpeta de su computadora.

```
git clone https://github.com/bluuweb/tutorial-github.git nombreCarpeta
```
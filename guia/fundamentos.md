# Fundamentos de GIT
En este apartado podrás comenzar a trabajar con git.

## Comandos básicos
Aprendamos los primeros comandos con git

``` js
// Conocer la versión de git instalada
git version
```

``` js
// Ayuda sobre los comandos
git help
```

``` js
// Iniciar un nuevo repositorio
// Crear la carpeta oculta .git
git init
```

``` js
// Ver que archivos no han sido registrados
git status
```

``` js
// Agregar todos los archivos para que esté pendiente de los cambios
git add .
```

``` js
// Crear commit (fotografía del proyecto en ese momento)
git commit -m "primer commit"
```

``` js
// Muestra la lista de commit del mas reciente al más antigüo
git log
```

En resumidas cuentas nosotros realizamos cambios en nuestros archivos, el comando `status` verificará que archivos han sidos modificados.
Cuando deseemos registrar esos cambios tendremos que agregarlos con `add .` así ya estará listo para poder hacer un commit.
El `commit` realiza la copia de ese instante para poder volver en el tiempo si es que es necesario.

## Trucos
``` js
// Muestra en una línea los commit realizados
git log --oneline
```

``` js
// Muestra en una línea los commit realizados pero más elegante
git log --oneline --decorate --all --graph
```

``` js
// Solo muestra los archivos modificados
git status -s
```

::: tip Diferencias entre -- y -
`--decorate` hace referencia a una palabra <br>
`-s` hace referencia al comando o a varios comandos, `-sa` serían dos comandos diferentes
:::

``` js
// Vemos información de la rama maestra
git status -s -b
git status -sb //Hace lo mismo que el comando anterior
```

## Creando alias globales
Los alias nos sirven para crear atajos de comandos, podemos guardar diferentes alias de forma global y quedarán guardados en la configuración de git.

``` js
// Guardamos el alias "lg" que ejecutará todo lo que está entre comillas
git config --global alias.lg "log --oneline --decorate --all --graph"
```

``` js
// Para ver el archivo config con los alias creados
git config --global -e
```

::: tip Salir del modo edición
Para salir del modo edición de la líneas de comando precionar `:q`, en caso de realizar algún cambio sin guardar escribir `:qa`
:::

``` js
// Modo lectura sin poder modificar
git config --global -l
```

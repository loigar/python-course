# 🎮 CAPÍTULO 0
# 🚀 ¡BIENVENIDO AL MUNDO DE PYTHON!

../assets/imagenes/capitulo_0_bienvenido_python.png

> 🌟 **COMIENZA LA AVENTURA**
>
> Si has llegado hasta aquí, significa que estás preparado para dar un paso enorme.
>
> Ya sabes crear proyectos con Scratch.
>
> Has movido personajes.
>
> Has conseguido puntos.
>
> Has creado juegos y animaciones.
>
> Ahora vamos a aprender a hacer lo mismo de una forma diferente:
>
> 🐍 Utilizando Python.
>
> 🚀 Construyendo videojuegos reales.
>
> 🎮 Convirtiéndonos en auténticos desarrolladores.
>
> ¡Prepárate para iniciar tu aventura como programador!

---

# 🎯 MISIÓN DE ESTE CAPÍTULO

Antes de crear nuestro primer videojuego necesitamos preparar nuestro ordenador.

Al terminar este capítulo podrás:

✅ Instalar Python.

✅ Instalar Thonny.

✅ Instalar Pygame Zero.

✅ Crear tus primeros programas.

✅ Organizar tus proyectos.

✅ Ejecutar código por primera vez.

---

# ⭐ LO QUE APRENDERÁS

| Habilidad | ¿Para qué sirve? |
|------------|------------|
| ✅ Python | Crear videojuegos |
| ✅ Thonny | Escribir programas |
| ✅ Pygame Zero | Construir juegos fácilmente |
| ✅ Archivos `.py` | Guardar proyectos |
| ✅ print() | Mostrar mensajes |
| ✅ Terminal | Instalar herramientas |

---

# 🕹️ TU NUEVA MISIÓN

Hasta ahora utilizabas bloques de colores en Scratch.

```text
🧱 Mover
🧱 Girar
🧱 Repetir
🧱 Esperar
```

Ahora escribiremos instrucciones con texto.

Por ejemplo:

```python
print("Hola")
```

Esto también es programación.

La diferencia es que ahora utilizaremos un lenguaje profesional.

---

# 🐍 ¿QUÉ ES PYTHON?

Python es uno de los lenguajes de programación más populares del mundo.

Se utiliza para:

✅ Crear videojuegos.

✅ Desarrollar aplicaciones.

✅ Crear páginas web.

✅ Programar robots.

✅ Trabajar con inteligencia artificial.

✅ Analizar datos científicos.

Miles de programadores utilizan Python cada día.

Y ahora tú también vas a empezar a usarlo.

---

# 🧰 ¿QUÉ NECESITAMOS?

Para crear videojuegos necesitaremos tres herramientas.

---

## 🐍 Python

Python es el lenguaje que utilizaremos para escribir nuestras instrucciones.

Es el programa que interpreta y ejecuta nuestro código.

Piensa en Python como el traductor que convierte nuestras órdenes en acciones que entiende el ordenador.

---

## 💻 Thonny

Thonny será nuestro editor de código.

Es sencillo.

Es gratuito.

Y está pensado especialmente para aprender Python.

Será nuestro cuaderno de programación.

---

## 🎮 Pygame Zero

Pygame Zero es una herramienta que facilita la creación de videojuegos.

Gracias a ella podremos:

✅ Dibujar personajes.

✅ Mover objetos.

✅ Detectar teclas.

✅ Detectar colisiones.

✅ Crear videojuegos sin complicarnos demasiado.

---

# 💡 ¿QUÉ ES UN IDE?

IDE significa:

**Entorno de Desarrollo Integrado**

Aunque el nombre parezca complicado, la idea es sencilla.

Piensa en un IDE como un cuaderno inteligente para programadores.

Con él puedes:

✅ Escribir código.

✅ Guardar proyectos.

✅ Ejecutar programas.

✅ Encontrar errores.

✅ Probar cambios.

✅ Aprender más rápido.

---

## 🏆 Nuestro IDE: Thonny

Durante todo el libro utilizaremos:

```text
Thonny
```

Porque es:

✅ Gratuito.

✅ Fácil de utilizar.

✅ Perfecto para principiantes.

✅ Compatible con Python.

Puedes descargarlo desde:

```text
https://thonny.org
```

---

# 🛠️ INSTALAMOS PYTHON Y THONNY

## Paso 1

Visita:

```text
https://thonny.org
```

---

## Paso 2

Descarga la versión correspondiente a tu sistema operativo:

🪟 Windows

🍎 macOS

🐧 Linux

---

## Paso 3

Ejecuta el instalador.

En muchos casos Thonny instala Python automáticamente.

---

## ¿Y si Python no viene incluido?

No pasa nada.

Puedes descargarlo desde:

```text
https://www.python.org/downloads
```

---

## 🤔 ¿Necesitamos un compilador?

No.

Python utiliza normalmente un intérprete.

Por eso no necesitamos instalar compiladores adicionales.

---

# 🎮 INSTALAMOS PYGAME ZERO

¡Ha llegado el momento de preparar nuestro laboratorio de videojuegos!

Pygame Zero nos ayudará a crear juegos de forma sencilla.

---

## Opción 1: Desde Thonny

Abre:

```text
Herramientas
↓
Gestionar paquetes
```

Después busca:

```text
pgzero
```

y pulsa instalar.

---

## Opción 2: Utilizando la terminal

### 🪟 Windows

```bash
py -m pip install pgzero
```

---

### 🍎 macOS y 🐧 Linux

```bash
python3 -m pip install pgzero
```

---

Espera unos minutos mientras se completa la instalación.

---

## ✅ ¿Cómo comprobamos que funciona?

Prueba:

```bash
pgzrun --version
```

Si aparece la versión de Pygame Zero, todo está listo.

---

# 📁 CREAMOS NUESTRA CARPETA DE VIDEOJUEGOS

Antes de empezar conviene organizar nuestros proyectos.

Crea una carpeta llamada:

```text
Mis videojuegos Python
```

Dentro guardaremos todos los ejercicios.

---

## Estructura recomendada

```text
Mis videojuegos Python/
│
├── juego01.py
├── juego02.py
├── juego03.py
├── juego04.py
└── ...
```

---

## 📌 ¿Qué significa .py?

La extensión:

```text
.py
```

indica que el archivo contiene código Python.

---

# 🛠️ TU PRIMER PROGRAMA

Ha llegado el momento de escribir código por primera vez.

Abre Thonny.

Crea un archivo nuevo.

Escribe:

```python
print("¡Hola, mundo!")
print("Voy a crear videojuegos con Python")
```

---

## Guarda el archivo

Utiliza el nombre:

```text
hola.py
```

---

## Ejecuta el programa

Puedes:

✅ Pulsar el botón Ejecutar.

✅ Pulsar la tecla F5.

---

## Resultado esperado

En la parte inferior aparecerá:

```text
¡Hola, mundo!
Voy a crear videojuegos con Python
```

🎉 ¡Acabas de ejecutar tu primer programa Python!

---

# 🔍 ¿QUÉ SIGNIFICA print()?

La instrucción:

```python
print()
```

sirve para mostrar información en pantalla.

Por ejemplo:

```python
print("Hola")
```

mostrará:

```text
Hola
```

---

## Comparación con Scratch

En Scratch podríamos usar:

```text
Decir "Hola"
```

En Python utilizamos:

```python
print("Hola")
```

La idea es muy parecida.

---

# 💡 CONCEPTO CLAVE
## Los programas siguen instrucciones

Los ordenadores no adivinan lo que queremos.

Necesitan instrucciones claras.

Por ejemplo:

```python
print("Hola")
```

Indica:

```text
Muestra el mensaje Hola
```

---

## 🎯 Todo programa está formado por instrucciones

Ejemplos:

✅ Mostrar mensajes.

✅ Mover personajes.

✅ Crear puntuaciones.

✅ Detectar teclas.

✅ Reproducir sonidos.

---

# 🔄 DE SCRATCH A PYTHON

| En Scratch | En Python |
|------------|------------|
| Decir "Hola" | `print("Hola")` |
| Variable | `puntos = 0` |
| Guardar proyecto | Archivo `.py` |
| Ejecutar | F5 |
| Bloques | Código escrito |

---

# 🏆 ZONA DE ENTRENAMIENTO

## ⭐ Nivel Fácil

Prueba:

```python
print("Me gusta programar")
```

---

## ⭐⭐ Nivel Medio

Escribe tres mensajes distintos.

Por ejemplo:

```python
print("Hola")
print("Me llamo...")
print("Voy a crear videojuegos")
```

---

## ⭐⭐⭐ Nivel Experto

Crea una presentación sobre ti.

Por ejemplo:

```python
print("Nombre: Lucas")
print("Edad: 11")
print("Juego favorito: Minecraft")
print("Objetivo: Aprender Python")
```

---

# 🚀 RETO DEL CREADOR

Personaliza tu programa.

Añade:

✅ Tu nombre.

✅ Tu edad.

✅ Tu videojuego favorito.

✅ El videojuego que te gustaría crear.

---

## 🚀 Mi mejora

____________________________________________________

____________________________________________________

____________________________________________________

---

# 🎮 PRUEBA SUPERADA

Antes de continuar comprueba que puedes:

✅ Abrir Thonny.

✅ Crear un archivo nuevo.

✅ Escribir código Python.

✅ Guardar archivos `.py`.

✅ Ejecutar programas.

✅ Instalar Pygame Zero.

---

# 🛠️ ERRORES FRECUENTES Y SOLUCIONES

### ❌ Error

```text
ModuleNotFoundError:
No module named 'pgzrun'
```

### Solución

Instalar Pygame Zero:

```bash
py -m pip install pgzero
```

o

```bash
python3 -m pip install pgzero
```

---

### ❌ Python no se ejecuta

Comprueba que Python está instalado correctamente.

Puedes verificarlo con:

```bash
python --version
```

---

### ❌ No encuentro Thonny

Vuelve a descargarlo desde:

```text
https://thonny.org
```

---

### ❌ El programa no muestra nada

Comprueba que has escrito:

```python
print("Hola")
```

incluyendo los paréntesis y las comillas.

---

### ❌ Error de sintaxis

Un error muy común es olvidarse de cerrar una comilla.

Incorrecto:

```python
print("Hola)
```

Correcto:

```python
print("Hola")
```

---

## 🔍 LISTA RÁPIDA DE COMPROBACIÓN

✅ ¿Está instalado Python?

✅ ¿Está instalado Thonny?

✅ ¿Está instalado Pygame Zero?

✅ ¿Has creado la carpeta de proyectos?

✅ ¿Has ejecutado `hola.py`?

✅ ¿Has visto los mensajes en pantalla?

---

# 📊 AUTOEVALUACIÓN

| Objetivo | 😀 | 😐 | 😕 |
|-----------|---|---|---|
| He instalado Thonny | ⬜ | ⬜ | ⬜ |
| He instalado Python | ⬜ | ⬜ | ⬜ |
| He instalado Pygame Zero | ⬜ | ⬜ | ⬜ |
| He ejecutado hola.py | ⬜ | ⬜ | ⬜ |
| Estoy listo para empezar | ⬜ | ⬜ | ⬜ |

---

# 🌟 LO QUE HAS APRENDIDO

🎉 ¡Enhorabuena!

Ya tienes todo preparado para empezar a crear videojuegos.

Ahora sabes:

✅ Qué es Python.

✅ Qué es Thonny.

✅ Qué es Pygame Zero.

✅ Qué es un IDE.

✅ Cómo ejecutar programas.

✅ Cómo organizar tus proyectos.

✅ Cómo mostrar mensajes con `print()`.

🚀 En el próximo capítulo construirás tu primer videojuego: **¡Atrapa las Estrellas!**
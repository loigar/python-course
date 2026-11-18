# ⭐ CAPÍTULO 1
# 🌌 ¡ATRAPA LAS ESTRELLAS!

../assets/imagenes/capitulo_1_atrapa_las_estrellas.png

> ✨ **UNA NOCHE MÁGICA**
>
> Esta noche está ocurriendo algo extraordinario.
>
> Las estrellas han comenzado a caer del cielo.
>
> Algunas desaparecen rápidamente, pero otras pueden recogerse utilizando una cesta mágica.
>
> ⭐ Tu misión será atrapar tantas estrellas como puedas.
>
> 🏆 ¿Cuál será tu récord?

---

# 🎯 MISIÓN DEL CAPÍTULO

Cuando termines este proyecto habrás creado tu primer videojuego con Python.

Podrás:

✅ Mover una cesta con el teclado.

✅ Atrapar estrellas.

✅ Conseguir puntos.

✅ Crear un juego completamente funcional.

---

# ⭐ LO QUE APRENDERÁS

| Habilidad | ¿Para qué sirve? |
|------------|------------|
| ✅ Variables | Guardar la puntuación |
| ✅ Actores | Mostrar personajes |
| ✅ Eventos | Detectar teclas |
| ✅ Movimiento | Mover objetos |
| ✅ Colisiones | Detectar capturas |
| ✅ Funciones | Organizar el código |

---

# 🕹️ CÓMO SERÁ EL VIDEOJUEGO

```text
       ⭐

           ⭐


⭐                ⭐


     ⭐


====================
       🧺
====================
```

Tu cesta se moverá por la parte inferior de la pantalla mientras intentas recoger las estrellas que caen desde el cielo.

---

# 🛠️ PREPARAMOS EL PROYECTO

Antes de empezar necesitaremos instalar una herramienta llamada **Pygame Zero**.

Abre una terminal y escribe:

```bash
pip install pgzero
```

Después crea una carpeta para el proyecto:

```text
AtrapaLasEstrellas/
│
├── juego01.py
│
└── images/
    ├── basket.png
    └── star.png
```

---

# 📁 RECURSOS GRÁFICOS

Necesitarás dos imágenes pixel art.

## 🧺 basket.png

La cesta del jugador.

Características recomendadas:

- 64 × 64 píxeles
- Fondo transparente
- Estilo pixel art

---

## ⭐ star.png

La estrella que debemos capturar.

Características recomendadas:

- 32 × 32 píxeles
- Fondo transparente
- Color amarillo brillante

---

### ¿Cómo encuentra las imágenes Pygame Zero?

Cuando escribimos:

```python
basket = Actor("basket")
```

Pygame Zero busca automáticamente:

```text
images/basket.png
```

Y cuando escribimos:

```python
star = Actor("star")
```

busca:

```text
images/star.png
```

---

# 🛠️ PASO 1
## Crear la cesta

Vamos a crear nuestro personaje principal.

```python
basket = Actor("basket")

basket.pos = (400, 540)
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Una cesta en pantalla.

✅ Un personaje controlable.

---

# 🛠️ PASO 2
## Crear una estrella

Necesitamos algo que atrapar.

```python
star = Actor("star")

star.pos = (400, 100)
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Un objetivo.

✅ Algo con lo que interactuar.

---

# 🛠️ PASO 3
## Mover la cesta

Ahora vamos a controlar la cesta con las flechas del teclado.

```python
if keyboard.left:
    basket.x -= 6

if keyboard.right:
    basket.x += 6
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Mover la cesta.

✅ Controlar el juego.

✅ Interactuar con el teclado.

---

# 🛠️ PASO 4
## Hacer caer la estrella

Las estrellas deben caer continuamente.

```python
star.y += 4
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Movimiento automático.

✅ Sensación de videojuego real.

---

# 🎮 CÓDIGO PRINCIPAL

> ✨ Este es tu primer videojuego completo.
>
> No te preocupes si todavía no entiendes todas las líneas.
>
> Lo importante es probar el juego y experimentar.

```python
import pgzrun
from random import randint

WIDTH = 800
HEIGHT = 600

basket = Actor("basket")
basket.pos = (400, 540)

star = Actor("star")
star.pos = (randint(50, 750), 0)

score = 0


def draw():

    screen.fill((10, 20, 60))

    basket.draw()
    star.draw()

    screen.draw.text(
        f"Puntos: {score}",
        (20, 20),
        fontsize=40,
        color="white"
    )


def update():

    global score

    if keyboard.left:
        basket.x -= 6

    if keyboard.right:
        basket.x += 6

    basket.x = max(
        40,
        min(WIDTH - 40, basket.x)
    )

    star.y += 4

    if basket.colliderect(star):

        score += 1

        star.pos = (
            randint(50, 750),
            0
        )

    if star.y > HEIGHT:

        star.pos = (
            randint(50, 750),
            0
        )


pgzrun.go()
```

---

# 🔍 CÓMO FUNCIONA

## 1️⃣ Creamos la cesta

```python
basket = Actor("basket")
```

Representa al jugador.

---

## 2️⃣ Creamos la estrella

```python
star = Actor("star")
```

Representa el objeto que debemos recoger.

---

## 3️⃣ Leemos el teclado

```python
if keyboard.left:
```

Comprueba si la flecha izquierda está pulsada.

---

## 4️⃣ Movemos la estrella

```python
star.y += 4
```

La estrella baja poco a poco.

---

## 5️⃣ Detectamos una captura

```python
basket.colliderect(star)
```

Comprueba si la estrella toca la cesta.

---

## 6️⃣ Sumamos puntos

```python
score += 1
```

Cada estrella vale un punto.

---

# 💡 CONCEPTO CLAVE
## Variables

Una variable es una caja donde guardamos información.

Por ejemplo:

```python
score = 0
```

Aquí almacenamos la puntuación.

---

Cuando capturamos una estrella:

```python
score += 1
```

el valor aumenta.

---

## 🎯 Las variables se utilizan para guardar:

✅ Puntos

✅ Vidas

✅ Tiempo

✅ Monedas

✅ Energía

✅ Nivel actual

---

# 🔄 DE SCRATCH A PYTHON

| En Scratch | En Python |
|------------|------------|
| Cambiar x por 10 | `basket.x += 10` |
| Variable puntos | `score` |
| Si toca objeto | `colliderect()` |
| Mostrar texto | `screen.draw.text()` |
| Por siempre | `update()` |

---

# 🏆 ZONA DE ENTRENAMIENTO

## ⭐ Nivel Fácil

Realiza una de estas mejoras:

- Cambia el color de fondo.
- Haz que la cesta se mueva más rápido.
- Reduce la velocidad de caída de las estrellas.

---

## ⭐⭐ Nivel Medio

- Añade una segunda estrella.
- Cambia el tamaño de la cesta.
- Muestra un mensaje cuando llegues a 10 puntos.

---

## ⭐⭐⭐ Nivel Experto

Crea una estrella especial que valga 5 puntos.

Pista:

```python
score += 5
```

---

# 🚀 RETO DEL CREADOR

Convierte tu juego en una competición.

Añade:

✅ Cronómetro.

✅ Récord personal.

✅ Pantalla de victoria.

✅ Diferentes tipos de estrellas.

---

## 🚀 Mi mejora

____________________________________________________

____________________________________________________

____________________________________________________

---

# 🎮 MINI DESAFÍO

### Cazador de estrellas

Consigue:

⭐ 20 puntos

sin dejar escapar ninguna estrella.

□ Lo conseguí

□ Casi

□ Necesito practicar

---

# 🛠️ ERRORES FRECUENTES Y SOLUCIONES

### ❌ Error

```text
ModuleNotFoundError:
No module named 'pgzrun'
```

### Solución

Instala Pygame Zero:

```bash
pip install pgzero
```

---

### ❌ Error

```text
No image found like 'basket'
```

### Solución

Comprueba que existe:

```text
images/basket.png
```

---

### ❌ Error

```text
No image found like 'star'
```

### Solución

Comprueba que existe:

```text
images/star.png
```

---

### ❌ La cesta desaparece de la pantalla

### Posible causa

Has eliminado:

```python
basket.x = max(
    40,
    min(WIDTH - 40, basket.x)
)
```

Esta línea impide salir del área de juego.

---

### ❌ Los puntos no aumentan

### Comprueba

```python
score += 1
```

Debe estar dentro del bloque:

```python
if basket.colliderect(star):
```

---

## 🔍 Lista rápida de comprobación

✅ ¿Has instalado Pygame Zero?

✅ ¿Existen las imágenes?

✅ ¿Están dentro de la carpeta `images`?

✅ ¿Has guardado el archivo?

✅ ¿Lo ejecutas con:

```bash
pgzrun juego01.py
```

?

---

# 📊 AUTOEVALUACIÓN

| Objetivo | 😀 | 😐 | 😕 |
|-----------|---|---|---|
| He ejecutado el juego | ⬜ | ⬜ | ⬜ |
| Entiendo qué es una variable | ⬜ | ⬜ | ⬜ |
| Entiendo qué es una colisión | ⬜ | ⬜ | ⬜ |
| He modificado el código | ⬜ | ⬜ | ⬜ |
| He completado algún reto | ⬜ | ⬜ | ⬜ |

---

# 🌟 LO QUE HAS APRENDIDO

🎉 ¡ENHORABUENA!

Has creado tu primer videojuego completo con Python.

Ahora sabes:

✅ Utilizar variables.

✅ Mover personajes.

✅ Detectar colisiones.

✅ Crear puntuaciones.

✅ Utilizar imágenes pixel art.

✅ Construir un juego funcional.

🚀 En el próximo capítulo viajarás al espacio y aprenderás a sobrevivir esquivando meteoritos.
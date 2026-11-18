# 🎯 CAPÍTULO 3
# 🖱️ ¡EL CAZADOR DE CLICS!

../assets/imagenes/capitulo_3_el_cazador_de_clics.png

> 🚨 **MISIÓN ESPECIAL**
>
> La Academia de Reflejos necesita nuevos agentes.
>
> Para superar la prueba deberás ser capaz de localizar objetivos que aparecen por toda la pantalla y hacer clic sobre ellos antes de que desaparezcan.
>
> 🎯 Apunta.
>
> 🖱️ Haz clic.
>
> ⭐ Consigue puntos.
>
> 🏆 Logra la mejor puntuación posible.

---

# 🎯 MISIÓN DEL CAPÍTULO

Cuando termines este proyecto habrás creado tu primer videojuego controlado con el ratón.

Podrás:

✅ Detectar clics.

✅ Mover objetivos aleatoriamente.

✅ Crear una puntuación.

✅ Gestionar vidas.

✅ Crear un juego basado en reflejos.

---

# ⭐ LO QUE APRENDERÁS

| Habilidad | ¿Para qué sirve? |
|------------|------------|
| ✅ Eventos | Detectar acciones del jugador |
| ✅ Ratón | Controlar el juego |
| ✅ Variables | Guardar puntos y vidas |
| ✅ Colisiones | Detectar clics sobre objetos |
| ✅ Aleatoriedad | Cambiar posiciones |
| ✅ Condiciones | Crear retos y objetivos |

---

# 🕹️ CÓMO SERÁ EL VIDEOJUEGO

```text
┌─────────────────────────────┐
│                             │
│              🎯             │
│                             │
│                             │
│    🎯                       │
│                             │
└─────────────────────────────┘


🖱️ Haz clic sobre la diana

⭐ Gana puntos

🏆 Consigue el récord
```

---

# 🛠️ PREPARAMOS EL PROYECTO

1. Abre Thonny.
2. Crea un archivo nuevo.
3. Guárdalo como:

```text
juego03.py
```

Para ejecutarlo:

```bash
pgzrun juego03.py
```

---

# 📁 RECURSOS GRÁFICOS

Este capítulo puede hacerse sin imágenes.

Primero utilizaremos formas simples para entender mejor el código.

Más adelante podrás utilizar:

```text
images/
└── target.png
```

### 🎯 target.png

Características recomendadas:

- 64 × 64 píxeles
- Fondo transparente
- Estilo pixel art
- Diana roja y blanca

---

# 🛠️ PASO 1
## Crear nuestro objetivo

Vamos a crear una diana utilizando un rectángulo.

```python
target = Rect(
    250,
    150,
    50,
    50
)
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Un objetivo.

✅ Algo sobre lo que hacer clic.

---

# 🛠️ PASO 2
## Dibujar la diana

Vamos a representarla visualmente.

```python
screen.draw.filled_circle(
    (target.x + 25,
     target.y + 25),
    25,
    "red"
)
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Una diana visible.

✅ Un objetivo real para el jugador.

---

# 🛠️ PASO 3
## Detectar clics

Ahora vamos a usar el ratón.

```python
def on_mouse_down(pos):
```

Esta función se ejecuta automáticamente cada vez que hacemos clic.

---

### 🤔 ¿Qué hemos conseguido?

✅ Reaccionar al ratón.

✅ Interacción real con el juego.

---

# 🛠️ PASO 4
## Comprobar si hemos acertado

Necesitamos saber si el clic se ha realizado sobre la diana.

```python
target.collidepoint(pos)
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Detectar aciertos.

✅ Crear un objetivo.

---

# 🛠️ PASO 5
## Añadir puntos

Ahora convertiremos el ejercicio en un videojuego.

```python
score = 0
```

Cada acierto aumentará la puntuación.

---

# 🛠️ PASO 6
## Añadir vidas

Si tardamos demasiado perderemos una vida.

```python
lives = 3
```

Así el jugador tendrá un reto.

---

# 🎮 CÓDIGO PRINCIPAL

> 🎯 Este es tu primer videojuego basado en reflejos.
>
> Cuanto más rápido seas haciendo clic, más puntos conseguirás.

```python
import random

WIDTH = 600
HEIGHT = 400

target = Rect(
    250,
    150,
    50,
    50
)

score = 0
lives = 3

time_target = 0

game_over = False


def draw():

    screen.fill("darkgreen")

    # Diana

    screen.draw.filled_circle(
        (target.x + 25,
         target.y + 25),
        25,
        "red"
    )

    screen.draw.circle(
        (target.x + 25,
         target.y + 25),
        15,
        "white"
    )

    screen.draw.circle(
        (target.x + 25,
         target.y + 25),
        5,
        "red"
    )

    screen.draw.text(
        f"Puntos: {score}",
        (10, 10),
        color="white",
        fontsize=30
    )

    screen.draw.text(
        f"Vidas: {lives}",
        (470, 10),
        color="white",
        fontsize=30
    )

    if game_over:

        screen.draw.text(
            "GAME OVER",
            center=(300, 180),
            fontsize=50,
            color="yellow"
        )


def update():

    global time_target
    global lives
    global game_over

    if game_over:
        return

    time_target += 1

    if time_target > 120:

        lives -= 1

        move_target()

        time_target = 0

        if lives <= 0:
            game_over = True


def on_mouse_down(pos):

    global score
    global time_target

    if game_over:
        return

    if target.collidepoint(pos):

        score += 1

        move_target()

        time_target = 0


def move_target():

    target.x = random.randint(
        0,
        WIDTH - target.width
    )

    target.y = random.randint(
        40,
        HEIGHT - target.height
    )
```

---

# 🔍 CÓMO FUNCIONA

## 1️⃣ Creamos una diana

```python
target = Rect(...)
```

Representa el objetivo del juego.

---

## 2️⃣ Detectamos clics

```python
on_mouse_down(pos)
```

Se ejecuta cada vez que pulsamos el ratón.

---

## 3️⃣ Comprobamos el acierto

```python
target.collidepoint(pos)
```

Comprueba si hemos hecho clic sobre la diana.

---

## 4️⃣ Sumamos puntos

```python
score += 1
```

Cada acierto vale un punto.

---

## 5️⃣ Movemos la diana

```python
move_target()
```

Hace que aparezca en otra zona del tablero.

---

## 6️⃣ Gestionamos el tiempo

```python
time_target += 1
```

Cuenta cuánto tiempo lleva la diana en pantalla.

---

## 7️⃣ Perdemos vidas

```python
lives -= 1
```

Si tardamos demasiado.

---

# 💡 CONCEPTO CLAVE
## Los eventos

Los eventos permiten que el juego reaccione a las acciones del jugador.

Por ejemplo:

```python
on_mouse_down(pos)
```

se ejecuta cuando hacemos clic.

---

## 🎯 Los eventos sirven para:

✅ Pulsar botones.

✅ Mover personajes.

✅ Disparar.

✅ Saltar.

✅ Interactuar con objetos.

---

# 🔄 DE SCRATCH A PYTHON

| En Scratch | En Python |
|------------|------------|
| Al hacer clic | `on_mouse_down()` |
| Si toca puntero | `collidepoint()` |
| Variable puntos | `score` |
| Cambiar posición | `target.x = ...` |
| Número aleatorio | `random.randint()` |

---

# 🏆 ZONA DE ENTRENAMIENTO

## ⭐ Nivel Fácil

- Cambia el color de la diana.
- Cambia el tamaño de la diana.
- Cambia el color del fondo.

---

## ⭐⭐ Nivel Medio

- Empieza con 5 vidas.
- Reduce el tiempo disponible.
- Haz que la diana sea más pequeña.

---

## ⭐⭐⭐ Nivel Experto

Añade una segunda diana.

Pista:

```python
target2 = Rect(...)
```

---

# 🚀 RETO DEL CREADOR

Convierte el juego en una competición de reflejos.

Añade:

✅ Tiempo límite.

✅ Récord de puntuación.

✅ Diana dorada que vale más puntos.

✅ Niveles de dificultad.

✅ Sonidos.

---

## 🚀 Mi mejora

____________________________________________________

____________________________________________________

____________________________________________________

---

# 🎮 MINI DESAFÍO

### Modo Agente Secreto

Consigue:

🎯 15 puntos

antes de perder las tres vidas.

□ Lo conseguí

□ Casi

□ Necesito practicar

---

# 🛠️ ERRORES FRECUENTES Y SOLUCIONES

### ❌ La diana no aparece

Comprueba:

```python
target = Rect(...)
```

---

### ❌ Los clics no funcionan

Comprueba:

```python
def on_mouse_down(pos):
```

---

### ❌ Los puntos no aumentan

Comprueba:

```python
score += 1
```

---

### ❌ La diana nunca cambia de posición

Comprueba:

```python
move_target()
```

---

### ❌ Nunca aparece GAME OVER

Comprueba:

```python
if lives <= 0:
    game_over = True
```

---

## 🔍 Lista rápida de comprobación

✅ ¿Existe la función `on_mouse_down()`?

✅ ¿La diana aparece en pantalla?

✅ ¿La puntuación aumenta?

✅ ¿Se pierden vidas?

✅ ¿Funciona GAME OVER?

✅ ¿La diana cambia de lugar?

---

# 📊 AUTOEVALUACIÓN

| Objetivo | 😀 | 😐 | 😕 |
|-----------|---|---|---|
| He ejecutado el juego | ⬜ | ⬜ | ⬜ |
| Entiendo los eventos | ⬜ | ⬜ | ⬜ |
| Entiendo el ratón | ⬜ | ⬜ | ⬜ |
| Entiendo las variables | ⬜ | ⬜ | ⬜ |
| He completado algún reto | ⬜ | ⬜ | ⬜ |

---

# 🌟 LO QUE HAS APRENDIDO

🎉 ¡Excelente trabajo!

Has creado tu primer videojuego controlado con el ratón.

Ahora sabes:

✅ Detectar clics.

✅ Utilizar eventos.

✅ Mover objetos aleatoriamente.

✅ Crear puntuaciones.

✅ Gestionar vidas.

✅ Construir juegos de reflejos.

🚀 En el próximo capítulo viajarás al pasado para recrear uno de los videojuegos más famosos de todos los tiempos: **Pong**.
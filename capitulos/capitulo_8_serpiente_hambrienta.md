# 🐍 CAPÍTULO 8
# 🍎 ¡LA SERPIENTE HAMBRIENTA!

../assets/imagenes/capitulo_8_la_serpiente_hambrienta.png

> 🌟 **UNA AVENTURA MUY PECULIAR**
>
> Una pequeña serpiente acaba de despertarse.
>
> Tiene mucha hambre y necesita encontrar comida.
>
> Cada vez que coma una manzana crecerá un poco más.
>
> Pero cuidado...
>
> Cuanto más grande sea la serpiente, más difícil será controlar sus movimientos.
>
> 🍎 Come manzanas.
>
> 📈 Crece.
>
> 🏆 Consigue la máxima puntuación.

---

# 🎯 MISIÓN DEL CAPÍTULO

Cuando termines este proyecto habrás construido uno de los videojuegos más famosos de la historia.

Podrás:

✅ Mover una serpiente.

✅ Crear comida aleatoria.

✅ Utilizar listas para guardar posiciones.

✅ Hacer crecer un personaje.

✅ Crear una puntuación.

✅ Gestionar derrotas.

---

# ⭐ LO QUE APRENDERÁS

| Habilidad | ¿Para qué sirve? |
|------------|------------|
| ✅ Listas | Guardar partes de la serpiente |
| ✅ Variables | Guardar puntos |
| ✅ Números aleatorios | Crear comida |
| ✅ Movimiento automático | Avanzar continuamente |
| ✅ Colisiones | Detectar comida |
| ✅ Condiciones | Crear Game Over |

---

# 🕹️ CÓMO SERÁ EL VIDEOJUEGO

```text
┌────────────────────────────┐
│                            │
│               🍎           │
│                            │
│                            │
│         🟩🟩🟩             │
│                            │
└────────────────────────────┘
```

La serpiente avanzará sola.

Tú controlarás únicamente su dirección.

---

# 🛠️ PREPARAMOS EL PROYECTO

1. Abre Thonny.
2. Crea un archivo nuevo.
3. Guárdalo como:

```text
juego08.py
```

Para ejecutarlo:

```bash
pgzrun juego08.py
```

---

# 📁 RECURSOS GRÁFICOS

Este proyecto funciona sin imágenes.

Vamos a utilizar rectángulos de colores para comprender mejor el funcionamiento del juego.

Más adelante podrás utilizar:

```text
images/
├── snake.png
└── apple.png
```

---

# 🛠️ PASO 1
## Crear una serpiente

Vamos a crear la serpiente utilizando una lista.

```python
snake = [
    (300, 300)
]
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Una serpiente.

✅ Nuestra primera lista de posiciones.

---

# 🛠️ PASO 2
## Crear una dirección

La serpiente necesita saber hacia dónde moverse.

```python
direction = (20, 0)
```

Esto significa:

➡️ 20 píxeles a la derecha.

⬆️ 0 píxeles hacia arriba.

---

### 🤔 ¿Qué hemos conseguido?

✅ Una dirección de movimiento.

✅ Movimiento automático.

---

# 🛠️ PASO 3
## Crear comida

Ahora añadiremos una manzana.

```python
food = (
    randint(1, 25) * 20,
    randint(1, 25) * 20
)
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Comida aleatoria.

✅ Un objetivo para el jugador.

---

# 🛠️ PASO 4
## Hacer crecer la serpiente

Cuando encuentre comida:

```python
score += 1
```

y no eliminaremos la cola.

Así la serpiente crecerá.

---

### 🤔 ¿Qué hemos conseguido?

✅ Una recompensa.

✅ Crecimiento progresivo.

---

# 🛠️ PASO 5
## Crear una derrota

Si la serpiente sale del tablero:

```python
game_over = True
```

La partida termina.

---

### 🤔 ¿Qué hemos conseguido?

✅ Riesgo.

✅ Desafío.

✅ Game Over.

---

# 🎮 CÓDIGO PRINCIPAL

> 🐍 Este es uno de los videojuegos más famosos de la historia.
>
> Utiliza listas para algo muy especial: guardar todas las partes del cuerpo de la serpiente.

```python
from random import randint

WIDTH = 600
HEIGHT = 600

snake = [
    (300, 300)
]

direction = (20, 0)

food = (
    randint(1, 25) * 20,
    randint(1, 25) * 20
)

score = 0
game_over = False


def draw():

    screen.fill("black")

    # Dibujar serpiente

    for segment in snake:

        screen.draw.filled_rect(
            Rect(segment, (20, 20)),
            "green"
        )

    # Dibujar comida

    screen.draw.filled_rect(
        Rect(food, (20, 20)),
        "red"
    )

    # Puntuación

    screen.draw.text(
        f"Puntos: {score}",
        (10, 10),
        fontsize=35,
        color="white"
    )

    if game_over:

        screen.draw.text(
            "GAME OVER",
            center=(300, 280),
            fontsize=55,
            color="red"
        )


def move_snake():

    global food
    global score
    global game_over

    if game_over:
        return

    head_x, head_y = snake[0]

    dx, dy = direction

    new_head = (
        head_x + dx,
        head_y + dy
    )

    # Salir del tablero

    if (
        new_head[0] < 0 or
        new_head[0] >= WIDTH or
        new_head[1] < 0 or
        new_head[1] >= HEIGHT
    ):

        game_over = True
        return

    snake.insert(0, new_head)

    if new_head == food:

        score += 1

        food = (
            randint(1, 25) * 20,
            randint(1, 25) * 20
        )

    else:

        snake.pop()


def on_key_down(key):

    global direction

    if key == keys.LEFT:
        direction = (-20, 0)

    elif key == keys.RIGHT:
        direction = (20, 0)

    elif key == keys.UP:
        direction = (0, -20)

    elif key == keys.DOWN:
        direction = (0, 20)


clock.schedule_interval(
    move_snake,
    0.20
)
```

---

# 🔍 CÓMO FUNCIONA

## 1️⃣ Creamos una lista

```python
snake = [
    (300, 300)
]
```

Cada elemento representa una parte del cuerpo.

---

## 2️⃣ Guardamos una dirección

```python
direction = (20, 0)
```

La serpiente sabe hacia dónde moverse.

---

## 3️⃣ Creamos una nueva cabeza

```python
snake.insert(
    0,
    new_head
)
```

Añadimos una nueva posición al principio.

---

## 4️⃣ Eliminamos la cola

```python
snake.pop()
```

La serpiente mantiene su tamaño.

---

## 5️⃣ Comemos una manzana

```python
if new_head == food:
```

Detectamos la colisión.

---

## 6️⃣ Ganamos puntos

```python
score += 1
```

Cada manzana vale un punto.

---

## 7️⃣ Crecemos

Si comemos una manzana:

🚫 No eliminamos la cola.

Resultado:

🐍 La serpiente se hace más larga.

---

## 8️⃣ Perdemos

Si salimos del tablero:

```python
game_over = True
```

La partida termina.

---

# 💡 CONCEPTO CLAVE
## Listas de posiciones

Ya utilizamos listas para guardar preguntas.

Ahora utilizamos listas para guardar posiciones.

```python
snake = [

    (300,300),

    (280,300),

    (260,300)

]
```

Cada elemento representa un segmento diferente.

---

## 🎯 Las listas sirven para:

✅ Preguntas.

✅ Enemigos.

✅ Bloques.

✅ Disparos.

✅ Inventarios.

✅ Partes de una serpiente.

---

# 🔄 DE SCRATCH A PYTHON

| En Scratch | En Python |
|------------|------------|
| Lista | `[]` |
| Añadir elemento | `insert()` |
| Eliminar elemento | `pop()` |
| Número aleatorio | `randint()` |
| Variable puntos | `score` |

---

# 🏆 ZONA DE ENTRENAMIENTO

## ⭐ Nivel Fácil

- Cambia el color de la serpiente.
- Cambia el color de la comida.
- Cambia el tamaño del tablero.

---

## ⭐⭐ Nivel Medio

- Empieza con una serpiente más larga.
- Haz que cada manzana valga 2 puntos.
- Aumenta la velocidad.

---

## ⭐⭐⭐ Nivel Experto

Añade una fruta especial.

Por ejemplo:

🍎 Roja = 1 punto.

⭐ Dorada = 5 puntos.

---

# 🚀 RETO DEL CREADOR

Convierte Snake en un juego profesional.

Añade:

✅ Más velocidad.

✅ Obstáculos.

✅ Récord.

✅ Distintos tipos de comida.

✅ Efectos de sonido.

---

## 🚀 Mi mejora

____________________________________________________

____________________________________________________

____________________________________________________

---

# 🎮 MINI DESAFÍO

### Maestro de las Serpientes

Consigue:

🍎 15 manzanas

sin perder la partida.

□ Lo conseguí

□ Casi

□ Necesito practicar

---

# 🛠️ ERRORES FRECUENTES Y SOLUCIONES

### ❌ La serpiente no se mueve

Comprueba:

```python
clock.schedule_interval(
    move_snake,
    0.20
)
```

---

### ❌ La serpiente no cambia de dirección

Comprueba:

```python
def on_key_down(key):
```

---

### ❌ La manzana nunca cambia de lugar

Comprueba:

```python
food = (
    randint(...)
)
```

---

### ❌ La puntuación no aumenta

Comprueba:

```python
score += 1
```

---

### ❌ Nunca aparece GAME OVER

Comprueba:

```python
game_over = True
```

dentro de la detección de bordes.

---

## 🔍 Lista rápida de comprobación

✅ ¿Existe la lista `snake`?

✅ ¿La serpiente se mueve?

✅ ¿Responden las flechas?

✅ ¿La manzana aparece?

✅ ¿La puntuación aumenta?

✅ ¿Funciona GAME OVER?

---

# 📊 AUTOEVALUACIÓN

| Objetivo | 😀 | 😐 | 😕 |
|-----------|---|---|---|
| He ejecutado el juego | ⬜ | ⬜ | ⬜ |
| Entiendo las listas | ⬜ | ⬜ | ⬜ |
| Entiendo el crecimiento | ⬜ | ⬜ | ⬜ |
| Entiendo randint() | ⬜ | ⬜ | ⬜ |
| He completado algún reto | ⬜ | ⬜ | ⬜ |

---

# 🌟 LO QUE HAS APRENDIDO

🎉 ¡Fantástico!

Has creado una versión de uno de los videojuegos más populares de todos los tiempos.

Ahora sabes:

✅ Utilizar listas para guardar posiciones.

✅ Crear movimiento automático.

✅ Generar posiciones aleatorias.

✅ Detectar colisiones.

✅ Gestionar puntuaciones.

✅ Hacer crecer un personaje.

🧱 En el próximo capítulo construirás un auténtico **Rompebloques** y aprenderás a trabajar con muchos objetos al mismo tiempo.
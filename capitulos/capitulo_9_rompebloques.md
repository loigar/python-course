# 🧱 CAPÍTULO 9
# 🚀 ¡OPERACIÓN ROMPEBLOQUES!

../assets/imagenes/capitulo_9_rompebloques.png

> 🚨 **MISIÓN DE EMERGENCIA**
>
> Una enorme pared de bloques está bloqueando el acceso a la estación espacial.
>
> Necesitas utilizar una pala especial y una pelota energética para abrirte paso.
>
> ⚪ Controla la pelota.
>
> 🧱 Destruye los bloques.
>
> 🏆 Completa el nivel.
>
> ¿Serás capaz de desmontar toda la barrera?

---

# 🎯 MISIÓN DEL CAPÍTULO

Cuando termines este proyecto habrás construido tu propio juego de Rompebloques.

Podrás:

✅ Controlar una pala.

✅ Crear bloques automáticamente.

✅ Hacer rebotar una pelota.

✅ Utilizar listas de objetos.

✅ Gestionar vidas.

✅ Crear condiciones de victoria y derrota.

---

# ⭐ LO QUE APRENDERÁS

| Habilidad | ¿Para qué sirve? |
|------------|------------|
| ✅ Listas | Guardar muchos bloques |
| ✅ Colisiones | Detectar impactos |
| ✅ Variables | Guardar vidas y puntos |
| ✅ Bucles | Crear niveles completos |
| ✅ Velocidades | Mover la pelota |
| ✅ Condiciones | Ganar y perder |

---

# 🕹️ CÓMO SERÁ EL VIDEOJUEGO

```text
┌─────────────────────────────┐
│ 🧱 🧱 🧱 🧱 🧱 🧱 🧱 🧱 │
│ 🧱 🧱 🧱 🧱 🧱 🧱 🧱 🧱 │
│                             │
│            ⚪               │
│                             │
│                             │
│            🏓               │
└─────────────────────────────┘
```

Tu misión será destruir todos los bloques utilizando la pelota.

---

# 🛠️ PREPARAMOS EL PROYECTO

1. Abre Thonny.
2. Crea un archivo nuevo.
3. Guárdalo como:

```text
juego09.py
```

Para ejecutarlo:

```bash
pgzrun juego09.py
```

---

# 📁 RECURSOS GRÁFICOS

Este capítulo puede funcionar completamente utilizando colores y rectángulos.

Más adelante podrás usar sprites:

```text
images/
├── paddle.png
├── ball.png
└── block.png
```

---

# 🛠️ PASO 1
## Crear la pala

Primero construiremos el jugador.

```python
paddle = Rect(
    330,
    540,
    140,
    20
)
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Una pala.

✅ Un personaje controlable.

---

# 🛠️ PASO 2
## Crear la pelota

Ahora añadiremos la pelota.

```python
ball = Rect(
    390,
    300,
    20,
    20
)
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Una pelota.

✅ El elemento principal del juego.

---

# 🛠️ PASO 3
## Dar velocidad a la pelota

```python
vx = 4
vy = -4
```

Estas variables controlan el movimiento.

---

### 🤔 ¿Qué hemos conseguido?

✅ Movimiento automático.

✅ Física básica.

---

# 🛠️ PASO 4
## Crear bloques automáticamente

No queremos dibujar 32 bloques uno por uno.

Utilizaremos una lista.

```python
blocks = []
```

Y un bucle:

```python
for row in range(4):

    for col in range(8):

        block = Rect(
            50 + col * 90,
            60 + row * 40,
            80,
            30
        )

        blocks.append(block)
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Un nivel completo.

✅ Muchos objetos creados automáticamente.

---

# 🛠️ PASO 5
## Añadir vidas

```python
lives = 3
```

Ahora tendremos tres oportunidades.

---

### 🤔 ¿Qué hemos conseguido?

✅ Más emoción.

✅ Más estrategia.

---

# 🎮 CÓDIGO PRINCIPAL

> 🧱 Este es el primer juego del libro donde trabajamos con muchos objetos al mismo tiempo.
>
> Gracias a las listas podemos gestionar decenas de bloques fácilmente.

```python
WIDTH = 800
HEIGHT = 600

# Pala

paddle = Rect(
    330,
    540,
    140,
    20
)

# Pelota

ball = Rect(
    390,
    300,
    20,
    20
)

vx = 4
vy = -4

score = 0
lives = 3

game_over = False
victory = False

# Lista de bloques

blocks = []

for row in range(4):

    for col in range(8):

        block = Rect(
            50 + col * 90,
            60 + row * 40,
            80,
            30
        )

        blocks.append(block)


def draw():

    screen.fill((10, 10, 40))

    # Dibujar bloques

    for block in blocks:

        screen.draw.filled_rect(
            block,
            "orange"
        )

    # Dibujar pala

    screen.draw.filled_rect(
        paddle,
        "white"
    )

    # Dibujar pelota

    screen.draw.filled_rect(
        ball,
        "yellow"
    )

    screen.draw.text(
        f"Puntos: {score}",
        (20, 20),
        fontsize=35,
        color="white"
    )

    screen.draw.text(
        f"Vidas: {lives}",
        (650, 20),
        fontsize=35,
        color="white"
    )

    if game_over:

        screen.draw.text(
            "GAME OVER",
            center=(400, 280),
            fontsize=60,
            color="red"
        )

    if victory:

        screen.draw.text(
            "¡HAS GANADO!",
            center=(400, 280),
            fontsize=60,
            color="yellow"
        )


def update():

    global vx
    global vy
    global score
    global lives
    global victory
    global game_over

    if game_over or victory:
        return

    # Movimiento de la pala

    if keyboard.left:
        paddle.x -= 8

    if keyboard.right:
        paddle.x += 8

    paddle.left = max(
        0,
        paddle.left
    )

    paddle.right = min(
        WIDTH,
        paddle.right
    )

    # Movimiento de la pelota

    ball.x += vx
    ball.y += vy

    # Rebotes laterales

    if ball.left <= 0:
        vx = abs(vx)

    if ball.right >= WIDTH:
        vx = -abs(vx)

    # Rebote superior

    if ball.top <= 0:
        vy = abs(vy)

    # Rebote con la pala

    if ball.colliderect(paddle):

        ball.bottom = paddle.top

        vy = -abs(vy)

    # Rebote con bloques

    for block in blocks[:]:

        if ball.colliderect(block):

            blocks.remove(block)

            score += 10

            vy = -vy

            break

    # Victoria

    if len(blocks) == 0:

        victory = True

    # Pierde una vida

    if ball.top > HEIGHT:

        lives -= 1

        ball.center = (400, 300)

        vx = 4
        vy = -4

        if lives <= 0:

            game_over = True


pgzrun.go()
```

---

# 🔍 CÓMO FUNCIONA

## 1️⃣ Creamos los bloques

```python
blocks = []
```

Una lista almacenará todos los bloques.

---

## 2️⃣ Generamos un nivel

```python
for row in range(4):
```

Creamos filas y columnas automáticamente.

---

## 3️⃣ Movemos la pelota

```python
ball.x += vx
ball.y += vy
```

La pelota se actualiza continuamente.

---

## 4️⃣ Detectamos rebotes

```python
vx = -vx
```

o

```python
vy = -vy
```

permiten cambiar de dirección.

---

## 5️⃣ Detectamos impactos

```python
ball.colliderect(block)
```

Comprueba si la pelota toca un bloque.

---

## 6️⃣ Eliminamos bloques

```python
blocks.remove(block)
```

Cuando un bloque es golpeado desaparece.

---

## 7️⃣ Ganamos puntos

```python
score += 10
```

Cada bloque destruido vale 10 puntos.

---

## 8️⃣ Ganamos la partida

```python
if len(blocks) == 0:
```

Cuando desaparecen todos los bloques.

---

# 💡 CONCEPTO CLAVE
## Listas de objetos

Hasta ahora habíamos guardado:

✅ Preguntas

✅ Respuestas

✅ Partes de la serpiente

Ahora guardamos objetos completos.

```python
blocks = []
```

Cada elemento representa un bloque diferente.

---

## 🎯 Las listas se utilizan para:

✅ Enemigos.

✅ Monedas.

✅ Disparos.

✅ Plataformas.

✅ Bloques.

✅ Objetos.

---

# 🔄 DE SCRATCH A PYTHON

| En Scratch | En Python |
|------------|------------|
| Crear clon | Lista |
| Borrar clon | `remove()` |
| Si toca objeto | `colliderect()` |
| Variable puntos | `score` |
| Variable vidas | `lives` |

---

# 🏆 ZONA DE ENTRENAMIENTO

## ⭐ Nivel Fácil

- Cambia el color de los bloques.
- Cambia el color de la pelota.
- Cambia el tamaño de la pala.

---

## ⭐⭐ Nivel Medio

- Añade una fila adicional.
- Haz la pelota más rápida.
- Comienza con cinco vidas.

---

## ⭐⭐⭐ Nivel Experto

Añade bloques especiales.

Por ejemplo:

🟦 Bloque azul = 20 puntos.

🟥 Bloque rojo = 50 puntos.

---

# 🚀 RETO DEL CREADOR

Convierte tu juego en una recreativa profesional.

Añade:

✅ Más niveles.

✅ Bloques especiales.

✅ Bonus.

✅ Récord.

✅ Sonidos.

✅ Velocidad progresiva.

---

## 🚀 Mi mejora

____________________________________________________

____________________________________________________

____________________________________________________

---

# 🎮 MINI DESAFÍO

### Destructor Maestro

Consigue:

🧱 Destruir todos los bloques.

❤️ Sin perder ninguna vida.

□ Lo conseguí

□ Casi

□ Necesito practicar

---

# 🛠️ ERRORES FRECUENTES Y SOLUCIONES

### ❌ La pelota desaparece

Comprueba:

```python
vx = 4
vy = -4
```

Velocidades demasiado altas pueden causar problemas.

---

### ❌ La pala sale de la pantalla

Comprueba:

```python
paddle.left = max(...)
```

y

```python
paddle.right = min(...)
```

---

### ❌ Los bloques no desaparecen

Comprueba:

```python
blocks.remove(block)
```

---

### ❌ Error:

```text
NameError:
blocks is not defined
```

Comprueba:

```python
blocks = []
```

---

### ❌ Nunca consigo ganar

Comprueba:

```python
if len(blocks) == 0:
```

---

### ❌ La puntuación no cambia

Comprueba:

```python
score += 10
```

---

## 🔍 Lista rápida de comprobación

✅ ¿Existe la lista `blocks`?

✅ ¿La pelota rebota?

✅ ¿Los bloques desaparecen?

✅ ¿Aumenta la puntuación?

✅ ¿Se restan vidas?

✅ ¿Funciona la victoria?

---

# 📊 AUTOEVALUACIÓN

| Objetivo | 😀 | 😐 | 😕 |
|-----------|---|---|---|
| He ejecutado el juego | ⬜ | ⬜ | ⬜ |
| Entiendo las listas | ⬜ | ⬜ | ⬜ |
| Entiendo las colisiones | ⬜ | ⬜ | ⬜ |
| Entiendo las vidas | ⬜ | ⬜ | ⬜ |
| He completado algún reto | ⬜ | ⬜ | ⬜ |

---

# 🌟 LO QUE HAS APRENDIDO

🎉 ¡Fantástico!

Has creado un auténtico juego de Rompebloques.

Ahora sabes:

✅ Utilizar listas de objetos.

✅ Crear niveles automáticamente.

✅ Detectar colisiones múltiples.

✅ Gestionar vidas.

✅ Gestionar puntuaciones.

✅ Crear condiciones de victoria y derrota.

🦘 En el próximo capítulo construirás un juego de plataformas y descubrirás uno de los conceptos más importantes de los videojuegos: **la gravedad**.
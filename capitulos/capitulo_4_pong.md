# 🏓 CAPÍTULO 4
# 🕹️ ¡PONG: EL CLÁSICO DE LOS CLÁSICOS!

../assets/imagenes/capitulo_4_pong.png

> ⏳ **VIAJE EN EL TIEMPO**
>
> Vamos a viajar hasta los primeros años de los videojuegos.
>
> En 1972 apareció un juego llamado **Pong**.
>
> Era muy simple:
>
> ⚪ Una pelota.
>
> 🏓 Dos palas.
>
> 🏆 Mucha diversión.
>
> Hoy vas a crear tu propia versión utilizando Python.

---

# 🎯 MISIÓN DEL CAPÍTULO

Cuando termines este proyecto habrás construido una versión moderna de Pong.

Podrás:

✅ Controlar una pala.

✅ Hacer rebotar una pelota.

✅ Crear una puntuación.

✅ Detectar colisiones.

✅ Construir un videojuego arcade completo.

---

# ⭐ LO QUE APRENDERÁS

| Habilidad | ¿Para qué sirve? |
|------------|------------|
| ✅ Velocidad | Mover objetos automáticamente |
| ✅ Colisiones | Detectar rebotes |
| ✅ Variables | Guardar puntos |
| ✅ Movimiento | Controlar la pala |
| ✅ Física básica | Rebotar una pelota |
| ✅ Condiciones | Detectar derrota |

---

# 🕹️ CÓMO SERÁ EL VIDEOJUEGO

```text
┌───────────────────────────────────┐
│                                   │
│              ⚪                    │
│                                   │
│                                   │
│                                   │
│ 🏓                               │
└───────────────────────────────────┘
```

Tu pala se moverá arriba y abajo.

La pelota rebotará continuamente.

Cada vez que consigas devolverla ganarás un punto.

---

# 🛠️ PREPARAMOS EL PROYECTO

1. Abre Thonny.
2. Crea un archivo nuevo.
3. Guárdalo como:

```text
juego04.py
```

Para ejecutarlo:

```bash
pgzrun juego04.py
```

---

# 📁 RECURSOS GRÁFICOS

Este capítulo puede realizarse utilizando rectángulos.

Más adelante podrás utilizar sprites pixel art.

```text
images/
├── paddle.png
└── ball.png
```

### 🏓 paddle.png

- 32 × 128 píxeles
- Fondo transparente
- Estilo pixel art

### ⚪ ball.png

- 32 × 32 píxeles
- Fondo transparente
- Estilo pixel art

---

# 🛠️ PASO 1
## Crear nuestra pala

Comenzaremos creando el jugador.

```python
paddle = Rect(
    30,
    250,
    20,
    120
)
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Una pala.

✅ Un personaje que podremos controlar.

---

# 🛠️ PASO 2
## Crear la pelota

Ahora añadiremos el elemento más importante del juego.

```python
ball = Rect(
    390,
    290,
    20,
    20
)
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Una pelota.

✅ Un objetivo para golpear.

---

# 🛠️ PASO 3
## Dar velocidad a la pelota

Necesitamos que se mueva sola.

```python
vx = 5
vy = 5
```

Estas variables almacenan la velocidad.

---

### 🤔 ¿Qué hemos conseguido?

✅ Movimiento automático.

✅ Física básica.

---

# 🛠️ PASO 4
## Mover la pala

Añadimos control con el teclado.

```python
if keyboard.up:
    paddle.y -= 8

if keyboard.down:
    paddle.y += 8
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Control total del jugador.

✅ Interacción con el teclado.

---

# 🛠️ PASO 5
## Detectar rebotes

Cuando la pelota toca una superficie debe cambiar de dirección.

```python
vy = -vy
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Rebotes.

✅ Comportamiento arcade.

---

# 🎮 CÓDIGO PRINCIPAL

> 🕹️ Este es uno de los videojuegos más famosos de toda la historia.
>
> Tu misión es conseguir el mayor número posible de rebotes.

```python
WIDTH = 800
HEIGHT = 600

paddle = Rect(
    30,
    250,
    20,
    120
)

ball = Rect(
    390,
    290,
    20,
    20
)

vx = 5
vy = 5

score = 0

game_over = False


def draw():

    screen.fill((0, 0, 0))

    screen.draw.filled_rect(
        paddle,
        "white"
    )

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

    if game_over:

        screen.draw.text(
            "GAME OVER",
            center=(400, 250),
            fontsize=60,
            color="red"
        )

        screen.draw.text(
            f"Puntuación: {score}",
            center=(400, 320),
            fontsize=40,
            color="yellow"
        )


def update():

    global vx
    global vy
    global score
    global game_over

    if game_over:
        return

    # Mover la pala

    if keyboard.up:
        paddle.y -= 8

    if keyboard.down:
        paddle.y += 8

    paddle.top = max(0, paddle.top)
    paddle.bottom = min(HEIGHT, paddle.bottom)

    # Mover la pelota

    ball.x += vx
    ball.y += vy

    # Rebote superior

    if ball.top <= 0:
        vy = abs(vy)

    # Rebote inferior

    if ball.bottom >= HEIGHT:
        vy = -abs(vy)

    # Rebote con la pala

    if ball.colliderect(paddle):

        vx = abs(vx)

        score += 1

    # Rebote lateral derecho

    if ball.right >= WIDTH:

        vx = -abs(vx)

    # Derrota

    if ball.left <= 0:

        game_over = True


pgzrun.go()
```

---

# 🔍 CÓMO FUNCIONA

## 1️⃣ Crear velocidades

```python
vx = 5
vy = 5
```

Guardan la velocidad horizontal y vertical.

---

## 2️⃣ Mover la pelota

```python
ball.x += vx
ball.y += vy
```

Actualizamos continuamente su posición.

---

## 3️⃣ Detectar paredes

Cuando toca una pared:

```python
vy = -vy
```

o

```python
vx = -vx
```

la pelota rebota.

---

## 4️⃣ Detectar colisiones

```python
ball.colliderect(paddle)
```

Comprueba si la pelota toca la pala.

---

## 5️⃣ Conseguir puntos

```python
score += 1
```

Cada rebote suma un punto.

---

## 6️⃣ Perder la partida

Si la pelota sale por la izquierda:

```python
game_over = True
```

La partida termina.

---

# 💡 CONCEPTO CLAVE
## Velocidad

La velocidad indica cuánto se mueve un objeto.

Por ejemplo:

```python
vx = 5
```

significa que la pelota avanzará 5 píxeles en cada actualización.

---

### ➕ Más velocidad

```python
vx = 10
```

La pelota irá más rápido.

---

### ➖ Velocidad negativa

```python
vx = -5
```

La pelota se moverá en dirección contraria.

---

## 🎯 Las velocidades aparecen en:

✅ Coches

✅ Pelotas

✅ Naves

✅ Enemigos

✅ Plataformas móviles

---

# 🔄 DE SCRATCH A PYTHON

| En Scratch | En Python |
|------------|------------|
| Mover 10 pasos | `x += velocidad` |
| Rebotar si toca borde | `vx = -vx` |
| Variable puntos | `score` |
| Si toca un objeto | `colliderect()` |
| Por siempre | `update()` |

---

# 🏆 ZONA DE ENTRENAMIENTO

## ⭐ Nivel Fácil

- Cambia el color de la pelota.
- Cambia el color de la pala.
- Cambia el fondo.

---

## ⭐⭐ Nivel Medio

- Haz la pelota más rápida.
- Haz la pala más pequeña.
- Empieza con una puntuación diferente.

---

## ⭐⭐⭐ Nivel Experto

Añade una segunda pala controlada por otro jugador.

Pista:

```python
paddle2 = Rect(...)
```

---

# 🚀 RETO DEL CREADOR

Transforma Pong en una competición completa.

Añade:

✅ Dos jugadores.

✅ Marcador para ambos.

✅ Récord de puntos.

✅ Modo turbo.

✅ Sonidos.

---

## 🚀 Mi mejora

____________________________________________________

____________________________________________________

____________________________________________________

---

# 🎮 MINI DESAFÍO

### Maestro del Pong

Consigue:

🏓 25 rebotes seguidos

sin perder la pelota.

□ Lo conseguí

□ Casi

□ Necesito practicar

---

# 🛠️ ERRORES FRECUENTES Y SOLUCIONES

### ❌ La pelota no se mueve

Comprueba:

```python
ball.x += vx
ball.y += vy
```

---

### ❌ La pala sale de la pantalla

Comprueba:

```python
paddle.top = max(0, paddle.top)
```

y

```python
paddle.bottom = min(
    HEIGHT,
    paddle.bottom
)
```

---

### ❌ Los puntos no aumentan

Comprueba:

```python
score += 1
```

---

### ❌ La pelota atraviesa la pala

Comprueba:

```python
ball.colliderect(paddle)
```

---

### ❌ Nunca aparece GAME OVER

Comprueba:

```python
if ball.left <= 0:
```

---

## 🔍 Lista rápida de comprobación

✅ ¿La pala se mueve?

✅ ¿La pelota rebota?

✅ ¿La puntuación aumenta?

✅ ¿Funciona GAME OVER?

✅ ¿Has guardado los cambios?

✅ ¿No hay errores de indentación?

---

# 📊 AUTOEVALUACIÓN

| Objetivo | 😀 | 😐 | 😕 |
|-----------|---|---|---|
| He ejecutado el juego | ⬜ | ⬜ | ⬜ |
| Entiendo la velocidad | ⬜ | ⬜ | ⬜ |
| Entiendo los rebotes | ⬜ | ⬜ | ⬜ |
| Entiendo las colisiones | ⬜ | ⬜ | ⬜ |
| He completado algún reto | ⬜ | ⬜ | ⬜ |

---

# 🌟 LO QUE HAS APRENDIDO

🎉 ¡Enhorabuena!

Acabas de recrear uno de los videojuegos más famosos de la historia.

Ahora sabes:

✅ Utilizar velocidades.

✅ Crear rebotes.

✅ Detectar colisiones.

✅ Controlar personajes.

✅ Gestionar puntuaciones.

✅ Construir videojuegos arcade.

🗝️ En el próximo capítulo explorarás un misterioso laberinto y aprenderás a utilizar coordenadas para encontrar una llave escondida.
# 🦘 CAPÍTULO 10
# 🪙 ¡RUMBO A LA MONEDA DORADA!

../assets/imagenes/capitulo_10_salta_plataformas.png

> ☁️ **UNA NUEVA AVENTURA**
>
> Muy lejos, sobre las nubes, existe una moneda legendaria.
>
> Se dice que quien consiga alcanzarla obtendrá el título de Maestro de los Videojuegos.
>
> Pero llegar hasta ella no será fácil...
>
> Necesitarás saltar de plataforma en plataforma y evitar caer al vacío.
>
> 🦘 Salta.
>
> 🌤️ Explora.
>
> 🪙 Consigue la moneda.
>
> 🏆 Completa el nivel.

---

# 🎯 MISIÓN DEL CAPÍTULO

Cuando termines este proyecto habrás creado tu primer juego de plataformas.

Podrás:

✅ Caminar.

✅ Saltar.

✅ Aplicar gravedad.

✅ Aterrizar sobre plataformas.

✅ Recoger una moneda.

✅ Crear una condición de victoria.

---

# ⭐ LO QUE APRENDERÁS

| Habilidad | ¿Para qué sirve? |
|------------|------------|
| ✅ Gravedad | Hacer caer objetos |
| ✅ Velocidad vertical | Saltar y aterrizar |
| ✅ Colisiones | Detectar plataformas |
| ✅ Variables | Controlar el movimiento |
| ✅ Condiciones | Ganar el nivel |
| ✅ Diseño de niveles | Crear escenarios |

---

# 🕹️ CÓMO SERÁ EL VIDEOJUEGO

```text
            🪙


       ███████

                 ██████


██████████████████████


         🦘
```

Tu objetivo será llegar hasta la moneda dorada.

---

# 🛠️ PREPARAMOS EL PROYECTO

1. Abre Thonny.
2. Crea un archivo nuevo.
3. Guárdalo como:

```text
juego10.py
```

Para ejecutarlo:

```bash
pgzrun juego10.py
```

---

# 📁 RECURSOS GRÁFICOS

Este capítulo funciona completamente utilizando rectángulos y colores.

Más adelante podrás sustituirlos por sprites pixel art.

```text
images/
├── hero.png
├── platform.png
└── coin.png
```

### 🦘 hero.png

Tu personaje.

- 64 × 64 píxeles
- Fondo transparente

---

### 🪙 coin.png

La moneda del tesoro.

- 32 × 32 píxeles
- Color dorado

---

### ☁️ platform.png

Plataformas flotantes.

- Anchura variable
- Fondo transparente

---

# 🛠️ PASO 1
## Crear al explorador

Comenzaremos creando nuestro personaje.

```python
player = Rect(
    100,
    400,
    40,
    60
)
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Un personaje.

✅ El protagonista de nuestra aventura.

---

# 🛠️ PASO 2
## Crear gravedad

Ahora vamos a añadir una fuerza muy importante.

```python
vy = 0

gravity = 0.5
```

---

### 🤔 ¿Qué hemos conseguido?

✅ El personaje puede caer.

✅ Hemos creado gravedad.

---

# 🛠️ PASO 3
## Crear plataformas

Necesitamos lugares donde aterrizar.

```python
platforms = [

    Rect((100,500),(500,30)),

    Rect((500,380),(200,20)),

    Rect((250,280),(180,20))

]
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Un nivel jugable.

✅ Lugares donde saltar.

---

# 🛠️ PASO 4
## Hacer saltar al jugador

Ahora añadiremos el salto.

```python
vy = -12
```

Los números negativos hacen que el personaje suba.

---

### 🤔 ¿Qué hemos conseguido?

✅ Saltos.

✅ Movimiento vertical.

✅ Plataformas reales.

---

# 🛠️ PASO 5
## Crear un objetivo

Vamos a colocar una moneda.

```python
coin = Rect(
    650,
    200,
    30,
    30
)
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Una misión.

✅ Una meta para alcanzar.

---

# 🎮 CÓDIGO PRINCIPAL

> 🌟 Este es tu primer juego de plataformas.
>
> Las mismas ideas aparecen en muchos videojuegos famosos.

```python
WIDTH = 800
HEIGHT = 600

player = Rect(
    100,
    400,
    40,
    60
)

vy = 0

gravity = 0.5

on_ground = False

victory = False

platforms = [

    Rect((100,500),(500,30)),

    Rect((500,380),(200,20)),

    Rect((250,280),(180,20))

]

coin = Rect(
    650,
    200,
    30,
    30
)


def draw():

    screen.fill((100,180,255))

    # Plataformas

    for platform in platforms:

        screen.draw.filled_rect(
            platform,
            "green"
        )

    # Moneda

    screen.draw.filled_rect(
        coin,
        "gold"
    )

    # Jugador

    screen.draw.filled_rect(
        player,
        "red"
    )

    if victory:

        screen.draw.text(
            "¡HAS GANADO!",
            center=(400,120),
            fontsize=60,
            color="yellow"
        )


def update():

    global vy
    global on_ground
    global victory

    if victory:
        return

    # Movimiento lateral

    if keyboard.left:
        player.x -= 5

    if keyboard.right:
        player.x += 5

    # Límites de pantalla

    player.left = max(
        0,
        player.left
    )

    player.right = min(
        WIDTH,
        player.right
    )

    previous_bottom = player.bottom

    # Aplicar gravedad

    vy += gravity

    player.y += vy

    on_ground = False

    # Detectar plataformas

    for platform in platforms:

        falling = vy > 0

        crossed_top = (
            previous_bottom <= platform.top
            and
            player.bottom >= platform.top
        )

        horizontal_overlap = (
            player.right > platform.left
            and
            player.left < platform.right
        )

        if (
            falling
            and crossed_top
            and horizontal_overlap
        ):

            player.bottom = platform.top

            vy = 0

            on_ground = True

    # Victoria

    if player.colliderect(coin):

        victory = True


def on_key_down(key):

    global vy

    if key == keys.SPACE and on_ground:

        vy = -12


pgzrun.go()
```

---

# 🔍 CÓMO FUNCIONA

## 1️⃣ Creamos gravedad

```python
gravity = 0.5
```

Empuja constantemente al jugador hacia abajo.

---

## 2️⃣ Aplicamos gravedad

```python
vy += gravity
```

Cada fotograma aumenta la velocidad de caída.

---

## 3️⃣ Movemos al jugador

```python
player.y += vy
```

La velocidad modifica la posición.

---

## 4️⃣ Saltamos

```python
vy = -12
```

Un valor negativo hace subir al personaje.

---

## 5️⃣ Detectamos aterrizajes

Comprobamos:

```python
falling
```

```python
crossed_top
```

```python
horizontal_overlap
```

Esto evita atravesar las plataformas.

---

## 6️⃣ Ganamos la partida

```python
player.colliderect(coin)
```

Detecta cuándo alcanzamos la moneda.

---

# 💡 CONCEPTO CLAVE
## La gravedad

La gravedad es una fuerza que empuja continuamente hacia abajo.

En nuestro juego:

```python
vy += gravity
```

hace que el personaje caiga.

---

### Sin gravedad

```python
gravity = 0
```

El personaje flotaría.

---

### Con mucha gravedad

```python
gravity = 2
```

Caería muy rápido.

---

## 🎯 La gravedad aparece en:

✅ Plataformas.

✅ Aventuras.

✅ Carreras.

✅ Simuladores.

✅ Juegos de acción.

---

# 🔄 DE SCRATCH A PYTHON

| En Scratch | En Python |
|------------|------------|
| Cambiar y por -10 | `vy = -12` |
| Caer | `vy += gravity` |
| Si toca plataforma | colisión |
| Mover personaje | `keyboard.left` |
| Variable velocidad | `vy` |

---

# 🏆 ZONA DE ENTRENAMIENTO

## ⭐ Nivel Fácil

- Cambia el color del jugador.
- Añade una nueva plataforma.
- Cambia la altura de la moneda.

---

## ⭐⭐ Nivel Medio

- Añade tres monedas.
- Haz el salto más alto.
- Aumenta la gravedad.

---

## ⭐⭐⭐ Nivel Experto

Añade un doble salto.

Pista:

```python
jump_count
```

---

# 🚀 RETO DEL CREADOR

Convierte el juego en un verdadero plataformas.

Añade:

✅ Más plataformas.

✅ Varias monedas.

✅ Enemigos.

✅ Pantalla inicial.

✅ Sistema de puntos.

✅ Varios niveles.

---

## 🚀 Mi mejora

____________________________________________________

____________________________________________________

____________________________________________________

---

# 🎮 MINI DESAFÍO

### Explorador de las Nubes

Consigue:

🪙 Llegar hasta la moneda.

☁️ Sin caerte.

🏆 En el menor tiempo posible.

□ Lo conseguí

□ Casi

□ Necesito practicar

---

# 🛠️ ERRORES FRECUENTES Y SOLUCIONES

### ❌ El personaje atraviesa las plataformas

Comprueba que existe este bloque:

```python
if (
    falling
    and crossed_top
    and horizontal_overlap
):
```

---

### ❌ El personaje no salta

Comprueba:

```python
if key == keys.SPACE and on_ground:
```

---

### ❌ El personaje sale por la pantalla

Comprueba:

```python
player.left = max(...)
```

y

```python
player.right = min(...)
```

---

### ❌ Nunca consigo ganar

Comprueba:

```python
player.colliderect(coin)
```

---

### ❌ La gravedad no funciona

Comprueba:

```python
vy += gravity
```

---

## 🔍 Lista rápida de comprobación

✅ ¿Existe la variable `gravity`?

✅ ¿Existe la variable `vy`?

✅ ¿El jugador puede saltar?

✅ ¿Aterriza correctamente?

✅ ¿La moneda aparece?

✅ ¿Funciona la victoria?

---

# 📊 AUTOEVALUACIÓN

| Objetivo | 😀 | 😐 | 😕 |
|-----------|---|---|---|
| He ejecutado el juego | ⬜ | ⬜ | ⬜ |
| Entiendo la gravedad | ⬜ | ⬜ | ⬜ |
| Entiendo el salto | ⬜ | ⬜ | ⬜ |
| Entiendo las colisiones | ⬜ | ⬜ | ⬜ |
| He completado algún reto | ⬜ | ⬜ | ⬜ |

---

# 🌟 LO QUE HAS APRENDIDO

🎉 ¡Fantástico!

Has construido tu primer juego de plataformas.

Ahora sabes:

✅ Aplicar gravedad.

✅ Crear saltos.

✅ Detectar aterrizajes.

✅ Diseñar niveles.

✅ Crear objetivos.

✅ Construir plataformas.

🚀 En el próximo capítulo defenderás la galaxia utilizando láseres, enemigos y disparos espaciales.
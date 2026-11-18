# 🏆 CAPÍTULO 12
# 💎 ¡LA AVENTURA FINAL!

../assets/imagenes/capitulo_12_la_aventura_final.png

> ⚔️ **MISIÓN FINAL**
>
> Has aprendido a mover personajes, recoger objetos, disparar rayos láser, utilizar listas y crear videojuegos completos.
>
> Ha llegado el momento de combinar todo lo que has aprendido.
>
> Tu misión consiste en recorrer un mundo lleno de tesoros mientras evitas a un guardián que protege el mapa.
>
> 🗝️ Recoge todos los tesoros.
>
> 👾 Evita al enemigo.
>
> 🏆 Completa tu aventura.

---

# 🎯 MISIÓN DEL CAPÍTULO

Cuando termines este proyecto habrás creado un videojuego que utiliza muchos conceptos aprendidos durante el libro:

✅ Movimiento del jugador

✅ Objetos coleccionables

✅ Enemigos

✅ Puntuación

✅ Colisiones

✅ Listas

✅ Victoria

✅ Derrota

---

# ⭐ LO QUE APRENDERÁS

| Habilidad | ¿Para qué sirve? |
|------------|------------|
| ✅ Listas | Guardar tesoros |
| ✅ Colisiones | Detectar recogidas |
| ✅ Variables | Gestionar puntos |
| ✅ Movimiento | Controlar personajes |
| ✅ Condiciones | Ganar o perder |
| ✅ Diseño de niveles | Crear aventuras |

---

# 🗺️ CÓMO SERÁ EL VIDEOJUEGO

```text
┌───────────────────────────────┐
│        💎     💎              │
│                               │
│              👾               │
│                               │
│   💎                      💎  │
│                               │
│            🚶                 │
└───────────────────────────────┘
```

---

# 🛠️ PREPARAMOS EL PROYECTO

1. Abre Thonny.
2. Crea un archivo nuevo.
3. Guárdalo como:

```text
juego12.py
```

Para ejecutarlo:

```bash
pgzrun juego12.py
```

---

# 📁 RECURSOS GRÁFICOS

Este capítulo puede realizarse utilizando rectángulos y colores.

Más adelante podrás utilizar:

```text
images/
├── hero.png
├── treasure.png
├── enemy.png
└── map.png
```

---

# 🛠️ PASO 1
## Crear al explorador

Nuestro héroe será un rectángulo azul.

```python
player = Rect(
    100,
    100,
    40,
    40
)
```

### 🤔 ¿Qué hemos conseguido?

✅ Un personaje.

✅ Un jugador controlable.

---

# 🛠️ PASO 2
## Crear un tesoro

Añadimos un objeto para recoger.

```python
treasure = Rect(
    400,
    300,
    30,
    30
)
```

### 🤔 ¿Qué hemos conseguido?

✅ Una primera misión.

✅ Un objetivo para alcanzar.

---

# 🛠️ PASO 3
## Crear varios tesoros

Un único tesoro resulta demasiado sencillo.

Vamos a crear varios utilizando una lista.

```python
treasures = []
```

Y añadimos varios objetos.

```python
treasures.append(
    Rect(200,150,30,30)
)
```

---

### 💡 Concepto clave

Utilizamos listas para guardar muchos objetos.

```python
treasures = []
```

Ya conoces esta técnica porque la utilizaste con:

✅ Preguntas

✅ Disparos

✅ Bloques

✅ Partes de la serpiente

---

# 🛠️ PASO 4
## Crear un guardián

Toda aventura necesita peligro.

```python
enemy = Rect(
    500,
    300,
    40,
    40
)
```

Este enemigo se moverá patrullando el escenario.

---

# 🎮 CÓDIGO PRINCIPAL

> 🌟 Este es el proyecto más completo del libro.
>
> No te preocupes si ves conceptos que ya habías olvidado.
>
> La programación consiste en combinar muchas pequeñas piezas.

```python
WIDTH = 800
HEIGHT = 600

player = Rect(
    100,
    100,
    40,
    40
)

enemy = Rect(
    500,
    300,
    40,
    40
)

enemy_direction = 3

treasures = [

    Rect(150,150,30,30),

    Rect(650,120,30,30),

    Rect(250,450,30,30),

    Rect(600,500,30,30),

    Rect(400,200,30,30)

]

score = 0

victory = False
game_over = False


def draw():

    screen.fill((40,120,40))

    # Tesoros

    for treasure in treasures:

        screen.draw.filled_rect(
            treasure,
            "gold"
        )

    # Enemigo

    if not game_over:

        screen.draw.filled_rect(
            enemy,
            "red"
        )

    # Jugador

    screen.draw.filled_rect(
        player,
        "blue"
    )

    screen.draw.text(
        f"Tesoros: {score}",
        (20,20),
        fontsize=35,
        color="white"
    )

    if victory:

        screen.draw.text(
            "¡AVENTURA COMPLETADA!",
            center=(400,250),
            fontsize=55,
            color="yellow"
        )

    if game_over:

        screen.draw.text(
            "GAME OVER",
            center=(400,250),
            fontsize=55,
            color="red"
        )


def update():

    global score
    global victory
    global game_over
    global enemy_direction

    if victory or game_over:
        return

    # Movimiento jugador

    if keyboard.left:
        player.x -= 5

    if keyboard.right:
        player.x += 5

    if keyboard.up:
        player.y -= 5

    if keyboard.down:
        player.y += 5

    player.left = max(0, player.left)
    player.right = min(WIDTH, player.right)

    player.top = max(0, player.top)
    player.bottom = min(HEIGHT, player.bottom)

    # Movimiento del enemigo

    enemy.x += enemy_direction

    if enemy.left <= 100:
        enemy_direction = 3

    if enemy.right >= 700:
        enemy_direction = -3

    # Recoger tesoros

    for treasure in treasures[:]:

        if player.colliderect(treasure):

            treasures.remove(treasure)

            score += 1

    # Victoria

    if len(treasures) == 0:

        victory = True

    # Derrota

    if player.colliderect(enemy):

        game_over = True


pgzrun.go()
```

---

# 🔍 CÓMO FUNCIONA

## 1️⃣ Mover al héroe

```python
if keyboard.left:
```

El jugador puede desplazarse libremente.

---

## 2️⃣ Crear tesoros

```python
treasures = []
```

Guardamos todos los tesoros en una lista.

---

## 3️⃣ Recoger objetos

```python
player.colliderect(treasure)
```

Comprueba si hemos alcanzado un tesoro.

---

## 4️⃣ Eliminar tesoros

```python
treasures.remove(treasure)
```

Cuando un tesoro es recogido desaparece.

---

## 5️⃣ Mover al enemigo

```python
enemy.x += enemy_direction
```

El guardián patrulla la zona.

---

## 6️⃣ Detectar la derrota

```python
player.colliderect(enemy)
```

Si el enemigo nos toca:

💥 Fin de la aventura.

---

## 7️⃣ Detectar la victoria

```python
if len(treasures) == 0:
```

Cuando no queda ningún tesoro:

🏆 ¡Ganamos!

---

# 💡 CONCEPTO CLAVE
## Reutilizar conocimientos

Este capítulo utiliza ideas aprendidas anteriormente.

| Capítulo | Concepto |
|-----------|----------|
| ⭐ Capítulo 1 | Puntuación |
| ☄️ Capítulo 2 | Victoria y derrota |
| 🎯 Capítulo 3 | Colisiones |
| 🏓 Capítulo 4 | Movimiento automático |
| 🗝️ Capítulo 5 | Exploración |
| ⏱️ Capítulo 6 | Variables |
| ❓ Capítulo 7 | Listas |
| 🐍 Capítulo 8 | Colecciones de posiciones |
| 🧱 Capítulo 9 | Listas de objetos |
| 🚀 Capítulo 11 | Enemigos |

---

# 🔄 DE SCRATCH A PYTHON

| En Scratch | En Python |
|------------|------------|
| Lista | `[]` |
| Borrar objeto | `remove()` |
| Si toca objeto | `colliderect()` |
| Variable puntos | `score` |
| Mover personaje | `keyboard.left` |
| Victoria | `victory = True` |

---

# 🏆 ZONA DE ENTRENAMIENTO

## ⭐ Nivel Fácil

- Cambia el color del héroe.
- Cambia el color del enemigo.
- Añade más tesoros.

---

## ⭐⭐ Nivel Medio

- Haz al enemigo más rápido.
- Añade una segunda patrulla.
- Cambia el tamaño del mapa.

---

## ⭐⭐⭐ Nivel Experto

Añade una llave que sea necesaria para abrir un portal.

Pista:

```python
has_key = False
```

---

# 🚀 RETO DEL CREADOR

Convierte esta aventura en tu propio videojuego.

Añade:

✅ Llaves.

✅ Puertas.

✅ Varios enemigos.

✅ Obstáculos.

✅ Diferentes niveles.

✅ Pantalla inicial.

✅ Pantalla final personalizada.

---

## 🚀 Mi mejora

____________________________________________________

____________________________________________________

____________________________________________________

---

# 🎮 MINI DESAFÍO

### Modo Explorador

Completa el nivel:

🏆 Recogiendo todos los tesoros.

👾 Sin tocar al guardián.

□ Lo conseguí

□ Casi

□ Necesito practicar

---

# 🛠️ ERRORES FRECUENTES Y SOLUCIONES

### ❌ Los tesoros no desaparecen

Comprueba:

```python
treasures.remove(treasure)
```

---

### ❌ Nunca gano

Comprueba:

```python
if len(treasures) == 0:
```

---

### ❌ El enemigo no se mueve

Comprueba:

```python
enemy.x += enemy_direction
```

---

### ❌ El jugador sale del mapa

Comprueba:

```python
player.left = max(0, player.left)
```

---

### ❌ Aparece un error con treasures

Comprueba que existe:

```python
treasures = []
```

---

## 🔍 Lista rápida de comprobación

✅ ¿Existe la lista de tesoros?

✅ ¿El jugador puede moverse?

✅ ¿El enemigo patrulla?

✅ ¿Se eliminan los tesoros?

✅ ¿Funciona la victoria?

✅ ¿Funciona el game over?

---

# 📊 AUTOEVALUACIÓN

| Objetivo | 😀 | 😐 | 😕 |
|-----------|---|---|---|
| He ejecutado el juego | ⬜ | ⬜ | ⬜ |
| Entiendo las listas | ⬜ | ⬜ | ⬜ |
| Entiendo las colisiones | ⬜ | ⬜ | ⬜ |
| Entiendo la victoria y derrota | ⬜ | ⬜ | ⬜ |
| He añadido mejoras propias | ⬜ | ⬜ | ⬜ |

---

# 🌟 LO QUE HAS APRENDIDO

🎉 ¡ENHORABUENA!

Has llegado al último videojuego del libro.

Ahora sabes:

✅ Crear personajes.

✅ Crear enemigos.

✅ Utilizar listas.

✅ Gestionar puntuaciones.

✅ Detectar colisiones.

✅ Crear objetivos.

✅ Diseñar videojuegos completos.

✅ Combinar diferentes mecánicas.

Lo más importante es que ya no solo juegas a videojuegos...

🚀 **¡Ahora también sabes crearlos!**
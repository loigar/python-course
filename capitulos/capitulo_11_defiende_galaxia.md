# 👾 CAPÍTULO 11
# 🚀 ¡DEFIENDE LA GALAXIA!

![Defiende la galaxia](../assets/imagenes/capitulo_11_defiende_la_galaxia.png)

> 🌌 **ALERTA ESPACIAL**
>
> Una flota alienígena se acerca a la Tierra.
>
> Los radares han detectado una nave enemiga explorando el sistema solar.
>
> Tú eres el piloto de la nave **PX-01**.
>
> Tu misión:
>
> 🚀 **Proteger la galaxia.**
>
> 👾 **Derrotar al alienígena.**
>
> ⭐ **Conseguir la máxima puntuación posible.**

---

# 🎯 MISIÓN DEL CAPÍTULO

Cuando termines este proyecto habrás creado un videojuego donde:

✅ Controlas una nave espacial.

✅ Disparas rayos láser.

✅ Derribas enemigos.

✅ Consigues puntos.

✅ Ganas una batalla espacial.

---

# ⭐ LO QUE APRENDERÁS

| Habilidad | ¿Para qué sirve? |
|------------|------------|
| ✅ Listas | Guardar disparos |
| ✅ Colisiones | Detectar impactos |
| ✅ Variables | Gestionar puntos y vida |
| ✅ Movimiento automático | Controlar enemigos |
| ✅ Eventos | Detectar teclas |
| ✅ Condiciones | Ganar o perder |

---

# 🕹️ CÓMO SERÁ EL VIDEOJUEGO

```text
┌────────────────────────────┐
│                            │
│           👾               │
│      Nave alienígena       │
│                            │
└────────────────────────────┘


              ↑
              │
            Láser


             🚀
         Nave PX-01
```

---

# 🛠️ PREPARAMOS EL PROYECTO

1. Abre Thonny.
2. Crea un archivo nuevo.
3. Guárdalo como:

```text
juego11.py
```

Para ejecutarlo:

```bash
pgzrun juego11.py
```

---

# 📁 RECURSOS GRÁFICOS

Este capítulo puede realizarse utilizando rectángulos de colores.

Si quieres personalizarlo, puedes usar sprites pixel art.

```text
images/
├── ship.png
├── alien.png
└── laser.png
```

Más adelante podrás sustituir los rectángulos por imágenes reales.

---

# 🛠️ PASO 1
## Crear la nave espacial

Vamos a crear el personaje que controla el jugador.

```python
ship = Rect(
    380,
    520,
    40,
    40
)
```

### 🤔 ¿Qué hemos conseguido?

✅ Una nave.

✅ Un jugador.

✅ Un objetivo para controlar.

---

# 🛠️ PASO 2
## Crear un alienígena

Todo héroe necesita un enemigo.

```python
enemy = Rect(
    375,
    80,
    50,
    50
)
```

### 🤔 ¿Qué hemos conseguido?

✅ Un objetivo.

✅ Un enemigo.

✅ Una misión.

---

# 🛠️ PASO 3
## Crear rayos láser

Ahora vamos a permitir que la nave dispare.

Necesitamos guardar todos los disparos activos.

Por eso utilizaremos una lista.

```python
bullets = []
```

Cada nuevo disparo se añadirá automáticamente.

### 💡 Concepto clave

```python
bullets.append(bullet)
```

Esta instrucción añade un nuevo elemento a la lista.

---

# 🎮 CÓDIGO PRINCIPAL

> ✨ No te preocupes si no entiendes todas las líneas al principio.
>
> Lo importante es conseguir que el juego funcione y descubrir poco a poco cómo trabaja cada parte.

```python
WIDTH = 800
HEIGHT = 600

ship = Rect(
    380,
    520,
    40,
    40
)

enemy = Rect(
    375,
    80,
    50,
    50
)

enemy_direction = 4

enemy_life = 5

bullets = []

score = 0

victory = False


def draw():

    screen.fill((5, 5, 30))

    # Nave

    screen.draw.filled_rect(
        ship,
        "cyan"
    )

    # Alienígena

    if not victory:

        screen.draw.filled_rect(
            enemy,
            "lime"
        )

    # Disparos

    for bullet in bullets:

        screen.draw.filled_rect(
            bullet,
            "yellow"
        )

    # Información

    screen.draw.text(
        f"Puntos: {score}",
        (20, 20),
        fontsize=35,
        color="white"
    )

    screen.draw.text(
        f"Vida alien: {enemy_life}",
        (560, 20),
        fontsize=35,
        color="white"
    )

    if victory:

        screen.draw.text(
            "¡GALAXIA SALVADA!",
            center=(400, 250),
            fontsize=60,
            color="yellow"
        )


def update():

    global enemy_direction
    global enemy_life
    global score
    global victory

    if victory:
        return

    # Movimiento de la nave

    if keyboard.left:
        ship.x -= 6

    if keyboard.right:
        ship.x += 6

    ship.left = max(0, ship.left)
    ship.right = min(WIDTH, ship.right)

    # Movimiento del enemigo

    enemy.x += enemy_direction

    if enemy.right >= WIDTH:
        enemy_direction = -4

    if enemy.left <= 0:
        enemy_direction = 4

    # Movimiento de los disparos

    for bullet in bullets[:]:

        bullet.y -= 10

        if bullet.bottom < 0:

            bullets.remove(bullet)
            continue

        if bullet.colliderect(enemy):

            bullets.remove(bullet)

            score += 10

            enemy_life -= 1

            if enemy_life <= 0:

                victory = True


def on_key_down(key):

    if victory:
        return

    if key == keys.SPACE:

        bullet = Rect(
            ship.centerx - 2,
            ship.top,
            4,
            12
        )

        bullets.append(bullet)


pgzrun.go()
```

---

# 🔍 CÓMO FUNCIONA

## 1️⃣ Mover la nave

```python
if keyboard.left:
    ship.x -= 6
```

```python
if keyboard.right:
    ship.x += 6
```

La nave sigue nuestras instrucciones.

---

## 2️⃣ Disparar

```python
if key == keys.SPACE:
```

Cada vez que pulsamos ESPACIO se crea un nuevo láser.

---

## 3️⃣ Guardar disparos

```python
bullets.append(bullet)
```

El disparo se añade a la lista.

---

## 4️⃣ Mover disparos

```python
for bullet in bullets[:]:
```

Recorremos todos los disparos activos.

---

## 5️⃣ Detectar impactos

```python
bullet.colliderect(enemy)
```

Comprueba si el láser toca al alienígena.

---

## 6️⃣ Hacer daño

```python
enemy_life -= 1
```

Cada impacto reduce la vida enemiga.

---

## 7️⃣ Conseguir puntos

```python
score += 10
```

Cada impacto suma puntos.

---

## 8️⃣ Ganar la partida

```python
if enemy_life <= 0:
```

Cuando la vida llega a cero:

```python
victory = True
```

¡La galaxia queda a salvo!

---

# 💡 CONCEPTO CLAVE
## Listas dinámicas

Las listas pueden cambiar constantemente.

Cuando comienza la partida:

```python
bullets = []
```

No existe ningún disparo.

---

Después de varios disparos:

```python
bullets = [
    laser1,
    laser2,
    laser3
]
```

La lista crece automáticamente.

---

## 🎯 Esto se utiliza para:

✅ Disparos

✅ Enemigos

✅ Objetos

✅ Inventarios

✅ Monedas

✅ Niveles

---

# 🔄 DE SCRATCH A PYTHON

| En Scratch | En Python |
|------------|------------|
| Crear clon | `append()` |
| Borrar clon | `remove()` |
| Tocar objeto | `colliderect()` |
| Vida enemigo | `enemy_life` |
| Variable puntos | `score` |
| Al pulsar tecla | `on_key_down()` |

---

# 🏆 ZONA DE ENTRENAMIENTO

## ⭐ Nivel Fácil

Realiza una de estas mejoras:

- Cambia el color de la nave.
- Cambia el color del alienígena.
- Cambia el color de los disparos.

---

## ⭐⭐ Nivel Medio

- Haz que el enemigo tenga más vida.
- Aumenta la velocidad del enemigo.
- Cambia el fondo del espacio.

---

## ⭐⭐⭐ Nivel Experto

Crea una segunda nave alienígena.

```python
enemy2 = Rect(
    200,
    120,
    50,
    50
)
```

¿Serás capaz de derrotar a los dos?

---

# 🚀 RETO DEL CREADOR

Convierte el juego en una auténtica batalla espacial.

Añade:

✅ Varios enemigos.

✅ Disparos enemigos.

✅ Sistema de vidas.

✅ Pantalla de derrota.

✅ Explosiones.

✅ Diferentes tipos de naves.

---

## 🚀 Mi mejora

____________________________________________________

____________________________________________________

____________________________________________________

---

# 🎮 MINI DESAFÍO

### Modo Francotirador

Consigue derrotar al alienígena:

🎯 Sin fallar ni un solo disparo.

□ Lo conseguí

□ Casi

□ Necesito practicar

---

# 🛠️ ERRORES FRECUENTES Y SOLUCIONES

### ❌ No aparecen disparos

Comprueba:

```python
bullets.append(bullet)
```

---

### ❌ El alienígena no se mueve

Comprueba:

```python
enemy.x += enemy_direction
```

---

### ❌ Los disparos atraviesan al enemigo

Comprueba:

```python
bullet.colliderect(enemy)
```

---

### ❌ Aparece un error con bullets

Comprueba:

```python
bullets = []
```

---

### ❌ Nunca consigo ganar

Comprueba:

```python
if enemy_life <= 0:
```

---

## 🔍 Lista rápida de comprobación

✅ ¿Existe la lista `bullets`?

✅ ¿Se crean disparos al pulsar ESPACIO?

✅ ¿Se mueve el enemigo?

✅ ¿Disminuye su vida?

✅ ¿Aumenta la puntuación?

✅ ¿Aparece el mensaje de victoria?

---

# 📊 AUTOEVALUACIÓN

| Objetivo | 😀 | 😐 | 😕 |
|-----------|---|---|---|
| He ejecutado el juego | ⬜ | ⬜ | ⬜ |
| Entiendo las listas | ⬜ | ⬜ | ⬜ |
| Entiendo los disparos | ⬜ | ⬜ | ⬜ |
| Entiendo las colisiones | ⬜ | ⬜ | ⬜ |
| He mejorado el juego | ⬜ | ⬜ | ⬜ |

---

# 🌟 LO QUE HAS APRENDIDO

¡Enhorabuena, piloto espacial!

Ahora sabes:

✅ Crear proyectiles.

✅ Utilizar listas dinámicas.

✅ Detectar impactos.

✅ Gestionar enemigos.

✅ Crear sistemas de puntuación.

✅ Construir un shooter espacial.

✅ Diseñar condiciones de victoria.

🚀 En el próximo capítulo combinarás todo lo aprendido para crear la aventura más grande del libro: **La Aventura Final**.
# 🗝️ CAPÍTULO 5
# 🏛️ ¡EL LABERINTO SECRETO!

../assets/imagenes/capitulo_5_laberinto_secreto.png

> 🔦 **EXPEDICIÓN AL TEMPLO OLVIDADO**
>
> Hace muchos años, un antiguo explorador escondió un tesoro en el interior de un enorme laberinto.
>
> Para llegar hasta él tendrás que encontrar una llave mágica y abrir la puerta secreta que protege la salida.
>
> 🗝️ Encuentra la llave.
>
> 🚪 Abre la puerta.
>
> 🏆 Escapa del laberinto.

---

# 🎯 MISIÓN DEL CAPÍTULO

Cuando termines este proyecto habrás creado tu primer juego de exploración.

Podrás:

✅ Controlar un personaje.

✅ Recoger una llave.

✅ Abrir una puerta.

✅ Crear una condición de victoria.

✅ Construir una pequeña aventura.

---

# ⭐ LO QUE APRENDERÁS

| Habilidad | ¿Para qué sirve? |
|------------|------------|
| ✅ Coordenadas | Colocar objetos |
| ✅ Variables booleanas | Guardar información |
| ✅ Movimiento | Explorar el mapa |
| ✅ Colisiones | Recoger objetos |
| ✅ Condiciones | Abrir puertas |
| ✅ Objetivos | Crear misiones |

---

# 🗺️ CÓMO SERÁ EL VIDEOJUEGO

```text
┌──────────────────────────────┐
│                              │
│        🗝️                    │
│                              │
│                              │
│              🚶             │
│                              │
│                        🚪    │
└──────────────────────────────┘
```

Tu misión será:

1. Encontrar la llave.
2. Llegar a la puerta.
3. Escapar.

---

# 🛠️ PREPARAMOS EL PROYECTO

1. Abre Thonny.
2. Crea un archivo nuevo.
3. Guárdalo como:

```text
juego05.py
```

Para ejecutarlo:

```bash
pgzrun juego05.py
```

---

# 📁 RECURSOS GRÁFICOS

Necesitarás tres sprites pixel art.

```text
images/
├── hero.png
├── key.png
└── door.png
```

### 🚶 hero.png

Tu aventurero.

- 64 × 64 píxeles
- Fondo transparente

---

### 🗝️ key.png

La llave mágica.

- 48 × 48 píxeles
- Color dorado

---

### 🚪 door.png

La puerta secreta.

- 64 × 96 píxeles
- Fondo transparente

---

# 🛠️ PASO 1
## Crear al aventurero

Comenzaremos creando el personaje.

```python
player = Actor("hero")

player.pos = (100, 100)
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Un aventurero.

✅ Un personaje controlable.

---

# 🛠️ PASO 2
## Crear una llave

Necesitamos un objetivo.

```python
key = Actor("key")

key.pos = (650, 150)
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Una misión.

✅ Un objeto importante.

---

# 🛠️ PASO 3
## Crear una puerta

La puerta será nuestra salida.

```python
door = Actor("door")

door.pos = (700, 500)
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Una meta.

✅ Una condición de victoria.

---

# 🛠️ PASO 4
## Mover al personaje

Vamos a utilizar las flechas del teclado.

```python
if keyboard.left:
    player.x -= 4

if keyboard.right:
    player.x += 4

if keyboard.up:
    player.y -= 4

if keyboard.down:
    player.y += 4
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Movimiento en cuatro direcciones.

✅ Exploración libre.

---

# 🛠️ PASO 5
## Crear una variable especial

Necesitamos recordar si hemos encontrado la llave.

```python
has_key = False
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Guardar información importante.

✅ Crear una misión real.

---

# 🎮 CÓDIGO PRINCIPAL

> 🏛️ Este es tu primer videojuego de exploración.
>
> Ahora tendrás que alcanzar objetivos para completar la aventura.

```python
import pgzrun

WIDTH = 800
HEIGHT = 600

player = Actor("hero")
player.pos = (100, 100)

key = Actor("key")
key.pos = (650, 150)

door = Actor("door")
door.pos = (700, 500)

has_key = False

victory = False


def draw():

    screen.fill((20, 40, 90))

    if not has_key:
        key.draw()

    door.draw()

    player.draw()

    if has_key:

        screen.draw.text(
            "¡Tienes la llave!",
            (20, 20),
            fontsize=40,
            color="yellow"
        )

    if victory:

        screen.draw.text(
            "¡HAS ESCAPADO!",
            center=(400, 300),
            fontsize=70,
            color="white"
        )


def update():

    global has_key
    global victory

    if victory:
        return

    if keyboard.left:
        player.x -= 4

    if keyboard.right:
        player.x += 4

    if keyboard.up:
        player.y -= 4

    if keyboard.down:
        player.y += 4

    player.x = max(
        20,
        min(WIDTH - 20, player.x)
    )

    player.y = max(
        20,
        min(HEIGHT - 20, player.y)
    )

    if player.colliderect(key):

        has_key = True

        key.pos = (-100, -100)

    if (
        has_key
        and
        player.colliderect(door)
    ):

        victory = True


pgzrun.go()
```

---

# 🔍 CÓMO FUNCIONA

## 1️⃣ Creamos al aventurero

```python
player = Actor("hero")
```

Es el personaje principal.

---

## 2️⃣ Creamos la llave

```python
key = Actor("key")
```

Representa el objeto que debemos encontrar.

---

## 3️⃣ Creamos la puerta

```python
door = Actor("door")
```

Es la salida del laberinto.

---

## 4️⃣ Movemos al jugador

```python
keyboard.left
```

```python
keyboard.right
```

```python
keyboard.up
```

```python
keyboard.down
```

Detectan las flechas pulsadas.

---

## 5️⃣ Detectamos la llave

```python
player.colliderect(key)
```

Si tocamos la llave:

```python
has_key = True
```

---

## 6️⃣ Abrimos la puerta

```python
if has_key and player.colliderect(door):
```

Solo podemos escapar si tenemos la llave.

---

## 7️⃣ Ganamos la partida

```python
victory = True
```

Muestra el mensaje final.

---

# 💡 CONCEPTO CLAVE
## Variables booleanas

Las variables booleanas solo pueden tener dos valores:

```python
True
```

o

```python
False
```

Por ejemplo:

```python
has_key = False
```

Todavía no tenemos la llave.

---

Después:

```python
has_key = True
```

Ya la hemos encontrado.

---

## 🎯 Las variables booleanas se utilizan para:

✅ Abrir puertas.

✅ Activar poderes.

✅ Crear Game Over.

✅ Mostrar victorias.

✅ Desbloquear niveles.

---

# 🔄 DE SCRATCH A PYTHON

| En Scratch | En Python |
|------------|------------|
| Ir a x: y: | `pos = (x, y)` |
| Variable | `has_key` |
| Si toca objeto | `colliderect()` |
| Mostrar mensaje | `screen.draw.text()` |
| Mover personaje | `keyboard.left` |

---

# 🏆 ZONA DE ENTRENAMIENTO

## ⭐ Nivel Fácil

- Cambia la posición de la llave.
- Cambia la posición de la puerta.
- Haz al jugador más rápido.

---

## ⭐⭐ Nivel Medio

- Añade una segunda llave.
- Cambia los colores del escenario.
- Añade una puerta falsa.

---

## ⭐⭐⭐ Nivel Experto

Haz que sean necesarias dos llaves para escapar.

Pista:

```python
keys_found = 0
```

---

# 🚀 RETO DEL CREADOR

Convierte el juego en una aventura completa.

Añade:

✅ Cronómetro.

✅ Más puertas.

✅ Más llaves.

✅ Obstáculos.

✅ Varios niveles.

---

## 🚀 Mi mejora

____________________________________________________

____________________________________________________

____________________________________________________

---

# 🎮 MINI DESAFÍO

### Explorador Maestro

Consigue:

🗝️ Encontrar la llave.

🚪 Abrir la puerta.

⏱️ En menos de 15 segundos.

□ Lo conseguí

□ Casi

□ Necesito practicar

---

# 🛠️ ERRORES FRECUENTES Y SOLUCIONES

### ❌ Error

```text
No image found like 'hero'
```

### Solución

Comprueba:

```text
images/hero.png
```

---

### ❌ Error

```text
No image found like 'key'
```

### Solución

Comprueba:

```text
images/key.png
```

---

### ❌ Error

```text
No image found like 'door'
```

### Solución

Comprueba:

```text
images/door.png
```

---

### ❌ Nunca consigo escapar

Comprueba:

```python
has_key = True
```

Debe ejecutarse cuando recojas la llave.

---

### ❌ La llave sigue apareciendo

Comprueba:

```python
key.pos = (-100, -100)
```

---

### ❌ Puedo salir de la pantalla

Comprueba:

```python
player.x = max(...)
```

y

```python
player.y = max(...)
```

---

## 🔍 Lista rápida de comprobación

✅ ¿Existe hero.png?

✅ ¿Existe key.png?

✅ ¿Existe door.png?

✅ ¿La llave desaparece al recogerla?

✅ ¿La puerta funciona?

✅ ¿Aparece la victoria?

---

# 📊 AUTOEVALUACIÓN

| Objetivo | 😀 | 😐 | 😕 |
|-----------|---|---|---|
| He ejecutado el juego | ⬜ | ⬜ | ⬜ |
| Entiendo las coordenadas | ⬜ | ⬜ | ⬜ |
| Entiendo las colisiones | ⬜ | ⬜ | ⬜ |
| Entiendo las variables booleanas | ⬜ | ⬜ | ⬜ |
| He completado algún reto | ⬜ | ⬜ | ⬜ |

---

# 🌟 LO QUE HAS APRENDIDO

🎉 ¡Fantástico!

Has creado tu primer juego de exploración.

Ahora sabes:

✅ Mover personajes.

✅ Utilizar coordenadas.

✅ Detectar colisiones.

✅ Crear objetivos.

✅ Utilizar variables booleanas.

✅ Diseñar pequeñas aventuras.

⚡ En el próximo capítulo pondrás a prueba tus reflejos en un desafío de precisión donde cada milisegundo cuenta.
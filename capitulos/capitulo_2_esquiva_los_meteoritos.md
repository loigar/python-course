# ☄️ CAPÍTULO 2
# 🚀 ¡ESQUIVA LOS METEORITOS!

../assets/imagenes/capitulo_2_esquiva_los_meteoritos.png

> 🚨 **ALERTA ESPACIAL**
>
> Tu nave está atravesando un peligroso campo de meteoritos.
>
> Rocas gigantes aparecen por todas partes y viajan a gran velocidad.
>
> Tu misión es sobrevivir el mayor tiempo posible.
>
> 🚀 Esquiva los meteoritos.
>
> ⏱️ Aguanta todo lo que puedas.
>
> 🏆 Consigue la mejor puntuación.

---

# 🎯 MISIÓN DEL CAPÍTULO

Cuando termines este proyecto habrás creado un auténtico juego de supervivencia espacial.

Podrás:

✅ Mover una nave.

✅ Esquivar obstáculos.

✅ Utilizar vidas.

✅ Crear un Game Over.

✅ Construir un videojuego cada vez más difícil.

---

# ⭐ LO QUE APRENDERÁS

| Habilidad | ¿Para qué sirve? |
|------------|------------|
| ✅ Variables | Guardar puntos y vidas |
| ✅ Movimiento | Controlar la nave |
| ✅ Colisiones | Detectar impactos |
| ✅ Eventos | Leer el teclado |
| ✅ Estados | Saber si el juego termina |
| ✅ Aleatoriedad | Crear meteoritos impredecibles |

---

# 🕹️ CÓMO SERÁ EL VIDEOJUEGO

```text
☄️         ☄️


      ☄️


           ☄️


        🚀
```

Los meteoritos caerán continuamente.

Tu nave deberá esquivarlos.

Cada segundo que sobrevivas aumentará tu puntuación.

---

# 🛠️ PREPARAMOS EL PROYECTO

Antes de comenzar, crea una nueva carpeta:

```text
EsquivaMeteoritos/
│
├── juego02.py
│
└── images/
    ├── ship.png
    └── meteor.png
```

Guarda tu programa como:

```text
juego02.py
```

Para ejecutarlo:

```bash
pgzrun juego02.py
```

---

# 📁 RECURSOS GRÁFICOS

Necesitarás dos sprites.

## 🚀 ship.png

Tu nave espacial.

Características recomendadas:

- 64 × 64 píxeles
- Fondo transparente
- Estilo pixel art

---

## ☄️ meteor.png

Los obstáculos del juego.

Características recomendadas:

- 32 × 32 píxeles
- Fondo transparente
- Estilo pixel art

---

### ¿Cómo encuentra las imágenes Pygame Zero?

Cuando escribimos:

```python
ship = Actor("ship")
```

Pygame Zero busca:

```text
images/ship.png
```

Y cuando escribimos:

```python
meteor = Actor("meteor")
```

busca:

```text
images/meteor.png
```

---

# 🛠️ PASO 1
## Crear la nave

Primero colocaremos la nave en pantalla.

```python
ship = Actor("ship")

ship.pos = (400, 520)
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Una nave espacial.

✅ Un personaje controlable.

---

# 🛠️ PASO 2
## Crear un meteorito

Ahora añadiremos el peligro.

```python
meteor = Actor("meteor")

meteor.pos = (400, 0)
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Un obstáculo.

✅ Un objetivo que esquivar.

---

# 🛠️ PASO 3
## Mover la nave

Necesitamos controlar la nave con el teclado.

```python
if keyboard.left:
    ship.x -= 6

if keyboard.right:
    ship.x += 6
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Movimiento lateral.

✅ Control del jugador.

---

# 🛠️ PASO 4
## Hacer caer el meteorito

Los meteoritos deben descender continuamente.

```python
meteor.y += 5
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Movimiento automático.

✅ Sensación de peligro.

---

# 🛠️ PASO 5
## Añadir vidas

Ahora convertiremos el ejercicio en un videojuego real.

```python
lives = 3
```

Cada impacto restará una vida.

---

# 🎮 CÓDIGO PRINCIPAL

> 🚀 Este es tu primer juego de supervivencia.
>
> El objetivo no es conseguir un final, sino aguantar el mayor tiempo posible.

```python
import pgzrun
from random import randint

WIDTH = 800
HEIGHT = 600

ship = Actor("ship")
ship.pos = (400, 520)

meteor = Actor("meteor")
meteor.pos = (
    randint(50, 750),
    0
)

score = 0
lives = 3

game_over = False


def draw():

    screen.fill((0, 0, 20))

    ship.draw()

    if not game_over:
        meteor.draw()

    screen.draw.text(
        f"Puntos: {score}",
        (20, 20),
        fontsize=35,
        color="white"
    )

    screen.draw.text(
        f"Vidas: {lives}",
        (20, 60),
        fontsize=35,
        color="white"
    )

    if game_over:

        screen.draw.text(
            "GAME OVER",
            center=(400, 250),
            fontsize=70,
            color="red"
        )

        screen.draw.text(
            f"Puntuación: {score}",
            center=(400, 340),
            fontsize=40,
            color="yellow"
        )


def update():

    global score
    global lives
    global game_over

    if game_over:
        return

    score += 1

    if keyboard.left:
        ship.x -= 6

    if keyboard.right:
        ship.x += 6

    ship.x = max(
        40,
        min(WIDTH - 40, ship.x)
    )

    meteor.y += 5

    if meteor.y > HEIGHT:

        meteor.pos = (
            randint(50, 750),
            0
        )

    if ship.colliderect(meteor):

        lives -= 1

        meteor.pos = (
            randint(50, 750),
            0
        )

        if lives <= 0:

            game_over = True


pgzrun.go()
```

---

# 🔍 CÓMO FUNCIONA

## 1️⃣ Creamos la nave

```python
ship = Actor("ship")
```

Es el personaje controlado por el jugador.

---

## 2️⃣ Creamos el meteorito

```python
meteor = Actor("meteor")
```

Representa el peligro que debemos evitar.

---

## 3️⃣ Movemos la nave

```python
keyboard.left
```

y

```python
keyboard.right
```

detectan las teclas pulsadas.

---

## 4️⃣ Hacemos caer el meteorito

```python
meteor.y += 5
```

Cada fotograma el meteorito baja un poco.

---

## 5️⃣ Detectamos impactos

```python
ship.colliderect(meteor)
```

Comprueba si los dos objetos se tocan.

---

## 6️⃣ Perdemos vidas

```python
lives -= 1
```

Cada choque resta una vida.

---

## 7️⃣ Terminamos la partida

```python
game_over = True
```

Cuando no quedan vidas.

---

# 💡 CONCEPTO CLAVE
## Estados del juego

Muchos videojuegos utilizan variables para saber qué ocurre durante una partida.

Por ejemplo:

```python
game_over = False
```

La partida continúa.

---

Cuando perdemos:

```python
game_over = True
```

El juego termina.

---

## 🎯 Los estados se utilizan para:

✅ Game Over

✅ Victoria

✅ Pausa

✅ Pantalla inicial

✅ Cambio de nivel

---

# 🔄 DE SCRATCH A PYTHON

| En Scratch | En Python |
|------------|------------|
| Si toca objeto | `colliderect()` |
| Variable vidas | `lives` |
| Cambiar x por 10 | `ship.x += 10` |
| Mostrar texto | `screen.draw.text()` |
| Detener juego | `game_over = True` |

---

# 🏆 ZONA DE ENTRENAMIENTO

## ⭐ Nivel Fácil

Realiza una mejora:

- Cambia el color del espacio.
- Haz el meteorito más lento.
- Haz la nave más rápida.

---

## ⭐⭐ Nivel Medio

- Empieza con 5 vidas.
- Añade una segunda roca.
- Cambia el tamaño del meteorito.

---

## ⭐⭐⭐ Nivel Experto

Añade dos meteoritos simultáneos.

Pista:

```python
meteor2 = Actor("meteor")
```

---

# 🚀 RETO DEL CREADOR

Convierte el juego en un desafío espacial.

Añade:

✅ Más meteoritos.

✅ Diferentes tamaños.

✅ Récord de puntuación.

✅ Pantalla de inicio.

✅ Nivel difícil.

---

## 🚀 Mi mejora

____________________________________________________

____________________________________________________

____________________________________________________

---

# 🎮 MINI DESAFÍO

### Piloto Espacial

Consigue sobrevivir durante:

⏱️ 30 segundos

sin perder ninguna vida.

□ Lo conseguí

□ Casi

□ Necesito practicar

---

# 🛠️ ERRORES FRECUENTES Y SOLUCIONES

### ❌ Error

```text
No image found like 'ship'
```

### Solución

Comprueba que existe:

```text
images/ship.png
```

---

### ❌ Error

```text
No image found like 'meteor'
```

### Solución

Comprueba que existe:

```text
images/meteor.png
```

---

### ❌ La nave sale de la pantalla

Comprueba que existe:

```python
ship.x = max(
    40,
    min(WIDTH - 40, ship.x)
)
```

---

### ❌ El meteorito no vuelve a aparecer

Comprueba que existe:

```python
meteor.pos = (
    randint(50, 750),
    0
)
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

✅ ¿Has creado las imágenes?

✅ ¿Están dentro de la carpeta `images`?

✅ ¿La nave se mueve?

✅ ¿El meteorito cae?

✅ ¿Se pierden vidas al chocar?

✅ ¿Aparece GAME OVER?

---

# 📊 AUTOEVALUACIÓN

| Objetivo | 😀 | 😐 | 😕 |
|-----------|---|---|---|
| He ejecutado el juego | ⬜ | ⬜ | ⬜ |
| Entiendo las colisiones | ⬜ | ⬜ | ⬜ |
| Entiendo las vidas | ⬜ | ⬜ | ⬜ |
| Entiendo Game Over | ⬜ | ⬜ | ⬜ |
| He completado algún reto | ⬜ | ⬜ | ⬜ |

---

# 🌟 LO QUE HAS APRENDIDO

🎉 ¡Excelente trabajo, piloto espacial!

Ahora sabes:

✅ Mover personajes.

✅ Detectar colisiones.

✅ Gestionar vidas.

✅ Crear un Game Over.

✅ Utilizar posiciones aleatorias.

✅ Construir juegos de supervivencia.

🚀 En el próximo capítulo crearás un juego completamente diferente: un desafío de reflejos donde deberás hacer clic antes que nadie.
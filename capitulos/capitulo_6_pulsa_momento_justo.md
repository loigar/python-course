# ⚡ CAPÍTULO 6
# ⏱️ ¡PULSA EN EL MOMENTO JUSTO!

../assets/imagenes/capitulo_6_pulsa_en_el_momento_justo.png

> ⚡ **PRUEBA DE REFLEJOS**
>
> La Academia de Programadores está buscando nuevos pilotos espaciales.
>
> Para entrar tendrás que superar una prueba muy especial.
>
> Una barra se moverá constantemente de un lado a otro.
>
> Tu misión será pulsar la tecla ESPACIO exactamente cuando pase por la zona verde.
>
> 🎯 Precisión.
>
> ⚡ Reflejos.
>
> 🏆 Concentración.
>
> ¿Serás capaz de superar la prueba?

---

# 🎯 MISIÓN DEL CAPÍTULO

Cuando termines este proyecto habrás construido un videojuego basado en la velocidad de reacción.

Podrás:

✅ Crear movimiento automático.

✅ Utilizar velocidades.

✅ Detectar teclas.

✅ Gestionar puntuaciones.

✅ Gestionar vidas.

✅ Crear un Game Over.

---

# ⭐ LO QUE APRENDERÁS

| Habilidad | ¿Para qué sirve? |
|------------|------------|
| ✅ Variables | Guardar puntos y vidas |
| ✅ Velocidad | Mover objetos automáticamente |
| ✅ Eventos | Detectar teclas |
| ✅ Condiciones | Comprobar aciertos |
| ✅ Game Over | Finalizar la partida |
| ✅ Mensajes | Informar al jugador |

---

# 🕹️ CÓMO SERÁ EL VIDEOJUEGO

```text
┌───────────────────────────┐
│                           │
│ ========🟩=======         │
│         🔴                │
│                           │
└───────────────────────────┘

🎯 Pulsa ESPACIO

🟩 Cuando el marcador esté

exactamente sobre la zona verde
```

---

# 🛠️ PREPARAMOS EL PROYECTO

1. Abre Thonny.
2. Crea un archivo nuevo.
3. Guárdalo como:

```text
juego06.py
```

Para ejecutarlo:

```bash
pgzrun juego06.py
```

---

# 📁 RECURSOS GRÁFICOS

En este capítulo no vamos a utilizar imágenes.

Todo se dibuja mediante:

✅ Rectángulos

✅ Colores

✅ Texto

Esto nos permitirá concentrarnos en aprender la mecánica del juego.

---

# 🛠️ PASO 1
## Crear una barra que se mueve

Vamos a empezar construyendo el movimiento.

```python
WIDTH = 800
HEIGHT = 400

marker_x = 100

speed = 5
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Una posición.

✅ Una velocidad.

✅ La base del videojuego.

---

# 🛠️ PASO 2
## Mover automáticamente el marcador

Ahora utilizaremos la velocidad.

```python
marker_x += speed
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Movimiento automático.

✅ Una mecánica interesante.

---

# 🛠️ PASO 3
## Hacer rebotar la barra

Necesitamos que vuelva hacia atrás.

```python
speed = -speed
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Movimiento continuo.

✅ Rebotes automáticos.

---

# 🛠️ PASO 4
## Detectar la barra espaciadora

Ahora el jugador podrá interactuar.

```python
if key == keys.SPACE:
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Detectar pulsaciones.

✅ Crear un desafío.

---

# 🛠️ PASO 5
## Añadir puntos

Creamos una puntuación.

```python
score = 0
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Sistema de recompensa.

✅ Motivación para seguir jugando.

---

# 🛠️ PASO 6
## Añadir vidas

Ahora el juego será más emocionante.

```python
lives = 3
```

Cada fallo restará una vida.

---

# 🎮 CÓDIGO PRINCIPAL

> ⚡ Este es tu primer juego de reflejos.
>
> Cuanto más preciso seas, más puntos conseguirás.

```python
WIDTH = 800
HEIGHT = 400

marker_x = 100
speed = 5

score = 0
lives = 3

message = "Pulsa ESPACIO"

game_over = False


def draw():

    screen.fill("black")

    # Barra principal

    screen.draw.filled_rect(
        Rect((100,150),(600,40)),
        "gray"
    )

    # Zona objetivo

    screen.draw.filled_rect(
        Rect((350,145),(100,50)),
        "green"
    )

    # Marcador

    screen.draw.filled_rect(
        Rect((marker_x,140),(20,60)),
        "red"
    )

    screen.draw.text(
        f"Puntos: {score}",
        (20,20),
        fontsize=40,
        color="white"
    )

    screen.draw.text(
        f"Vidas: {lives}",
        (20,60),
        fontsize=40,
        color="white"
    )

    screen.draw.text(
        message,
        center=(400,280),
        fontsize=40,
        color="yellow"
    )

    if game_over:

        screen.draw.text(
            "GAME OVER",
            center=(400,340),
            fontsize=60,
            color="red"
        )


def update():

    global marker_x
    global speed

    if game_over:
        return

    marker_x += speed

    if marker_x > 680:
        speed = -speed

    if marker_x < 100:
        speed = -speed


def on_key_down(key):

    global score
    global lives
    global message
    global game_over

    if game_over:
        return

    if key == keys.SPACE:

        if 350 < marker_x < 450:

            score += 1

            message = "¡Perfecto!"

        else:

            lives -= 1

            message = "Fallaste"

            if lives == 0:

                game_over = True


pgzrun.go()
```

---

# 🔍 CÓMO FUNCIONA

## 1️⃣ Creamos una velocidad

```python
speed = 5
```

La velocidad controla cuánto se mueve la barra.

---

## 2️⃣ Movemos el marcador

```python
marker_x += speed
```

La barra avanza automáticamente.

---

## 3️⃣ Cambiamos de dirección

```python
speed = -speed
```

Cuando llega a un extremo, rebota.

---

## 4️⃣ Detectamos una tecla

```python
on_key_down(key)
```

Se ejecuta cuando pulsamos una tecla.

---

## 5️⃣ Comprobamos si hemos acertado

```python
if 350 < marker_x < 450:
```

Verifica si el marcador está dentro de la zona verde.

---

## 6️⃣ Ganamos puntos

```python
score += 1
```

Cada acierto vale un punto.

---

## 7️⃣ Perdemos vidas

```python
lives -= 1
```

Cada error tiene consecuencias.

---

## 8️⃣ Terminamos la partida

```python
game_over = True
```

Cuando ya no quedan vidas.

---

# 💡 CONCEPTO CLAVE
## La velocidad

Una velocidad indica cuánto se mueve un objeto.

Por ejemplo:

```python
speed = 5
```

Cada actualización:

```python
marker_x += speed
```

hará avanzar el marcador.

---

### ➕ Más velocidad

```python
speed = 10
```

Más difícil.

---

### ➖ Velocidad negativa

```python
speed = -5
```

Movimiento en dirección contraria.

---

## 🎯 Las velocidades se utilizan para:

✅ Pelotas

✅ Coches

✅ Naves

✅ Enemigos

✅ Plataformas móviles

---

# 🔄 DE SCRATCH A PYTHON

| En Scratch | En Python |
|------------|------------|
| Cambiar x por 10 | `x += velocidad` |
| Al presionar espacio | `on_key_down()` |
| Variable puntos | `score` |
| Variable vidas | `lives` |
| Si entonces | `if` |
| Mostrar texto | `screen.draw.text()` |

---

# 🏆 ZONA DE ENTRENAMIENTO

## ⭐ Nivel Fácil

- Cambia el color del marcador.
- Cambia el color de la zona verde.
- Reduce la velocidad.

---

## ⭐⭐ Nivel Medio

- Empieza con 5 vidas.
- Aumenta la velocidad.
- Cambia los mensajes.

---

## ⭐⭐⭐ Nivel Experto

Añade una segunda zona objetivo.

Por ejemplo:

🟩 Zona verde = 1 punto.

🟦 Zona azul = 3 puntos.

---

# 🚀 RETO DEL CREADOR

Convierte el juego en una prueba profesional.

Añade:

✅ Niveles.

✅ Récord.

✅ Velocidad progresiva.

✅ Distintas zonas de puntuación.

✅ Sonidos.

---

## 🚀 Mi mejora

____________________________________________________

____________________________________________________

____________________________________________________

---

# 🎮 MINI DESAFÍO

### Modo Piloto Espacial

Consigue:

🎯 15 puntos

antes de perder todas las vidas.

□ Lo conseguí

□ Casi

□ Necesito practicar

---

# 🛠️ ERRORES FRECUENTES Y SOLUCIONES

### ❌ La barra no se mueve

Comprueba:

```python
marker_x += speed
```

---

### ❌ La barra desaparece

Comprueba:

```python
if marker_x > 680:
```

y

```python
if marker_x < 100:
```

---

### ❌ No ocurre nada al pulsar ESPACIO

Comprueba:

```python
def on_key_down(key):
```

---

### ❌ Los puntos no aumentan

Comprueba:

```python
score += 1
```

---

### ❌ Nunca aparece GAME OVER

Comprueba:

```python
if lives == 0:
```

---

## 🔍 Lista rápida de comprobación

✅ ¿Se mueve el marcador?

✅ ¿Rebota correctamente?

✅ ¿ESPACIO funciona?

✅ ¿Suben los puntos?

✅ ¿Bajan las vidas?

✅ ¿Aparece GAME OVER?

---

# 📊 AUTOEVALUACIÓN

| Objetivo | 😀 | 😐 | 😕 |
|-----------|---|---|---|
| He ejecutado el juego | ⬜ | ⬜ | ⬜ |
| Entiendo la velocidad | ⬜ | ⬜ | ⬜ |
| Entiendo los eventos | ⬜ | ⬜ | ⬜ |
| Entiendo las vidas | ⬜ | ⬜ | ⬜ |
| He completado algún reto | ⬜ | ⬜ | ⬜ |

---

# 🌟 LO QUE HAS APRENDIDO

🎉 ¡Fantástico!

Has creado tu primer juego basado en reflejos.

Ahora sabes:

✅ Utilizar velocidades.

✅ Detectar teclas.

✅ Gestionar vidas.

✅ Gestionar puntuaciones.

✅ Crear un Game Over.

✅ Diseñar juegos de precisión.

🎤 En el próximo capítulo crearás un concurso interactivo y aprenderás una de las herramientas más importantes de Python: **las listas**.
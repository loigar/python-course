# 🎤 CAPÍTULO 7
# 🏆 ¡EL GRAN CONCURSO DE PREGUNTAS!

../assets/imagenes/capitulo_7_el_concurso_de_preguntas.png

> 🎬 **LUCES, CÁMARA... ¡ACCIÓN!**
>
> Bienvenido al programa más famoso de la televisión.
>
> Hoy competirás para demostrar cuánto sabes.
>
> Cada respuesta correcta te acercará a la victoria.
>
> 📚 Aprende.
>
> ❓ Responde.
>
> 🏆 Consigue la máxima puntuación.
>
> ¿Serás capaz de convertirte en el campeón del concurso?

---

# 🎯 MISIÓN DEL CAPÍTULO

Cuando termines este proyecto habrás creado tu propio concurso interactivo.

Podrás:

✅ Mostrar preguntas en pantalla.

✅ Crear respuestas múltiples.

✅ Utilizar listas.

✅ Gestionar puntuaciones.

✅ Reiniciar una partida.

✅ Construir un videojuego educativo completo.

---

# ⭐ LO QUE APRENDERÁS

| Habilidad | ¿Para qué sirve? |
|------------|------------|
| ✅ Listas | Guardar preguntas |
| ✅ Variables | Guardar puntos |
| ✅ Eventos | Detectar teclas |
| ✅ Condiciones | Comprobar respuestas |
| ✅ Texto en pantalla | Mostrar información |
| ✅ Reinicio | Volver a jugar |

---

# 🕹️ CÓMO SERÁ EL VIDEOJUEGO

```text
╔════════════════════════════╗
║   ¿CUÁNTO ES 5 + 5?        ║
║                            ║
║   1) 8                     ║
║   2) 10                    ║
║   3) 12                    ║
║                            ║
║     Puntos: 2             ║
╚════════════════════════════╝
```

Responde utilizando:

⌨️ 1

⌨️ 2

⌨️ 3

---

# 🛠️ PREPARAMOS EL PROYECTO

1. Abre Thonny.
2. Crea un archivo nuevo.
3. Guárdalo como:

```text
juego07.py
```

Para ejecutarlo:

```bash
pgzrun juego07.py
```

---

# 📁 RECURSOS GRÁFICOS

Este capítulo funciona utilizando únicamente texto y colores.

No necesitamos imágenes para crear un buen concurso.

Más adelante podrás añadir:

```text
images/
├── logo.png
├── fondo_concurso.png
└── trofeo.png
```

para personalizar el juego.

---

# 🛠️ PASO 1
## Crear nuestra primera lista

Hasta ahora hemos guardado información en variables.

Por ejemplo:

```python
score = 5
```

Pero ¿qué hacemos cuando necesitamos guardar muchas cosas?

Utilizamos una lista.

```python
frutas = [
    "manzana",
    "pera",
    "plátano"
]
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Guardar varios elementos.

✅ Organizar información.

✅ Prepararnos para crear preguntas.

---

# 🛠️ PASO 2
## Crear una pregunta

Una pregunta tendrá tres partes:

```python
[
    "¿Cuánto es 5 + 5?",
    ["8", "10", "12"],
    1
]
```

Esto significa:

- Pregunta
- Posibles respuestas
- Posición correcta

---

### 🤔 ¿Qué hemos conseguido?

✅ Una pregunta completa.

✅ Información organizada.

---

# 🛠️ PASO 3
## Crear varias preguntas

Ahora crearemos una lista de preguntas.

```python
questions = [

    [
        "¿Cuánto es 5 + 5?",
        ["8","10","12"],
        1
    ],

    [
        "¿Capital de España?",
        ["Madrid","Roma","París"],
        0
    ]

]
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Un banco de preguntas.

✅ Un concurso real.

---

# 🛠️ PASO 4
## Detectar respuestas

Queremos usar las teclas:

```text
1
2
3
```

Por ejemplo:

```python
if key == keys.K_1:
```

---

### 🤔 ¿Qué hemos conseguido?

✅ Interacción.

✅ Posibilidad de jugar.

---

# 🛠️ PASO 5
## Crear una puntuación

Añadimos:

```python
score = 0
```

Cada acierto sumará un punto.

---

### 🤔 ¿Qué hemos conseguido?

✅ Competición.

✅ Recompensa.

✅ Progreso.

---

# 🎮 CÓDIGO PRINCIPAL

> 📚 Este es tu primer videojuego basado en listas.
>
> Lo importante no es memorizar el código, sino comprender cómo se organiza la información.

```python
WIDTH = 800
HEIGHT = 600

questions = [

    [
        "¿Cuánto es 5 + 5?",
        ["8", "10", "12"],
        1
    ],

    [
        "¿Cuántos días tiene una semana?",
        ["5", "6", "7"],
        2
    ],

    [
        "¿Capital de España?",
        ["Madrid", "Roma", "París"],
        0
    ]

]

current_question = 0

score = 0

message = ""

game_finished = False


def draw():

    screen.fill((20, 20, 80))

    if game_finished:

        screen.draw.text(
            "¡CONCURSO FINALIZADO!",
            center=(400, 180),
            fontsize=50,
            color="yellow"
        )

        screen.draw.text(
            f"Puntos: {score}/{len(questions)}",
            center=(400, 280),
            fontsize=40,
            color="white"
        )

        screen.draw.text(
            "Pulsa R para jugar otra vez",
            center=(400, 380),
            fontsize=30,
            color="lightblue"
        )

        return

    question = questions[current_question]

    screen.draw.text(
        f"Pregunta {current_question + 1}",
        (20, 20),
        fontsize=35,
        color="white"
    )

    screen.draw.text(
        f"Puntos: {score}",
        (620, 20),
        fontsize=35,
        color="white"
    )

    screen.draw.text(
        question[0],
        center=(400, 120),
        fontsize=40,
        color="yellow"
    )

    screen.draw.text(
        "1) " + question[1][0],
        (100, 230),
        fontsize=35,
        color="white"
    )

    screen.draw.text(
        "2) " + question[1][1],
        (100, 300),
        fontsize=35,
        color="white"
    )

    screen.draw.text(
        "3) " + question[1][2],
        (100, 370),
        fontsize=35,
        color="white"
    )

    screen.draw.text(
        message,
        center=(400, 500),
        fontsize=35,
        color="lightgreen"
    )


def on_key_down(key):

    global current_question
    global score
    global message
    global game_finished

    if game_finished:

        if key == keys.R:
            restart_game()

        return

    answer = None

    if key == keys.K_1:
        answer = 0

    elif key == keys.K_2:
        answer = 1

    elif key == keys.K_3:
        answer = 2

    if answer is None:
        return

    question = questions[current_question]

    if answer == question[2]:

        score += 1

        message = "✅ ¡Correcto!"

    else:

        message = "❌ Incorrecto"

    current_question += 1

    if current_question >= len(questions):

        game_finished = True


def restart_game():

    global current_question
    global score
    global message
    global game_finished

    current_question = 0
    score = 0
    message = ""
    game_finished = False
```

---

# 🔍 CÓMO FUNCIONA

## 1️⃣ Creamos las preguntas

```python
questions = []
```

La lista guarda todas las preguntas del concurso.

---

## 2️⃣ Guardamos respuestas

```python
["8", "10", "12"]
```

Es otra lista dentro de la pregunta.

---

## 3️⃣ Mostramos una pregunta

```python
question = questions[current_question]
```

Seleccionamos la pregunta actual.

---

## 4️⃣ Detectamos las teclas

```python
if key == keys.K_1:
```

Cada tecla corresponde a una respuesta.

---

## 5️⃣ Comprobamos el resultado

```python
if answer == question[2]:
```

Si coincide:

```python
score += 1
```

ganamos un punto.

---

## 6️⃣ Pasamos a la siguiente pregunta

```python
current_question += 1
```

Avanzamos dentro de la lista.

---

## 7️⃣ Reiniciamos la partida

```python
restart_game()
```

Permite volver a jugar.

---

# 💡 CONCEPTO CLAVE
## Las listas

Una lista puede guardar muchos elementos.

Por ejemplo:

```python
colores = [
    "rojo",
    "verde",
    "azul"
]
```

Podemos acceder a ellos usando posiciones.

```python
colores[0]
```

Resultado:

```text
rojo
```

---

## 🎯 Las listas se utilizan para:

✅ Preguntas

✅ Enemigos

✅ Objetos

✅ Inventarios

✅ Puntuaciones

✅ Niveles

---

# 🔄 DE SCRATCH A PYTHON

| En Scratch | En Python |
|------------|------------|
| Crear lista | `[]` |
| Primer elemento | `[0]` |
| Añadir elemento | `append()` |
| Variable puntos | `score` |
| Si entonces | `if` |
| Al pulsar tecla | `on_key_down()` |

---

# 🏆 ZONA DE ENTRENAMIENTO

## ⭐ Nivel Fácil

- Añade dos preguntas nuevas.
- Cambia algunas respuestas.
- Cambia los colores del concurso.

---

## ⭐⭐ Nivel Medio

- Añade cinco preguntas nuevas.
- Muestra una nota final.
- Cambia la pantalla de finalización.

---

## ⭐⭐⭐ Nivel Experto

Crea una categoría especial.

Ejemplos:

🎮 Videojuegos

🐍 Python

🚀 Espacio

🦖 Dinosaurios

🪐 Planetas

---

# 🚀 RETO DEL CREADOR

Convierte el concurso en un auténtico programa de televisión.

Añade:

✅ Pantalla inicial.

✅ Música.

✅ Sonidos.

✅ Preguntas aleatorias.

✅ Récord de puntuación.

✅ Trofeo final.

---

## 🚀 Mi mejora

____________________________________________________

____________________________________________________

____________________________________________________

---

# 🎮 MINI DESAFÍO

### Presentador Profesional

Crea un concurso con:

❓ 10 preguntas

🏆 Puntuación final

🎉 Pantalla de celebración

□ Lo conseguí

□ Casi

□ Necesito practicar

---

# 🛠️ ERRORES FRECUENTES Y SOLUCIONES

### ❌ Aparece un error con `questions`

Comprueba:

```python
questions = []
```

---

### ❌ No aparecen preguntas

Comprueba:

```python
question = questions[current_question]
```

---

### ❌ Los puntos no aumentan

Comprueba:

```python
score += 1
```

---

### ❌ Las teclas no funcionan

Comprueba:

```python
def on_key_down(key):
```

---

### ❌ Nunca termina el concurso

Comprueba:

```python
if current_question >= len(questions):
```

---

### ❌ No puedo reiniciar

Comprueba:

```python
restart_game()
```

y

```python
if key == keys.R:
```

---

## 🔍 Lista rápida de comprobación

✅ ¿Existe la lista `questions`?

✅ ¿Las preguntas aparecen?

✅ ¿Las teclas responden?

✅ ¿La puntuación aumenta?

✅ ¿Aparece el final?

✅ ¿Funciona reiniciar?

---

# 📊 AUTOEVALUACIÓN

| Objetivo | 😀 | 😐 | 😕 |
|-----------|---|---|---|
| He ejecutado el juego | ⬜ | ⬜ | ⬜ |
| Entiendo las listas | ⬜ | ⬜ | ⬜ |
| Entiendo las preguntas | ⬜ | ⬜ | ⬜ |
| Entiendo la puntuación | ⬜ | ⬜ | ⬜ |
| He completado algún reto | ⬜ | ⬜ | ⬜ |

---

# 🌟 LO QUE HAS APRENDIDO

🎉 ¡Excelente trabajo!

Has construido tu primer videojuego basado en listas.

Ahora sabes:

✅ Crear listas.

✅ Guardar preguntas y respuestas.

✅ Detectar teclas.

✅ Gestionar puntuaciones.

✅ Reiniciar partidas.

✅ Crear concursos interactivos.

🐍 En el próximo capítulo construirás uno de los videojuegos más famosos de todos los tiempos: **La Serpiente Hambrienta**.
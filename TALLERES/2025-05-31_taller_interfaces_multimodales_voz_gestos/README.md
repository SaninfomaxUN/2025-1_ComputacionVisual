# 🧪 Taller - Interfaces Multimodales: Uniendo Voz y Gestos

## 📅 Fecha
`2025-05-31`

---

## 🎯 Objetivo del Taller
Fusionar gestos (detectados con MediaPipe) y comandos de voz para realizar acciones compuestas dentro de una interfaz visual. Este taller introduce los fundamentos de los sistemas de interacción multimodal, combinando dos formas de entrada humana para enriquecer la experiencia de control.

---

## 🧠 Conceptos Aprendidos

- [ ] Transformaciones geométricas (escala, rotación, traslación)
- [ ] Segmentación de imágenes
- [ ] Shaders y efectos visuales
- [ ] Entrenamiento de modelos IA
- [ ] Comunicación por gestos o voz
- [ ] Otro: _______________________

---

## 🔧 Herramientas y Entornos


- Python (`opencv-python`, `torch`, `mediapipe`, `diffusers`, etc.)
- Processing

---

## 📁 Estructura del Proyecto

```
2025-05-31_taller_interfaces_multimodales_voz_gestos/
├── processing/            # Processing
├── python/                # Python
├── datos/                 # imágenes, audio, modelos, video
├── resultados/            # capturas, métricas, gifs
├── README.md
```

---

## 🧪 Implementación


### 🔹 Etapas realizadas
1. Preparación de datos o escena.
2. Aplicación de modelo o algoritmo.
3. Visualización o interacción.
4. Guardado de resultados.


### 🔹 Código relevante


#### Python

```python
# example
Code snippet
```

#### Processing

```java
// example
Code snippet
```



---
## 📊 Resultados Visuales


### Processing
![Processing](resultados/Processing.gif)

### Python
![Python](resultados/Python.gif)


---

## 🧩 Prompts Usados

### Processing
```text
En Processing, crea una escena visual interactiva que reciba comandos desde una aplicación en Python a través de mensajes OSC. Utiliza la librería oscP5 para escuchar los mensajes entrantes y vincula cada tipo de mensaje a una acción específica: cambiar el color o forma de objetos en pantalla, iniciar o detener animaciones, y mostrar texto dinámico que indique el último comando recibido. Asegura una comunicación fluida y en tiempo real entre ambos entornos para una respuesta visual inmediata a las entradas del usuario.
```

### Python
```text
En un entorno Python (Colab o local), utiliza mediapipe y opencv-python para capturar video en tiempo real desde una webcam y detectar gestos de mano, mientras empleas speech_recognition y pyaudio para reconocer comandos de voz simples como 'azul', 'rotar' o 'mostrar'. Procesa simultáneamente ambas señales de entrada utilizando hilos o bucles coordinados, e implementa lógica condicional que combine ambos tipos de entrada. Por ejemplo: cambiar el color solo si se dice 'cambiar' y la mano está abierta, o mover un objeto solo si se pronuncia 'mover' y se muestra un gesto de dos dedos. Finalmente, diseña una escena visual interactiva con tkinter, que responda dinámicamente a estas combinaciones de entrada.
```



---

## 💬 Reflexión Final

- ¿Qué aprendiste o reforzaste con este taller?
- ¿Qué parte fue más compleja o interesante?
- ¿Qué mejorarías o qué aplicarías en futuros proyectos?

---

## ✅ Checklist de Entrega

- [X] Carpeta `2025-05-31_taller_interfaces_multimodales_voz_gestos`
- [ ] Código limpio y funcional
- [ ] GIF incluido con nombre descriptivo
- [ ] Visualizaciones o métricas exportadas
- [ ] README completo y claro
- [ ] Commits descriptivos en inglés

---
# 🌐 Taller - WebSockets e Interacción Visual en Tiempo Real

## 📅 Fecha
`2025-06-25`

---

## 🎯 Objetivo del Taller

Comprender cómo usar WebSockets para habilitar comunicación en tiempo real entre un cliente (interfaz visual) y un servidor. El objetivo es crear una visualización gráfica que reaccione dinámicamente a datos transmitidos por WebSocket.

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


- Python (`websockets`)
- Three.js (`React Three Fiber`)

---

## 📁 Estructura del Proyecto

```
2025-06-25_taller_websockets_interaccion_visual/
├── python/                # Python
├── threejs/               # Three.js
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
# Enviar datos en tiempo real con WebSockets
while True:
    data = generate_data()
    await websocket.send(json.dumps(data))
    await asyncio.sleep(0.5)
    
...

# Servidor WebSocket en Python
    async with websockets.serve(send_data, "localhost", 8700):
        await asyncio.Future()
```

#### Three.js

```javascript
// Establece el WebSocket
useEffect(() => {
    const ws = new WebSocket('ws://localhost:8700')

    // Maneja los mensajes entrantes
    ws.onmessage = (event) => {
        const data = JSON.parse(event.data)
        
        // Actualiza la posición y color del objeto
        setPosition({x: data.x, y: data.y})
        setColor(data.color)
    }
```



---
## 📊 Resultados Visuales


### Python + Three.js
![PythonThreejs](resultados/PythonThreejs.gif)


---

## 🧩 Prompts Usados



### Python
```text
Utiliza las librerías websockets y asyncio para crear un servidor WebSocket que genere y envíe datos en tiempo real a los clientes conectados. Cada 0.5 segundos, el servidor debe enviar un mensaje en formato JSON con estructura { 'x': ..., 'y': ..., 'color': ... }, donde los valores pueden ser coordenadas aleatorias y un color hexadecimal generado dinámicamente.
```

### Three.js
```text
En una aplicación web construida con React y Three.js (usando React Three Fiber), crea una escena 3D que incluya un objeto básico como una esfera o un cubo. Establece una conexión WebSocket desde el navegador al servidor WebSocket de Python creado previamente y utiliza los datos recibidos en tiempo real (por ejemplo, posición x, y y color) para actualizar dinámicamente la ubicación y el color del objeto en la escena. Asegura una actualización fluida y reactiva del objeto según los mensajes JSON que lleguen desde el servidor.
```


---

## 💬 Reflexión Final

- ¿Qué aprendiste o reforzaste con este taller?
- ¿Qué parte fue más compleja o interesante?
- ¿Qué mejorarías o qué aplicarías en futuros proyectos?

---


## ✅ Checklist de Entrega

- [x] Carpeta `2025-06-25_taller_websockets_interaccion_visual`
- [ ] Código limpio y funcional
- [ ] GIF incluido con nombre descriptivo
- [ ] Visualizaciones o métricas exportadas
- [ ] README completo y claro
- [ ] Commits descriptivos en inglés

---
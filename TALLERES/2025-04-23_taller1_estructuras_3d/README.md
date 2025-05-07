# 🧪 Taller #1 - Construyendo el Mundo 3D: Vértices, Aristas y Caras

## 📅 Fecha
`2025-04-23`

---

## 🎯 Objetivo del Taller

Comprender las estructuras gráficas básicas que forman los modelos 3D (mallas poligonales) y visualizar su estructura en distintas plataformas. Se explorará la diferencia entre vértice, arista y cara, así como el contenido de formatos de archivo estándar de malla como .OBJ, .STL y .GLTF.

---

## 🧠 Conceptos Aprendidos

- [x] Concepto y visualización de Estructuras graficas

---

## 🔧 Herramientas y Entornos


- Python (`opencv-python`, `torch`, `mediapipe`, `diffusers`, etc.)
- Unity (versión LTS, XR Toolkit, Shader Graph)
- Three.js (`typescript`, `@react-three/fiber`, `@react-three/drei`, `@three-stl-loader`)

---

## 📁 Estructura del Proyecto

```
2025-04-23_taller1_estructuras_3d/
├── python/                # Python
├── threejs/               # Three.js
├── unity/                 # Unity
├── datos/                 # Modelo STL
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

#### Unity

```csharp
// example
Code snippet
```

#### Three.js

```react
const geometry = useLoader(STLLoader, '/model.stl');

useEffect(() => {
    if (geometry) {
        // Calculate vertex
        const vertexCount = geometry.attributes.position.count / 3;
        // Calculate face count
        const geoCount = geometry.index?.count as number;
        const faceCount =
            geoCount / 3 || geometry.attributes.position.count / 3;
        // Call the onModelLoaded function with vertex and face count
        onModelLoaded({ vertexCount, faceCount });
    }
}, [geometry, onModelLoaded]);

return (
    <>
        <mesh>
            // Set the position and rotation of the model
            <primitive object={geometry} />
            // Set the Material of the model
            <meshStandardMaterial color={new THREE.Color().setHex( 0x6c6969 )} />
            // Set the wireframe mode
            {mode === 'wireframe' && <Wireframe />}
        </mesh>
        // Set the edges of the model
        {mode === 'edges' && <Edges geometry={geometry} />}
    </>
);
```





---
## 📊 Resultados Visuales


### Python
![Python](resultados/Python.gif)

### Unity
![Unity](resultados/Unity.gif)

### Three.js
![Three.js](resultados/Threejs.gif)

---

## 🧩 Prompts Usados

### Python
```text
// Example
```

### Unity
```text
// Example
```


### Three.js
```text
Usando Vite y React Three Fiber, crea una aplicación que cargue un modelo 3D en formato .OBJ, .STL o .GLTF mediante @react-three/drei. El modelo debe visualizarse con OrbitControls para permitir la navegación interactiva. Implementa efectos visuales como Wireframe o Edges para resaltar vértices, aristas o caras del modelo. Como funcionalidad adicional, diseña una pequeña interfaz de usuario que permita alternar entre los modos de visualización (vértices, aristas, caras) y muestre información básica del modelo, como la cantidad de vértices y caras.
```


---

## 💬 Reflexión Final

- ¿Qué aprendiste o reforzaste con este taller?
- ¿Qué parte fue más compleja o interesante?
- ¿Qué mejorarías o qué aplicarías en futuros proyectos?

---


## ✅ Checklist de Entrega

- [x] Carpeta `2025-04-23_taller1_estructuras_3d`
- [ ] Código limpio y funcional
- [ ] GIF incluido con nombre descriptivo
- [ ] README completo y claro
- [ ] Commits descriptivos en inglés

---
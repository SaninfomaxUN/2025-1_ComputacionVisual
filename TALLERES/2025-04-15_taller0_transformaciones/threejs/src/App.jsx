import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {Box, OrbitControls} from "@react-three/drei";
import './App.css'

// Componente para la esfera animada
const AnimatedSphere = () => {
    const mesh = useRef();

    // Función para aplicar animaciones con useFrame
    useFrame(({ clock }) => {
        const time = clock.elapsedTime;

        // 1. Trasladar por una trayectoria senoidal
        mesh.current.position.x = Math.sin(time * 2) * 3; // X: seno
        mesh.current.position.y = Math.cos(time * 1.5) * 2; // Y: coseno

        // 2. Rotar sobre su eje (eje Y)
        mesh.current.rotation.y += 0.01; // Incremento constante

        // 3. Escalar con una función temporal (Math.sin)
        const scaleValue = 1 + 0.5 * Math.sin(time); // Escala entre 0.5 y 1.5
        mesh.current.scale.set(scaleValue, scaleValue, scaleValue);
    });

    return (
        <Box ref={mesh} args={[1, 1, 1]}>{/* Radio 1, resolución 64 */}
            <meshStandardMaterial color="hotpink" />
        </Box>
    );
};

const App = () => {
    return (
        <Canvas shadows style={{width: '100vw', height: '100vh'}} dpr={[1, 2]}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <AnimatedSphere />
            <OrbitControls enableZoom={true} enableRotate={true} />
        </Canvas>
    );
};

export default App

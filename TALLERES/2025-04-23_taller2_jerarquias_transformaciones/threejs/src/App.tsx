import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Leva, useControls } from 'leva';

const Scene = () => {
    // Configuración del grupo (rotación y posición)
    const { rotation, position } = useControls({
        rotation: { value: [0, 0, 0], min: [-Math.PI, -Math.PI, -Math.PI], max: [Math.PI, Math.PI, Math.PI] },
        position: { value: [0, 0, 0], min: [-10, -10, -10], max: [10, 10, 10] },
    });

    // Grupo principal
    return (
        <group rotation={rotation} position={position}>
            {/* Elementos hijos del grupo */}

            <mesh position={[-2, 0, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="red" />
            </mesh>

            <mesh position={[2, 0, 0]}>
                <sphereGeometry args={[0.75, 32, 32]} />
                <meshStandardMaterial color="orange" />
            </mesh>

            <mesh position={[0, 2, 0]}>
                <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
                <meshStandardMaterial color="green" />
            </mesh>
        </group>
    );
};

const App = () => {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Scene />
                <OrbitControls />
            </Canvas>

            {/* Interfaz de control con Leva */}
            <Leva />
        </div>
    );
};

export default App;
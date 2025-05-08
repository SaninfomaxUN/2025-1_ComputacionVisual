import { Canvas } from '@react-three/fiber';
import { OrbitControls, Wireframe, Edges } from '@react-three/drei';
import { useState, useEffect } from 'react';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

// Properties for the model
interface ModelProps {
    mode: string;
    onModelLoaded: (info: { vertexCount: number; faceCount: number }) => void;
}

const Model: React.FC<ModelProps> = ({ mode, onModelLoaded }) => {
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
};

const App: React.FC = () => {
    const [mode, setMode] = useState('solid');
    const [modelInfo, setModelInfo] = useState({ vertexCount: 0, faceCount: 0 });

    return (
        <div style={{ display: 'flex', height: '100vh', width: '100vw', }}>
           <Canvas style={{ flex: 1 }}>
               <ambientLight intensity={0.5} />
               <pointLight position={[10, 10, 10]} />
               <Model mode={mode} onModelLoaded={setModelInfo} />
               <OrbitControls />
           </Canvas>
            <div style={{ width: '250px', padding: '20px', backgroundColor: '#f0f0f0', borderLeft: '1px solid #ccc' }}>
                <h3>Control de Visualización</h3>
                <div style={{ marginBottom: '20px' }}>
                    <button onClick={() => setMode('solid')} style={{ marginRight: '10px' }}>Sólido</button>
                    <button onClick={() => setMode('wireframe')} style={{ marginRight: '10px' }}>Alambres</button>
                    <button onClick={() => setMode('edges')}>Aristas</button>
                </div>
                <div>
                    <p><strong>Información del modelo</strong></p>
                    <p>Vértices: {modelInfo.vertexCount.toLocaleString()}</p>
                    <p>Caras: {modelInfo.faceCount.toLocaleString()}</p>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <p><strong>Instrucciones</strong></p>
                    <p>1. Usa los botones para cambiar el modo de visualización.</p>
                    <p>2. Usa el mouse para rotar, hacer zoom y desplazar la vista.</p>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <p><strong>Imagen de referencia</strong></p>
                    <img src="/model.png" alt="Referencia" style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>
        </div>
    );
};

export default App;
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SkyBox from "./SkyBox";
import * as THREE from "three";

const Saturn = () => {

    const texture = useLoader(
        THREE.TextureLoader,
        "/planet/textures/saturn.jpg"
    );

    const ringTexture = useLoader(
        THREE.TextureLoader,
        "/planet/textures/saturn_ring.png"
    );



    return (
        <group scale={0.5} position={[2, -2, 3]}>
            {/* Planet */}
            <mesh>
                <sphereGeometry args={[1.5, 64, 64]} />
                <meshStandardMaterial map={texture} />
            </mesh>

            {/* Rings */}

            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[2.6, 4.2, 128]} />

                <meshBasicMaterial
                    map={ringTexture}
                    transparent
                    alphaTest={0.2}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Glow */}
            <mesh scale={1.15}>
                <sphereGeometry args={[1.5, 64, 64]} />

                <meshBasicMaterial
                    color="#f6d2a1"
                    transparent
                    opacity={0.15}
                    blending={THREE.AdditiveBlending}
                    side={THREE.BackSide}
                />
            </mesh>
            {/* Atmosphere */}

            <mesh scale={1.05}>
                <sphereGeometry args={[1.5, 64, 64]} />

                <meshStandardMaterial
                    color="#c7e7ff"
                    transparent
                    opacity={0.08}
                    side={THREE.BackSide}
                />
            </mesh>
        </group>
    );
};

const SaturnCanvas = () => {
    return (
        <Canvas
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
            }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-6, 5, 9],
            }}
        >
            <SkyBox />
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={2} />

            <OrbitControls
                autoRotate
                autoRotateSpeed={0.2}  //SPEED OF ROTATION
                enableZoom={false}
            />

            {/* 3d show case

<OrbitControls
  enableZoom={false}
  autoRotate
  autoRotateSpeed={0.6}
  enablePan={false}
  minPolarAngle={Math.PI / 2.2}
  maxPolarAngle={Math.PI / 2.2}
/>

*/}
            <Saturn />
        </Canvas>
    );
};

export default SaturnCanvas;
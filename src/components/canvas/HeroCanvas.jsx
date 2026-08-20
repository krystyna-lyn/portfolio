import { Canvas } from "@react-three/fiber";
import SkyBox from "./SkyBox";
import { OrbitControls } from "@react-three/drei";

const HeroCanvas = () => {
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
        </Canvas>
    );
};

export default HeroCanvas;
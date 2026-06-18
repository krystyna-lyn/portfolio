import { useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const SkyBox = () => {
    const { scene } = useThree();

    useEffect(() => {
        const loader = new THREE.CubeTextureLoader();

        loader.load(
            [
                "/planet/textures/space_right.png",
                "/planet/textures/space_left.png",
                "/planet/textures/space_top.png",
                "/planet/textures/space_bot.png",
                "/planet/textures/space_front.png",
                "/planet/textures/space_back.png",
            ],
            (texture) => {
                console.log("SUCCESS");
                scene.background = texture;
            },
            undefined,
            (error) => {
                console.error("ERROR", error);
            }
        );
    }, [scene]);

    return null;
};

export default SkyBox

{/*const SkyBoxCanvas = () => {
    return (
        <Canvas camera={{ fov: 45, near: 0.1, far: 200, position: [-6, 5, 9] }}>
            <SkyBox />

            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={2} />

            <OrbitControls enableZoom={false} />

        </Canvas>
    );
}

export default SkyBoxCanvas
*/}

import type * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls, Text, Float, Environment, PerspectiveCamera } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function Platform({ position, color }: { position: [number, number, number], color: string }) {
  return (
      <mesh position={position}>
        <boxGeometry args={[3, 0.5, 3]} />
        <meshStandardMaterial color={color} />
      </mesh>
  )
}

function Boxes({ position, color, isFloating, floatDetails = { speed: 0, rotationIntensity: 0, floatIntensity: 0 } }: { position: [number, number, number], color: string, isFloating: boolean, floatDetails?: { speed: number, rotationIntensity: number, floatIntensity: number } }) {
  return (
    <>
      {isFloating ? (
        <Float speed={floatDetails.speed} rotationIntensity={floatDetails.rotationIntensity} floatIntensity={floatDetails.floatIntensity}>
          <mesh position={position}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial color={color} />
          </mesh>
        </Float>
      ) : (
        <mesh position={position}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color={color} />
        </mesh>
      )}
    </>
  )
}



function Scene() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null)

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        fov={30} 
        position={[5, 7, 10]}
        rotation={[0.5, 0.2, 0]}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Platform position={[0, 0, 0]} color="#6274E7" />
      {/* <Boxes position={[-1.2, 0.5, 1.2]} /> */}
      <Boxes position={[-1.2, 0.5, 0.7]} color="#FFFFFF" isFloating={false}  />
      <Boxes position={[-1.2, 0.5, 0.2]} color="#FFFFFF" isFloating={false}  />
      <Boxes position={[-1.2, 1, 0.2]} color="#FFFFFF" isFloating={false}  />
      <Boxes position={[-0.7, 0.5, 0.2]} color="#FFFFFF" isFloating={false}  />

      {/* Animate this */}
      <Boxes position={[-1.2, 1, -0.7]} color="#FFFFFF" isFloating={true} floatDetails={{ speed: 1, rotationIntensity: 0.0, floatIntensity: 1 }} />
      <Boxes position={[-0.7, 1.5, -0.7]} color="#FFFFFF" isFloating={true} floatDetails={{ speed: 1, rotationIntensity: 0.0, floatIntensity: 3 }} />
      <Boxes position={[-0.7, 1, -1.2]} color="#FFFFFF" isFloating={true} floatDetails={{ speed: 1, rotationIntensity: 0.0, floatIntensity: 2 }} />


      <Boxes position={[0.7, 0.5, -1.2]} color="#EDE342" isFloating={false} />
      <Boxes position={[0.2, 0.5, -1.2]} color="#EDE342" isFloating={false} />



      <OrbitControls enablePan={false} />

      <Environment preset="night" />
    </>
  )
}


// 3D Model Component
function Desktop() {
  const gltf = useLoader(GLTFLoader, "/assets/model/Desktop.glb")
  const camera = useRef<THREE.PerspectiveCamera>(null);
  gltf.scene.scale.set(0.5, 0.5, 0.5); // Adjust scale as needed
  gltf.scene.position.set(0, -1, 0); // Adjust position as needed
  //zoom out the camera
  camera.current?.position.set(0, 0, 5); // Adjust camera position as needed

  return <primitive object={gltf.scene} />;
}


export default function Hero() {
  return (
    <div className="">
        <div className=" border
          mobile-screen: h-100
          small-screen: sm:h-150
          medium-screen: md:h-175
          desktop-screen: lg:h-200
          global-design: h-100 w-full flex flex-col items-center justify-center  ">
          <div className="
            mobile-screen: h-100
            small-screen: sm:h-150
            medium-screen: md:h-175
            desktop-screen: lg:h-200
            global-design: h-100 absolute inset-0 z-0 gradient-background">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <Suspense fallback={null}>
                {/* <Desktop /> */}
                <Scene />
              </Suspense>
            </Canvas>
          </div>

          {/* <div className="z-10 text-center text-[#FFEAAA]">
            <h1 className="
            mobile-screen: text-4xl
            small-screen: sm:text-5xl
            medium-screen: md:text-6xl
            desktop-screen: lg:text-7xl
            font-bold mb-4">Lorem Ipsumimnida</h1>
            <p className="text-lg mb-8">Lorem ipsum dolor sit amet</p>
            <a href="#projects" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
              Lorem IpsumImnida
            </a>
          </div> */}
        </div>
    </div>
  );
}
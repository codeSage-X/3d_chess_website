"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls, Environment } from "@react-three/drei"

function RecordingDevice() {
  const group = useRef()
  const { scene } = useGLTF("/models/phone.glb")

  useFrame((state) => {
    if (group.current) {
      group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.005 - 0.5
      group.current.rotation.y = state.clock.elapsedTime * 0.01 // Slower rotation
    }
  })

  return (
    <primitive
      ref={group}
      object={scene}
      scale={0.05}
      position={[0, -0.5, 0]}
      rotation={[0, 0, 0]}
    />
  )
}

export default function PhoneModel() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 2.5, 5], fov: 50 }} style={{ background: "transparent" }}>
        {/* Soft ambient from all directions */}
        <hemisphereLight skyColor="#ffffff" groundColor="#444444" intensity={1.6} />
        <ambientLight intensity={0.5} />

        {/* Directional Light 1 (top right) */}
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* Directional Light 2 (opposite side) */}
        <directionalLight
          position={[-5, 5, -5]}
          intensity={0.8}
        />

        <RecordingDevice />

        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  )
}

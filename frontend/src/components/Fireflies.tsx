import React, { useRef, useMemo } from 'react'
import { extend, useFrame } from '@react-three/fiber'
import { Vector3, CatmullRomCurve3 } from 'three'
import * as meshline from 'meshline'



// Extend meshline with React Three Fiber
extend(meshline)

interface FatlineProps {
  curve: Vector3[]
  color: string
}

function Fatline({ curve, color }: FatlineProps): JSX.Element {
  const material = useRef<any>() // Ref for material
  useFrame((state, delta) => (material.current.uniforms.dashOffset.value -= delta / 100))
  return (
    <mesh>
      <meshLineGeometry attach="geometry" points={curve} />
      <meshLineMaterial ref={material} transparent lineWidth={0.01} color={color} dashArray={0.1} dashRatio={0.99} />
    </mesh>
  )
}

interface FirefliesProps {
  count: number
  colors: string[]
  radius?: number
}

export default function Fireflies({ count, colors, radius = 10 }: FirefliesProps): JSX.Element {
  const lines = useMemo(
    () =>
      new Array(count).fill('').map(() => {
        const pos = new Vector3(Math.sin(0) * radius * r(), Math.cos(0) * radius * r(), 0)
        const points = new Array(30).fill('').map((_, index) => {
          const angle = (index / 20) * Math.PI * 2
          return pos.add(new Vector3(Math.sin(angle) * radius * r(), Math.cos(angle) * radius * r(), 0)).clone()
        })
        const curve = new CatmullRomCurve3(points).getPoints(100)
        return {
          color: colors[parseInt(String(colors.length * Math.random()), 10)],
          curve,
        }
      }),
    [count, radius, colors],
  )

  return (
    <group position={[-radius * 2, -radius, 0]}>
      {lines.map((props, index) => (
        <Fatline key={index} {...props} />
      ))}
    </group>
  )
}

// Utility function to generate random number between 0.2 and 1
const r = () => Math.max(0.2, Math.random())

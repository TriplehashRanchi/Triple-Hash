/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useThree, useFrame, useLoader } from '@react-three/fiber'
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei'
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'

// Extend meshline
extend({ MeshLineGeometry, MeshLineMaterial })

// Preload assets
useGLTF.preload(
    'https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb'
)
useTexture.preload(
    'https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/SOT1hmCesOHxEYxL7vkoZ/c57b29c85912047c414311723320c16b/band.jpg'
)
// 🔹 Preload your custom images
useTexture.preload('/logo.png') // Make sure this path is correct relative to your public folder
useTexture.preload('/Sagar.png')  // Make sure this path is correct relative to your public folder


export default function App() {
    return (
        <div style={{ backgroundColor: '#0D0816' }} className="h-[60vh] sm:h-[50vh] md:h-[80vh] lg:h-[71vh] flex items-center justify-center"
        >
            <Canvas camera={{ position: [0, 0, 13], fov: 25 }} style={{ backgroundColor: '#0D0816' }} className="h-[60vh] sm:h-[50vh] md:h-[80vh] lg:h-[80vh] flex items-center justify-center"
            >
                <ambientLight intensity={Math.PI} />
                <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
                    <Band />
                </Physics>
                <Environment blur={0.75}>
                    <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
                    <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
                    <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
                    <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
                </Environment>
            </Canvas>
        </div>
    )
}

function Band({ maxSpeed = 50, minSpeed = 10 }) {
    const band = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef() // prettier-ignore
    const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3() // prettier-ignore
    const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 2, linearDamping: 2 }

    const { nodes, materials } = useGLTF(
        'https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb'
    )

    const texture = useTexture(
        'https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/SOT1hmCesOHxEYxL7vkoZ/c57b29c85912047c414311723320c16b/band.jpg'
    )

    // 🔹 Load your custom ID card images for front and back
    const frontTexture = useLoader(THREE.TextureLoader, '/logo.png')
    const backTexture = useLoader(THREE.TextureLoader, '/Sagar.png')

    const { width, height } = useThree((state) => state.size)
    const [curve] = useState(
        () => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
    )
    const [dragged, drag] = useState(false)
    const [hovered, hover] = useState(false)

    // Physics joints
    useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1])
    useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1])
    useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1])
    useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]])

    useEffect(() => {
        if (hovered) {
            document.body.style.cursor = dragged ? 'grabbing' : 'grab'
            return () => void (document.body.style.cursor = 'auto')
        }
    }, [hovered, dragged])

    useFrame((state, delta) => {
        if (dragged) {
            vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
            dir.copy(vec).sub(state.camera.position).normalize()
            vec.add(dir.multiplyScalar(state.camera.position.length()))
                ;[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
            card.current?.setNextKinematicTranslation({
                x: vec.x - dragged.x,
                y: vec.y - dragged.y,
                z: vec.z - dragged.z,
            })
        }
        if (fixed.current) {
            ;[j1, j2].forEach((ref) => {
                if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation())
                const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())))
                ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)))
            })
            curve.points[0].copy(j3.current.translation())
            curve.points[1].copy(j2.current.lerped)
            curve.points[2].copy(j1.current.lerped)
            curve.points[3].copy(fixed.current.translation())
            band.current.geometry.setPoints(curve.getPoints(32))
            ang.copy(card.current.angvel())
            rot.copy(card.current.rotation())
            card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z })
        }
    })

    curve.curveType = 'chordal'
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping

    // Calculate plane dimensions based on collider and group scale
    // The CuboidCollider has args [0.8, 1.125, 0.01], meaning total dimensions 1.6 x 2.25
    // The parent group scales by 2.25, so the plane inside should be (1.6 / 2.25) x (2.25 / 2.25)
    const planeWidth = 1.6 / 2.25; // Approximately 0.7111
    const planeHeight = 1;


    return (
        <>
            <group position={[0, 4, 0]}>
                <RigidBody ref={fixed} {...segmentProps} type="fixed" />
                <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
                    <BallCollider args={[0.1]} />
                </RigidBody>

                {/* Card body */}
                <RigidBody
                    position={[2, 0, 0]}
                    ref={card}
                    {...segmentProps}
                    type={dragged ? 'kinematicPosition' : 'dynamic'}
                >
                    <CuboidCollider args={[0.8, 1.125, 0.01]} />
                    <group
                        scale={2.25}
                        position={[0, -1.2, -0.05]}
                    // Pointer events are now handled directly on the front mesh below
                    >
                        {/* 🔹 FRONT SIDE of the card (using planeGeometry with custom image) */}
                        <mesh
                            position={[0, 0.44, 0.001]}
                             onPointerOver={() => hover(true)}
                            onPointerOut={() => hover(false)}
                            onPointerUp={(e) => (e.target.releasePointerCapture(e.pointerId), drag(false))}
                            onPointerDown={(e) =>
                            (e.target.setPointerCapture(e.pointerId),
                                drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation()))))
                            }
                        >
                            {/* Using planeGeometry for perfect UV mapping */}
                            <planeGeometry args={[planeWidth, planeHeight]} />
                            <meshPhysicalMaterial
                                map={frontTexture} // Use the front image texture
                                side={THREE.FrontSide} // Renders only the front faces of the geometry
                                map-anisotropy={16}
                                clearcoat={1}
                                clearcoatRoughness={0.15}
                                roughness={0.3}
                                metalness={0.5}
                            // color="white" // Keep if you want a tint or as a fallback
                            />
                        </mesh>

                        {/* 🔹 BACK SIDE of the card (using planeGeometry with custom image, rotated) */}
                        <mesh position={[0, 0.47, 0.001]} rotation={[0, Math.PI, 0]}>
                            {/* Using planeGeometry for perfect UV mapping */}
                            <planeGeometry args={[planeWidth, planeHeight]} />
                            <meshPhysicalMaterial
                                map={backTexture} // Use the back image texture
                                side={THREE.FrontSide} // Renders only the front faces, but the mesh is rotated
                                map-anisotropy={16}
                                clearcoat={1}
                                clearcoatRoughness={0.15}
                                roughness={0.3}
                                metalness={0.5}
                            // color="white" // Keep if you want a tint or as a fallback
                            />
                        </mesh>

                        {/* Clip & Clamp remain with original metal material */}
                        <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
                        <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
                    </group>
                </RigidBody>
            </group>

            {/* Elastic band */}
            <mesh ref={band}>
                <meshLineGeometry />
                <meshLineMaterial
                    color="white"
                    depthTest={false}
                    resolution={[width, height]}
                    useMap
                    map={texture}
                    repeat={[-3, 1]}
                    lineWidth={1}
                />
            </mesh>
        </>
    )
}

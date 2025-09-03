"use client"

/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import ScrollReveal from "../Gsap/ScrollReveal";
import * as THREE from "three"
import { useEffect, useRef, useState } from "react"
import { Canvas, extend, useThree, useFrame, useLoader } from "@react-three/fiber"
import { useGLTF, useTexture, Environment, Lightformer } from "@react-three/drei"
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from "@react-three/rapier"
import { MeshLineGeometry, MeshLineMaterial } from "meshline"


// Extend meshline
extend({ MeshLineGeometry, MeshLineMaterial })

// Preload assets
useGLTF.preload(
    "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb",
)
useTexture.preload(
    "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/SOT1hmCesOHxEYxL7vkoZ/c57b29c85912047c414311723320c16b/band.jpg",
)

export default function EnhancedHero() {
    return (
        <section className="relative  bg-[#0D0816] overflow-hidden">
            {/* Background gradient overlay */}

            {/* Content Container */}
            <div className="relative z-10 max-w-[1360px] mx-auto px-4  lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20    ">
                    {/* Left Content */}
                    <div className="space-y-10 text-center lg:text-left order-2 lg:order-1 my-0 sm:my-0 lg:my-40">
                        <div className="space-y-4">
                            <ScrollReveal>

                                <span
                                    className=" reveal-item block bg-clip-text text-transparent text-4xl sm:text-[50px] md:text-[50px] lg:text-[64px] leading-tight sm:leading-[55px] md:leading-[70px] font-bold sm:font-[700]"
                                    style={{
                                        backgroundImage: "linear-gradient(to right, #ff9b26, #ee4f27)",
                                        WebkitBackgroundClip: "text",
                                    }}
                                >
                                    The Team That Builds the Future !

                                </span>

                            </ScrollReveal>
                            <p className="text-[#E0D9F1] text-md sm:text-xl md:text-2xl font-medium ">
                                The minds, the passion, the energy that power our journey.
                            </p>

                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-6 sm:mt-8 flex z-2 flex-col sm:flex-row justify-center sm:justify-center md:justify-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                            <button className="cursor-pointer w-full sm:w-auto border border-[#FFFFFF63] buttonfont bg-gradient-to-r from-[#FF8C00] to-[#FF0C00] text-white text-sm sm:text-base md:text-lg px-4 sm:px-5 py-2 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300">
                                Get to Know Us
                            </button>

                            <button className="cursor-pointer w-full sm:w-auto buttonfont bg-transparent border border-[#FFFFFF63] text-gray-200 text-sm sm:text-base md:text-lg px-4 sm:px-5 py-2 rounded-lg hover:bg-white/10 hover:border-gray-400 transition-colors duration-300">
                                Join the Team
                            </button>
                        </div>
                        <div className="h-px hidden sm:block bg-gradient-to-r from-orange-500 via-white/20 to-transparent" />
                        {/* Stats Section */}
                        <div >
                            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 sm:gap-8 text-white">
                                {[
                                    { value: "05+", label: "Experience" },
                                    { value: "150+", label: "Clients" },
                                    { value: "99.9%", label: "Uptime" },
                                ].map((stat, i) => (
                                    <div
                                        key={i}
                                        className="group overflow-hidden rounded-xl p-6 sm:p-8 bg-gradient-to-br from-[#1A1128] to-[#0D0816] transition-all duration-300 ease-in-out transform hover:-translate-y-2"
                                    >
                                        <div className="text-center">
                                            <div className="text-3xl sm:text-4xl md:text-[2.4rem] font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 transition-all duration-300 ease-in-out">
                                                {stat.value}
                                            </div>
                                            <div className="description text-xs sm:text-sm md:text-base text-[#C4BBD3] uppercase tracking-wider">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* Right Content - 3D Scene */}
                    <div className="relative order-1 lg:order-2 mt-16 sm:mt-16 md:mt-20">
                        <div className="relative h-[60vh] sm:h-[50vh] md:h-[80vh] lg:h-[600px]  overflow-hidden">
                            {/* Glow effect behind the canvas */}
                            <div className="absolute inset-0   " />

                            <Canvas
                                camera={{ position: [0, 0, 13], fov: 25 }}
                                className="relative z-10"
                                style={{ background: "transparent" }}
                            >
                                <ambientLight intensity={Math.PI} />
                                <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
                                    <Band />
                                </Physics>
                                <Environment blur={0.75}>
                                    <Lightformer
                                        intensity={2}
                                        color="white"
                                        position={[0, -1, 5]}
                                        rotation={[0, 0, Math.PI / 3]}
                                        scale={[100, 0.1, 1]}
                                    />
                                    <Lightformer
                                        intensity={3}
                                        color="white"
                                        position={[-1, -1, 1]}
                                        rotation={[0, 0, Math.PI / 3]}
                                        scale={[100, 0.1, 1]}
                                    />
                                    <Lightformer
                                        intensity={3}
                                        color="white"
                                        position={[1, 1, 1]}
                                        rotation={[0, 0, Math.PI / 3]}
                                        scale={[100, 0.1, 1]}
                                    />
                                    <Lightformer
                                        intensity={10}
                                        color="white"
                                        position={[-10, 0, 14]}
                                        rotation={[0, Math.PI / 2, Math.PI / 3]}
                                        scale={[100, 10, 1]}
                                    />
                                </Environment>
                            </Canvas>


                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-20" />
        </section>

    )
}

function Band({ maxSpeed = 50, minSpeed = 10 }) {
    const band = useRef(),
        fixed = useRef(),
        j1 = useRef(),
        j2 = useRef(),
        j3 = useRef(),
        card = useRef() // prettier-ignore
    const vec = new THREE.Vector3(),
        ang = new THREE.Vector3(),
        rot = new THREE.Vector3(),
        dir = new THREE.Vector3() // prettier-ignore
    const segmentProps = { type: "dynamic", canSleep: true, colliders: false, angularDamping: 2, linearDamping: 2 }

    const { nodes, materials } = useGLTF(
        "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb",
    )

    const texture = useTexture(
        "/Team/band2.png",
    )

    const frontTexture = useLoader(THREE.TextureLoader, "/id.png")
    const backTexture = useLoader(THREE.TextureLoader, "/Team/kunal-sir-icon.jpeg")

    const { width, height } = useThree((state) => state.size)
    const [curve] = useState(
        () =>
            new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]),
    )
    const [dragged, drag] = useState(false)
    const [hovered, hover] = useState(false)

    useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1])
    useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1])
    useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1])
    useSphericalJoint(j3, card, [
        [0, 0, 0],
        [0, 1.45, 0],
    ])

    useEffect(() => {
        if (hovered) {
            document.body.style.cursor = dragged ? "grabbing" : "grab"
            return () => void (document.body.style.cursor = "auto")
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

    curve.curveType = "chordal"
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping

    const planeWidth = 1.6 / 2.25  
    const planeHeight = 1

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
                <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? "kinematicPosition" : "dynamic"}>
                    <CuboidCollider args={[0.8, 1.125, 0.01]} />
                    <group scale={2.25} position={[0, -1.2, -0.05]}>
                        {/* FRONT SIDE of the card (using planeGeometry with custom image) */}
                        <mesh
                            position={[0, 0.49, 0.001]}
                            onPointerOver={() => hover(true)}
                            onPointerOut={() => hover(false)}
                            onPointerUp={(e) => (e.target.releasePointerCapture(e.pointerId), drag(false))}
                            onPointerDown={(e) => (
                                e.target.setPointerCapture(e.pointerId),
                                drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
                            )}
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
                            />
                        </mesh>

                        {/* BACK SIDE of the card (using planeGeometry with custom image, rotated) */}
                        <mesh position={[0, 0.45, 0.001]} rotation={[0, Math.PI, 0]}>
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

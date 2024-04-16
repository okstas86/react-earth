import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg"
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg"
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg"
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg"
import { useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { TextureLoader } from "three"
import * as THREE from "three"
import { useRef } from "react"

export default function Earth(props) {
	const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
		TextureLoader,
		[EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
	)

	const earthRef = useRef()
	const cloudRef = useRef()

	useFrame(({ clock }) => {
		const elapsedTime = clock.getElapsedTime()
		earthRef.current.rotation.y = elapsedTime / 6
		cloudRef.current.rotation.y = elapsedTime / 5
	})

	return (
		<>
			{/* <ambientLight intensity={1} /> */}
			<pointLight color='#fff' position={[2, 0, 5]} intensity={100} />
			<Stars radius={300} depth={60} count={20000} factor={7} fade={true} />
			<mesh ref={cloudRef} possition={[0, 0, 3]}>
				<sphereGeometry args={[3.015, 32, 32]} />
				<meshPhongMaterial
					map={cloudsMap}
					opacity={0.4}
					depthWrite={true}
					transparent={true}
					side={THREE.DoubleSide}
				/>
			</mesh>
			<mesh ref={earthRef} possition={[0, 0, 3]}>
				<sphereGeometry args={[3, 32, 32]} />
				<meshPhongMaterial specularMap={specularMap} />
				<meshStandardMaterial
					map={colorMap}
					normalMap={normalMap}
					metalness={0.4}
					roughness={1}
				/>
				{/*<OrbitControls
					enableZoom={true}
					enablePan={true}
					enableRotate={true}
					zoomSpeed={0.6}
					panSpeed={0.5}
					rotateSpeed={0.4}
				/>*/}
			</mesh>
		</>
	)
}

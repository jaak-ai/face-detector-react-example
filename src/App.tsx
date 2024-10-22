import React, { useEffect, useRef } from 'react';
import './App.css';
import { defineCustomElements } from '@jaak.ai/video-camera/loader';
import { defineCustomElements as defineFaceDetector } from '@jaak.ai/face-detector/loader';

function App() {
	const faceDetectorRef = useRef<any>(null);
	useEffect(() => {
		defineCustomElements(window);
		defineFaceDetector(window);
		if (faceDetectorRef.current) {
			faceDetectorRef.current.config = {
				width: '640px',
				height: '480px',
				enableMicrophone: true,
				mode: 'video-camera',
				placeholder: 'Upload your image',
				buttonText: 'Upload File',
				documentAccept: 'image/*',
				description: 'Please upload an image for face detection',
				size: 2048,
				videoDuration: 5,
			};

			//Añade los eventos que deseas escuchar como:
			// * fileResult
			// * status
			// * componentError
			// * faceDetectionMessage

			// Obtención del elemento face-detector a través de la referencia
			const faceDetector = faceDetectorRef.current;

			// Escucha el evento fileResult
			faceDetector.addEventListener('fileResult', (event: any) =>
				console.log('Base64 ->', event.detail)
			);

			// Escucha otros eventos 👇

			// faceDetector.addEventListener('status', (event: any) =>
			// 	console.log('Status ->', event.detail)
			// );

			// faceDetector.addEventListener('componentError', (event: any) =>
			// 	console.log('componentError ->', event.detail)
			// );

			// faceDetector.addEventListener('faceDetectionMessage', (event: any) =>
			// 	console.log('faceDetectionMessage ->', event.detail)
			// );

		}
	}, []);
	return (
		<div className="App">
			<face-detector ref={faceDetectorRef}></face-detector>
		</div>
	);
}

export default App;

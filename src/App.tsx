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
		}
	}, []);
	return (
		<div className="App">
			<face-detector ref={faceDetectorRef}></face-detector>
		</div>
	);
}

export default App;

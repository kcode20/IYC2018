// @flow
import React from 'react';
import Gallery from 'react-photo-gallery';
import '../assets/styles/Gallery.css';
import PHOTOS from './gallery/2017';

const GalleryComponent = () => {
	return (
		<div className="gallery">
			<h2>Gallery</h2>
			<h3>2017</h3>
			<Gallery photos={PHOTOS} />
		</div>
	);
};

export default GalleryComponent;

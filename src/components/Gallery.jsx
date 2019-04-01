// @flow
import React from 'react';
import Gallery from 'react-photo-gallery';
import '../assets/styles/Gallery.css';

const PHOTOS = [
	{
		src: 'http://example.com/example/img1.jpg',
		width: 4,
		height: 3,
	},
	{
		src: 'http://example.com/example/img2.jpg',
		width: 1,
		height: 1,
	},
];

const GalleryComponent = () => {
	return (
		<div className="gallery">
			<h2>Gallery</h2>
			<h3>2018</h3>
			<Gallery photos={PHOTOS} />
		</div>
	);
};

export default GalleryComponent;

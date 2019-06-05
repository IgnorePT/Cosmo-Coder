import React from 'react'


const listElementStyle = {
	mainNav: {
		float: "left",
		width: "100px"
	}
}



export default function ListElement(props) {

	const getStyle = (style) => {
		return listElementStyle[style];
	}

	return (
		<li>
				<li 
				style={getStyle(props.style)}>
					<a>{props.children}</a>
				</li>			
		</li>
	)
}

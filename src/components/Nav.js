import React from 'react'

import ListElement from "./Elements/ListElement";

const navStyle = {
	width: "100%",
    height: "50px",
    display: "flex",
}

const listStyle = {
	listStyle: "none",
	width: "100%"
}

export default function Nav() {
	return (
		<nav style={navStyle}>
			<ul style={listStyle}>
				<ListElement style="mainNav" anchorTo="projects">Projects</ListElement>
				<ListElement style="mainNav" anchorTo="skills">Skills</ListElement>
				<ListElement style="mainNav" anchorTo="contact">Contacts</ListElement>
				<ListElement style="mainNav" anchorTo="projects">Projects</ListElement>
			</ul>
			
		</nav>
	)
}

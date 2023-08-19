// import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
	MDBContainer,
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarToggler,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBCollapse,
	MDBIcon,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Navbar() {
	const [showNav, setShowNav] = useState(false);

	return (
		<MDBNavbar expand="lg" light bgColor="light">
			<MDBContainer fluid>
				<MDBNavbarBrand href="#">Navbar</MDBNavbarBrand>
				<MDBNavbarToggler
					type="button"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={() => setShowNav(!showNav)}
				>
					<MDBIcon icon="bars" fas />
				</MDBNavbarToggler>
				<MDBCollapse navbar show={showNav}>
					<MDBNavbarNav>
						<MDBNavbarItem>
							<MDBNavbarLink active aria-current="page" href="/">
								Home
							</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							{/* <Link to="/products">Products</Link> */}
							<MDBNavbarLink href="/products">Products</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<MDBNavbarLink href="/posts">Posts</MDBNavbarLink>
						</MDBNavbarItem>
						<MDBNavbarItem>
							<MDBNavbarLink
								disabled
								href="#"
								tabIndex={-1}
								aria-disabled="true"
							>
								Disabled
							</MDBNavbarLink>
						</MDBNavbarItem>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBContainer>
		</MDBNavbar>
	);
}

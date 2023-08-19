import React, { useState } from "react";
import {
	MDBNavbar,
	MDBContainer,
	MDBNavbarBrand,
	MDBNavbarToggler,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBCollapse,
	MDBNavbarNav,
	MDBIcon,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() {
	const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);

	return (
		<>
			<MDBNavbar
				expand="lg"
				bgColor="Green"
				style={{
					backgroundColor: "#100F3D",
				}}
			>
				<MDBContainer fluid>
					<MDBNavbarToggler
						type="button"
						data-target="#navbarTogglerDemo03"
						aria-controls="navbarTogglerDemo03"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
					>
						<MDBIcon icon="bars" fas />
					</MDBNavbarToggler>
					<MDBNavbarBrand href="#" style={{ color: "white" }}>
						Blog App
					</MDBNavbarBrand>
					<MDBCollapse navbar show={showNavNoTogglerThird}>
						<MDBNavbarNav
							className="mr-auto mb-2 mb-lg-0"
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "center",
							}}
						>
							<MDBNavbarItem>
								<MDBNavbarLink
									active
									aria-current="page"
									href="/createBlogs"
									style={{ color: "white" }}
								>
									Create Blog
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem></MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href="/myBlogs" style={{ color: "white" }}>
									My Blogs
								</MDBNavbarLink>
							</MDBNavbarItem>
						</MDBNavbarNav>
						{/* <MDBBtn
							className="me-1"
							style={{
								border: "1px solid white",
								backgroundColor: "#100F3D",
							}}
						>
							Register
						</MDBBtn>
						<MDBBtn
							className="me-1"
							style={{
								border: "1px solid white",
								backgroundColor: "#100F3D",
							}}
						>
							logIn
						</MDBBtn> */}
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		</>
	);
}

import "../App.css";
import React from "react";
import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBRipple,
	MDBCardImage,
	MDBBtn,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function Card(proms) {

	console.log();
	return (
		<MDBCard
			className="product-card"
			style={{ height: "450px", width: "230px" }}
		>
			<MDBRipple
				rippleColor="light"
				rippleTag="div"
				className="bg-image hover-overlay"
			>
				<MDBCardImage
					src={proms.imageUrl}
					height="40%"
					fluid
					alt={proms.name}
				/>
				<a href={`/card-details/${proms.id}`}>
					<div
						className="mask"
						style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
					></div>
				</a>
			</MDBRipple>
			<MDBCardBody>
				<MDBCardTitle>{proms.name.substring(0, 50)}</MDBCardTitle>
				<MDBCardText style={{ textAlign: "justify" }}>
					{proms.description.substring(0, 100)}
				</MDBCardText>
				<MDBBtn href={`/card-details/${proms.id}`}>Go To Product</MDBBtn>
			</MDBCardBody>
		</MDBCard>
	);
}

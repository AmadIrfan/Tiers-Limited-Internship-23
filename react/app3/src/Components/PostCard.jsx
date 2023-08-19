import React from "react";
import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardImage,
} from "mdb-react-ui-kit";

export default function PostCard(props) {
	return (
		<MDBCard
			style={{
				width: "250px",
				margin: "10px",
			}}
			onClick={() => {
				window.location.href = `/card-details/${props.id}`;
			}}
		>
			<MDBCardImage src={props.img} position="top" alt={props.name} />
			<MDBCardBody>
				<MDBCardTitle>{props.name}</MDBCardTitle>
				{/* <MDBCardText>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</MDBCardText> */}
			</MDBCardBody>
		</MDBCard>
	);
}

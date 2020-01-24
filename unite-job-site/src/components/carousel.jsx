import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
  "mdbreact";

const Carousel = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://images.wisegeek.com/man-working-at-desk.jpg"
                alt="First slide"
              />
              <p style={{ fontWeight: "bolder" }}>We help people get jobs ....... and thats the sole mission of this company that has embraced me as a professional </p><br />
              <p style={{ fontWeight: "bold", fontSize: "30px" }}>Roger Scott</p>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://st3.depositphotos.com/1054848/17588/i/1600/depositphotos_175889936-stock-photo-elderly-financial-professional-man-standing.jpg"
                alt="Second slide"

              />
              <p style={{ fontWeight: "bolder" }}> Its a very good organization o work in . My skills including communication , sales , over all confidence have enhances with the opportunities provided to me .</p><br />
              <p style={{ fontWeight: "bold", fontSize: "30px" }}>Sam Dhott</p>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://st2.depositphotos.com/2208684/11079/i/950/depositphotos_110794798-stock-photo-professional-man-standing-at-office.jpg"
                alt="Third slide"
              />
              <p style={{ fontWeight: "bolder" }}> A very good place to start your carrier - Explore new opportunities and technologies (i.e RPA, IoT and etc.) - Friendly environment</p><br />
              <p style={{ fontWeight: "bold", fontSize: "30px" }}>Willam Jonss</p>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default Carousel;
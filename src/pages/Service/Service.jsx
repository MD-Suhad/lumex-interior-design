import React from "react";
import { Col, Form, input, InputGroup, Row } from "react-bootstrap";

const Service = () => {
  return (
    <Row>
      <Col xs={12} md={6}>
        <div>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Add Your Logo</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </div>
        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea">Comments</label>
        </div>

        <div>
          <h5>Bill To</h5>
          <div class="row g-2">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Who is this invoice from? (required)"
                aria-label="First name"
              />
            </div>
            <h5>Ship To</h5>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="(optional)"
                aria-label="Last name"
              />
            </div>
          </div>
        </div>
      </Col>

      <Col xs={12} md={6}>
        <h2>INVOICE</h2>
        <InputGroup hasValidation>
          <InputGroup.Text>#</InputGroup.Text>
          <Form.Control type="number" required isInvalid />
          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </InputGroup>
        <div class="row my-3">
          <label
            for="colFormLabelLg"
            class="col-sm-2 col-form-label col-form-label-lg"
          >
            Date
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control form-control-lg"
              id="colFormLabelLg"
              placeholder="col-form-label-lg"
            />
          </div>
        </div>
        <div class="row ">
          <label
            for="colFormLabelLg"
            class="col-sm-2 col-form-label col-form-label-lg"
          >
            Payment Terms
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control form-control-lg"
              id="colFormLabelLg"
              placeholder="col-form-label-lg"
            />
          </div>
        </div>
        <div class="row my-3">
          <label
            for="colFormLabelLg"
            class="col-sm-2 col-form-label col-form-label-lg "
          >
            Due Date
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control form-control-lg"
              id="colFormLabelLg"
              placeholder="col-form-label-lg"
            />
          </div>
        </div>
        <div class="row">
          <label
            for="colFormLabelLg"
            class="col-sm-2 col-form-label col-form-label-lg"
          >
            PO Number
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control form-control-lg"
              id="colFormLabelLg"
              placeholder="col-form-label-lg"
            />
          </div>
        </div>
      </Col>
      <table class="table">
        <thead class="table-dark">eererrer</thead>
        <tbody></tbody>
      </table>
    </Row>
  );
};

export default Service;

// import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import Carousel1 from "../../../Assets/images/carousel.jpg";
// import Carousel2 from "../../../Assets/images/carousel1.jpg"
// import Carousel3 from "../../../Assets/images/carousel2.jpg";

// function IndividualIntervalsExample() {
//   return (
//     <Carousel
//     >
//       <Carousel.Item interval={1000} className="carouselItem">
//         <img className="d-block w-100" src={Carousel3} alt="First slide" />
//         <Carousel.Caption style={{paddingBottom: '400px',paddingRight: '500px'}}>
//           <h2>Make Your Statement In Style</h2>
//           <p>With fashion anything goes and more often than not people push themselves to stand out amongst the crowd and make a statement.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={500} className="carouselItem">
//         <img className="d-block w-100" src={Carousel1} alt="Second slide" />
//         <Carousel.Caption>
//           <h3>Simplicity Wins Over Complexity</h3>
//           <p>Fashion doesn't have rigid rules to box any particular style. Most people opt for complementary colors that still allow them to blend in.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item className="carouselItem">
//         <img className="d-block w-100" src={Carousel2} alt="Third slide" />
//         <Carousel.Caption>
//           <h3>Simplicity Wins Over Complexity</h3>
//           <p>
//           Fashion doesn't have rigid rules to box any particular style. Most people opt for complementary colors that still allow them to blend in.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default IndividualIntervalsExample;

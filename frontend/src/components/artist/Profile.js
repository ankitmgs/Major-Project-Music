import React from "react";
import Slider from "react-slick";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import Edit from "@mui/icons-material/Edit";
import MusicCard from "../../props/MusicCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        marginRight: "2rem",
        color: "black",
      }}
      onClick={onClick}
    />
  );
}

const artistProfile = () => {
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem>
                  <a href="#">Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                  <a href="#">User</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://filmfare.wwmindia.com/content/2022/apr/arijitsingh11650885572.jpg"
                    alt="avatar"
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                    fluid
                  />
                  <p className="text-muted mb-1">Arijit Singh</p>
                  <p className="text-muted mb-4">Mumbai, INDIA</p>
                  <div className="d-flex justify-content-center mb-2">
                    <MDBBtn>Follow</MDBBtn>
                    <MDBBtn outline className="ms-1">
                      Message
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                  <div className="d-flex justify-content-end m-2">
                    <div
                      type="button"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      <Edit />
                    </div>

                    <div
                      class="modal fade"
                      id="exampleModalCenter"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div
                        class="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">
                              Add Websites
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <input
                              className="form-control mt-3"
                              type="url"
                              placeholder="Enter Websites Link"
                            />
                            <input
                              className="form-control mt-3"
                              type="url"
                              placeholder="Enter Twitter Link"
                            />
                            <input
                              className="form-control mt-3"
                              type="url"
                              placeholder="Enter Insatgram Link"
                            />
                            <input
                              className="form-control mt-3"
                              type="url"
                              placeholder="Enter facebook Link"
                            />
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" class="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fas icon="globe fa-lg text-warning" />
                      <a href="#">dldlblefblefw</a>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="twitter fa-lg"
                        style={{ color: "#55acee" }}
                      />
                      <a href="#">@mdbootstrap</a>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="instagram fa-lg"
                        style={{ color: "#ac2bac" }}
                      />
                      <a href="#">mdbootstrap</a>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="facebook fa-lg"
                        style={{ color: "#3b5998" }}
                      />
                      <a href="#">mdbootstrap</a>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <div className="d-flex justify-content-end">
                    <div
                      type="button"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      <Edit />
                    </div>

                    <div
                      class="modal fade"
                      id="exampleModalCenter"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div
                        class="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">
                              Basic Details
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <input
                              className="form-control mt-3"
                              type="url"
                              placeholder="Enter Websites Link"
                            />
                            <input
                              className="form-control mt-3"
                              type="url"
                              placeholder="Enter Twitter Link"
                            />
                            <input
                              className="form-control mt-3"
                              type="url"
                              placeholder="Enter Insatgram Link"
                            />
                            <input
                              className="form-control mt-3"
                              type="url"
                              placeholder="Enter facebook Link"
                            />
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" class="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        Arijit Singh
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Collaboration Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        example@example.com
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        (097) 234-5678
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Awards</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">lorem</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Concerts</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        Bay Area, San Francisco, CA
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>

              <MDBRow>
                <MDBCol md="12">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <span
                        style={{
                          marginLeft: "0.7rem",
                          color: "black",
                          fontSize: "1.2rem",
                          fontWeight: "bolder",
                        }}
                      >
                        New Relases
                      </span>
                      <Slider {...settings}>
                        <div>
                          <MusicCard
                            singer="Arijit Singh"
                            song="Apna Bana Le"
                            img="https://i.scdn.co/image/ab67616d0000b27322bac849d10d34f9643b908b"
                          />
                        </div>
                        <div>
                          <MusicCard
                            singer="Arijit Singh"
                            song="Apna Bana Le"
                            img="https://pbs.twimg.com/media/FGi4ocYVQAAysu_?format=jpg&name=900x900"
                          />
                        </div>
                        <div>
                          <MusicCard
                            singer="Arijit Singh"
                            song="Apna Bana Le"
                            img="https://images.news18.com/ibnlive/uploads/2021/08/1628244231_bell-bottom.jpg"
                          />
                        </div>
                        <div>
                          <MusicCard
                            singer="Arijit Singh"
                            song="Apna Bana Le"
                            img="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/067d5068717917.5b672f7514e44.jpg"
                          />
                        </div>
                        <div>
                          <MusicCard
                            singer="Arijit Singh"
                            song="Apna Bana Le"
                            img="https://i.scdn.co/image/ab67616d0000b27322bac849d10d34f9643b908b"
                          />
                        </div>
                        <div>
                          <MusicCard
                            singer="Arijit Singh"
                            song="Apna Bana Le"
                            img="https://i.scdn.co/image/ab67616d0000b27322bac849d10d34f9643b908b"
                          />
                        </div>
                        <div>
                          <MusicCard
                            singer="Arijit Singh"
                            song="Apna Bana Le"
                            img="https://i.scdn.co/image/ab67616d0000b27322bac849d10d34f9643b908b"
                          />
                        </div>
                        <div>
                          <MusicCard
                            singer="Arijit Singh"
                            song="Apna Bana Le"
                            img="https://i.scdn.co/image/ab67616d0000b27322bac849d10d34f9643b908b"
                          />
                        </div>
                        <div>
                          <MusicCard
                            singer="Arijit Singh"
                            song="Apna Bana Le"
                            img="https://i.scdn.co/image/ab67616d0000b27322bac849d10d34f9643b908b"
                          />
                        </div>
                      </Slider>
                      {/* PopularSong */}
                      <div className="mt-5">
                        <span
                          style={{
                            marginLeft: "0.7rem",
                            color: "black",
                            fontSize: "1.2rem",
                            fontWeight: "bolder",
                          }}
                        >
                          Popular Songs
                        </span>
                        <Slider {...settings}>
                          <div>
                            <MusicCard
                              singer="Arijit Singh"
                              song="Apna Bana Le"
                              img="https://i.pinimg.com/originals/60/9a/80/609a8061a8ae93f2735f3e3e20190b90.jpg"
                            />
                          </div>
                          <div>
                            <MusicCard
                              singer="Arijit Singh"
                              song="Apna Bana Le"
                              img="https://c.saavncdn.com/685/Luka-Chuppi-Hindi-2019-20190222104001-500x500.jpg"
                            />
                          </div>
                          <div>
                            <MusicCard
                              singer="Arijit Singh"
                              song="Apna Bana Le"
                              img="https://static.moviecrow.com/marquee/kaabil-new-posters/101643_thumb_665.jpg"
                            />
                          </div>
                          <div>
                            <MusicCard
                              singer="Arijit Singh"
                              song="Apna Bana Le"
                              img="https://d2r2ijn7njrktv.cloudfront.net/apnlive/uploads/2022/01/22144805/chalako-massi-1.jpg"
                            />
                          </div>
                          <div>
                            <MusicCard
                              singer="Arijit Singh"
                              song="Apna Bana Le"
                              img="https://i.scdn.co/image/ab67616d0000b27322bac849d10d34f9643b908b"
                            />
                          </div>
                          <div>
                            <MusicCard
                              singer="Arijit Singh"
                              song="Apna Bana Le"
                              img="https://i.scdn.co/image/ab67616d0000b27322bac849d10d34f9643b908b"
                            />
                          </div>
                          <div>
                            <MusicCard
                              singer="Arijit Singh"
                              song="Apna Bana Le"
                              img="https://i.scdn.co/image/ab67616d0000b27322bac849d10d34f9643b908b"
                            />
                          </div>
                          <div>
                            <MusicCard
                              singer="Arijit Singh"
                              song="Apna Bana Le"
                              img="https://i.scdn.co/image/ab67616d0000b27322bac849d10d34f9643b908b"
                            />
                          </div>
                          <div>
                            <MusicCard
                              singer="Arijit Singh"
                              song="Apna Bana Le"
                              img="https://i.scdn.co/image/ab67616d0000b27322bac849d10d34f9643b908b"
                            />
                          </div>
                        </Slider>
                      </div>

                      {/* Top Songs */}

                      <MDBRow className="mt-5">
                        <div style={{ border: "1px solid gray" }}>Hello</div>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default artistProfile;

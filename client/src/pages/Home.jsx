import { Card } from '../components/Card';
import { Navbar } from '../components/Navbar';
export const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <div className="p-5 bg-cyan-900">
          <div className="container">
            <div className="row g-0">
              <div className="col-sm-6 col-12 text-center text-sm-start d-flex align-items-center">
                <div className="text-white fw-">
                  <h1 className="text-7xl">
                    Better Solutions <span className="text-warning">For Your Business</span>
                  </h1>
                  <p className="text-white text-7xl">We're the integrated learning solution that delivers impactful programs for everyone.</p>
                  <div>
                    {/* <!-- Button trigger modal --> */}
                    <button type="button" className="mt-4 btn bg-white rounded-full px-5">
                      OUR COURESES
                    </button>

                    {/* <!-- Modal --> */}
                  </div>
                </div>
              </div>
              {/* <div className="col-6 d-sm-block d-none">
                <img alt="" className="img-fluid" src="https://wngpi3.csb.app/img/to-the-moon.svg" />
              </div> */}
            </div>
          </div>
        </div>
        <div>
          <div className="carousel slide" data-bs-ride="carousel" id="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://wngpi3.csb.app/img/elements.svg" className="d-block vh-100 vw-100" alt="" />
              </div>
              <div className="carousel-item">
                <img src="https://wngpi3.csb.app/img/elements.svg" className="d-block vw-100 vh-100" alt="" />
              </div>
              <div className="carousel-item">
                <img src="https://wngpi3.csb.app/img/elements.svg" className="d-block vw-100 vh-100" alt="" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="p-5" id="aboutus">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-sm-6 col-12">
                <img alt="" src="https://wngpi3.csb.app/img/elements.svg" className="img-fluid" />
              </div>
              <div className="col-sm-6 col-12 justify-content-center">
                <div>
                  <h2 className="text-uppercase">About us</h2>
                  <p className="fw-light fs-5">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button className="btn btn-outline-secondary text-secondary">
                    <i className="bi bi-chevron-right me-2"></i> Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark p-5" id="services">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-sm-6 col-12 justify-content-center">
                <div className="text-white">
                  <h2 className="text-uppercase">About us</h2>
                  <p className="fw-light fs-5">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button className="btn btn-outline-light text-light">
                    <i className="bi bi-chevron-right me-2"></i> Read More
                  </button>
                </div>
              </div>
              <div className="col-sm-6 col-12">
                <img alt="" src="https://wngpi3.csb.app/img/elements.svg" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="container">
            <div className="d-flex justify-content-center">
              <h2 className="">FAQ</h2>
            </div>

            <div className="accordion accordion-flush" id="accordion">
              <div className="accordion-item">
                <div className="accordion-header">
                  <button className="accordion-button collapsed" data-bs-target="#accordion-item-1" data-bs-toggle="collapse">
                    Where exactly are you located?
                  </button>
                </div>
                <div className="accordion-collapse collapse" data-bs-parent="#accordion" id="accordion-item-1">
                  <div className="accordion-body">Lorem 1 ipsum</div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-target="#accordion-item-2" data-bs-toggle="collapse">
                    How much does it cost to attend?
                  </button>
                </div>
                <div className="accordion-collapse collapse" data-bs-parent="#accordion" id="accordion-item-2">
                  <div className="accordion-body">Lorem 2 ipsum</div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header">
                  <button className="accordion-button collapsed" data-bs-target="#accordion-item-3" data-bs-toggle="collapse">
                    Where do i need to know?
                  </button>
                </div>
                <div className="accordion-collapse collapse" data-bs-parent="#accordion" id="accordion-item-3">
                  <div className="accordion-body">Lorem 3 ipsum</div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header">
                  <button className="accordion-button collapsed" data-bs-target="#accordion-item-4" data-bs-toggle="collapse">
                    How do i sign up?
                  </button>
                </div>
                <div className="accordion-collapse collapse" data-bs-parent="#accordion" id="accordion-item-4">
                  <div className="accordion-body">Lorem 3 ipsum</div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header">
                  <button className="accordion-button collapsed" data-bs-target="#accordion-item-5" data-bs-toggle="collapse">
                    Do you help me find a job?
                  </button>
                </div>
                <div className="accordion-collapse collapse" data-bs-parent="#accordion" id="accordion-item-5">
                  <div className="accordion-body">Lorem 3 ipsum</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary bg-opacity-50">
          <div className="container p-5">
            <div className="text-center text-white">
              <div>
                <h2>Our Team</h2>
                <p>We listened to our people about what and how they wanted to learn, and most made it clear business was thier preffered platform.</p>
              </div>
            </div>
            <div className="row g-3">
              {/* neg card  */}
              {<Card imageUrl={'https://randomuser.me/api/portraits/women/60.jpg'} name={'Jennie'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only publishing Lorem Ipsum.'} />}
              <div className="col-md-3 col-sm-6 col-12">
                <div className="card text-center pt-4">
                  <div className="card-body">
                    <img alt="" src="https://randomuser.me/api/portraits/men/96.jpg" className="img-fluid rounded-circle" />
                    <h2 className="card-title"> Pie</h2>
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only publishing Lorem Ipsum.</p>
                    <i className="bi bi-facebook px-1"></i> <i className="bi bi-instagram px-1"></i> <i className="bi bi-twitter px-1"></i>
                    <i className="bi bi-linkedin"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div className="card text-center pt-4">
                  <div className="card-body">
                    <img alt="" src="https://randomuser.me/api/portraits/women/90.jpg" className="img-fluid rounded-circle" />
                    <h2 className="card-title"> Pie</h2>
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only publishing Lorem Ipsum.</p>
                    <i className="bi bi-facebook"></i> <i className="bi bi-instagram px-1"></i> <i className="bi bi-twitter px-1"></i>
                    <i className="bi bi-linkedin"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div className="card text-center pt-4">
                  <div className="card-body">
                    <img alt="" src="https://randomuser.me/api/portraits/men/26.jpg" className="img-fluid rounded-circle" />
                    <h2 className="card-title">Pie</h2>
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only publishing Lorem Ipsum.</p>
                    <i className="bi bi-facebook"></i> <i className="bi bi-instagram px-1 "></i> <i className="bi bi-twitter px-1"></i>
                    <i className="bi bi-linkedin"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5" id="contact">
          <div className="container">
            <div className="text-center">
              <h2>Contact Info</h2>
            </div>
            <div>
              <table className="table ">
                <tbody>
                  <tr>
                    <th scope="row">
                      Main Location:
                      <span className="text-secondary fw-light"> 50 Main st Boston MA</span>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">
                      Enrolment Phone:
                      <span className="text-secondary fw-light"> (500) 500 500</span>
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">
                      Student Phone:
                      <span className="text-secondary fw-light"> (300) 300 300</span>
                    </th>
                  </tr>
                  <tr className="">
                    <th scope="row">
                      Student Email:
                      <span className="text-secondary fw-light">some@email.com</span>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-dark position-relative pb-5">
        <div className="position-absolute bottom-0 end-0 fs-1">
          <a href="#">
            <i className="bi bi-arrow-up-circle"></i>
          </a>
        </div>
        <div className="container">
          <div className="row py-5 my-5 border-top text-light">
            <div className="col-md-3 col-sm-6 col-12">
              <h5>Logo Brand</h5>
              <ul className="nav flex-column">
                <li className="nav-items">A108 Adam Street</li>
                <li>New York, NY 535022</li>
                <li className="nav-items mb-4">United States</li>
                <li className="nav-items">Phone</li>
                <li className="nav-items">Email</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <h5>Usefull Links</h5>
              <ul className="nav flex-column text-">
                <li className="nav-items mb-2">
                  <a className="text-decoration-none" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-items mb-2">
                  <a className="text-decoration-none" href="#aboutus">
                    About Us
                  </a>
                </li>
                <li className="nav-items mb-2">
                  <a className="text-decoration-none" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-items mb-2">
                  <a className="text-decoration-none" href="#">
                    Terms of service
                  </a>
                </li>
                <li className="nav-items mb-2">
                  <a className="text-decoration-none" href="#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <h5>Our Services</h5>
              <ul className="nav flex-column text-muted">
                <li className="nav-items mb-2">
                  <a className="text-decoration-none" href="#">
                    Web Design
                  </a>
                </li>
                <li className="nav-items mb-2">
                  <a className="text-decoration-none" href="#">
                    Web Development
                  </a>
                </li>
                <li className="nav-items mb-2">
                  <a className="text-decoration-none" href="#">
                    Product Management
                  </a>
                </li>
                <li className="nav-items mb-2">
                  <a className="text-decoration-none" href="#">
                    Marketing
                  </a>
                </li>
                <li className="nav-items mb-2">
                  <a className="text-decoration-none" href="#">
                    Graphic Design
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <h5>Our Social Networks</h5>
              <ul className="nav flex-column">
                <li className="nav-items mb-2">Some random text text cras fugelion asta ymi</li>
                <li className="nav-items mb-2">
                  <a href="#" className="text-decoration-none">
                    <i className="bi bi-facebook px-1"></i> <i className="bi bi-instagram px-1"></i> <i className="bi bi-twitter px-1"></i>
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Enrollment
              </h1>

              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Fill out this form and we will get back to you</p>
              <label for="message-text" className="col-form-label">
                First Name
              </label>
              <input type="text" className="form-control" id="message-text" placeholder="" />
            </div>
            <div className="modal-body">
              <label for="message-text" className="col-form-label">
                Last Name
              </label>
              <input type="text" className="form-control" id="message-text" placeholder="" />
            </div>
            <div className="modal-body">
              <label for="message-text" className="col-form-label">
                Phone
              </label>
              <input type="text" className="form-control" id="message-text" placeholder="" />
            </div>
            <div className="modal-body">
              <label for="message-text" className="col-form-label">
                Email
              </label>
              <input type="text" className="form-control" id="message-text" placeholder="" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    </>
  );
};

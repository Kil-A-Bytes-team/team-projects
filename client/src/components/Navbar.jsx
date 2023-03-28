export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top zindex-sticky py-3">
        <div className="container">
          <a className="navbar-brand" href="#">
            Logo Brand
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="visible navbar-collapse collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Нүүр
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#services">
                  Хичээлүүд
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutus">
                  Бидний тухай
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Холбоо барих
                </a>
              </li>
              <li className="nav-item bold">
                <a className="nav-link" href="/signin">
                  Нэвтрэх
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

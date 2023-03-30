import { NavbarDropDown } from './NavbarDropDown';

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md  bg-cyan-900 navbar-dark sticky-top zindex-sticky py-5">
        <div className="container">
          <a className="navbar-brand" href="#">
            Logo Brand
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="visible navbar-collapse collapse justify-content-center" id="navbarNav">
            <ul className=" d-flex list-style-none align-items-center justify-content-center">
              <li className="nav-item dropdown">
                <button className="dropdown nav-link text-white dropdown-toggle" href="#" type="button" id="dropdownMenu2" data-toggle="dropdown">
                  Нүүр
                </button>
              </li>
              <li>
                <NavbarDropDown
                  item={{
                    name: 'Бидний',
                    children: [
                      { name: 'Our courses', href: '#' },
                      { name: 'About us', href: '#' },
                    ],
                  }}
                />
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#services">
                  Бидний тухай
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#aboutus">
                  Хичээлүүд
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact">
                  Холбоо барих
                </a>
              </li>
              <li className="nav-item bold">
                <a className="nav-link text-white" href="/signin">
                  Нэвтрэх
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

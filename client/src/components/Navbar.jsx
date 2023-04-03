import { NavbarDropDown } from './NavbarDropDown';

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md  bg-cyan-900 navbar-dark sticky-top zindex-sticky py-5">
        <div className="container">
          <img className="w-25 h-25 opacity-75" src="./Logo.png" alt="" />

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="visible navbar-collapse collapse justify-content-center" id="navbarNav">
            <ul className=" d-flex list-style-none align-items-center justify-content-center">
              <NavbarDropDown
                item={{
                  name: 'Нүүр хуудас',
                  children: [
                    { name: 'Our courses', href: '#' },
                    { name: 'About us', href: '#' },
                  ],
                }}
              />
              <li>
                <NavbarDropDown
                  item={{
                    name: 'Бидний тухай',
                    children: [
                      { name: 'Our courses', href: '#' },
                      { name: 'About us', href: '#' },
                    ],
                  }}
                />
              </li>
              <li>
                <NavbarDropDown
                  item={{
                    name: 'Хичээлүүд',
                    children: [
                      { name: 'Our courses', href: '#' },
                      { name: 'About us', href: '#' },
                    ],
                  }}
                />
              </li>
              <li>
                <NavbarDropDown
                  item={{
                    name: 'Холбоо барих',
                    children: [
                      { name: 'Our courses', href: '#' },
                      { name: 'About us', href: '#' },
                    ],
                  }}
                />
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact"></a>
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

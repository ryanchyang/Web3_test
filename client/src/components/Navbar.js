import './styles.scss';

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col pt-3">
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  src="/img/cart/logo.svg"
                  alt=""
                  style={{ width: '50px', marginRight: '10px' }}
                />
                <div className="text-white">PRIMEAL</div>
              </div>
              <div className="d-flex align-items-center">
                <ul className="list-unstyled d-flex mb-0">
                  <li className="mr-5">
                    <a className="nav-item text-decoration-none" href="/#">
                      Market
                    </a>
                  </li>
                  <li className="mr-5">
                    <a className="nav-item text-decoration-none" href="/#">
                      Exchange
                    </a>
                  </li>
                  <li className="mr-5">
                    <a className="nav-item text-decoration-none" href="/#">
                      Tutorials
                    </a>
                  </li>
                  <li className="mr-5">
                    <a className="nav-item text-decoration-none" href="/#">
                      Wallets
                    </a>
                  </li>
                  <li className="mr-5">
                    <a
                      className="nav-item nav-item-login text-decoration-none"
                      href="/#"
                    >
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

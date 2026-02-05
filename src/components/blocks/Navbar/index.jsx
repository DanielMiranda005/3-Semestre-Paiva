import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">

        
        
        <form className="d-none d-lg-flex mx-auto" style={{ width: "40%" }}>
          <input
            className="form-control rounded-pill px-4"
            type="search"
            placeholder="Pesquisar produtos..."
          />
        </form>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Início
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Produtos
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

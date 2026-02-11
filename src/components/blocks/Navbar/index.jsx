import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">

        {/* LOGO */}
        <Link href="/" className="navbar-brand fw-bold fs-4">
          TechStore
        </Link>

        {/* BOTÃO MOBILE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          {/* BUSCA */}
          <form className="d-none d-lg-flex mx-auto" style={{ width: "40%" }}>
            <input
              className="form-control rounded-pill px-4"
              type="search"
              placeholder="Pesquisar produtos..."
            />
          </form>

          {/* LINKS */}
          <ul className="navbar-nav ms-auto align-items-lg-center gap-3">

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

            {/* CARRINHO */}
            <li className="nav-item">
              <Link href="/" className="nav-link position-relative">
                🛒
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

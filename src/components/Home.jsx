const Home = () => (
  <div
    className="pt-0 pb-5 text-center text-white"
    style={{
      background:
        "linear-gradient(135deg, #3b2f2f 0%, #7c4d4d 50%,rgb(179, 152, 127) 100%)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
    <div
      className="overflow-hidden rounded shadow mb-4 position-relative"
      style={{ maxWidth: "1400px", width: "100%", height: "400px" }}>
      <img
        src="/images/restaurant.jpg"
        alt="Lé Restoirant"
        className="img-fluid position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: "cover", zIndex: 1 }}
      />
    </div>
    <h1
      className="display-4 fw-bold"
      style={{ fontFamily: "Playfair Display, serif" }}>
      Lé Restoirant
    </h1>
    <p className="lead">
      Comida francesa pretenciosa, servida con arte y arrogancia.
    </p>
    <hr className="my-4 border-light w-50" />
    <p className="mb-4 px-4">
      Descubre una experiencia gastronómica inolvidable con foie gras, risottos,
      soufflés y una carta de vinos que haría llorar a un sumiller.
    </p>
    <a href="/menu" className="btn btn-light btn-lg">
      Explorar el menú
    </a>
  </div>
);

export default Home;

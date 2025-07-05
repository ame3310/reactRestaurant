const menuData = {
  starters: [
    {
      name: "Foie Gras de Canard aux Figues",
      description:
        "Bloc de hígado de pato con mermelada de higos al oporto, servido sobre pan brioche tostado.",
      image: "/images/foiegras.jpg",
    },
    {
      name: "Tartare de Saumon à l’Avocat",
      description:
        "Tartar de salmón salvaje marinado con limón y eneldo, sobre una cama de aguacate cremoso.",
      image: "/images/salmon-tartare.jpg",
    },
  ],
  mains: [
    {
      name: "Velouté de Topinambours à la Truffe",
      description:
        "Crema de tupinambo suave con aceite de trufa negra y crujiente de jamón ibérico.",
      image: "/images/veloute-truffe.jpg",
    },
    {
      name: "Ravioles de Homard au Beurre Blanc",
      description:
        "Raviolis artesanales rellenos de langosta con salsa de mantequilla blanca y cebollino.",
      image: "/images/lobster-ravioli.jpg",
    },
    {
      name: "Salade de Chèvre Chaud sur Pain de Campagne",
      description:
        "Ensalada de lechugas gourmet con medallones de queso de cabra tibio sobre pan rústico.",
      image: "/images/chevre-chaud.jpg",
    },
  ],
  seconds: [
    {
      name: "Magret de Canard Sauce Cassis",
      description:
        "Pechuga de pato rosada con reducción de grosella negra y gratén de patata trufada.",
      image: "/images/duck-breast.jpg",
    },
    {
      name: "Filet de Bœuf Rossini",
      description:
        "Solomillo de ternera con foie poêlé y salsa de vino tinto, acompañado de puré de apionabo.",
      image: "/images/beef-rossini.jpg",
    },
    {
      name: "Cabillaud à la Provençale",
      description:
        "Lomo de bacalao fresco con costra de hierbas, arroz y tomate confitado, servido con ratatouille.",
      image: "/images/cod-provencale.jpg",
    },
    {
      name: "Risotto aux Asperges Blanches et Safran",
      description:
        "Risotto cremoso de espárragos blancos y azafrán con queso comté curado.",
      image: "/images/risotto-safran.jpg",
    },
  ],
  desserts: [
    {
      name: "Soufflé au Grand Marnier",
      description:
        "Soufflé ligero de naranja con licor Grand Marnier, horneado al momento.",
      image: "/images/souffle.jpg",
    },
    {
      name: "Tarte Fine aux Pommes et Glace Vanille",
      description:
        "Tarta fina de manzana caramelizada con helado de vainilla Bourbon.",
      image: "/images/apple-tart.jpg",
    },
  ],
  drinks: [
    {
      name: "Château Margaux – Premier Grand Cru Classé",
      description:
        "Tinto bordelés de intensidad elegante con notas de ciruela, cedro y violeta.",
    },
    {
      name: "Chablis Grand Cru Les Clos",
      description:
        "Blanco seco de Borgoña, mineral y floral, perfecto para mariscos y foie.",
    },
    {
      name: "Champagne Laurent-Perrier Cuvée Rosé",
      description:
        "Champagne rosado de fresas silvestres, burbuja fina y final persistente.",
    },
    {
      name: "Eau de Source Evian",
      description: "Agua mineral natural de los Alpes franceses, servida fría.",
    },
  ],
};

const Section = ({ title, items }) => (
  <div className="mb-5">
    <h3 className="mb-4 text-primary border-bottom pb-2">{title}</h3>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {items.map((item, index) => (
        <div className="col" key={index}>
          <div className="card h-100 shadow-sm transition-card">
            {item.image && (
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
            )}
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text text-muted">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Menu = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-4">Notre Menu Gastronomique</h2>
      <Section title="Entrantes" items={menuData.starters} />
      <Section title="Primeros Platos" items={menuData.mains} />
      <Section title="Segundos Platos" items={menuData.seconds} />
      <Section title="Postres" items={menuData.desserts} />
      <Section title="Bebidas" items={menuData.drinks} />
    </div>
  );
};

export default Menu;
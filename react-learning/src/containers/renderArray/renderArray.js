import Card from "../../components/Card";

const productDetails = [
  {
    id: 1,
    brand: "Ferrari",
    name: "F3",
    engine: "V12",
    address: 'https://cdna.artstation.com/p/assets/images/images/002/961/320/medium/marcin-czajkowski-d303.jpg?1467808194'
  },
  {
    id: 2,
    brand: "Lambhorghini",
    name: "Avetendor",
    engine: "S12",
    address: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia3.speedcafe.com%2Fwp-content%2Fuploads%2F2020%2F07%2F563764.jpg&f=1&nofb=1'
  },
  {
    id: 3,
    brand: "Mclaren",
    name: "AMG",
    engine: "Q1",
    address: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.automobilemag.com%2Fuploads%2Fsites%2F11%2F2014%2F04%2F2015-Mclaren-650S-Spider-front-three-quarters-in-motion-031.jpg&f=1&nofb=1'
  },
  {
    id: 4,
    brand: "Mclaren",
    name: "AMG",
    engine: "Q1",
    address: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.automobilemag.com%2Fuploads%2Fsites%2F11%2F2014%2F04%2F2015-Mclaren-650S-Spider-front-three-quarters-in-motion-031.jpg&f=1&nofb=1'
  },
];

const RenderArray = () => {
  return <div style={{ display: 'flex', gap: '20px'}}>
  {productDetails.map((product) => {
    const { id, brand, name, engine, address } = product;
    return (
        <Card
        key={id}
        name={name}
        brand={brand}
        engine={engine}
        imgUrl={address}
        />
    )
  })}
  </div>;
};

export default RenderArray;

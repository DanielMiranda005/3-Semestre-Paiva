import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const produtos = await (await fetch("https://dummyjson.com/products")).json();


  return (

    <div className="d-flex gap-5 flex-wrap align-items-center justify-content-center">

      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="fw-bold mb-3">
            Tudo o que você precisa em tecnologia
          </h1>

          <p className="text-muted mb-4">
            Qualidade, segurança e os melhores preços para você
          </p>

          <button className="btn btn-dark px-4 py-2">
            Ver produtos
          </button>
        </div>
      </section>

      {produtos.products.map((produtos, index) => {
        return (
          <Card key={index} id={produtos.id} image={produtos.images[0]} title={produtos.title} description={produtos.description} avaliacao={produtos.rating}>


          </Card>
        )
      })}
    </div>

  );
}

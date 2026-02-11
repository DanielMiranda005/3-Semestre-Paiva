import ProductsSection from "@/components/ProductCategoria";

export default async function Home() {

  const response = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 60 }
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  const data = await response.json();
  const produtos = data.products;

  return (
    <main>

      {/* HERO SECTION */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="fw-bold mb-3">
            Tudo o que você precisa em sua vida
          </h1>

          <p className="text-muted mb-4">
            Qualidade, segurança e os melhores preços para você
          </p>
        </div>
      </section>


      <ProductsSection produtos={produtos} />


    </main>
  );
}

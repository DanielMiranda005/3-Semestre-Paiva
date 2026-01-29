import Image from "next/image";
import Link from "next/link";

export default async function Home() {

const produtos = await (await fetch("https://dummyjson.com/products")).json();


  return (

    <div className="d-flex gap-5 flex-wrap align-items-center justify-content-center">

        {produtos.products.map((produtos, index) => {
          return (<div key={produtos.id} className="card" style={{ width: "18rem" }}>
            <img src={produtos.poster} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{produtos.title}</h5>
              <p className="card-text">
              </p>
              <Link href="#" className="btn btn-primary">
                ver mais
              </Link>
            </div>
          </div>
          )
        })}
      </div>
    
  );
}

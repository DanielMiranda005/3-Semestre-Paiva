import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {

const produtos = await (await fetch("https://dummyjson.com/products")).json();


  return (

    <div className="d-flex gap-5 flex-wrap align-items-center justify-content-center">

        {produtos.products.map((produtos, index) => {
          return (
            <Card key={produtos.id} image={produtos.images} title={produtos.title} description={produtos.description}>


            </Card>
          )
        })}
      </div>
    
  );
}

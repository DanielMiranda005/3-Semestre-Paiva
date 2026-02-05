"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProdutoPage() {
    const { id } = useParams();
    const [produto, setProduto] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduto(data));
    }, [id]);

    if (!produto)
        return <p>Carregando...</p>;

    return (
        <div className="container py-5">
            <div className="row">

                {/* Imagem */}
                <div className="col-md-6 text-center">
                    <img
                        src={produto.thumbnail}
                        alt={produto.title}
                        className="img-fluid rounded"
                    />
                </div>

                {/* Informações */}
                <div className="col-md-6">
                    <h1 className="fw-bold">{produto.title}</h1>

                    <h3 className="text-success my-3">
                        R$ {produto.price}
                    </h3>

                    <p className="text-muted">
                        {produto.description}
                    </p>

                    <p className="mb-2">
                        <strong>Categoria:</strong> {produto.category}
                    </p>

                    <p className="mb-2">
                        <strong>Avaliação:</strong> ⭐ {produto.rating}
                    </p>

                    <button className="btn btn-dark btn-lg mt-3">
                        Comprar agora
                    </button>
                </div>

            </div>
        </div>
    );

}
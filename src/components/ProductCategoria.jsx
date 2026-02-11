"use client";

import { useState } from "react";
import Card from "./Card";

export default function ProductCategoria({ produtos }) {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("all");

    const categorias = [...new Set(produtos.map((p) => p.category))];

    const produtosFiltrados =
        categoriaSelecionada === "all"
            ? produtos
            : produtos.filter(
                (produto) => produto.category === categoriaSelecionada
            );

    return (
        <section id="produtos" className="container py-5">

            {/* FILTRO */}
            <div className="mb-4">
                <select
                    className="form-select"
                    onChange={(e) => setCategoriaSelecionada(e.target.value)}
                >
                    <option value="all">Buscar por categoria</option>
                    {categorias.map((categoria) => (
                        <option key={categoria} value={categoria}>
                            {categoria}
                        </option>
                    ))}
                </select>
            </div>

            {/* PRODUTOS */}
            <div className="row g-4">
                {produtosFiltrados.map((produto) => (
                    <div key={produto.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <Card
                            id={produto.id}
                            image={produto.images[0]}
                            title={produto.title}
                            description={produto.description}
                            avaliacao={produto.rating}
                        />
                    </div>
                ))}
            </div>

        </section>
    );
}

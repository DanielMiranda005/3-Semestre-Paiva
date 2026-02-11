"use client";

import { Rating } from "next-flex-rating";
import Link from "next/link";

export default function Card({ id, image, title, description, avaliacao }) {
  return (
    <div className="card h-100 shadow-sm border-0 card-hover">
    
      <div style={{ maxHeight: "200px", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
        <img
          src={image}
          className="card-img-top"
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
          alt={title}
        />
      </div>

      <div className="card-body d-flex flex-column">
      
        <h6 className="card-title fw-bold">{title}</h6>
       
        <p className="card-text text-muted small flex-grow-1">
          {description.substring(0, 80)}...
        </p>
        
        <div className="mb-3">
          <Rating value={avaliacao} readOnly />
        </div>

        <Link
          href={`/produtos/${id}`}
          className="btn btn-dark w-100 rounded-pill"
        >
          Ver mais
        </Link>

      </div>
    </div>
  );
}

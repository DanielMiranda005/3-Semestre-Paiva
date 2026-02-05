"use client"

import { Rating } from "next-flex-rating";
import Link from "next/link";

export default function Card({id, image, title, description, avaliacao}) {
    return(<>
        <div className="card m-5 shadow-lg" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <Link href={`/produtos/${id}`} className="btn btn-primary">
                ver mais
              </Link>
            </div>
            <Rating value={avaliacao} readOnly={true}></Rating>
          </div>

    </>


    )

}
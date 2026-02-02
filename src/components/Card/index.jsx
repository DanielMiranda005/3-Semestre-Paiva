"use client"

import Link from "next/link";

export default function Card({id, image, title, description}) {
    return(<>
        <div key={id} className="card m-5 shadow-lg" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <h5 className="card-title">{description}</h5>
              <p className="card-text">
              </p>
              <Link href="#" className="btn btn-primary">
                ver mais
              </Link>
            </div>
          </div>
    </>


    )

}
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Components/Layout/Layout.js";
import axios from "axios";
import { API } from "../Global.js";

const Bike = () => {
  const [products, Setproduct] = useState([]);
  const params = useParams();
  // const [bike, Setbike] = useState([
  //   {
  //     id: 1,
  //     image: 1,
  //     name: "passion pro",
  //     price: "1234",
  //   },
  //   {
  //     id: 2,
  //     image: 2,
  //     name: "passion pro",
  //     price: "1234",
  //   },
  //   {
  //     id: 3,
  //     image: 3,
  //     name: "passion pro",
  //     price: "1234",
  //   },
  //   {
  //     id: 3,
  //     image: 1,
  //     name: "passion pro",
  //     price: "1234",
  //   },
  // ]);

  useEffect(() => {
    if (params?.slug) fetchData();
  }, [params?.slug]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${API}/api/products/get-product/${params.slug}`
      );
      Setproduct(data ? data.products : []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-3 category">
        <h6 className="text-center">{products?.length} result found </h6>
        <div className="row">
          <div className="col-md-9 offset-1">
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <div className="card m-2" key={p._id}>
                  <img src={p.image} className="card-img-top" alt={p.name} />
                  <div className="card-body">
                    <div className="card-name-price">
                      <h5 className="card-title">{p.name}</h5>
                      <h5 className="card-title card-price"></h5>
                    </div>
                    <p className="card-text ">
                      {p.description.substring(0, 60)}...
                    </p>
                    <div className="card-name-price"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Bike;

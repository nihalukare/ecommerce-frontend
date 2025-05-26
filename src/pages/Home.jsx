import Header from "../components/Header";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { BASE_API_URL } from "../config";

export default function Home() {
  const { data, loading, error } = useFetch(`${BASE_API_URL}/categories`);

  return (
    <>
      <Header />
      <main className="bg-body-tertiary py-5">
        <div className="container">
          <div className="d-flex justify-content-between">
            {error && <p>{error}</p>}
            {loading && (
              <div className="mb-3 text-body-secondary fs-5 placeholder-wave">
                Loading....
              </div>
            )}
            {data &&
              data.data.categories.map((category) => (
                <div className="w-md-25 mx-3" key={category._id}>
                  <div className="card position-relative border-0 rounded-0">
                    <Link
                      to={`/products/category/${category._id}/${category.subCategory[0]}`}
                    >
                      <img
                        src={`/images/${category.categoryName}.jpg`}
                        className="card-img img-fluid rounded-0"
                        alt={`${category.categoryName} image`}
                      />
                      <p className="position-absolute text-center text-black bg-light w-100 border-0 bottom-50 m-0 bg-opacity-75 fw-medium">
                        {category.categoryName}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          <div
            id="carouselExample"
            className="carousel slide my-5"
            data-bs-theme="dark"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/images/carousel-img-1.png"
                  className="d-block w-100"
                  alt="carousel-img-1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/carousel-img-2.png"
                  className="d-block w-100"
                  alt="carousel-img-2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/images/carousel-img-3.png"
                  className="d-block w-100"
                  alt="carousel-img-3"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="card mb-3 border-0">
                <div className="row g-0 p-5">
                  <div className="col-md-4">
                    <img
                      src="images/new-arivals-1.png"
                      className="img-fluid  shadow"
                      alt="new-arivals-1"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-body-secondary">
                      <h5 className="card-title fw-bold m-0">NEW ARRIVALS</h5>
                      <p>
                        <small>Sit in Style. Live in Luxury.</small>
                      </p>
                      <br />
                      <p className="card-text">
                        <span className="fw-medium">
                          Luxury Furniture Edition
                        </span>{" "}
                        <br />
                        Discover timeless designs crafted for comfort. Add a
                        refined touch to your living space.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-3 border-0">
                <div className="row g-0 p-5">
                  <div className="col-md-4">
                    <img
                      src="images/new-arivals-2.png"
                      className="img-fluid shadow"
                      alt="new-arivals-2"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-body-secondary">
                      <h5 className="card-title fw-bold m-0">NEW ARRIVALS</h5>
                      <p>
                        <small>Make Home Your Favorite Place.</small>
                      </p>
                      <br />
                      <p className="card-text">
                        <span className="fw-medium ">
                          There’s No Better Place Than Home
                        </span>
                        <br />
                        Welcome comfort with our cozy new arrivals. Designed to
                        fit perfectly into your lifestyle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

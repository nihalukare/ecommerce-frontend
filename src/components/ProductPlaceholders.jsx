export default function ProductPlaceholders() {
  return (
    <>
      <div className="mb-3 text-body-secondary fs-5 placeholder-wave">
        Loading....
      </div>
      <div className="row g-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="col-md-6">
            <div className="card border-0 rounded-0">
              <div className="row">
                <div className="col-md-6 placeholder-wave">
                  <img
                    src="https://placehold.co/600x500/eeeeee/eeeeee"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                      <span className="placeholder col-6"></span>
                    </h5>
                    <div className="mb-5">
                      <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-8"></span>
                      </p>
                    </div>
                    <div className="d-grid gap-2 placeholder-glow">
                      <a className="btn btn-secondary disabled placeholder col-12 rounded-0"></a>
                      <a className="btn btn-outline-secondary disabled placeholder col-12 rounded-0"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

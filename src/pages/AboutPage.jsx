export const AbouPage = () => {
  return (
    <div className="w-full px-5">
      <div className="max-w-3xl mx-auto">
        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body">
            <h1 className="card-title text-3xl justify-center">
              About Sandwich Explorer
            </h1>

            <p className="text-center text-base-content/70">
              Discover, create and share sandwiches from around the world.
            </p>

            <div className="divider"></div>

            <p>
              Sandwich Explorer is a small React application built to explore
              different sandwich recipes and bread varieties.
            </p>

            <p>
              Users can browse sandwiches, view details, explore breads, leave
              comments and create their own sandwich combinations.
            </p>

            <div className="alert alert-info mt-4 justify-center">
              <span>
                Built with React, React Router, TailwindCSS and DaisyUI.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import "../styles/HomePage.css";

export const HomePage = () => {
  return (
    <div className=" w-full">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to Sandwich Maker !
            </h1>
            <p className="mb-5">
              You always wanted to make your own sandwich... Time for it.
            </p>
            <button className="btn btn-primary text-lg border-neutral border-2">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

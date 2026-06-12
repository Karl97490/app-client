import { Search } from "../components/Search";
import { Filter } from "../components/Filter";
import { Sort } from "../components/Sort";
import { CardsLoading } from "../components/CardsLoading";

export const LoadingPage = ({ page }) => {
  return (
    <div className="w-full pb-10">
      <h2>This is LoadingPage component...</h2>
      {page === "list" ? (
        <>
          <fieldset
            className="fieldset flex flex-row justify-center w-[95%] m-auto p-4"
            disabled
          >
            <button type="reset" className="btn btn-ghost bg-base-100">
              Reset
            </button>
            <Search />
            <Sort />
            <Filter />
          </fieldset>
          <section className="mx-5 rounded-4xl border-4 grid grid-cols-[repeat(auto-fit,24rem)] gap-y-4 gap-x-10 justify-center py-10 bg-base-100">
            <CardsLoading />
            <CardsLoading />
            <CardsLoading />
            <CardsLoading />
            <CardsLoading />
            <CardsLoading />
          </section>
        </>
      ) : (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-base-200 gap">
          <span className="loading loading-spinner loading-lg"></span>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Loading...</h2>

            <p className="text-base-content/70">
              {page === "add" && "Creating your own sandwich."}
              {page === "load" && "Retrieving the hot sandwich."}
              {page === "edit" && "Editing your delicious sandwich."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

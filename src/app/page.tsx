import { Categories } from "@/components";
import { getAllCategories } from "@/services";

export default async function Home() {
  const cats = await getAllCategories();

  return (
    <div className="container">
      <div className="content__top">
        <Categories cats={cats} activeCategory={0} />
        {/* <SortPopup items={sortNames} onSelectSortType={onSelectSortType} activeSortBy={sortBy}/> */}
      </div>
      <h2 className="content__title">
        Title
        {/* {category !== null ? categoryNames[category] : 'All'} */}
      </h2>
      <div className="content__items">
        {/* {isLoading
          ? pizzaList
          : Array(12).fill(0).map((x, i) => (<PizzaLoadingBlock key={i} />))
        } */}
        List
      </div>
    </div>
  )
}
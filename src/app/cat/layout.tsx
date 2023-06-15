'use client';
import { Categories } from "@/components"
import { getAllCategories } from "@/services";
import { usePathname } from "next/navigation";

export default async function CatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cats = await getAllCategories();
  const pathname = usePathname();

  return (
    <div className="container">
      <div className="content__top">
        <Categories cats={cats} activeCategory={Number(pathname.split('/')[2])} />
        {/* <SortPopup items={sortNames} onSelectSortType={onSelectSortType} activeSortBy={sortBy}/> */}
      </div>
      <h2 className="content__title">
        Title
        {/* {category !== null ? categoryNames[category] : 'All'} */}
      </h2>
      <div className="content__items">
        {children}
        {/* {isLoading
        ? pizzaList
        : Array(12).fill(0).map((x, i) => (<PizzaLoadingBlock key={i} />))
      } */}
        List
      </div>
    </div>
  )
}
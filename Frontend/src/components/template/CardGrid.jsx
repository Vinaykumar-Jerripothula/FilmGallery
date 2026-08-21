import FranchiseCard from "./ContentCard";

function CardGrid({ title, items = [] }) {
  return (
    <section className="mb-10 sm:mb-12">
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[14px] sm:text-[17px] font-semibold">
          {title}
        </h2>
      </div>

      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-4
        "
      >
        {items.map((item) => (
          <FranchiseCard
            key={item.id}
            title={item.title}
            contentId={item.contentId}
            image={item.image}
            total={item.total}
            route={item.route}
          />
        ))}
      </div>
    </section>
  );
}

export default CardGrid;
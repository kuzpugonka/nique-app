import Meal from "../Meal/Meal";

const Section = ({ title, items, id }) => {
  return (
    <section className="section" id={id}>
      <h2 className="section-title">{title}</h2>
      <ul className="section-list">
        {items.map((item, index) => {
          return <Meal data={item} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default Section;

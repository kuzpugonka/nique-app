import Section from "../Section/Section";

const Main = ({ data }) => {
  return (
    <main className="main" id="menu">
      <div className="container">
        <nav className="main-nav">
          {data.menu.sections.map((section) => {
            return (
              <a className="main-nav-link" href={`#${section.id}`} key={section.id}>
                {section.title}
              </a>
            );
          })}
        </nav>

        <div className="sections-wrapper">
          {data.menu.sections.map((section) => {
            return (
              <Section
                key={section.id}
                title={section.title}
                items={section.items}
                id={section.id}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;

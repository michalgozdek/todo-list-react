import "./style.css"

const Section = ({title, body, extraHeaderContent}) => (
    <div className="section">
      <section className="section__body">
      <div className="section__header">{title}</div>
      {extraHeaderContent}
    </section>
      <div className="section_plus">
         {body}
      </div>
    </div>
);

export default Section

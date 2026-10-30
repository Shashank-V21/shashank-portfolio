export default function SectionHeading({ index, eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <div className="section-index mono">{index} / {eyebrow}</div>
      <div>
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
    </div>
  );
}

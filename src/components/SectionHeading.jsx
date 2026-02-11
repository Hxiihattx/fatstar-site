export default function SectionHeading({
  eyebrow,
  title,
  className = '',
  eyebrowClassName = '',
}) {
  return (
    <div className={className}>
      {eyebrow ? <span className={`eyebrow ${eyebrowClassName}`}>{eyebrow}</span> : null}
      <h2 className="font-display text-4xl leading-tight md:text-5xl">{title}</h2>
    </div>
  )
}

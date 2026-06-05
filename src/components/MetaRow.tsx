interface MetaRowProps {
  items: { label: string; value: string }[];
}

const MetaRow = ({ items }: MetaRowProps) => {
  return (
    <div className="grid grid-cols-4 gap-x-8 py-8 border-b border-border">
      {items.map((item) => (
        <div key={item.label} className="min-w-0">
          <p className="section-label mb-1">{item.label}</p>
          <p className="text-sm font-medium text-foreground break-words leading-snug">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MetaRow;

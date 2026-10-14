type Props = {
  category: string;
};

export default function CategoryBadge({ category }: Props) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-signal/30
        bg-signal-dim/50
        px-3
        py-1
        text-xs
        font-medium
        text-signal
      "
    >
      {category}
    </span>
  );
}

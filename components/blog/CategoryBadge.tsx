type Props = {
  category: string;
};


export default function CategoryBadge({
  category,
}: Props) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-primary/20
        bg-primary/10
        px-3
        py-1
        text-xs
        font-medium
        text-primary
      "
    >
      {category}
    </span>
  );
}
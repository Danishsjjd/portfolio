type Props = {
  title: string
  isSelected: boolean
}

export const Title = ({ title, isSelected }: Props) => {
  // title
  return (
    <div
      className={`absolute bottom-6 left-0 mx-3 max-w-xs rounded bg-black/70 px-2 py-1 text-xl font-semibold decoration-yellow transition-all  duration-300 line-clamp-1 sm:backdrop-blur-sm lg:text-2xl ${
        isSelected
          ? "translate-x-2 opacity-0"
          : "translate-x-0 opacity-100 delay-1000"
      }`}
      style={{ zIndex: 1 }}
    >
      {title}
    </div>
  )
}

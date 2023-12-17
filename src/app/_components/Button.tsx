type Props = {
  children: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const Button = ({ children, className, onClick }: Props) => {
  return (
    <button
      className={`rounded-full bg-yellow px-4 py-1 text-lg font-medium text-black underline outline-8 -outline-offset-8 outline-yellow transition hover:decoration-wavy hover:outline-offset-2 ${
        className ? className : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button

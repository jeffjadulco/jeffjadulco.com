export function ButtonPop({ children }) {
  return (
    <div className="relative w-full h-full group">
      <div className="absolute top-0 left-0 w-0 h-0 transition-transform origin-left scale-0 -translate-y-2 border-t-8 border-b-8 border-r-8 group-hover:scale-100 border-r-accent border-t-transparent border-b-transparent" />
      <div className="absolute bottom-0 right-0 w-0 h-0 transition-transform origin-bottom scale-0 translate-x-2 border-t-8 border-l-8 border-r-8 group-hover:scale-100 border-t-accent border-l-transparent border-r-transparent" />
      <div className="absolute inset-y-0 left-0 w-2 transition-transform ease-in-out origin-left scale-x-0 bg-accent group-hover:scale-x-100" />
      <div className="absolute inset-x-0 bottom-0 h-2 transition-transform ease-in-out origin-bottom scale-y-0 bg-accent group-hover:scale-y-100" />
      <div className="w-full h-full transition-transform ease-in-out bg-gray-800 group-hover:translate-x-2 group-hover:-translate-y-2">
        {children}
      </div>
    </div>
  )
}

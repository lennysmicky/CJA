const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary-200 rounded-full"></div>
        <div className="w-16 h-16 border-4 border-primary-500 rounded-full border-t-transparent animate-spin absolute top-0 left-0"></div>
      </div>
    </div>
  )
}

export default Loader
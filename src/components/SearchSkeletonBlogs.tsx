
function SearchSkeletonBlogs() {


    return (

        <section className="bg-my-deep-black relative">
              <div className="max-w-6xl mx-auto px-3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-my-blacker border border-my-black rounded-2xl overflow-hidden animate-pulse"
                    >
                      <div className="h-48 bg-my-black" />
                      <div className="p-6 space-y-4">
                        <div className="h-4 w-32 bg-my-black rounded" />
                        <div className="h-6 w-3/4 bg-my-black rounded" />
                        <div className="space-y-2">
                          <div className="h-4 w-full bg-my-black rounded" />
                          <div className="h-4 w-5/6 bg-my-black rounded" />
                        </div>
                        <div className="flex items-center gap-4 pt-4">
                          <div className="h-12 w-12 bg-my-black rounded-lg" />
                          <div className="space-y-2">
                            <div className="h-4 w-24 bg-my-black rounded" />
                            <div className="h-4 w-16 bg-my-black rounded" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
    )
}

export default SearchSkeletonBlogs;
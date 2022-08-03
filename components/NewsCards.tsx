import Link from "next/link"

export default function NewsCards({ articles }) {
  console.log(articles);
  return (
    <div className="bg-white pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Press</h2>
          <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
            <p className="text-xl text-gray-800">Get weekly articles in your inbox on how to grow your business.</p>
            <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-800 focus:outline-none focus:ring-rose-800 focus:border-rose-800 lg:max-w-xs"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                <button
                  type="button"
                  className="w-full bg-rose-900 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-800 sm:w-auto sm:inline-flex"
                >
                  Notify me
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {articles.map((article) => (
            <div key={article.attributes.title}>
              <p className="text-sm text-gray-800">
                <time dateTime={article.date}>{article.date}</time>
              </p>
              <a href="#" className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">{article.attributes.title}</p>
                <p className="mt-3 text-base text-gray-800">{article.attributes.description}</p>
              </a>
              <div className="mt-3">
              <Link href={`/article/${article.attributes.slug}`}>
                <div className="text-base font-semibold text-rose-900 hover:text-rose-800">
                  Read full story
                </div>
              </Link>
              </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}


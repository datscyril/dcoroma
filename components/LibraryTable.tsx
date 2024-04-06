import Link from 'next/link'

export default function LibraryTable(props) {
  const documents: any = Array.from(props.docs)
  console.log('Cyril', documents)
  return (
    <ul
      role='list'
      className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 px-4 sm:px-9 lg:px-8'
    >
      {documents.map((document) => (
        <li key={document.name} className='relative'>
          <div className='group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100'>
            <img
              src={document.cover}
              alt={`Cover of ${document.name}`}
              className='object-cover pointer-events-none group-hover:opacity-75'
            />
            <Link href={document.href}>
              <span className='sr-only'>View details for {document.name}</span>
            </Link>
          </div>
          <p className='mt-2 block truncate text-sm font-medium text-gray-900'>
            {document.name}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default function Hire() {
  return (
    <div className="container mx-auto p-3 mt-10 mb-5">
      <div className="w-full lg:w-1/2 mx-auto">
        <h1 className="text-4xl text-gray-800">
          Hire Andrew Vos
        </h1>
        <form name="contact" method="post" data-netlify="true" id="contact">
          <div className="mt-4 w-full">
            <label className=
              "block text-gray-700 mb-1 font-bold text-left">Name</label>
            <input name="name" type="text" className=
              "w-full py-2 px-4 rounded-lg border" required autoFocus />
          </div>
          <div className="mt-4 w-full">
            <label className=
              "block text-gray-700 mb-1 font-bold text-left">Email</label>
            <input name="email" type="email" required className=
              "w-full py-2 px-4 rounded-lg border" />
          </div>
          <div className="mt-4 w-full">
            <label className=
              "block text-gray-700 mb-1 font-bold text-left">Message</label>
            <textarea name="email" className=
              "w-full py-2 px-4 rounded-lg border" required></textarea>
          </div>
          <div className="mt-4 w-full">
            <button type="submit" className=
              "h-8 px-4 text-md text-white bg-blue-500 rounded-lg">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

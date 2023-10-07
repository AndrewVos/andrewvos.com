import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - andrewvos.com',
};

export default function Hire() {
  return (
    <div className="container mx-auto p-3 mt-10 mb-5">
      <div className="w-full lg:w-1/2 mx-auto">
        <h1 className="text-4xl text-gray-800 font-bold">
          Contact Andrew Vos
        </h1>
        <form name="contact" action="/contact/success" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div className="mt-4 w-full">
            <label className=
              "block text-black mb-1 font-bold text-left" htmlFor="name">Name</label>
            <input id="name" name="name" type="text" className=
              "w-full py-2 px-4 rounded-lg border" required autoFocus />
          </div>
          <div className="mt-4 w-full">
            <label className=
              "block text-black mb-1 font-bold text-left" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className=
              "w-full py-2 px-4 rounded-lg border" />
          </div>
          <div className="mt-4 w-full">
            <label className=
              "block text-black mb-1 font-bold text-left" htmlFor="message">Message</label>
            <textarea id="message" name="message" className=
              "w-full py-2 px-4 rounded-lg border" required></textarea>
          </div>
          <div className="mt-4 w-full">
            <button type="submit" className=
              "h-8 px-4 text-md text-white bg-black font-bold rounded-lg">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

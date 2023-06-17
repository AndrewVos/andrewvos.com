import Link from "next/link"

export default function Bio() {
  const clients = [
    { name: "BBC", image: "./images/logos/bbc.png" },
    { name: "Featurist", image: "./images/logos/featurist.png" },
    { name: "Florence", image: "./images/logos/florence.png" },
    { name: "Fullsix", image: "./images/logos/fullsix.png" },
    { name: "GAIN Capital", image: "./images/logos/gain-capital.png" },
    { name: "GDS", image: "./images/logos/gds.png" },
    { name: "Honeycomb", image: "./images/logos/honeycomb-tv.png" },
    { name: "ITV", image: "./images/logos/itv.png" },
    { name: "PensionWise", image: "./images/logos/pension-wise.png" },
    { name: "Shopa", image: "./images/logos/shopa.png" },
    { name: "Sky", image: "./images/logos/sky.png" },
    { name: "ChangeLab", className: "bg-gray-700 p-3", image: "./images/logos/changelab.png" },
    { name: "MoneyHelper", className: "p-3", image: "./images/logos/moneyhelper.png" },
    { name: "Quidco", className: "p-3", image: "./images/logos/quidco.png" },
  ]

  return (
    <>
      <div className="text-gray-900 font-serif container mx-auto p-3 mt-10 mb-5">
        <div className="flex">
          <div className="flex-auto">
            <h1 className="text-4xl text-gray-800 font-bold">
              Andrew Vos
            </h1>
          </div>
          <div>
            <Link href="/contact" className="inline-flex items-center h-8 px-4 m-2 text-sm text-white bg-blue-500 rounded-lg">
              Check availability
            </Link>
          </div>
        </div>
        <h2 className="text-3xl text-gray-700 font-bold">
          Senior Software Engineer
        </h2>
      </div>
      <div className="container mx-auto p-3 mb-5">
        <div className="lg:w-2/3">
          <p className="text-lg mb-3">
            I am a
            {" "}
            <span className="bg-gray-200 px-1 text-gray-700">Senior Software Engineer</span>
            {" "}
            with over
            {" "}
            <span className="bg-gray-200 px-1 text-gray-700">15 years</span>
            {" "}
            of experience.
          </p>

          <p className="text-lg mb-3">
            I create user experiences that are
            <span className="bg-gray-200 px-1 text-gray-700">intuitive</span>,
            <span className="bg-gray-200 px-1 text-gray-700">capable</span>,
            <span className="bg-gray-200 px-1 text-gray-700">reliable</span>
            and
            <span className="bg-gray-200 px-1 text-gray-700">fast</span>.
          </p>

          <p className="text-lg mb-3">
            For web I like to work with
            {" "}
            <span className="bg-gray-200 px-1 text-gray-700">Next.js</span>,
            and
            <span className="bg-gray-200 px-1 text-gray-700">React</span>.
            I always use system tests to cover new features that I write,
            and for more complex code I write unit tests.
          </p>

          <p className="text-lg mb-3">
            Languages that I know well include
            {" "}
            <span className="bg-gray-200 px-1 text-gray-700">Ruby</span>,
            <span className="bg-gray-200 px-1 text-gray-700">JavaScript</span>,
            <span className="bg-gray-200 px-1 text-gray-700">Python</span>,
            <span className="bg-gray-200 px-1 text-gray-700">CSS</span>,
            <span className="bg-gray-200 px-1 text-gray-700">HTML</span>,
            <span className="bg-gray-200 px-1 text-gray-700">bash</span>
            {" "}
            and others.
          </p>
        </div>
      </div>

      <div className="container mx-auto p-3 mb-5">
        <h3 className="mb-5 text-2xl text-gray-700 font-bold">
          Why you may want to work with me:
        </h3>
        <div className="lg:w-2/3">
          <ul className="text-lg mb-3">
            <li className="list-disc ml-5 text-lg">
              You're looking for a senior developer who works well in a team, or
              who can get the job done on his own.
            </li>
            <li className="list-disc ml-5 text-lg">
              You need someone to design and build
              your software startup from the ground up.
            </li>
            <li className="list-disc ml-5 text-lg">
              You want someone who can hit the ground running, and start
              delivering immediately.
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto p-3 mb-5">
        <h3 className="mb-5 text-2xl text-gray-700 font-bold">
          Some of my interests:
        </h3>
        <div className="lg:w-2/3">
          <ul className="text-lg mb-3">
            <li className="list-disc ml-5 text-lg">
              I make some pretty beautiful furniture out of wood. Also, I make great
              lamps.
            </li>

            <li className="list-disc ml-5 text-lg">
              I spend as much time as possible trail running, running or cycling.
            </li>

            <li className="list-disc ml-5 text-lg">
              I read a lot of science fiction
              {" "}
              <Link href="/books" className="underline">books</Link>.
            </li>

            <li className="list-disc ml-5 text-lg">
              I create loads of random code
              {" "}
              <a href="http://github.com/AndrewVos" className="underline">projects</a>.
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto p-3 mb-20">
        <h3 className="mb-5 text-2xl text-gray-700 font-bold">
          Some of my clients:
        </h3>
        <div className="-mx-3 flex flex-wrap">
          {clients.map(client => (
            <div key={client.name} className="logo w-1/4 w-full md:w-1/2 lg:w-1/4 p-3">
              <div className="logo-background rounded border-solid border border-gray-300 h-full flex items-center justify-center p-3 bg-white">
                <img className={client.className} alt={`${client.name} logo`} src={client.image} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto p-3 mb-20">
        <a href="/AndrewVos.pdf" download className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download full CV here
        </a>
      </div>
    </>
  )
}

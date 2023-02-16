import Link from "next/link"

export default function Bio() {
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
            <Link href="/hire" className="inline-flex items-center h-8 px-4 m-2 text-sm text-white bg-blue-500 rounded-lg">
              Hire me
            </Link>
          </div>
        </div>
        <h2 className="text-3xl text-gray-700 font-bold">
          Full-stack Software Engineer
        </h2>
      </div>
      <div className="container mx-auto p-3 mb-5">
        <div className="lg:w-2/3">
          <p className="text-lg mb-3">
            I am a
            {" "}
            <span className="bg-gray-200 px-1 text-gray-700">Senior Software Engineer</span>,
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
            <span className="bg-gray-200 px-1 text-gray-700">Rails</span>,
            and where appropriate I like to design more complex interfaces with
            {" "}
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

          <p className="text-lg mb-3 font-bold">
            Please note that I have recently moved to Cornwall, so I am only taking on remote work.
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
              You need an incredibly passionate developer to design and build
              your software startup from the ground up.
            </li>
            <li className="list-disc ml-5 text-lg">
              You want someone who can hit the ground running, and start
              delivering features in record time.
            </li>
            <li className="list-disc ml-5 text-lg">
              You crave a developer who can do the whole job, from project management and UX design to frontend and backend development.
            </li>
            <li className="list-disc ml-5 text-lg">
              You want me to teach you vim?
            </li>
            <li className="list-disc ml-5 text-lg">
              You would like to see the occasional photo of my extremely cute dogs.
            </li>
            <li className="list-disc ml-5 text-lg">
              You are just a really cool person really.
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
              I make some pretty cool furniture out of wood. Also, I make amazing
              lamps.
            </li>
            <li className="list-disc ml-5 text-lg">
              Cycling and long distance cycle camping.
            </li>
            <li className="list-disc ml-5 text-lg">
              Constantly tweaking my <a className="underline" href="https://github.com/AndrewVos/dotfiles">dotfiles</a>.
            </li>
            <li className="list-disc ml-5 text-lg">
              Reading science fiction
              {" "}
              <Link href="/books" className="underline">books</Link>.
            </li>
            <li className="list-disc ml-5 text-lg">
              Creating hundreds of
              {" "}
              <a href="http://github.com/AndrewVos" className="underline">projects</a>
              {" "}
              on github.
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto p-3 mb-20">
        <h3 className="mb-5 text-2xl text-gray-700 font-bold">
          Some of my clients:
        </h3>
        <div className="-mx-3 flex flex-wrap">
          <div className="logo w-1/4 w-full md:w-1/2 lg:w-1/4 p-3">
            <div className="logo-background rounded border-solid border border-gray-300 h-full flex items-center justify-center p-3 bg-white">
              <img alt="BBC Logo" src="./images/logos/bbc.png" />
            </div>
          </div>

          <div className="logo w-1/4 w-full md:w-1/2 lg:w-1/4 p-3">
            <div className="logo-background rounded border-solid border border-gray-300 h-full flex items-center justify-center p-3 bg-white">
              <img alt="Featurist logo" src="./images/logos/featurist.png" />
            </div>
          </div>

          <div className="logo w-1/4 w-full md:w-1/2 lg:w-1/4 p-3">
            <div className="logo-background rounded border-solid border border-gray-300 h-full flex items-center justify-center p-3 bg-white">
              <img alt="Florence logo" src="./images/logos/florence.png" />
            </div>
          </div>

          <div className="logo w-1/4 w-full md:w-1/2 lg:w-1/4 p-3">
            <div className="logo-background rounded border-solid border border-gray-300 h-full flex items-center justify-center p-3 bg-white">
              <img alt="Fullsix logo" src="./images/logos/fullsix.png" />
            </div>
          </div>

          <div className="logo w-1/4 w-full md:w-1/2 lg:w-1/4 p-3">
            <div className="logo-background rounded border-solid border border-gray-300 h-full flex items-center justify-center p-3 bg-white">
              <img alt="GAIN Capital logo" src="./images/logos/gain-capital.png" />
            </div>
          </div>

          <div className="logo w-1/4 w-full md:w-1/2 lg:w-1/4 p-3">
            <div className="logo-background rounded border-solid border border-gray-300 h-full flex items-center justify-center p-3 bg-white">
              <img alt="GDS logo" src="./images/logos/gds.png" />
            </div>
          </div>

          <div className="logo w-1/4 w-full md:w-1/2 lg:w-1/4 p-3">
            <div className="logo-background rounded border-solid border border-gray-300 h-full flex items-center justify-center p-3 bg-white">
              <img alt="Honeycomb logo" src="./images/logos/honeycomb-tv.png" />
            </div>
          </div>

          <div className="logo w-1/4 w-full md:w-1/2 lg:w-1/4 p-3">
            <div className="logo-background rounded border-solid border border-gray-300 h-full flex items-center justify-center p-3 bg-white">
              <img alt="ITV logo" src="./images/logos/itv.png" />
            </div>
          </div>

          <div className="logo w-1/4 w-full md:w-1/2 lg:w-1/4 p-3">
            <div className="logo-background rounded border-solid border border-gray-300 h-full flex items-center justify-center p-3 bg-white">
              <img alt="PensionWise logo" src="./images/logos/pension-wise.png" />
            </div>
          </div>

          <div className="logo w-1/4 w-full md:w-1/2 lg:w-1/4 p-3">
            <div className="logo-background rounded border-solid border border-gray-300 h-full flex items-center justify-center p-3 bg-white">
              <img alt="Shopa logo" src="./images/logos/shopa.png" />
            </div>
          </div>

          <div className="logo w-1/4 w-full md:w-1/2 lg:w-1/4 p-3">
            <div className="logo-background rounded border-solid border border-gray-300 h-full flex items-center justify-center p-3 bg-white">
              <img alt="Sky logo" src="./images/logos/sky.png" />
            </div>
          </div>

          <div className="logo w-1/4 w-full md:w-1/2 lg:w-1/4 p-3">
            <div className="logo-background rounded border-solid border border-gray-300 h-full flex items-center justify-center p-3 bg-white">
              <img alt="ChangeLab logo" className="bg-gray-700 p-3" src="./images/logos/changelab.png" />
            </div>
          </div>

          <div className="logo w-1/4 w-full md:w-1/2 lg:w-1/4 p-3">
            <div className="logo-background rounded border-solid border border-gray-300 h-full flex items-center justify-center p-3 bg-white">
              <img alt="ChangeLab logo" className="p-3" src="./images/logos/moneyhelper.png" />
            </div>
          </div>
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

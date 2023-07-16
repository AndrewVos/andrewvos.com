import { Metadata } from 'next';
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'bio - andrewvos.com',
};

export default function Bio() {
  const Client = ({ name, image, className }: { name: string, image: string, className?: string }) => {
    return (
      <div className="logo w-full md:w-1/2 lg:w-1/4 p-3">
        <div className="logo-background rounded border-solid border border-gray-300 h-full flex items-center justify-center p-3 bg-white">
          <Image className={className} alt={`${name} logo`} src={image} width={500} height={500} />
        </div>
      </div>
    )
  }

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
              Contact
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
              You&apos;re looking for a senior developer who works well in a team, or
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
          <Client name="BBC" image="/images/logos/bbc.png" />
          <Client name="BBC News" image="/images/logos/bbc-news.png" />
          <Client name="Featurist" image="/images/logos/featurist.png" />
          <Client name="Florence" image="/images/logos/florence.png" />
          <Client name="Fullsix" image="/images/logos/fullsix.png" />
          <Client name="GAIN Capital" image="/images/logos/gain-capital.png" />
          <Client name="GDS" image="/images/logos/gds.png" />
          <Client name="Honeycomb" image="/images/logos/honeycomb-tv.png" />
          <Client name="ITV" image="/images/logos/itv.png" />
          <Client name="PensionWise" image="/images/logos/pension-wise.png" />
          <Client name="Shopa" image="/images/logos/shopa.png" />
          <Client name="Sky" image="/images/logos/sky.png" />
          <Client name="ChangeLab" className="bg-gray-700 p-3" image="/images/logos/changelab.png" />
          <Client name="MoneyHelper" className="p-3" image="/images/logos/moneyhelper.png" />
          <Client name="Quidco" className="p-3" image="/images/logos/quidco.png" />
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

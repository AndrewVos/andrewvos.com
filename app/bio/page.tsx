import { Metadata } from 'next';
import Link from "next/link"
import Image from "next/image"
import classNames from 'classnames';
export const metadata: Metadata = {
  title: 'Bio - andrewvos.com',
};

export default function Bio() {
  const Client = ({ name, image, className }: { name: string, image: string, className?: string }) => {
    return (
      <div className="logo w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3">
        <div className="rounded border-solid border border-gray-300 h-full flex items-center justify-center p-3 bg-white">
          <Image className={classNames(className, "max-w-[200px]")} alt={`${name} logo`} src={image} width={500} height={500} />
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="text-gray-900 font-serif container mx-auto p-3 mt-10 mb-5 space-y-5">
        <div className="flex">
          <div className="flex-auto">
            <div className="space-y-12 flex flex-col">
              <h1 className="flex select-none">
                <div className='text-4xl font-bold text-white bg-black p-1 border-2 border-black'>
                  Andrew
                </div>
                <div className="text-4xl font-bold text-black p-1 border-2 border-black">
                  Vos
                </div>
              </h1>
            </div>

          </div>
          <div className='flex items-center'>
            <Link href="/contact" className="inline-flex items-center h-8 px-4 m-2 text-sm text-white bg-black font-bold rounded-lg">
              Contact
            </Link>
            <Link href="/AndrewVos.pdf" download target="_blank" rel="noopener noreferrer" className="inline-flex items-center h-8 px-4 m-2 text-sm text-white bg-black font-bold rounded-lg">
              Download CV
            </Link>
          </div>
        </div>
        <h2 className="text-3xl text-black font-bold">
          Senior Full-Stack Software Engineer
        </h2>
      </div>
      <div className="container mx-auto p-3 mb-5">
        <div className="lg:w-2/3">
          <p className="text-lg mb-3">
            I am a
            {" "}
            <span className="bg-gray-200 px-1 text-black">Senior Software Engineer</span>
            {" "}
            with over
            {" "}
            <span className="bg-gray-200 px-1 text-black">15 years</span>
            {" "}
            of experience.
          </p>

          <p className="text-lg mb-3">
            I create user experiences that are
            <span className="bg-gray-200 px-1 text-black">intuitive</span>,
            <span className="bg-gray-200 px-1 text-black">capable</span>,
            <span className="bg-gray-200 px-1 text-black">reliable</span>
            and
            <span className="bg-gray-200 px-1 text-black">fast</span>.
          </p>

          <p className="text-lg mb-3">
            For web I like to work with
            {" "}
            <span className="bg-gray-200 px-1 text-black">Next.js</span>,
            and
            <span className="bg-gray-200 px-1 text-black">React</span>.
            I always use system tests to cover new features that I write,
            and for more complex code I write unit tests.
          </p>

          <p className="text-lg mb-3">
            I am especially productive with
            {" "}
            <span className="bg-gray-200 px-1 text-black">Ruby</span>,
            <span className="bg-gray-200 px-1 text-black">JavaScript</span> and
            <span className="bg-gray-200 px-1 text-black">TypeScript</span>
            .
          </p>
        </div>
      </div>

      <div className="container mx-auto p-3 mb-5">
        <h3 className="mb-5 text-2xl text-black font-bold">
          Some things I am proud of:
        </h3>
        <div className="lg:w-2/3">
          <ul className="text-lg mb-3">
            <li className="list-disc ml-5 text-lg">
              Built full web apps from the ground up, by myself and in teams.
            </li>
            <li className="list-disc ml-5 text-lg">
              Built the whole product for a startup, through multiple successful funding rounds.
            </li>
            <li className="list-disc ml-5 text-lg">
              Managed deployment infrastructure for large teams.
            </li>
            <li className="list-disc ml-5 text-lg">
              Optimised CI runs for performance, sometimes halving execution time.
            </li>
            <li className="list-disc ml-5 text-lg">
              Managed a team of developers.
            </li>
            <li className="list-disc ml-5 text-lg">
              Built software for the production line.
            </li>
            <li className="list-disc ml-5 text-lg">
              Tutored teams of developers in the art of testing software.
            </li>
            <li className="list-disc ml-5 text-lg">
              Managed larger projects to successful completion.
            </li>
            <li className="list-disc ml-5 text-lg">
              Built software for the UK government.
            </li>
          </ul>
        </div>
      </div>


      <div className="container mx-auto p-3 mb-5">
        <h3 className="mb-5 text-2xl text-black font-bold">
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
        <h3 className="mb-5 text-2xl text-black font-bold">
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
              I am a pretty terrible surfer, but at least I try!
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
        <h3 className="mb-5 text-2xl text-black font-bold">
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
    </>
  )
}

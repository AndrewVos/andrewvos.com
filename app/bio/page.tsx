import { Metadata } from 'next';
import Link from "next/link"
import Image from "next/image"
export const metadata: Metadata = {
  title: 'Bio - andrewvos.com',
};

// Icons from here: https://icones.netlify.app/collection/mdi

// History
// Featurist (QuidCo)   - 1st March 2023 to 30th June 2023
// MoneyHelper          - 9 November 2021 to 31 March 2023
// ChangeLab            - 17 May 2021 to 10 October 2021
// Florence (permanent) - 19 May 2020 to 6 May 2021
// Florence             - 23 March 2020 to 18 May 2020
// Featurist (ILG)      - 5th February 2018 to 17th March 2019
// Honeycomb.tv         - 24 July 2017 to 15th December 2017
// Featurist (GAIN)     - 23rd January 2017 to 2nd June 2017
// Pension Wise         - 20th September 2016 to 20th January 2017
// GDS                  - 4th October 2015 to 25th May 2016
// Featurist (Pharma)   - 2nd September 2015 to 9th September 2015
// Fullsix London       - 29th June 2015 to 19th August 2015
// Featurist (Shopa)    - 28th May 2013 to 3rd February 2015
// Sky                  - 24th September 2012 to 27th May 2013
// BBC News             - 30th August 2011 to 20th August 2012
// ITV                  - 14th June 2010 to 29th August 2011
// dotCommerce          - 24th August 2009 to 13th June 2010
// eForte Limited       - 5th March 2009 to 24th August 2009
// WickedOrange         - 2008 to 2009
// LandscaperPro        - 2005 to 2008

export default function Bio() {
  const tech = {
    lang: {
      golang: { name: "Go" },
      css: { name: "CSS" },
      html: { name: "HTML" },
      typescript: { name: "TypeScript" },
      ruby: { name: "Ruby" },
      java: { name: "Java" },
      javascript: { name: "JavaScript" },
      csharp: { name: "C#" },
      php: { name: "PHP" },
    },
    containerisation: {
      docker: { name: "Docker" },
    },
    paas: {
      aws: { name: "AWS" },
      azure: { name: "Azure" },
      digitalocean: { name: "Digital Ocean" },
      heroku: { name: "Heroku" },
    },
    library: {
      react: { name: "React" },
    },
    framework: {
      nextjs: { name: "Next.js" },
      rails: { name: "Ruby on Rails" },
      aspnet: { name: "ASP.NET" },
    },
    mobile: {
      android: { name: "Android" },
      ios: { name: "iOS" },
    },
    source: {
      git: { name: "Git" },
      tfs: { name: "TFS" },
      svn: { name: "Subversion" },
    },
    provisioning: {
      vagrant: { name: "Vagrant" },
      puppet: { name: "Puppet" },
    },
    testing: {
      capybara: { name: "Capybara" },
      cucumber: { name: "Cucumber" },
      rspec: { name: "RSpec" },
      jest: { name: "Jest" },
      mocha: { name: "Mocha" },
      nunit: { name: "NUnit" },
    },
    load_testing: {
      tsung: { name: "Tsung" },
      siege: { name: "Siege" },
    },
    buzz: {
      agile: { name: "Agile" },
      "load testing": { name: "Load Testing" },
      "continuous delivery": { name: "Continuous Delivery" },
      "continuous integration": { name: "Continuous Integration" },
    },
    web: {
      nginx: { name: "Nginx" },
    },
    database: {
      postgres: { name: "Postgres" },
      mysql: { name: "MySQL" },
      mssql: { name: "MSSQL" },
      elasticsearch: { name: "ElasticSearch" },
    },
    css_framework: {
      tailwind: { name: "Tailwind CSS" },
      bootstrap: { name: "Bootstrap" },
    }
  }

  const experience = [
    {
      name: "Quidco",
      image: "/images/logos/quidco.png",
      time: "1st March 2023 to 30th June 2023",
      description: "Worked with Featurist on the QuidCo site rewrite.",
      things: [
        "Worked on the QuidCo site rewrite.",
        "Rebuilt a vital high-traffic API without downtime using nginx to proxy requests to the old and new API.",
      ],
      tech: [
        tech.paas.aws,
        tech.lang.css,
        tech.containerisation.docker,
        tech.lang.html,
        tech.lang.css,
        tech.source.git,
        tech.mobile.ios,
        tech.lang.javascript,
        tech.database.postgres,
        tech.lang.typescript
      ]
    },
    {
      name: "MoneyHelper",
      image: "/images/logos/moneyhelper.png",
      description: "Lead a team of developers to rewrite money management tools (apps) to make them more intuitive, accessible, and beautiful.",
      things: [
        "Designed and built many money tools for the UK government.",
        "Presented and championed the moving of many projects out of a failing AEM (Adobe Experience Manager) system to Next.js and TypeScript.",
        "Designed the whole development system to allow multiple teams to build tools concurrently.",
        "Managed the deployment infrastructure for the team.",
        "Approved all code reviews from an external agency who were building tools in the same codebase."
      ],
      links: [
        { title: "Stamp Duty Land Tax Calculator", href: "https://tools.moneyhelper.org.uk/en/sdlt-calculator" },
        { title: "Land Transaction Tax Calculator", href: "https://tools.moneyhelper.org.uk/en/ltt-calculator" },
        { title: "Land and Buildings Transaction Tax (LBTT) calculator", href: "https://tools.moneyhelper.org.uk/en/lbtt-calculator" },
        { title: "Compare Accounts", href: "https://tools.moneyhelper.org.uk/en/compare-accounts" },
        { title: "Debt Advice Locator", href: "https://tools.moneyhelper.org.uk/en/dalt-calculator" },
        { title: "Inbest Benefits and grants checker", href: "https://tools.moneyhelper.org.uk/en/inbest" }
      ],
      tech: [
        tech.paas.aws,
        tech.paas.azure,
        tech.buzz.agile,
        tech.buzz['continuous delivery'],
        tech.buzz['continuous integration'],
        tech.lang.css,
        tech.source.git,
        tech.paas.heroku,
        tech.lang.html,
        tech.lang.javascript,
        tech.buzz['load testing'],
        tech.framework.nextjs,
        tech.web.nginx,
        tech.database.postgres,
        tech.framework.rails,
        tech.library.react,
        tech.lang.ruby,
        tech.css_framework.tailwind,
        tech.lang.typescript
      ]
    },
    {
      name: "ChangeLab",
      image: "/images/logos/changelab.png",
      time: "17 May 2021 to 10 October 2021",
      description: "Worked for an agency that builds video conferencing software for multiple clients.",
      things: ["Added new features to video conferencing software."],
      tech: [
        tech.buzz.agile,
        tech.buzz['continuous delivery'],
        tech.buzz['continuous integration'],
        tech.buzz['load testing'],
        tech.lang.css,
        tech.lang.html,
        tech.lang.javascript,
        tech.lang.ruby,
        tech.source.git,
        tech.framework.rails,
        tech.paas.heroku,
        tech.database.postgres,
        tech.library.react,
      ]
    },
    {
      name: "Florence",
      image: "/images/logos/florence.png",
      time: "23 March 2020 to 18 May 2020",
      description: "Started out on a contract to design nationalcareforce.co.uk, then designed and built other apps.",
      things: [
        "Build the National Care Force site during COVID-19 to help volunteers find places to volunteer.",
        "Built staffsmarter.co.uk, a care provider resource manager app that allowed clients to manage their staff shifts.",
        "Built rota.florence.co.uk, an easier to use version of staffsmarter.co.uk. This app included a drag and drop interface that allowed clients to easily manage staff allocation to shifts with a fully functional calendar.",
      ],
      tech: [
        tech.lang.css,
        tech.lang.html,
        tech.lang.typescript,
        tech.lang.javascript,
        tech.lang.ruby,
        tech.paas.heroku,
        tech.library.react,
        tech.framework.rails,
        tech.framework.nextjs,
        tech.source.git,
        tech.testing.rspec,
        tech.testing.capybara,
        tech.testing.jest,
        tech.buzz.agile,
        tech.buzz['continuous delivery'],
        tech.buzz['continuous integration'],
        tech.database.postgres,
        tech.css_framework.tailwind,
        tech.css_framework.bootstrap,
      ]

    },
    {
      name: "Indigo Lighthouse",
      image: "/images/logos/indigo-lighthouse.png",
      time: "5th February 2018 to 17th March 2019",
      description: "Built a subscription managment system for Sam's Club",
      things: ["Built a system that allowed customers to buy recurring subscriptions for contact lenses in the US"],
      tech: [
        tech.lang.css,
        tech.lang.html,
        tech.lang.javascript,
        tech.paas.heroku,
        tech.paas.aws,
        tech.source.git,
        tech.testing.mocha,
        tech.buzz.agile,
        tech.buzz['continuous delivery'],
        tech.buzz['continuous integration'],
        tech.database.postgres,
      ]

    },
    {
      name: "Honeycomb",
      image: "/images/logos/honeycomb-tv.png",
      time: "24 July 2017 to 15th December 2017",
      description: "Started off as a Developer then became Tech Lead on the Product Growth team",
      things: [
        "Managed a team of six engineers",
        "Worked with the team to make the product infrastructure more stable",
        "Fixed performance issues in production",
        "Managed and worked on multiple regional product expansion projects",
      ],
      tech: [
        tech.lang.css,
        tech.lang.html,
        tech.lang.ruby,
        tech.lang.javascript,
        tech.paas.aws,
        tech.framework.rails,
        tech.source.git,
        tech.testing.capybara,
        tech.testing.cucumber,
        tech.testing.rspec,
        tech.buzz.agile,
        tech.buzz['continuous delivery'],
        tech.buzz['continuous integration'],
        tech.database.postgres,
      ]
    },
    {
      name: "GAIN Capital",
      image: "/images/logos/gain-capital.png",
      time: "23rd January 2017 to 2nd June 2017",
      description: "Working with a Featurist team we designed and built an app that would allow people to exchange many different currencies.",
      things: [
        "Built the foreignexchange.com money transfer service",
      ],
      tech: [
        tech.lang.css,
        tech.lang.html,
        tech.lang.ruby,
        tech.lang.javascript,
        tech.paas.heroku,
        tech.framework.rails,
        tech.source.git,
        tech.testing.capybara,
        tech.testing.rspec,
        tech.buzz.agile,
        tech.buzz['continuous delivery'],
        tech.buzz['continuous integration'],
        tech.database.postgres,
        tech.css_framework.bootstrap,
      ]
    },
    {
      name: "PensionWise",
      image: "/images/logos/pension-wise.png",
      time: "20th September 2016 to 20th January 2017",
      things: [
        "Created a telephone appointment booking system for The Pensions Advisory Service.",
      ],
      links: [
        {
          title: "Telephone Appointment Planner Source",
          href: "https://github.com/guidance-guarantee-programme/telephone_appointment_planner"
        }
      ],
      tech: [
        tech.lang.css,
        tech.lang.html,
        tech.lang.ruby,
        tech.lang.javascript,
        tech.css_framework.bootstrap,
      ]
    },
    {
      name: "GDS",
      image: "/images/logos/gds.png",
      time: "4th October 2015 to 25th May 2016",
      description: "At GDS we were tasked with building the Service Manual site and a CMS for managing all the service manual content.",
      things: [
        "Built the Service Manual site with a team of content editors",
        "Built a CMS for managing all the content",
      ],
      links: [
        {
          title: "GDS Service Manual",
          href: "https://www.gov.uk/service-manual"
        },
        {
          title: "Source for Service Manual",
          href: "https://github.com/alphagov/service-manual-publisher"
        }
      ],
      tech: [
        tech.lang.css,
        tech.lang.html,
        tech.lang.ruby,
        tech.lang.javascript,
        tech.paas.aws,
        tech.paas.heroku,
        tech.framework.rails,
        tech.source.git,
        tech.testing.capybara,
        tech.testing.rspec,
        tech.buzz.agile,
        tech.buzz['continuous delivery'],
        tech.buzz['continuous integration'],
        tech.database.postgres,
        tech.database.elasticsearch,
      ]
    },
    {
      name: "Featurist",
      image: "/images/logos/featurist.png",
      time: "2nd September 2015 to 9th September 2015",
      description: "Short contract rewriting a site for a large pharmaceutical company.",
      tech: [
        tech.lang.css,
        tech.lang.html,
        tech.lang.ruby,
        tech.lang.javascript,
        tech.paas.heroku,
        tech.framework.rails,
        tech.source.git,
        tech.testing.capybara,
        tech.testing.rspec,
        tech.database.postgres,
        tech.css_framework.bootstrap,
      ]
    },
    {
      name: "Fullsix",
      image: "/images/logos/fullsix.png",
      time: "29th June 2015 to 19th August 2015",
      description: "A contract role doing feature work for Tesco on their homemadebyyou.co.uk project.",
      tech: [
        tech.lang.css,
        tech.lang.html,
        tech.lang.ruby,
        tech.lang.javascript,
        tech.paas.heroku,
        tech.framework.rails,
        tech.source.git,
        tech.database.postgres,
      ]
    },
    {
      name: "Shopa",
      image: "/images/logos/shopa.png",
      time: "28th May 2013 to 3rd February 2015",
      description: "My first time working with Featurist, a software development agency built up of friends from ITV and BBC. We were tasked with building all the software for Shopa, an app that would give cashback to users who bought products through our website.",
      things: [
        "Wrote the shopa.com Rails app",
        "Managed all the infrastructure, including extensive use of Docker, AWS, Heroku",
        "Wrote many microservices (mostly in Golang) that would pull data for hundreds of millions of products from popular affiliate networks and populate ElasticSearch / Postgres databases.",
        "Wrote an image server to handle millions of image requests and control the downloading/resizing of them in Go",
      ],
      tech: [
        tech.lang.golang,
        tech.lang.css,
        tech.lang.html,
        tech.lang.ruby,
        tech.lang.javascript,
        tech.containerisation.docker,
        tech.paas.heroku,
        tech.paas.aws,
        tech.paas.digitalocean,
        tech.framework.rails,
        tech.mobile.ios,
        tech.mobile.android,
        tech.source.git,
        tech.testing.capybara,
        tech.testing.cucumber,
        tech.testing.rspec,
        tech.load_testing.tsung,
        tech.buzz.agile,
        tech.buzz['continuous delivery'],
        tech.buzz['continuous integration'],
        tech.web.nginx,
        tech.database.postgres,
        tech.database.elasticsearch,
        tech.css_framework.bootstrap,
      ]
    },
    {
      name: "Sky",
      image: "/images/logos/sky.png",
      time: "24th September 2012 to 27th May 2013",
      things: [
        "Worked across three different teams teaching BDD to developers, using Cucumber and Ruby.",
        "Helped with the interviewing and hiring process.",
        "Wrote software to enable functional testing of Android Applications (https://github.com/AndrewVos/acouchi)."
      ],
      tech: [
        tech.lang.css,
        tech.lang.html,
        tech.lang.ruby,
        tech.lang.java,
        tech.lang.javascript,
        tech.mobile.ios,
        tech.mobile.android,
        tech.source.git,
        tech.testing.capybara,
        tech.testing.cucumber,
        tech.testing.rspec,
        tech.load_testing.tsung,
        tech.buzz.agile,
        tech.buzz['load testing'],
        tech.buzz['continuous delivery'],
        tech.buzz['continuous integration']
      ]
    },
    {
      name: "BBC News",
      image: "/images/logos/bbc-news.png",
      time: "30th August 2011 to 20th August 2012",
      description: "My first contract role in the UK.",
      things: [
        "Worked with the Responsive News team to help teach the use of BDD/TDD.",
        "Interviewed and hired contractors and permanent developers.",
        "Redesigned the BBC News site using responsive design techniques to allow the site to work on a large range of mobile phones.",
        "Set up an automated load testing build configuration using Tsung. This build runs a few times every night and allows us to find out if any code changes during the day have negatively impacted our performance.",
        "Designed a vagrant / puppet configuration to automatically provision sandbox environments for developers to run their code on.",
        "Trained testers in the use of Capybara so that they could automate some of their manual tests.",
        "Ran code dojos to help developers learn Ruby, BDD and TDD.",
        "Helped the team migrate from Subversion to Git.",
        "Wrote scripts to automatically deploy our code to test environments after a successful build.",
      ],
      tech: [
        tech.lang.ruby,
        tech.lang.css,
        tech.lang.html,
        tech.lang.javascript,
        tech.lang.php,
        tech.testing.capybara,
        tech.testing.cucumber,
        tech.testing.rspec,
        tech.load_testing.tsung,
        tech.load_testing.siege,
        tech.buzz.agile,
        tech.buzz['load testing'],
        tech.web.nginx,
      ]
    },
    {
      name: "ITV",
      image: "/images/logos/itv.png",
      time: "14th June 2010 to 29th August 2011",
      description: "My first media company role. I made many long-term friends at ITV, and I have a lot of memories there. I joined up as a Junior .NET developer, but ended up using Ruby, PHP, and many other technologies.",
      things: [
        "Worked on a team writing MRSS integration to allow the BBC to link to ITV videos.",
        "Worked with a team of ThoughtWorks developers to bring continuous delivery to our team and also improve coding standards throughout the team.",
        "Setup of a TeamCity CI server with a small build server farm. We also set up multiple build status monitors to show the state of the build and also the state of our various staging environments.",
        "Automated one-click deployment for all of our staging/production environments.",
        "Automated the build process for itv.com.",
        "Trained developers in the use of Cucumber, Capybara and Ruby",
        "Promoted Acceptance Testing as part of the development process.",
        "Worked with directly with Akamai using their HLS streaming product to enable people with iOS devices to view streaming adaptive video."
      ],
      tech: [
        tech.lang.css,
        tech.lang.html,
        tech.lang.ruby,
        tech.lang.javascript,
        tech.lang.csharp,
        tech.lang.php,
        tech.containerisation.docker,
        tech.paas.aws,
        tech.paas.heroku,
        tech.framework.aspnet,
        tech.source.git,
        tech.source.tfs,
        tech.provisioning.puppet,
        tech.testing.capybara,
        tech.testing.cucumber,
        tech.testing.rspec,
        tech.testing.nunit,
        tech.buzz.agile,
        tech.buzz['continuous delivery'],
        tech.buzz['continuous integration'],
        tech.database.mssql,
      ]
    },
    {
      name: "dotCommerce",
      time: "24th August 2009 to 13th June 2010",
      description: "dotCommerce was an e-commerce platform that allowed clients to have a fully working e-commerce site up quickly.",
      things: ["Brought multiple clients on-board by either converting their sites to use our framework, or completely building their sites from designs."],
      tech: [
        tech.lang.css,
        tech.lang.html,
        tech.lang.javascript,
        tech.lang.csharp,
        tech.source.tfs,
        tech.testing.nunit,
        tech.buzz.agile,
        tech.database.mssql,
      ]
    },
    {
      name: "eForte Limited",
      time: "5th March 2009 to 24th August 2009",
      description: "My first tech experience in London. I worked for a small agency building and designing websites with PHP and html/css.",
      things: ["Worked with multiple clients to help realise what sort of website they needed and then built the site from the ground up."],
      tech: [
        tech.lang.css,
        tech.lang.html,
        tech.lang.javascript,
        tech.lang.php,
        tech.database.mysql,
      ]
    },
    {
      name: "WickedOrange",
      time: "2008 to 2009",
      things: ["Founded and ran a freelance web development agency."],
      tech: [
        tech.lang.css,
        tech.lang.html,
        tech.lang.javascript,
        tech.lang.csharp,
      ]
    },
    {
      name: "LandscaperPro",
      time: "2005 to 2008",
      description: "Founded and ran a profitable startup that built software for the landscaping industry.",
      things: [
        "Designed and fully built LandscaperPro, a top down garden design software that would allow you to completely design your garden with a drag and drop interface. "
      ],
      tech: [tech.lang.csharp],
    },
  ]
  return (
    <>
      <div className="text-gray-900 font-serif container mx-auto p-3 mt-1 md:mt-10 mb-5 space-y-5">
        <div className="flex flex-wrap gap-1">
          <div className="flex-auto text-2xl md:text-4xl print:text-4xl font-bold">
            <div className="space-y-12 flex flex-col">
              <h1 className="flex select-none">
                <div className='text-white print:text-black bg-black p-1 border-2 border-black print:border-0'>
                  Andrew
                </div>
                <div className="text-black p-1 border-2 border-black print:border-0">
                  Vos
                </div>
              </h1>
            </div>
          </div>
          <div className='flex items-center print:hidden'>
            <Link href="/AndrewVos.pdf" download target="_blank" rel="noopener noreferrer" className="px-4 py-1 text-sm text-white bg-black font-bold rounded-lg">
              Download
            </Link>
          </div>
        </div>
        <h2 className="text-3xl text-black font-bold">
          Senior Full-Stack Software Engineer
        </h2>
      </div>

      <div className="container mx-auto p-3 mb-5">
        <div className='flex items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3C7.46 3 3.34 4.78.29 7.67c-.18.18-.29.43-.29.71c0 .28.11.53.29.71l2.48 2.48a1.01 1.01 0 0 0 1.41.01c.79-.74 1.69-1.36 2.66-1.85c.33-.16.56-.5.56-.9v-3.1C8.85 5.25 10.39 5 12 5c1.59 0 3.14.25 4.59.72v3.1c0 .39.23.74.56.9c.98.49 1.85 1.12 2.67 1.85c.18.18.43.28.68.28c.3 0 .55-.11.73-.29l2.48-2.48c.18-.18.29-.43.29-.71c0-.28-.12-.52-.3-.7A16.965 16.965 0 0 0 12 3M9 7v3s-6 5-6 8v4h18v-4c0-3-6-8-6-8V7h-2v2h-2V7zm3 5a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 1.5A2.5 2.5 0 0 0 9.5 16a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"></path></svg>
          <Link href="tel:07980857010" className="text-lg text-gray-700 underline">07980857010</Link>
        </div>
        <div className='flex items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></path></svg>
          <Link href="mailto:andrew@andrewvos.com" className="text-lg text-gray-700 underline">andrew@andrewvos.com</Link>
        </div>

        <div className='flex items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></path></svg>
          <Link href={"https://www.andrewvos.com"} className="text-lg text-gray-700 underline">andrewvos.com</Link>
        </div>

        <div className='flex items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg>
          <Link href={"https://www.github.com/AndrewVos"} className="text-lg text-gray-700 underline">https://www.github.com/AndrewVos</Link>
        </div>
      </div>

      <div className="container mx-auto p-3 mb-5">
        <div className="lg:w-2/3">
          <p className="text-lg mb-3">
            I am a <span className="font-bold">Senior Software Engineer</span> with over <span className="font-bold">15 years</span> of experience.
          </p>

          <p className="text-lg mb-3">
            I create user experiences that are <span className="font-bold">intuitive</span>, <span className="font-bold">capable</span>, <span className="font-bold">reliable</span> and <span className="font-bold">fast</span>.
          </p>

          <p className="text-lg mb-3">
            For web I like to work with&nbsp;
            <span className="font-bold">Next.js</span> or <span className="font-bold">Rails</span>.

            I always use system tests to cover new features that I write, and for more complex code I write unit tests.
          </p>

          <p className="text-lg mb-3">

            I am very good at <span className="font-bold">problem solving</span>, <span className="font-bold">refactoring</span>, <span className="font-bold">delivery optimisation</span>, and
            just <span className="font-bold">getting things done</span>.
          </p>

        </div>
      </div>

      <div className="container mx-auto p-3 mb-5">
        <h3 className="mb-5 text-2xl text-black font-bold">
          Some things I am proud of:
        </h3>
        <div className="lg:w-2/3">
          <ul className="text-lg mb-3 text-gray-700">
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
          <ul className="text-lg mb-3 text-gray-700">
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
          <ul className="text-lg mb-3 text-gray-700">
            <li className="list-disc ml-5 text-lg">
              I make some pretty beautiful furniture out of wood. Also, I make great
              lamps.
            </li>

            <li className="list-disc ml-5 text-lg">
              I spend as much time as possible trail running, running or cycling.
            </li>

            <li className="list-disc ml-5 text-lg">
              I am learning to surf.
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
          Experience:
        </h3>
        <div className="space-y-12">
          {experience.map((experience, index) => (
            <div key={index} className="">
              <div className='mb-5'>
                {experience.image ? (
                  <div>
                    <Image className="print:hidden max-w-[200px] p-3  border" alt={`${experience.name} logo`} src={experience.image} width={500} height={500} />
                    <div className='hidden print:inline-block px-3 py-1 border text-2xl font-bold text-gray-700'>
                      {experience.name}
                    </div>
                  </div>
                ) : (
                  <div className='inline-block px-3 py-1 border text-2xl font-bold text-gray-700'>
                    {experience.name}
                  </div>
                )}
              </div>

              <div className=''>
                <div className='text-xl font-bold text-gray-700 mb-5'>
                  {experience.time}
                </div>

                <div className='space-y-5'>
                  {experience.description && (
                    <div className='text-lg text-gray-700'>
                      {experience.description}
                    </div>
                  )}

                  {experience.things && (
                    <ul className="text-lg mb-3">
                      {experience.things.map((thing, index) => (
                        <li key={index} className="list-disc ml-5 text-lg text-gray-700">
                          {thing}
                        </li>
                      ))}
                    </ul>
                  )}

                  {experience.links && (
                    <div>
                      <div className='text-lg mb-3 text-gray-700 font-bold'>
                        Links
                      </div>
                      <ul className="text-lg mb-3">
                        {experience.links.map((link, index) => (
                          <li key={index} className="list-disc ml-5 text-lg text-gray-700">
                            <Link href={link.href} className="underline" target="_blank">{link.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {experience.tech && (
                    <div>
                      <div className='text-lg mb-3 text-gray-700 font-bold'>
                        Technology
                      </div>
                      <div className=''>
                        {experience.tech.map((tech, index) => (
                          <div key={index} className="inline-block mr-1 mb-1 px-1 border print:shadow-none rounded shadow text-sm text-gray-700" >{tech.name}</div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

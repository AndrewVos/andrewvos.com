import { differenceInYears, parse } from "date-fns";

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

const parseDate = (date: string) => {
  return parse(date, "yyyy-MM-dd", new Date());
};

type Experience = {
  name: string;
  type: "contract" | "permanent" | "contract & permanent" | "freelance",
  hidden: boolean,
  image?: string;
  from: Date;
  to: Date;
  description?: string;
  things?: string[];
  links?: { title: string; href: string }[];
  agency?: { name: string; image: string };
  tech: {
    ["Go"]: boolean;
    ["CSS"]: boolean;
    ["HTML"]: boolean;
    ["TypeScript"]: boolean;
    ["Ruby"]: boolean;
    ["Java"]: boolean;
    ["JavaScript"]: boolean;
    ["C#"]: boolean;
    ["PHP"]: boolean;
    ["Bash"]: boolean;
    ["Docker"]: boolean;
    ["AWS"]: boolean;
    ["Azure"]: boolean;
    ["Digital Ocean"]: boolean;
    ["Heroku"]: boolean;
    ["React"]: boolean;
    ["Next.js"]: boolean;
    ["Ruby on Rails"]: boolean;
    ["ASP.NET"]: boolean;
    ["Android"]: boolean;
    ["iOS"]: boolean;
    ["Agile"]: boolean;
    ["Load Testing"]: boolean;
    ["Continuous Delivery"]: boolean;
    ["Continuous Integration"]: boolean;
    ["Unit Testing"]: boolean;
    ["Acceptance Testing"]: boolean;
    ["Postgres"]: boolean;
    ["MySQL"]: boolean;
    ["MSSQL"]: boolean;
    ["GraphQL"]: boolean;
    ["ElasticSearch"]: boolean;
    ["Tailwind CSS"]: boolean;
    ["Bootstrap"]: boolean;
  };
};

type Contact = {
  phone?: string;
  email?: string;
  github?: string;
  url?: string;
  urlTitle?: string;
};

type CV = {
  firstName: string;
  lastName: string;
  title: string;
  summary: JSX.Element;
  contact: Contact;
  showSkillGroupingYears: boolean,
  skillGrouping: string[][];
  softSkills: string[];
  achievements: string[];
  experience: Experience[];
};

const cv: CV = {
  firstName: "Andrew",
  lastName: "Vos",
  title: "Senior Full-Stack Software Engineer",
  summary: (
    <p>
      Senior Software Engineer focusing on building web apps with Rails, Next.js, React, Ruby, TypeScript and JavaScript.
      I have a strong background in building and maintaining software for startups and large companies.
    </p>
  ),
  contact: {
    phone: "07980857010",
    email: "andrew@andrewvos.com",
    github: "AndrewVos",
    url: "https://andrewvos.com",
    urlTitle: "andrewvos.com",
  },
  showSkillGroupingYears: false,
  skillGrouping: [
    ["Ruby", "TypeScript", "JavaScript", "Go"],
    ["Ruby on Rails", "Next.js"],
    ["React", "Tailwind CSS"],
    ["Postgres", "MySQL"],
    ["CSS", "HTML"],
    ["Unit Testing", "Acceptance Testing"],
  ],
  softSkills: [
    "Problem-solving skills and critical thinking.",
    "Communication skills.",
    "People and interpersonal skills.",
    "Self-awareness.",
    "Self-learning.",
    "Accountability.",
    "Time management.",
    "Emotional intelligence.",
  ],
  achievements: [
    "Founded and built all the software for a profitable startup.",
    "Had my software featured in a print technology magazine.",
    "My work was featured in Wired magazine.",
    "Part of the team that rebuilt the BBC News website from the ground up.",
    "Built software for use in a large factory, which is still in use today.",
    "Successfully managed and lead teams of developers.",
    "Designed, built, and maintained the software for a  very well funded startup, through multiple successful funding rounds.",
    "Tutored teams of developers in the art of testing software.",
  ],
  experience: [
    {
      name: "Quidco",
      type: "contract",
      hidden: false,
      image: "/images/logos/quidco.png",
      from: parseDate("2023-03-01"),
      to: parseDate("2023-06-30"),
      description: "Worked with Featurist on the QuidCo site rewrite.",
      agency: {
        name: "Featurist",
        image: "/images/logos/featurist.png",
      },
      things: [
        "Worked on the QuidCo site rewrite.",
        "Rebuilt a vital high-traffic API without downtime using nginx to proxy requests to the old and new API.",
      ],
      tech: {
        Go: false,
        CSS: true,
        HTML: true,
        TypeScript: false,
        Ruby: false,
        Java: false,
        JavaScript: true,
        "C#": false,
        PHP: false,
        Bash: true,
        Docker: true,
        AWS: true,
        Azure: false,
        "Digital Ocean": false,
        Heroku: false,
        React: true,
        "Next.js": true,
        "Ruby on Rails": false,
        "ASP.NET": false,
        Android: false,
        iOS: false,
        Agile: false,
        "Load Testing": true,
        "Continuous Delivery": false,
        "Continuous Integration": false,
        "Unit Testing": true,
        "Acceptance Testing": true,
        Postgres: false,
        MySQL: false,
        MSSQL: false,
        GraphQL: true,
        ElasticSearch: false,
        "Tailwind CSS": false,
        Bootstrap: false,
      },
    },
    {
      name: "MoneyHelper",
      type: "contract",
      hidden: false,
      image: "/images/logos/moneyhelper.png",
      from: parseDate("2021-11-09"),
      to: parseDate("2023-03-31"),
      description:
        "Lead a team of developers to rewrite money management tools (apps) to make them more intuitive, accessible, and beautiful.",
      things: [
        "Designed and built many money tools for the UK government.",
        "Presented and championed the moving of many projects out of a failing AEM (Adobe Experience Manager) system to Next.js and TypeScript.",
        "Designed the whole development system to allow multiple teams to build tools concurrently.",
        "Managed the deployment infrastructure for the team.",
        "Approved all code reviews from an external agency who were building tools in the same codebase.",
      ],
      links: [
        {
          title: "Stamp Duty Land Tax Calculator",
          href: "https://tools.moneyhelper.org.uk/en/sdlt-calculator",
        },
        {
          title: "Land Transaction Tax Calculator",
          href: "https://tools.moneyhelper.org.uk/en/ltt-calculator",
        },
        {
          title: "Land and Buildings Transaction Tax (LBTT) calculator",
          href: "https://tools.moneyhelper.org.uk/en/lbtt-calculator",
        },
        {
          title: "Compare Accounts",
          href: "https://tools.moneyhelper.org.uk/en/compare-accounts",
        },
        {
          title: "Debt Advice Locator",
          href: "https://tools.moneyhelper.org.uk/en/dalt-calculator",
        },
        {
          title: "Inbest Benefits and grants checker",
          href: "https://tools.moneyhelper.org.uk/en/inbest",
        },
      ],
      tech: {
        Go: false,
        CSS: true,
        HTML: true,
        TypeScript: true,
        Ruby: true,
        Java: false,
        JavaScript: true,
        "C#": false,
        PHP: false,
        Bash: true,
        Docker: false,
        AWS: false,
        Azure: true,
        "Digital Ocean": false,
        Heroku: true,
        React: true,
        "Next.js": true,
        "Ruby on Rails": true,
        "ASP.NET": false,
        Android: false,
        iOS: false,
        Agile: true,
        "Load Testing": true,
        "Continuous Delivery": true,
        "Continuous Integration": true,
        "Unit Testing": true,
        "Acceptance Testing": true,
        Postgres: true,
        MySQL: false,
        MSSQL: false,
        GraphQL: false,
        ElasticSearch: false,
        "Tailwind CSS": true,
        Bootstrap: true,
      },
    },
    {
      name: "ChangeLab",
      type: "contract",
      hidden: false,
      image: "/images/logos/changelab.png",
      from: parseDate("2021-05-17"),
      to: parseDate("2021-10-10"),
      description:
        "Worked for an agency that builds video conferencing software for multiple clients.",
      things: ["Added new features to video conferencing software."],
      tech: {
        Go: false,
        CSS: true,
        HTML: true,
        TypeScript: false,
        Ruby: true,
        Java: false,
        JavaScript: true,
        "C#": false,
        PHP: false,
        Bash: true,
        Docker: false,
        AWS: false,
        Azure: false,
        "Digital Ocean": false,
        Heroku: true,
        React: true,
        "Next.js": false,
        "Ruby on Rails": true,
        "ASP.NET": false,
        Android: false,
        iOS: false,
        Agile: true,
        "Load Testing": false,
        "Continuous Delivery": false,
        "Continuous Integration": false,
        "Unit Testing": true,
        "Acceptance Testing": true,
        Postgres: true,
        MySQL: false,
        MSSQL: false,
        GraphQL: false,
        ElasticSearch: false,
        "Tailwind CSS": false,
        Bootstrap: false,
      },
    },
    {
      name: "Florence",
      type: "contract & permanent",
      hidden: false,
      image: "/images/logos/florence.png",
      from: parseDate("2020-03-23"),
      to: parseDate("2020-05-18"),
      description:
        "Started out on a contract to design nationalcareforce.co.uk, then designed and built other apps.",
      things: [
        "Build the National Care Force site during COVID-19 to help volunteers find places to volunteer.",
        "Built staffsmarter.co.uk, a care provider resource manager app that allowed clients to manage their staff shifts.",
        "Built Florence Rota, an easier to use version of staffsmarter.co.uk. This app included a drag and drop interface that allowed clients to easily manage staff allocation to shifts with a fully functional calendar.",
      ],
      links: [
        { title: "Florence Rota", href: "https://rota.florence.co.uk" },
      ],
      tech: {
        Go: false,
        CSS: true,
        HTML: true,
        TypeScript: true,
        Ruby: true,
        Java: false,
        JavaScript: true,
        "C#": false,
        PHP: false,
        Bash: true,
        Docker: false,
        AWS: false,
        Azure: false,
        "Digital Ocean": false,
        Heroku: true,
        React: true,
        "Next.js": true,
        "Ruby on Rails": true,
        "ASP.NET": false,
        Android: false,
        iOS: false,
        Agile: true,
        "Load Testing": false,
        "Continuous Delivery": true,
        "Continuous Integration": true,
        "Unit Testing": true,
        "Acceptance Testing": true,
        Postgres: true,
        MySQL: false,
        MSSQL: false,
        GraphQL: false,
        ElasticSearch: false,
        "Tailwind CSS": true,
        Bootstrap: true,
      },
    },
    {
      name: "Indigo Lighthouse",
      type: "contract",
      hidden: false,
      image: "/images/logos/indigo-lighthouse.png",
      from: parseDate("2018-02-05"),
      to: parseDate("2019-03-17"),
      description: "Built a subscription managment system for Sam's Club",
      agency: {
        name: "Featurist",
        image: "/images/logos/featurist.png",
      },
      things: [
        "Built a system that allowed customers to buy recurring subscriptions for contact lenses in the US",
      ],
      tech: {
        Go: false,
        CSS: true,
        HTML: true,
        TypeScript: false,
        Ruby: false,
        Java: false,
        JavaScript: true,
        "C#": false,
        PHP: false,
        Bash: true,
        Docker: false,
        AWS: true,
        Azure: false,
        "Digital Ocean": false,
        Heroku: true,
        React: false,
        "Next.js": false,
        "Ruby on Rails": false,
        "ASP.NET": false,
        Android: false,
        iOS: false,
        Agile: true,
        "Load Testing": false,
        "Continuous Delivery": true,
        "Continuous Integration": true,
        "Unit Testing": true,
        "Acceptance Testing": true,
        Postgres: true,
        MySQL: false,
        MSSQL: false,
        GraphQL: false,
        ElasticSearch: false,
        "Tailwind CSS": false,
        Bootstrap: false,
      },
    },
    {
      name: "Honeycomb",
      type: "contract",
      hidden: false,
      image: "/images/logos/honeycomb-tv.png",
      from: parseDate("2017-07-24"),
      to: parseDate("2017-12-15"),
      description:
        "Started off as a Developer then became Tech Lead on the Product Growth team",
      things: [
        "Managed a team of six engineers",
        "Worked with the team to make the product infrastructure more stable",
        "Fixed performance issues in production",
        "Managed and worked on multiple regional product expansion projects",
      ],
      tech: {
        Go: false,
        CSS: true,
        HTML: true,
        TypeScript: false,
        Ruby: true,
        Java: false,
        JavaScript: true,
        "C#": false,
        PHP: false,
        Bash: true,
        Docker: true,
        AWS: true,
        Azure: false,
        "Digital Ocean": false,
        Heroku: false,
        React: false,
        "Next.js": false,
        "Ruby on Rails": true,
        "ASP.NET": false,
        Android: false,
        iOS: false,
        Agile: true,
        "Load Testing": false,
        "Continuous Delivery": true,
        "Continuous Integration": true,
        "Unit Testing": true,
        "Acceptance Testing": true,
        Postgres: true,
        MySQL: false,
        MSSQL: false,
        GraphQL: false,
        ElasticSearch: false,
        "Tailwind CSS": false,
        Bootstrap: false,
      },
    },
    {
      name: "GAIN Capital",
      type: "contract",
      hidden: false,
      image: "/images/logos/gain-capital.png",
      from: parseDate("2017-01-23"),
      to: parseDate("2017-06-02"),
      description:
        "Working with a Featurist team we designed and built an app that would allow users to exchange many different currencies.",
      agency: {
        name: "Featurist",
        image: "/images/logos/featurist.png",
      },
      things: ["Built the foreignexchange.com money transfer service"],
      tech: {
        Go: false,
        CSS: true,
        HTML: true,
        TypeScript: false,
        Ruby: true,
        Java: false,
        JavaScript: true,
        "C#": false,
        PHP: false,
        Bash: true,
        Docker: false,
        AWS: false,
        Azure: false,
        "Digital Ocean": false,
        Heroku: true,
        React: false,
        "Next.js": false,
        "Ruby on Rails": true,
        "ASP.NET": false,
        Android: false,
        iOS: false,
        Agile: true,
        "Load Testing": false,
        "Continuous Delivery": true,
        "Continuous Integration": true,
        "Unit Testing": true,
        "Acceptance Testing": true,
        Postgres: true,
        MySQL: false,
        MSSQL: false,
        GraphQL: false,
        ElasticSearch: false,
        "Tailwind CSS": false,
        Bootstrap: true,
      },
    },
    {
      name: "PensionWise",
      type: "contract",
      hidden: false,
      image: "/images/logos/pension-wise.png",
      from: parseDate("2016-09-20"),
      to: parseDate("2017-01-20"),
      things: [
        "Created a telephone appointment booking system for The Pensions Advisory Service.",
      ],
      links: [
        {
          title: "Telephone Appointment Planner Source",
          href: "https://github.com/guidance-guarantee-programme/telephone_appointment_planner",
        },
      ],
      tech: {
        Go: false,
        CSS: true,
        HTML: true,
        TypeScript: false,
        Ruby: true,
        Java: false,
        JavaScript: true,
        "C#": false,
        PHP: false,
        Bash: true,
        Docker: false,
        AWS: false,
        Azure: false,
        "Digital Ocean": false,
        Heroku: true,
        React: false,
        "Next.js": false,
        "Ruby on Rails": true,
        "ASP.NET": false,
        Android: false,
        iOS: false,
        Agile: false,
        "Load Testing": false,
        "Continuous Delivery": true,
        "Continuous Integration": true,
        "Unit Testing": true,
        "Acceptance Testing": true,
        Postgres: true,
        MySQL: false,
        MSSQL: false,
        GraphQL: false,
        ElasticSearch: false,
        "Tailwind CSS": false,
        Bootstrap: false,
      },
    },
    {
      name: "GDS",
      type: "contract",
      hidden: false,
      image: "/images/logos/gds.png",
      from: parseDate("2015-10-04"),
      to: parseDate("2016-05-25"),
      description:
        "At GDS we were tasked with building the GOV.UK Service Manual site and a CMS for managing all the service manual content.",
      things: [
        "Built the GOV.UK Service Manual site with a team of content editors",
        "Built a CMS for managing all the content",
      ],
      links: [
        {
          title: "GOV.UK Service Manual",
          href: "https://www.gov.uk/service-manual",
        },
        {
          title: "Source for GOV.UK Service Manual",
          href: "https://github.com/alphagov/service-manual-publisher",
        },
      ],
      tech: {
        Go: false,
        CSS: true,
        HTML: true,
        TypeScript: false,
        Ruby: true,
        Java: false,
        JavaScript: true,
        "C#": false,
        PHP: false,
        Bash: true,
        Docker: false,
        AWS: true,
        Azure: false,
        "Digital Ocean": false,
        Heroku: true,
        React: false,
        "Next.js": false,
        "Ruby on Rails": true,
        "ASP.NET": false,
        Android: false,
        iOS: false,
        Agile: true,
        "Load Testing": false,
        "Continuous Delivery": true,
        "Continuous Integration": true,
        "Unit Testing": true,
        "Acceptance Testing": true,
        Postgres: true,
        MySQL: false,
        MSSQL: false,
        GraphQL: false,
        ElasticSearch: false,
        "Tailwind CSS": false,
        Bootstrap: false,
      },
    },
    {
      name: "Featurist",
      type: "contract",
      hidden: false,
      image: "/images/logos/featurist.png",
      from: parseDate("2015-09-02"),
      to: parseDate("2015-09-09"),
      description:
        "Short contract rewriting a site for a large pharmaceutical company.",
      tech: {
        Go: false,
        CSS: true,
        HTML: true,
        TypeScript: false,
        Ruby: true,
        Java: false,
        JavaScript: true,
        "C#": false,
        PHP: false,
        Bash: true,
        Docker: false,
        AWS: false,
        Azure: false,
        "Digital Ocean": false,
        Heroku: true,
        React: false,
        "Next.js": false,
        "Ruby on Rails": true,
        "ASP.NET": false,
        Android: false,
        iOS: false,
        Agile: false,
        "Load Testing": false,
        "Continuous Delivery": true,
        "Continuous Integration": true,
        "Unit Testing": true,
        "Acceptance Testing": true,
        Postgres: true,
        MySQL: false,
        MSSQL: false,
        GraphQL: false,
        ElasticSearch: false,
        "Tailwind CSS": false,
        Bootstrap: true,
      },
    },
    {
      name: "Fullsix",
      type: "contract",
      hidden: false,
      image: "/images/logos/fullsix.png",
      from: parseDate("2015-06-29"),
      to: parseDate("2015-08-19"),
      description:
        "A contract role doing feature work for Tesco on their homemadebyyou.co.uk project.",
      tech: {
        Go: false,
        CSS: true,
        HTML: true,
        TypeScript: false,
        Ruby: true,
        Java: false,
        JavaScript: true,
        "C#": false,
        PHP: false,
        Bash: true,
        Docker: false,
        AWS: false,
        Azure: false,
        "Digital Ocean": false,
        Heroku: true,
        React: false,
        "Next.js": false,
        "Ruby on Rails": true,
        "ASP.NET": false,
        Android: false,
        iOS: false,
        Agile: true,
        "Load Testing": false,
        "Continuous Delivery": false,
        "Continuous Integration": false,
        "Unit Testing": true,
        "Acceptance Testing": true,
        Postgres: true,
        MySQL: false,
        MSSQL: false,
        GraphQL: false,
        ElasticSearch: false,
        "Tailwind CSS": false,
        Bootstrap: true,
      },
    },
    {
      name: "Shopa",
      type: "contract",
      hidden: false,
      image: "/images/logos/shopa.png",
      from: parseDate("2013-05-28"),
      to: parseDate("2015-02-03"),
      description:
        "My first time working with Featurist, a software development agency built up of friends from ITV and BBC. We were tasked with building all the software for Shopa, an app that would give cashback to users who bought products through our website.",
      agency: {
        name: "Featurist",
        image: "/images/logos/featurist.png",
      },
      things: [
        "Wrote the shopa.com Rails app",
        "Managed all the infrastructure, including extensive use of Docker, AWS, Heroku",
        "Wrote many microservices (mostly in Golang) that would pull data for hundreds of millions of products from popular affiliate networks and populate ElasticSearch / Postgres databases.",
        "Wrote an image server in Golang to handle millions of image requests and downloading and resizing them on the fly.",
      ],
      tech: {
        Go: true,
        CSS: true,
        HTML: true,
        TypeScript: false,
        Ruby: true,
        Java: false,
        JavaScript: true,
        "C#": false,
        PHP: false,
        Bash: true,
        Docker: true,
        AWS: true,
        Azure: false,
        "Digital Ocean": true,
        Heroku: true,
        React: false,
        "Next.js": false,
        "Ruby on Rails": true,
        "ASP.NET": false,
        Android: false,
        iOS: false,
        Agile: true,
        "Load Testing": true,
        "Continuous Delivery": true,
        "Continuous Integration": true,
        "Unit Testing": true,
        "Acceptance Testing": true,
        Postgres: true,
        MySQL: false,
        MSSQL: false,
        GraphQL: false,
        ElasticSearch: true,
        "Tailwind CSS": false,
        Bootstrap: true,
      },
    },
    {
      name: "Sky",
      type: "contract",
      hidden: false,
      image: "/images/logos/sky.png",
      from: parseDate("2012-09-24"),
      to: parseDate("2013-05-27"),
      things: [
        "Worked across three different teams teaching BDD to developers, using Cucumber and Ruby.",
        "Helped with the interviewing and hiring process.",
        "Wrote software to enable functional testing of Android Applications.",
      ],
      tech: {
        Go: false,
        CSS: true,
        HTML: true,
        TypeScript: false,
        Ruby: true,
        Java: true,
        JavaScript: true,
        "C#": false,
        PHP: false,
        Bash: true,
        Docker: false,
        AWS: false,
        Azure: false,
        "Digital Ocean": false,
        Heroku: false,
        React: false,
        "Next.js": false,
        "Ruby on Rails": false,
        "ASP.NET": false,
        Android: true,
        iOS: true,
        Agile: true,
        "Load Testing": true,
        "Continuous Delivery": false,
        "Continuous Integration": false,
        "Unit Testing": true,
        "Acceptance Testing": true,
        Postgres: false,
        MySQL: false,
        MSSQL: false,
        GraphQL: false,
        ElasticSearch: false,
        "Tailwind CSS": false,
        Bootstrap: false,
      },
    },
    {
      name: "BBC News",
      type: "contract",
      hidden: false,
      image: "/images/logos/bbc-news.png",
      from: parseDate("2011-08-30"),
      to: parseDate("2012-08-20"),
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
      tech: {
        Go: false,
        CSS: true,
        HTML: true,
        TypeScript: false,
        Ruby: true,
        Java: true,
        JavaScript: true,
        "C#": false,
        PHP: true,
        Bash: true,
        Docker: true,
        AWS: false,
        Azure: false,
        "Digital Ocean": false,
        Heroku: true,
        React: false,
        "Next.js": false,
        "Ruby on Rails": true,
        "ASP.NET": false,
        Android: true,
        iOS: true,
        Agile: true,
        "Load Testing": true,
        "Continuous Delivery": true,
        "Continuous Integration": true,
        "Unit Testing": true,
        "Acceptance Testing": true,
        Postgres: false,
        MySQL: true,
        MSSQL: false,
        GraphQL: false,
        ElasticSearch: false,
        "Tailwind CSS": false,
        Bootstrap: false,
      },
    },
    {
      name: "ITV",
      type: "permanent",
      hidden: false,
      image: "/images/logos/itv.png",
      from: parseDate("2010-06-14"),
      to: parseDate("2011-08-29"),
      description:
        "My first media company role. I made many long-term friends at ITV, and I have a lot of memories there. I joined up as a Junior .NET developer, but ended up using Ruby, PHP, and many other technologies.",
      things: [
        "Worked on a team writing MRSS integration to allow the BBC to link to ITV videos.",
        "Worked with a team of ThoughtWorks developers to bring continuous delivery to our team and also improve coding standards throughout the team.",
        "Setup of a TeamCity CI server with a small build server farm. We also set up multiple build status monitors to show the state of the build and also the state of our various staging environments.",
        "Automated one-click deployment for all of our staging/production environments.",
        "Automated the build process for itv.com.",
        "Trained developers in the use of Cucumber, Capybara and Ruby",
        "Promoted Acceptance Testing as part of the development process.",
        "Worked with directly with Akamai using their HLS streaming product to enable people with iOS devices to view streaming adaptive video.",
      ],
      tech: {
        Go: false,
        CSS: true,
        HTML: true,
        TypeScript: false,
        Ruby: true,
        Java: false,
        JavaScript: true,
        "C#": true,
        PHP: true,
        Bash: true,
        Docker: false,
        AWS: true,
        Azure: false,
        "Digital Ocean": false,
        Heroku: true,
        React: false,
        "Next.js": false,
        "Ruby on Rails": true,
        "ASP.NET": true,
        Android: false,
        iOS: false,
        Agile: true,
        "Load Testing": false,
        "Continuous Delivery": true,
        "Continuous Integration": true,
        "Unit Testing": true,
        "Acceptance Testing": true,
        Postgres: true,
        MySQL: false,
        MSSQL: true,
        GraphQL: false,
        ElasticSearch: false,
        "Tailwind CSS": false,
        Bootstrap: false,
      },
    },
    {
      name: "dotCommerce",
      type: "permanent",
      hidden: true,
      from: parseDate("2009-08-24"),
      to: parseDate("2010-06-13"),
      description:
        "dotCommerce was an e-commerce platform that allowed clients to have a fully working e-commerce site up quickly.",
      things: [
        "Brought multiple clients on-board by either converting their sites to use our framework, or completely building their sites from designs.",
      ],
      tech: {
        Go: false,
        CSS: true,
        HTML: true,
        TypeScript: false,
        Ruby: false,
        Java: false,
        JavaScript: true,
        "C#": true,
        PHP: false,
        Bash: false,
        Docker: false,
        AWS: false,
        Azure: false,
        "Digital Ocean": false,
        Heroku: false,
        React: false,
        "Next.js": false,
        "Ruby on Rails": false,
        "ASP.NET": true,
        Android: false,
        iOS: false,
        Agile: true,
        "Load Testing": false,
        "Continuous Delivery": false,
        "Continuous Integration": false,
        "Unit Testing": false,
        "Acceptance Testing": false,
        Postgres: false,
        MySQL: false,
        MSSQL: true,
        GraphQL: false,
        ElasticSearch: false,
        "Tailwind CSS": false,
        Bootstrap: false,
      },
    },
    {
      name: "eForte Limited",
      type: "permanent",
      hidden: true,
      from: parseDate("2009-03-05"),
      to: parseDate("2009-08-24"),
      description:
        "My first tech experience in London. I worked for a small agency building and designing websites with PHP and html/css.",
      things: [
        "Worked with multiple clients to help realise what sort of website they needed and then built the site from the ground up.",
      ],
      tech: {
        Go: false,
        CSS: true,
        HTML: true,
        TypeScript: false,
        Ruby: false,
        Java: false,
        JavaScript: true,
        "C#": false,
        PHP: true,
        Bash: false,
        Docker: false,
        AWS: false,
        Azure: false,
        "Digital Ocean": false,
        Heroku: false,
        React: false,
        "Next.js": false,
        "Ruby on Rails": false,
        "ASP.NET": false,
        Android: false,
        iOS: false,
        Agile: false,
        "Load Testing": false,
        "Continuous Delivery": false,
        "Continuous Integration": false,
        "Unit Testing": true,
        "Acceptance Testing": false,
        Postgres: false,
        MySQL: true,
        MSSQL: false,
        GraphQL: false,
        ElasticSearch: false,
        "Tailwind CSS": false,
        Bootstrap: false,
      },
    },
    {
      name: "WickedOrange",
      type: "freelance",
      hidden: true,
      from: parseDate("2008-01-01"),
      to: parseDate("2009-01-01"),
      things: ["Founded and ran a freelance web development agency."],
      tech: {
        Go: false,
        CSS: true,
        HTML: true,
        TypeScript: false,
        Ruby: false,
        Java: false,
        JavaScript: true,
        "C#": true,
        PHP: true,
        Bash: false,
        Docker: false,
        AWS: false,
        Azure: false,
        "Digital Ocean": false,
        Heroku: false,
        React: false,
        "Next.js": false,
        "Ruby on Rails": false,
        "ASP.NET": false,
        Android: false,
        iOS: false,
        Agile: false,
        "Load Testing": false,
        "Continuous Delivery": false,
        "Continuous Integration": false,
        "Unit Testing": false,
        "Acceptance Testing": false,
        Postgres: false,
        MySQL: true,
        MSSQL: false,
        GraphQL: false,
        ElasticSearch: false,
        "Tailwind CSS": false,
        Bootstrap: false,
      },
    },
    {
      name: "LandscaperPro",
      type: "permanent",
      hidden: true,
      from: parseDate("2005-01-01"),
      to: parseDate("2008-01-01"),
      description:
        "Founded and ran a profitable startup that built software for the landscaping industry.",
      things: [
        "Designed and fully built LandscaperPro, a top down garden design software that would allow you to completely design your garden with a drag and drop interface. ",
      ],
      tech: {
        Go: true,
        CSS: true,
        HTML: true,
        TypeScript: true,
        Ruby: true,
        Java: true,
        JavaScript: true,
        "C#": true,
        PHP: true,
        Bash: true,
        Docker: true,
        AWS: true,
        Azure: true,
        "Digital Ocean": true,
        Heroku: true,
        React: true,
        "Next.js": true,
        "Ruby on Rails": true,
        "ASP.NET": true,
        Android: true,
        iOS: true,
        Agile: true,
        "Load Testing": true,
        "Continuous Delivery": true,
        "Continuous Integration": true,
        "Unit Testing": false,
        "Acceptance Testing": false,
        Postgres: true,
        MySQL: true,
        MSSQL: true,
        GraphQL: false,
        ElasticSearch: true,
        "Tailwind CSS": true,
        Bootstrap: true,
      },
    },
  ]
};

export default cv;

import { Metadata } from 'next';
import Link from "next/link"
import Image from "next/image"
import { differenceInDays, format, formatDistance } from 'date-fns';
import cv from "./cv"

export const metadata: Metadata = {
  title: 'Bio - andrewvos.com',
};

// Icons from here: https://icones.netlify.app/collection/mdi

export default function Bio() {
  const formatDate = (date: Date) => {
    return format(date, "MMMM yyyy")
  }

  const calculateExperience = (tech: string) => {
    let days = 0

    cv.experience.forEach(experience => {
      Object.entries(experience.tech).forEach(([key, usedTech]: [string, boolean]) => {
        if (key == tech && usedTech) {
          days = days + differenceInDays(experience.to, experience.from)
        }
      })
    })

    return Math.round(days / 365)
  }

  const Prose = ({ children }: { children: React.ReactNode }) => (
    <div className='prose lg:prose-xl prose-li:mb-0 prose-li:mt-0 max-w-lg lg:max-w-2xl'>
      {children}
    </div>
  )

  return (
    <>
      <div className='container mx-auto p-3 space-y-8 mb-10 mt-1 md:mt-10'>
        <div className="text-gray-900 font-serif container mx-auto space-y-8">
          <div className="flex flex-wrap gap-3">
            <div className="flex-auto text-2xl md:text-5xl print:text-5xl font-bold">
              <div className="space-y-12 flex flex-col">
                <h1 className="flex select-none">
                  <div className='text-white print:text-black bg-black p-1 border-2 border-black print:border-0'>
                    {cv.firstName}
                  </div>
                  <div className="text-black p-1 border-2 border-black print:border-0">
                    {cv.lastName}
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
          <h2 className="text-4xl text-black font-bold">
            {cv.title}
          </h2>
        </div>

        {cv.contact && (
          <div>
            {cv.contact.phone && (
              <div className='flex items-center gap-2'>
                <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3C7.46 3 3.34 4.78.29 7.67c-.18.18-.29.43-.29.71c0 .28.11.53.29.71l2.48 2.48a1.01 1.01 0 0 0 1.41.01c.79-.74 1.69-1.36 2.66-1.85c.33-.16.56-.5.56-.9v-3.1C8.85 5.25 10.39 5 12 5c1.59 0 3.14.25 4.59.72v3.1c0 .39.23.74.56.9c.98.49 1.85 1.12 2.67 1.85c.18.18.43.28.68.28c.3 0 .55-.11.73-.29l2.48-2.48c.18-.18.29-.43.29-.71c0-.28-.12-.52-.3-.7A16.965 16.965 0 0 0 12 3M9 7v3s-6 5-6 8v4h18v-4c0-3-6-8-6-8V7h-2v2h-2V7zm3 5a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 1.5A2.5 2.5 0 0 0 9.5 16a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"></path></svg>
                <Link href={`tel:${cv.contact.phone}`} className="text-sm md:text-lg text-gray-700 hover:underline">{cv.contact.phone}</Link>
              </div>
            )}
            {cv.contact.email && (
              <div className='flex items-center gap-2'>
                <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></path></svg>
                <Link href={`mailto:${cv.contact.email}`} className="text-sm md:text-lg text-gray-700 hover:underline">{cv.contact.email} </Link>
              </div>
            )}
            {cv.contact.url && cv.contact.urlTitle && (
              <div className='flex items-center gap-2'>
                <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></path></svg>
                <Link href={cv.contact.url} className="text-sm md:text-lg text-gray-700 hover:underline">{cv.contact.urlTitle}</Link>
              </div>
            )}
            {cv.contact.github && (
              <div className='flex items-center gap-2'>
                <svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg>
                <Link href={`https://www.github.com/${cv.contact.github}`} className="text-sm md:text-lg text-gray-700 hover:underline">@{cv.contact.github}</Link>
              </div>
            )}
          </div>
        )}

        <Prose>
          <h3>
            Summary
          </h3>
          {cv.summary}
        </Prose>

        {cv.skillGrouping && (
          <Prose>
            <h3>
              Skills
            </h3>
            <ul>
              {cv.skillGrouping.map((techs, index) => (
                <li key={index}>
                  {techs.map((tech, index) => (
                    <span key={index}>
                      <strong>{tech}</strong>
                      {cv.showSkillGroupingYears && (<span> ({calculateExperience(tech)} years)</span>)}
                      {index !== techs.length - 1 && ", "}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </Prose>
        )}

        {cv.softSkills && (
          <Prose>
            <h3>
              Soft Skills
            </h3>
            <ul>
              {cv.softSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </Prose>
        )}

        {cv.achievements && (
          <Prose>
            <h3>
              Achievements
            </h3>
            <ul>
              {cv.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </Prose>
        )}

        <Prose>
          <h3>
            Experience
          </h3>
          <div className="space-y-12">
            {cv.experience.filter(e => !e.hidden).map((experience, index) => (
              <div key={index} className="">
                <div className='mb-5'>
                  {experience.image ? (
                    <div>
                      <Image className="max-w-full sm:max-w-[200px]" priority alt={`${experience.name} logo`} src={experience.image} width={500} height={500} />
                    </div>
                  ) : (
                    <h4 className='inline-block px-3 py-1 border'>
                      {experience.name}
                    </h4>
                  )}
                </div>

                <div className=''>
                  <div className='mb-5 space-x-2'>
                    <span className='text-lg border-blue-400 bg-blue-100 text-blue-700 font-bold px-2'>
                      {experience.type}
                    </span>
                    <span className='font-bold text-gray-700 text-lg'>
                      {formatDate(experience.from)} to {experience.to ? formatDate(experience.to) : 'Present'}
                      {cv.showExperienceLength && (
                        <span>&nbsp;{formatDistance(experience.from, experience.to)}</span>
                      )}
                    </span>

                  </div>

                  <div>
                    {experience.description && (
                      <p>
                        {experience.description}
                      </p>
                    )}

                    {experience.things && (
                      <ul>
                        {experience.things.map((thing, index) => (
                          <li key={index}>
                            {thing}
                          </li>
                        ))}
                      </ul>
                    )}

                    {experience.links && (
                      <ul>
                        {experience.links.map((link, index) => (
                          <li key={index}>
                            <Link href={link.href} className="underline" target="_blank">{link.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}

                    {experience.tech && (
                      <div>
                        {
                          Object.entries(experience.tech).map(([key, value]) => (
                            value && <div key={key} className="inline-block mr-1 mb-1 px-1 border print:shadow-none rounded shadow text-sm text-gray-700" >{key}</div>
                          ))
                        }
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Prose>
      </div>
    </>
  )
}

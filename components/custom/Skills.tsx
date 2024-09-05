import Heading1 from '../chunks/Heading1'
import IconCloud from '../magicui/icon-cloud'
const slugs = [
  'typescript',
  'javascript',
  'react',
  'android',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'nginx',
  'vercel',
  'testinglibrary',
  'jest',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'figma',
  'axios',
  'angulardotjs',
  'angular',
  'mui',
  'pug',
  'tailwindcss',
  'pnpm',
  'json',
  'redux',
]

export function Skills() {
  return (
    <section>
      <Heading1 className="text-center !text-4xl" showValue="Skills" />
      <p className="text-center">
        These are the essential tools, libraries, and frameworks that constitute my current tech stack, enabling me to
        develop robust and innovative applications
      </p>
      <div className="relative flex h-full w-full items-center justify-center  px-20 pb-20 pt-8 ">
        <IconCloud iconSlugs={slugs} />
      </div>
    </section>
  )
}

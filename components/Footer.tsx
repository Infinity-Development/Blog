import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-white/50 dark:text-white/50">
          <div></div>
          <div>{`© 2020 - ${new Date().getFullYear()}`}</div>
          <Link href="https://infinitydev.team/">Infinity Development</Link>
        </div>
        <div className="mb-8 text-sm text-white/50 dark:text-white/50">
          <Link href="https://nextjs.org/">Powered by: Next.js</Link>
        </div>
      </div>
    </footer>
  )
}

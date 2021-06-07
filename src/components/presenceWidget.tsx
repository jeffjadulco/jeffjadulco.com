import Image from 'next/image'
import { ReactNode } from 'react'

interface PresenceWidgetProps {
  icon: ReactNode
  verb: string
  title: string
  subtitle: string
  img_url: string
  url: string
}

export function PresenceWidget({
  icon,
  verb,
  title,
  subtitle,
  img_url,
  url,
  children,
}: PresenceWidgetProps & { children?: ReactNode }) {
  return (
    <div className="px-5 py-4 rounded-md bg-secondary">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="flex items-center">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
            <span className="ml-2 text-sm font-semibold">{verb}</span>
          </div>
          <div className="flex flex-col py-4">
            <span className="text-lg font-bold">{title}</span>
            <span className="text-sm font-normal text-tertiary">
              {subtitle}
            </span>
          </div>
        </div>
        <div className="w-24 h-24 rounded-sm">
          <Image width={640} height={640} src={img_url} />
        </div>
      </div>
    </div>
  )
}

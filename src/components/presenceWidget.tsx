import { ReactNode } from 'react'
import Image from 'next/image'

interface PresenceWidgetProps {
  icon: ReactNode
  verb: string
  title?: string
  subtitle?: string
  img_url?: string
  url?: string
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
    <div className="px-5 py-5 rounded-md bg-back-secondary">
      <div className="flex items-center">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={url}
            className="focus-visible:outline-accent"
          >
            {icon}
          </a>
        ) : (
          <span>{icon}</span>
        )}
        <span className="ml-2 text-sm font-semibold">{verb}</span>
      </div>
      {children ? (
        children
      ) : (
        <div className="grid grid-cols-7 gap-8">
          <div className="flex flex-col col-span-5">
            <div className="flex flex-col py-4">
              {title && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold truncate hover:text-accent focus-visible:outline-accent focus-visible:text-accent"
                >
                  {title}
                </a>
              )}
              {subtitle && (
                <span className="text-sm font-normal text-fore-subtle">
                  {subtitle}
                </span>
              )}
            </div>
          </div>
          {img_url && (
            <div className="self-center w-24 h-24 col-span-2 -mt-4 rounded-sm place-self-end">
              <Image
                width={640}
                height={640}
                src={img_url}
                objectFit="scale-down"
                alt={`Image for ${title}`}
                tabIndex={-1}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

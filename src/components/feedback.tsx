import React from 'react'
import { useForm } from '@formspree/react'
import { ExtLink, Input, TextArea } from './atoms'
import type { Frontmatter } from '@/types/frontmatter'

interface Props {
  post: Frontmatter
}

export function Feedback({ post }: Props) {
  const [state, handleSubmit] = useForm('feedbackForm')

  const submitForm = e => {
    handleSubmit(e)
    e.target.reset()
  }

  return (
    <div className="mt-32 full-width-container bg-back-secondary">
      <div className="container max-w-xl px-8 pt-16 pb-2 mx-auto text-gray-900">
        <h6 className="text-xl font-semibold text-center text-accent">
          A small favor
        </h6>
        <p className="mx-auto mt-2 text-center text-fore-subtle">
          Is this post confusing? Did I make a mistake? Let me know if you have
          any feedback and suggestions!
        </p>
        <form onSubmit={submitForm} className="grid grid-cols-1 gap-3 mt-3">
          <input
            type="hidden"
            value={`New feedback on ${post.title}`}
            id={post.title}
            name="_subject"
            readOnly
          />
          <TextArea
            labelText="Message"
            id="message"
            name="message"
            placeholder="What's your feedback?"
            required
            disabled={state.submitting}
          />
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            <Input
              labelText="(Optional) Email"
              id="email"
              name="email"
              placeholder="hey@email.com"
              type="email"
              disabled={state.submitting}
            />
            <Input
              labelText="(Optional) Twitter Handle"
              id="twitter"
              name="twitter"
              placeholder="@twitter"
              type="twitter"
              disabled={state.submitting}
            />
          </div>
          {!state.succeeded && (
            <button
              disabled={state.submitting}
              type="submit"
              className="py-3 font-semibold rounded-md bg-gradient-to-r from-teal-500 to-blue-500 bg-200 bg-left hover:bg-right transition-all duration-[0.5s] ease-out text-back-secondary focus-visible:outline-accent disabled:opacity-50"
            >
              {state.submitting ? 'Submitting feedback...' : 'Send Feedback 😊'}
            </button>
          )}
          {!state.submitting && state.succeeded && (
            <p className="mt-3 font-semibold text-center text-fore-secondary">
              Thanks for taking the time to give a feedback!
            </p>
          )}
          {!state.submitting && state.errors.length > 0 && (
            <p className="mt-3 font-medium text-center text-pink-500">
              I'm having errors sending your feedback. Alternatively, you can
              reach me out on Twitter:{' '}
              <ExtLink link="https://twitter.com/jeffjadulco">
                @jeffjadulco
              </ExtLink>
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

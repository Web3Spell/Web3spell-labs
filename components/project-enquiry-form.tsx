'use client'

import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowUpRight, CheckCircle2, Loader2, RotateCcw } from 'lucide-react'
import { BookingButton } from '@/components/booking-widget'

type ProjectEnquiryFormProps = {
  compact?: boolean
}

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error'

export function ProjectEnquiryForm({ compact = false }: ProjectEnquiryFormProps) {
  const [state, setState] = useState<SubmissionState>('idle')
  const [message, setMessage] = useState('')
  const [referenceId, setReferenceId] = useState('')
  const [focus, setFocus] = useState('')
  const [lastPayload, setLastPayload] = useState<{
    name: string
    email: string
    organization: string
    help: string
    overview: string
  } | null>(null)

  useEffect(() => {
    const requestedFocus = new URLSearchParams(window.location.search).get('focus')
    if (requestedFocus) setFocus(requestedFocus)
  }, [])

  async function submitPayload(payload: {
    name: string
    email: string
    organization: string
    help: string
    overview: string
  }) {
    setState('submitting')
    setMessage('')

    try {
      const formData = new FormData()
      formData.append('access_key', 'e019320d-75b6-4a8c-a0e4-d24ce140038e')
      formData.append('name', payload.name)
      formData.append('email', payload.email)
      formData.append('organization', payload.organization || 'Independent / Unspecified')
      formData.append('focus_area', payload.help)
      formData.append('message', payload.overview)
      formData.append(
        'subject',
        `New Project Enquiry: ${payload.organization || payload.name} (${payload.help})`
      )
      formData.append('from_name', 'Web3Spell Labs Website')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        setState('error')
        setMessage(
          data.message || 'Something went wrong while sending your enquiry.'
        )
        return
      }

      setState('success')
      setReferenceId(data.data?.reference_id || `W3S-${Date.now().toString(36).toUpperCase()}`)
      setMessage(
        'Project enquiry received. Our team will respond within one business day.'
      )
    } catch {
      setState('error')
      setMessage('Network error while submitting your enquiry.')
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const payload = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      organization: String(data.get('organization') || '').trim(),
      help: String(data.get('help') || focus || '').trim(),
      overview: String(data.get('overview') || '').trim(),
    }

    setLastPayload(payload)
    await submitPayload(payload)
  }

  if (state === 'success') {
    return (
      <div
        className={`project-enquiry-form enquiry-confirmation${compact ? ' is-compact' : ''}`}
        role="status"
        aria-live="polite"
      >
        <div className="enquiry-confirmation-head">
          <CheckCircle2 size={22} className="enquiry-confirmation-icon" aria-hidden="true" />
          <span className="section-kicker">
            ENQUIRY RECEIVED {referenceId ? `· REF ${referenceId}` : ''}
          </span>
        </div>
        <h3>We have your project brief.</h3>
        <p>{message}</p>
        {lastPayload && (
          <div className="enquiry-summary">
            <div>
              <span>CONTACT</span>
              <strong>
                {lastPayload.name} ({lastPayload.email})
              </strong>
            </div>
            <div>
              <span>FOCUS</span>
              <strong>{lastPayload.help}</strong>
            </div>
          </div>
        )}
        <button
          type="button"
          className="enquiry-reset-btn"
          onClick={() => {
            setState('idle')
            setMessage('')
            setReferenceId('')
          }}
        >
          Submit another enquiry <ArrowUpRight size={15} aria-hidden="true" />
        </button>
      </div>
    )
  }

  const focusOptions = [
    'Product & Design',
    'Protocol & Engineering',
    'Ecosystem & DevRel',
  ]

  const activeFocus = focus || focusOptions[0]

  return (
    <form className={`project-enquiry-form${compact ? ' is-compact' : ''}`} onSubmit={handleSubmit}>
      <div className="enquiry-focus-group" role="group" aria-label="Focus area">
        <span className="enquiry-group-label">
          Focus area <i aria-hidden="true">*</i>
        </span>
        <input type="hidden" name="help" value={activeFocus} />
        <div className="enquiry-focus-pills">
          {focusOptions.map((option) => {
            const isSelected = activeFocus === option
            return (
              <button
                key={option}
                type="button"
                className={`enquiry-focus-pill${isSelected ? ' is-active' : ''}`}
                onClick={() => setFocus(option)}
                disabled={state === 'submitting'}
                aria-pressed={isSelected}
              >
                {option}
              </button>
            )
          })}
        </div>
      </div>

      <div className="enquiry-fields-row">
        <label>
          <span>Your name <i aria-hidden="true">*</i></span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            defaultValue={lastPayload?.name ?? ''}
            disabled={state === 'submitting'}
            required
          />
        </label>
        <label>
          <span>Work email <i aria-hidden="true">*</i></span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@protocol.xyz"
            defaultValue={lastPayload?.email ?? ''}
            disabled={state === 'submitting'}
            required
          />
        </label>
      </div>

      <label className="enquiry-overview">
        <span>What are you building? <i aria-hidden="true">*</i></span>
        <textarea
          name="overview"
          rows={3}
          defaultValue={lastPayload?.overview ?? ''}
          disabled={state === 'submitting'}
          placeholder="Brief context on your product, stage, or timeline."
          required
        />
      </label>

      <div className="enquiry-form-submit">
        <button type="submit" disabled={state === 'submitting'}>
          {state === 'submitting' ? (
            <>
              Sending enquiry... <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            </>
          ) : (
            <>
              Send project enquiry <ArrowUpRight size={17} aria-hidden="true" />
            </>
          )}
        </button>
        <BookingButton className="enquiry-quiet-booking" />
      </div>

      {state === 'error' && (
        <div className="enquiry-error-banner" role="alert">
          <p>{message}</p>
          <div className="enquiry-error-actions">
            {lastPayload && (
              <button
                type="button"
                className="enquiry-retry-btn"
                onClick={() => submitPayload(lastPayload)}
              >
                <RotateCcw size={14} aria-hidden="true" /> Retry submission
              </button>
            )}
            <span>
              Or write directly to <code>hello@web3spell.fun</code>
            </span>
          </div>
        </div>
      )}
    </form>
  )
}

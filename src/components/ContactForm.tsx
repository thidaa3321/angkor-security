import { useState, useCallback } from 'react'
import emailjs from '@emailjs/browser'
import type { ContactFormData, FormState, ToastData } from '@/types'
import { trackEvent } from '@/hooks/useAnalytics'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string

const EMPTY_FORM: ContactFormData = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
}

interface ContactFormProps {
  onToast: (toast: ToastData) => void
}

export function ContactForm({ onToast }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM)
  const [formState, setFormState] = useState<FormState>('idle')

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
    },
    []
  )

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('sending')

    // Track GA event
    trackEvent('form_submit_attempt', { service: formData.service })

    try {
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error('EmailJS environment variables are not configured.')
      }

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:    formData.name,
          from_email:   formData.email,
          company:      formData.company || 'Not provided',
          service:      formData.service || 'Not specified',
          message:      formData.message,
          reply_to:     formData.email,
        },
        PUBLIC_KEY
      )

      setFormState('success')
      setFormData(EMPTY_FORM)
      trackEvent('form_submit_success', { service: formData.service })
      onToast({ message: "Message sent! We'll respond within 24 hours.", type: 'success' })

    } catch (err) {
      console.error('[EmailJS] Send failed:', err)
      setFormState('error')
      trackEvent('form_submit_error')
      onToast({
        message: 'Failed to send message. Please email us directly.',
        type: 'error',
      })
    } finally {
      if (formState !== 'success') setFormState('idle')
    }
  }

  const isSending = formState === 'sending'

  const fieldLabel = (text: string) => (
    <label className="block font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-1.5">
      {text}
    </label>
  )

  return (
    <div className="card p-8 md:p-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            {fieldLabel('Full Name *')}
            <input
              className="form-input"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Kosal Chan"
              disabled={isSending}
            />
          </div>
          <div>
            {fieldLabel('Work Email *')}
            <input
              className="form-input"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@startup.com"
              disabled={isSending}
            />
          </div>
        </div>

        <div>
          {fieldLabel('Company / Startup')}
          <input
            className="form-input"
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Startup Name"
            disabled={isSending}
          />
        </div>

        <div>
          {fieldLabel('Service Interested In')}
          <select
            className="form-input"
            name="service"
            value={formData.service}
            onChange={handleChange}
            disabled={isSending}
          >
            <option value="">Select a service...</option>
            <option>Black Box Testing ($800)</option>
            <option>Grey Box Testing ($1,000)</option>
            <option>White Box Testing ($1,200)</option>
            <option>Annual Security Retainer ($3,600/yr)</option>
            <option>Security Workshop ($500/session)</option>
            <option>Not sure — need guidance</option>
          </select>
        </div>

        <div>
          {fieldLabel('Tell Us About Your Application')}
          <textarea
            className="form-input resize-y min-h-[120px]"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Briefly describe your tech stack, what you'd like tested, and any compliance requirements..."
            disabled={isSending}
          />
        </div>

        <button
          type="submit"
          className="btn-primary w-full text-sm py-4 justify-center"
          disabled={isSending}
        >
          {isSending ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </span>
          ) : (
            'Send Consultation Request →'
          )}
        </button>

        <p className="font-mono text-[10px] text-slate-600 text-center">
          No spam. Your data is encrypted end-to-end. We'll respond within 24 hours.
        </p>
      </form>
    </div>
  )
}

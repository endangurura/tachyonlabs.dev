'use client'

import { useId, useState, useEffect, useRef } from 'react'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'
import { createLead } from '@/lib/api'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-6 pb-4 pt-12 text-base/6 text-neutral-950 dark:text-white transition focus:border-neutral-950 dark:focus:border-white focus:outline-none"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 dark:text-neutral-400 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 dark:peer-focus:text-white peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950 dark:peer-[:not(:placeholder-shown)]:text-white"
      >
        {label}
      </label>
    </div>
  )
}

export default function ContactUsForm() {
  const [status, setStatus] = useState(null); // To track form submission status
  const formRef = useRef(null); // Ref to access the form element

  // Automatically hide the message after 5 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [status]);

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // Convert FormData to object
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company') || '',
      message: formData.get('message') || '',
      subject: 'General Inquiry',
      source: 'tachyonlabs-contact'
    };

    try {
      const result = await createLead(data);

      if (result.success) {
        setStatus({ type: 'success', message: "Thank you for contacting us! We'll get back to you soon." });
        formRef.current.reset(); // Clear the form fields
      } else {
        setStatus({ type: 'error', message: result.message || 'An error occurred' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ type: 'error', message: 'Failed to submit form. Please try again.' });
    }

  }

  return (
    <FadeIn className="lg:order-last">
      <form ref={formRef} onSubmit={onSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950 dark:text-white">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px bg-white/50 dark:bg-neutral-800/50 border-2 border-black dark:border-white">
          <TextInput label="Name" name="name" autoComplete="name" required />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Message" name="message" />
        </div>
        <Button type="submit" className="mt-10 mb-8">
          Let&apos;s work together
        </Button>
      </form>

      {status && (
        <div className={`fixed top-0 left-1/2 transform -translate-x-1/2 p-4 w-full max-w-sm text-sm font-medium shadow-lg z-50 ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'} border-2 border-black dark:border-white`}>
          <div className="flex justify-between items-center">
            <span>{status.message}</span>
            <button onClick={() => setStatus(null)} className="text-gray-500 hover:text-gray-700">&times;</button>
          </div>
        </div>
      )}
    </FadeIn>
  );
}



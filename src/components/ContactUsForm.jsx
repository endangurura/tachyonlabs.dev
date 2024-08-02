'use client'

import { useId, useState, useEffect, useRef } from 'react'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
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

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: result.message || 'Form submitted successfully' });
        formRef.current.reset(); // Clear the form fields
      } else {
        setStatus({ type: 'error', message: result.error || 'An error occurred' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ type: 'error', message: 'An error occurred' });
    }

  }

  return (
    <FadeIn className="lg:order-last">
      <form ref={formRef} onSubmit={onSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
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
          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            pattern="\d{10,15}" // 10 to 15 digits
            title="Please enter a valid phone number (10 to 15 digits)"
            required
          />
          <TextInput label="Message" name="message" />
        </div>
        <Button type="submit" className="mt-10">
          Let’s work together
        </Button>
      </form>

      {status && (
        <div className={`fixed top-0 left-1/2 transform -translate-x-1/2 p-4 w-full max-w-sm rounded-md text-sm font-medium shadow-lg z-50 ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'} border border-gray-200`}>
          <div className="flex justify-between items-center">
            <span>{status.message}</span>
            <button onClick={() => setStatus(null)} className="text-gray-500 hover:text-gray-700">&times;</button>
          </div>
        </div>
      )}
    </FadeIn>
  );
}



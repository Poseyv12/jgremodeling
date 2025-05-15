'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // TODO: Implement your form submission logic here
      // For example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
      
      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-10 bg-white shadow-xl rounded-2xl p-10 border border-border/50 backdrop-blur-sm">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <label htmlFor="name" className="block text-base font-medium text-foreground mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="mt-1 block ring-1 ring-border/50 w-full rounded-xl border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-base font-medium text-foreground mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className="mt-1 block ring-1 ring-border/50 w-full rounded-xl border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200"
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-base font-medium text-foreground mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message', { required: 'Message is required' })}
            className="mt-1 block ring-1 ring-border/50 w-full rounded-xl border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200"
            placeholder="Tell us about your project..."
          />
          {errors.message && (
            <p className="mt-2 text-sm text-destructive">{errors.message.message}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-base font-semibold text-primary-foreground bg-black hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02]"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </div>

        {submitStatus === 'success' && (
          <div className="rounded-xl bg-green-50 p-4 text-center">
            <p className="text-base text-green-700">
              Thank you for your message! We&apos;ll get back to you soon.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="rounded-xl bg-destructive/10 p-4 text-center">
            <p className="text-base text-destructive">
              Something went wrong. Please try again later.
            </p>
          </div>
        )}
      </form>
    </div>
  );
} 
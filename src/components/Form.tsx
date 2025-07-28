import React, { useState, useEffect, useCallback } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';

// The component expects an `onBack` function prop
interface FormProps {
  onBack: () => void;
}

interface FormData {
  name: string;
  email: string;
  age: string;
  competitive: string;
  laugh: string;
  teach: string;
  wrongBelief: string;
  truth: string;
}

interface Question {
  label: string;
  key: keyof FormData;
  type: 'text' | 'email' | 'number' | 'textarea';
  props?: Record<string, any>;
  minWords?: number;
}

const FORMSPREE_ID = "xyzjqboq";
const SUBMISSION_FLAG_KEY = 'FormSubmitted_v1';

const Form: React.FC<FormProps> = ({ onBack }) => {
  const [state, formspreeHandleSubmit] = useForm(FORMSPREE_ID);
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    age: '',
    competitive: '',
    laugh: '',
    teach: '',
    wrongBelief: '',
    truth: ''
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [hasAlreadySubmitted, setHasAlreadySubmitted] = useState(false);

  const questions: Question[] = [
    { label: "What's your name?", key: 'name', type: 'text' },
    { label: "What's your email?", key: 'email', type: 'email' },
    { label: "What's your age?", key: 'age', type: 'number', props: { min: 18, max: 22 } },
    { label: "What is something you are irrationally competitive about?", key: 'competitive', type: 'textarea', minWords: 30 },
    { label: "What is something that always makes you laugh, even when you are in a bad mood?", key: 'laugh', type: 'textarea', minWords: 30 },
    { label: "If you had to teach a class on something you are not an expert in, what would it be?", key: 'teach', type: 'textarea', minWords: 30 },
    { label: "What belief did you hold strongly in the past that you now think was completely wrong?", key: 'wrongBelief', type: 'textarea', minWords: 30 },
    { label: "What important truth do very few people agree with you on?", key: 'truth', type: 'textarea', minWords: 30 }
  ];

  // Logic for checking submission status, validation, and handling form events remains the same.
  useEffect(() => {
    try {
      const submitted = localStorage.getItem(SUBMISSION_FLAG_KEY);
      if (submitted === 'true') {
        setHasAlreadySubmitted(true);
      }
    } catch (error) {
      console.warn('localStorage not available:', error);
    }
  }, []);
  
  useEffect(() => {
    if (state.succeeded) {
      try {
        localStorage.setItem(SUBMISSION_FLAG_KEY, 'true');
        setHasAlreadySubmitted(true);
      } catch (error) {
        console.warn('Could not save to localStorage:', error);
      }
    }
  }, [state.succeeded]);

  const validateField = useCallback((name: keyof FormData, value: string): string => {
    if (!value || value.trim() === '') return 'This field is required.';
    const question = questions.find(q => q.key === name);
    if (question?.type === 'textarea' && question.minWords) {
      const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
      if (wordCount < question.minWords) {
        return `Please elaborate a bit more (at least ${question.minWords} words, currently ${wordCount}).`;
      }
    }
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@(gmail\.com|outlook\.com|icloud\.com|proton\.me|yahoo\.com)$/;
      if (!emailRegex.test(value)) {
        return 'Please use a valid Gmail, Outlook, iCloud, Proton, or Yahoo email.';
      }
    }
    if (name === 'age') {
      const ageNum = parseInt(value, 10);
      if (isNaN(ageNum) || ageNum < 18 || ageNum > 22) {
        return 'Age must be between 18 and 22.';
      }
    }
    return '';
  }, [questions]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({...prev, [name]: ''}));
    }
  };

  const handleCustomSubmit = async () => {
    const newErrors: Partial<FormData> = {};
    let isFormValid = true;
    questions.forEach(q => {
      const error = validateField(q.key, formData[q.key] || '');
      if (error) {
        newErrors[q.key] = error;
        isFormValid = false;
      }
    });
    setErrors(newErrors);
    if (isFormValid) {
      await formspreeHandleSubmit(formData);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    if (e.key === 'Enter' && !e.shiftKey) { 
      e.preventDefault();
      const { name, value } = e.currentTarget;
      const error = validateField(name as keyof FormData, value);
      if (error) {
        setErrors(prev => ({ ...prev, [name]: error }));
        return; 
      }
      setErrors(prev => ({ ...prev, [name]: '' }));
      const nextIndex = index + 1;
      if (nextIndex < questions.length) {
        document.getElementById(questions[nextIndex].key)?.focus();
      } else {
        document.getElementById('submit-button')?.focus();
      }
    }
  };


  if (hasAlreadySubmitted) {
    return (
      <div className="min-h-screen w-full font-inter bg-gradient-radial from-pink-300 via-purple-300 to-blue-300 flex items-center justify-center p-4">
        <div className="bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20 backdrop-blur-sm card-shadow text-center max-w-2xl">
          <CheckCircle size={48} className="mx-auto text-green-300 mb-6" />
          <h3 className="text-3xl font-bold mb-6 text-white">Thank You!</h3>
          <p className="text-white/80 text-lg mb-6">Your application has been received and you can only submit once.</p>
          <p className="text-white/60">I'll get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    // This is the main container that provides the background and padding
    <div className="min-h-screen w-full font-inter bg-gradient-radial from-pink-300 via-purple-300 to-blue-300 p-4 sm:p-6 md:p-8 text-white">
      
      <div className="sticky top-6 z-10">
        <button onClick={onBack} className="flex items-center gap-2 text-white/80 hover:text-white mb-6 md:mb-8 transition-colors duration-200 group button-shadow hover:button-shadow-hover bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span>Back</span>
        </button>
      </div>

      <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-4">Form</h2>
          <div className="h-1 w-20 bg-white/30 rounded-full"></div>
          <p className="text-base md:text-lg leading-relaxed text-white/90 mt-4">
            Fill out this form and let's see if we're a match made in{' '}
            <span className="text-white hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-200">
              <strong>silicon heaven</strong>
            </span>
            .
          </p>
        </div>

        {state.errors && state.errors.length > 0 && !state.errors.some(e => 'field' in e) && (
          <div className="bg-red-500/20 border border-red-500/30 rounded-2xl p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-red-200">
              <AlertCircle size={20} />
              <span className="font-semibold">An error occurred:</span>
            </div>
            <ul className="mt-2 text-red-100 text-sm">
              {state.errors.map((error, index) => (
                <li key={index} className="ml-4">• {error.message}</li>
              ))}
            </ul>
          </div>
        )}
        
        <form noValidate className="space-y-6 md:space-y-8">
          {questions.map((question, index) => (
            <div key={question.key} className="bg-white/10 rounded-2xl p-6 md:p-8 border border-white/20 backdrop-blur-sm card-shadow">
              <label htmlFor={question.key} className="text-xl font-bold mb-4 block">
                {question.label}
              </label>
              {question.type === 'textarea' ? (
                <textarea 
                  id={question.key} 
                  name={question.key} 
                  className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-300 resize-none" 
                  rows={4} 
                  value={formData[question.key] || ''} 
                  onChange={handleInputChange} 
                  onKeyDown={(e) => handleKeyDown(e, index)} 
                  {...question.props} 
                />
              ) : (
                <input 
                  id={question.key} 
                  name={question.key} 
                  type={question.type} 
                  className={`w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-300 ${question.type === 'number' ? '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' : ''}`} 
                  value={formData[question.key] || ''} 
                  onChange={handleInputChange} 
                  onKeyDown={(e) => handleKeyDown(e, index)} 
                  {...question.props} 
                />
              )}
              {errors[question.key] && (
                <p className="text-red-300 text-sm mt-2 block">{errors[question.key]}</p>
              )}
              <ValidationError 
                prefix={question.label} 
                field={question.key} 
                errors={state.errors} 
                className="text-red-300 text-sm mt-2 block" 
              />
            </div>
          ))}
          <div className="flex justify-center pt-6 pb-12">
            <button 
              id="submit-button" 
              type="button" 
              onClick={handleCustomSubmit} 
              disabled={state.submitting} 
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl px-10 py-5 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {state.submitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Submitting...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

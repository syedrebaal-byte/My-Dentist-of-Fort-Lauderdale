import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0b131f] text-white flex items-center justify-center p-6 text-center">
          <div className="max-w-md p-8 rounded-3xl bg-[#111A28] border border-slate-800 shadow-2xl space-y-4">
            <h2 className="text-xl font-serif text-[#c5a880]">My Dentist of Fort Lauderdale</h2>
            <p className="text-xs text-slate-300">
              The application encountered a transient script error. Please refresh the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#c5a880] text-[#0b131f] hover:bg-[#d4bc9b]"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);


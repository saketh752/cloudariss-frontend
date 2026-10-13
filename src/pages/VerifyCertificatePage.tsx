import React, { useState } from 'react';
import {
  ShieldCheck,
  Search,
  AlertCircle,
  MessageCircle,
  Phone,
  RefreshCw,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BRAND_DATA } from '@/data/brandData';

export const VerifyCertificatePage: React.FC = () => {
  const [certId, setCertId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [verificationState, setVerificationState] = useState<'idle' | 'searched'>('idle');
  const [searchedId, setSearchedId] = useState('');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = certId.trim();

    if (!cleanId) {
      setErrorMessage('Please enter a valid Certificate ID to proceed.');
      return;
    }

    setErrorMessage('');
    setSearchedId(cleanId);
    setVerificationState('searched');
  };

  const handleReset = () => {
    setCertId('');
    setErrorMessage('');
    setVerificationState('idle');
    setSearchedId('');
  };

  return (
    <div className="relative text-white min-h-[calc(100vh-4.5rem)] flex items-center justify-center py-8 sm:py-12 lg:py-16">
      {/* 55% Black Overlay over background image, placed strictly behind content */}
      <div
        aria-hidden="true"
        className="fixed inset-0 bg-black/[0.55] pointer-events-none -z-10"
      />

      {/* SINGLE VERIFY CERTIFICATE SECTION ONLY */}
      <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8 text-left">
          
          {/* Header: Direct & concise, no blue eyebrow header */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight leading-tight">
              Verify Your Certificate
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Verify your Cloudariss certificate using the certificate ID provided on your certificate.
            </p>
          </div>

          {/* Verification Form (Direct open presentation, no card box) */}
          <form onSubmit={handleVerify} className="space-y-4 pt-2 border-t border-white/10">
            <div>
              <label
                htmlFor="certificate-id-input"
                className="block text-xs font-mono font-bold uppercase text-slate-300 mb-1.5"
              >
                Certificate ID
              </label>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
                  </div>
                  <input
                    id="certificate-id-input"
                    type="text"
                    value={certId}
                    onChange={(e) => {
                      setCertId(e.target.value);
                      if (errorMessage) setErrorMessage('');
                    }}
                    placeholder="Enter your certificate ID"
                    aria-describedby="cert-helper"
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-white/15 focus:ring-2 focus:ring-[#00D2FF] focus:border-[#00D2FF] text-sm outline-none font-mono uppercase placeholder:normal-case placeholder:font-sans bg-white/[0.04] text-white placeholder:text-slate-500 transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  rightIcon={<Search className="w-4 h-4" />}
                >
                  Verify Certificate
                </Button>
              </div>

              <p id="cert-helper" className="text-xs text-slate-400 mt-2">
                Enter the certificate ID exactly as shown on your certificate.
              </p>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-lg bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}
          </form>

          {/* Verification Result Message */}
          {verificationState === 'searched' && (
            <div className="pt-4 border-t border-white/10 space-y-4 animate-in fade-in duration-200">
              <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-3.5 text-left">
                <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                  <span className="text-xs font-mono font-bold text-slate-300">
                    Query ID: <code className="text-[#00D2FF] font-mono">{searchedId}</code>
                  </span>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Clear</span>
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Automated certificate verification is currently being integrated. For immediate assistance verifying this certificate, contact the Cloudariss team with your certificate ID.
                </p>

                {/* Direct Verification Channels */}
                <div className="pt-1 flex flex-wrap gap-2.5">
                  <Button
                    href={`https://wa.me/916302680457?text=${encodeURIComponent(
                      `Hello Cloudariss Team, I would like to verify Certificate ID: ${searchedId}`
                    )}`}
                    variant="whatsapp"
                    size="sm"
                    leftIcon={<MessageCircle className="w-4 h-4 text-[#25D366]" />}
                  >
                    Verify via WhatsApp
                  </Button>
                  <Button
                    href={BRAND_DATA.phone1Tel}
                    variant="outline"
                    size="sm"
                    className="border-white/20 hover:border-white/40 text-white"
                    leftIcon={<Phone className="w-4 h-4 text-[#00D2FF]" />}
                  >
                    Call Verification Desk
                  </Button>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

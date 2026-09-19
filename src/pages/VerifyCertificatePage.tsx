import React, { useState } from 'react';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  AlertCircle,
  FileText,
  MessageCircle,
  Phone,
  RefreshCw,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
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
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* ========================================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-atmospheric border-b border-brand-border/60">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface-blue border border-brand-blue/30 shadow-subtle">
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
              <span className="text-xs font-extrabold tracking-widest text-brand-navy uppercase font-heading">
                CERTIFICATE VERIFICATION
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.15]">
              Verify Your{' '}
              <span className="text-gradient-tech">Cloudariss Certificate.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Enter the certificate ID provided on your certificate to verify its details.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* VERIFICATION FORM */}
      {/* ========================================================================= */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card variant="white" padding="lg" className="border border-brand-border shadow-card space-y-6">
          <div className="border-b border-brand-border/60 pb-4">
            <h2 className="text-xl font-bold text-brand-navy flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-blue" />
              <span>Certificate Credential Check</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Enter the certificate ID exactly as shown on your certificate.
            </p>
          </div>

          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label
                htmlFor="certificate-id-input"
                className="block text-xs font-bold uppercase text-slate-700 mb-1.5"
              >
                Certificate ID *
              </label>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <ShieldCheck className="w-5 h-5 text-brand-blue" />
                  </div>
                  <input
                    id="certificate-id-input"
                    type="text"
                    value={certId}
                    onChange={(e) => {
                      setCertId(e.target.value);
                      if (errorMessage) setErrorMessage('');
                    }}
                    placeholder="e.g. CLD-2024-XXXX"
                    aria-describedby="cert-helper"
                    className="w-full pl-11 pr-4 py-3 rounded-lg border border-brand-border focus:ring-2 focus:ring-brand-blue focus:border-brand-blue text-sm outline-none font-mono uppercase placeholder:normal-case placeholder:font-sans bg-white transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  leftIcon={<Search className="w-4 h-4" />}
                >
                  Verify Certificate
                </Button>
              </div>

              <p id="cert-helper" className="text-xs text-slate-500 mt-2">
                Enter the certificate ID exactly as shown on your certificate.
              </p>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}
          </form>

          {/* V1 Neutral State (Integrity Maintained) */}
          {verificationState === 'searched' && (
            <div className="pt-6 border-t border-brand-border space-y-4 animate-in fade-in duration-200">
              <div className="p-5 rounded-xl bg-brand-surface-blue/80 border border-brand-blue/30 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-brand-border/60 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-pulse" />
                    <span className="font-bold text-sm text-brand-navy">
                      Verification Request Logged
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white text-slate-600 border border-brand-border">
                    Frontend V1 Release
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="text-xs text-slate-600">
                    Query ID:{' '}
                    <code className="font-mono font-extrabold text-brand-navy bg-white px-2.5 py-1 rounded border border-brand-border">
                      {searchedId}
                    </code>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Automated certificate verification is currently being integrated. For immediate assistance verifying this certificate, contact the Cloudariss team with your certificate ID.
                  </p>
                </div>

                {/* Direct Verification Channels */}
                <div className="p-4 bg-white rounded-lg border border-brand-border space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                    Immediate Manual Verification
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Please provide this Certificate ID ({searchedId}) to our support desk via WhatsApp or phone call:
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2 pt-1">
                    <Button
                      href={`https://wa.me/916302680457?text=${encodeURIComponent(
                        `Hello Cloudariss Team, I would like to verify Certificate ID: ${searchedId}`
                      )}`}
                      variant="primary"
                      size="sm"
                      leftIcon={<MessageCircle className="w-4 h-4" />}
                    >
                      Verify via WhatsApp
                    </Button>
                    <Button
                      href={BRAND_DATA.phone1Tel}
                      variant="outline"
                      size="sm"
                      leftIcon={<Phone className="w-4 h-4" />}
                    >
                      Call Verification Desk
                    </Button>
                  </div>
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-brand-navy font-semibold transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Clear and verify another ID</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </Card>
      </section>

      {/* ========================================================================= */}
      {/* TRUST & AUTHENTICITY SECTION */}
      {/* ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-navy">
            About Cloudariss Certificate Verification
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Certificate verification helps confirm the authenticity of a Cloudariss certificate using its certificate ID.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="surface" padding="md" className="border border-brand-border space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-surface-blue flex items-center justify-center text-brand-blue">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-brand-navy">
              Authenticity Confirmation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Designed to help students, employers, and recruiters authenticate official certificates issued by Cloudariss Technologies.
            </p>
          </Card>

          <Card variant="surface" padding="md" className="border border-brand-border space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-surface-blue flex items-center justify-center text-brand-blue">
              <FileText className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-brand-navy">
              Unique Identification
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Each certificate is tagged with a distinct identification code printed on the document for traceability.
            </p>
          </Card>

          <Card variant="surface" padding="md" className="border border-brand-border space-y-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-surface-blue flex items-center justify-center text-brand-blue">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-brand-navy">
              Direct Verification Desk
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Organizations seeking formal background verification can connect directly with our admissions and records desk.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { CoursesPage } from '@/pages/CoursesPage';
import { CrpcPage } from '@/pages/CrpcPage';
import { DaapPage } from '@/pages/DaapPage';
import { OfferingsPage } from '@/pages/OfferingsPage';
import { WhyCloudarissPage } from '@/pages/WhyCloudarissPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { VerifyCertificatePage } from '@/pages/VerifyCertificatePage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="courses/crpc" element={<CrpcPage />} />
        <Route path="courses/daap" element={<DaapPage />} />
        <Route path="offerings" element={<OfferingsPage />} />
        <Route path="why-cloudariss" element={<WhyCloudarissPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="verify-certificate" element={<VerifyCertificatePage />} />
        {/* Branded 404 Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};


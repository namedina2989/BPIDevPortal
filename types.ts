import React from 'react';

export interface ApiData {
  id: string;
  name: string;
  version: string;
  description: string;
  category: string;
  isComingSoon: boolean;
  icon: React.ReactElement<{ className?: string }>;
  pageLink?: Page;
}

export type Page = 'home' | 'api-catalog' | 'get-started' | 'documentation' | 'support' | 'terms-of-service' | 'contact-us' | 'register' | 'bills-payment' | 'fund-transfer';
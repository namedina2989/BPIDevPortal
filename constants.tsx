

import React from 'react';
import { ApiData } from './types';
import { AccountsIcon, BillsPaymentIcon, CardIcon, KeyIcon, LoanIcon, TransferIcon, WalletIcon } from './components/Icons';

export const NAV_LINKS = [
  { name: 'Home', href: 'home' },
  { name: 'Solutions', href: 'api-catalog' },
  { name: 'Documentation', href: 'documentation' },
  { name: 'Contact Us', href: 'contact-us' },
];

export const LOGGED_IN_MENU = [
    { name: 'Dashboard', href: '#' },
    { name: 'API', href: 'api-catalog' },
    { name: 'My Application', href: '#' },
    { name: 'Contact Us', href: 'contact-us' },
    { name: 'Testing Ground', href: '#'},
];

export const API_CATEGORIES = ['All', 'Accounts', 'Authorizations', 'Cards', 'Loans', 'Payment', 'Transfer', 'Wallets'];

export const APIS: ApiData[] = [
  {
    id: '1',
    name: 'Bills Payment',
    version: 'API V1.2.3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'Payment',
    isComingSoon: false,
    icon: <BillsPaymentIcon className="w-8 h-8 text-bpi-red" />,
    pageLink: 'bills-payment',
  },
  {
    id: '2',
    name: 'Accounts API',
    version: 'API V1.0.0',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'Accounts',
    isComingSoon: true,
    icon: <AccountsIcon className="w-8 h-8 text-bpi-red" />,
  },
  {
    id: '3',
    name: 'Fund Transfer',
    version: 'API V2.1.0',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'Transfer',
    isComingSoon: false,
    icon: <TransferIcon className="w-8 h-8 text-bpi-red" />,
    pageLink: 'fund-transfer',
  },
    {
    id: '4',
    name: 'Cards API',
    version: 'API V1.1.28',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'Cards',
    isComingSoon: false,
    icon: <CardIcon className="w-8 h-8 text-bpi-red" />,
  },
  {
    id: '5',
    name: 'vybe',
    version: 'API V1.1.28',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'Wallets',
    isComingSoon: false,
    icon: <WalletIcon className="w-8 h-8 text-bpi-red" />,
  },
  {
    id: '6',
    name: 'Loan Application',
    version: 'API V1.3.0',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'Loans',
    isComingSoon: false,
    icon: <LoanIcon className="w-8 h-8 text-bpi-red" />,
  },
  {
    id: '7',
    name: 'Account Details',
    version: 'API V2.0.0',
    description: 'Retrieve account balance and transaction history securely.',
    category: 'Accounts',
    isComingSoon: false,
    icon: <AccountsIcon className="w-8 h-8 text-bpi-red" />,
  },
  {
    id: '8',
    name: 'Card Management',
    version: 'API V1.5.0',
    description: 'Allow users to block, unblock, and manage their credit/debit cards.',
    category: 'Cards',
    isComingSoon: false,
    icon: <CardIcon className="w-8 h-8 text-bpi-red" />,
  },
   {
    id: '9',
    name: 'e-Wallet Top-up',
    version: 'API V1.1.0',
    description: 'Facilitate instant top-ups to various digital wallets from a BPI account.',
    category: 'Wallets',
    isComingSoon: false,
    icon: <WalletIcon className="w-8 h-8 text-bpi-red" />,
  },
  {
    id: '10',
    name: 'Authorization Token',
    version: 'API V1.0.0',
    description: 'Generate an access token to authenticate and authorize your API requests.',
    category: 'Authorizations',
    isComingSoon: false,
    icon: <KeyIcon className="w-8 h-8 text-bpi-red" />,
  },
  {
    id: '11',
    name: 'Open Banking Core',
    version: 'API V2.0.16',
    description: 'Core infrastructure for Open Banking, including authorization, account access, and partner onboarding.',
    category: 'Authorizations',
    isComingSoon: false,
    icon: <KeyIcon className="w-8 h-8 text-bpi-red" />,
    pageLink: 'open-banking',
  },
];
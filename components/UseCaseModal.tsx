import React from 'react';
import { CloseIcon } from './Icons';

interface UseCaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    useCase: 'bills-payment' | 'fund-transfer' | null;
}

const Section: React.FC<{ title: string; children: React.ReactNode; isFirst?: boolean }> = ({ title, children, isFirst = false }) => (
    <section className={isFirst ? "mt-2" : "mt-6"}>
        <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>
        {children}
    </section>
);

const SectionParagraph: React.FC<{children: React.ReactNode}> = ({children}) => (
    <p className="text-sm text-gray-600 leading-relaxed">{children}</p>
);

const UnorderedList: React.FC<{children: React.ReactNode}> = ({children}) => (
    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 leading-relaxed">{children}</ul>
);

const OrderedList: React.FC<{children: React.ReactNode}> = ({children}) => (
    <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-600 leading-relaxed">{children}</ol>
);

const BillsPaymentContent: React.FC = () => (
    <>
        <Section title="💡 Use Case: Bills Payment" isFirst>
            <div className="space-y-3">
                <p className="text-sm text-gray-600 leading-relaxed"><strong>Use Case Name:</strong> Bills Payment</p>
                <p className="text-sm text-gray-600 leading-relaxed"><strong>Primary Actor:</strong> Registered User (Customer)</p>
            </div>
        </Section>
        <Section title="Goal">
            <SectionParagraph>To allow users to pay utility bills, credit card bills, or other service provider invoices through the application.</SectionParagraph>
        </Section>
        <Section title="Preconditions">
            <UnorderedList>
                <li>User must be logged into the system</li>
                <li>User must have a valid payment method (e.g., bank account, credit/debit card, e-wallet)</li>
                <li>Billers must be registered and available in the system</li>
            </UnorderedList>
        </Section>
        <Section title="Main Flow">
            <OrderedList>
                <li>User logs in to the application.</li>
                <li>User navigates to the "Bills Payment" section.</li>
                <li>User selects a biller from the list (e.g., electricity, water, telecom).</li>
                <li>User enters required billing details (e.g., account number, amount).</li>
                <li>System validates the billing information.</li>
                <li>User selects a payment method.</li>
                <li>User confirms the transaction.</li>
                <li>System processes the payment.</li>
                <li>System displays a confirmation message and transaction reference number.</li>
                <li>System sends a receipt via email or SMS.</li>
            </OrderedList>
        </Section>
        <Section title="Alternative Flows">
             <UnorderedList>
                <li><strong>Invalid Billing Details:</strong> If the user enters incorrect account information, the system prompts for correction.</li>
                <li><strong>Insufficient Funds:</strong> If the selected payment method lacks sufficient balance, the system notifies the user and offers to choose another method.</li>
                <li><strong>Biller Not Available:</strong> If the selected biller is temporarily unavailable, the system informs the user and suggests trying again later.</li>
            </UnorderedList>
        </Section>
        <Section title="Postconditions">
            <UnorderedList>
                <li>Payment is successfully processed and recorded</li>
                <li>User receives confirmation and receipt</li>
                <li>Biller receives payment notification</li>
            </UnorderedList>
        </Section>
        <Section title="Business Rules">
            <UnorderedList>
                <li>Payments above a certain threshold may require OTP or biometric confirmation</li>
                <li>Cut-off times may apply for same-day processing</li>
            </UnorderedList>
        </Section>
    </>
);

const FundTransferContent: React.FC = () => (
    <>
        <SectionParagraph>Based on the provided BPI Partner API 2.0 documentation, a compelling use case is enabling a third-party mobile wallet application to allow its users to top up their wallet balance directly from their BPI bank account. This scenario leverages the core functionalities of the API, demonstrating a practical application of open banking.</SectionParagraph>
        
        <Section title="Use Case: Fund Top-Up via BPI Account" isFirst>
            <UnorderedList>
                <li><strong>Use Case Name:</strong> Fund top up from BPI Account</li>
                <li><strong>Actors:</strong>
                    <ul className="list-['-_'] pl-5 mt-1 space-y-1">
                        <li>Primary Actor: Mobile Wallet User (the end-user wanting to add funds to their wallet)</li>
                        <li>Secondary Actor: Third-Party Mobile Wallet Application (the partner application initiating the transaction)</li>
                        <li>Supporting Actor: BPI's Authentication and API Services</li>
                    </ul>
                </li>
                <li><strong>Description:</strong> This use case describes the process of a mobile wallet user adding funds to their wallet by initiating a transfer from their linked BPI bank account. The entire transaction, from authentication to fund transfer, is handled through the BPI Partner API 2.0, ensuring a secure and seamless user experience without the user having to leave the mobile wallet application.</li>
            </UnorderedList>
        </Section>

        <Section title="Preconditions">
            <UnorderedList>
                <li>The user has an active account with the third-party mobile wallet.</li>
                <li>The user has a BPI online banking account with sufficient funds.</li>
                <li>The third-party mobile wallet application is a registered and approved partner with BPI and has completed the partner on-boarding process.</li>
                <li>The user has previously consented to link their BPI account to the mobile wallet application.</li>
            </UnorderedList>
        </Section>

        <Section title="Basic Flow of Events (Successful Scenario)">
            <OrderedList>
                <li><strong>Initiate Top-Up:</strong> The user opens their mobile wallet application and selects the option to "Add Money" or "Top-Up."</li>
                <li><strong>Specify Amount:</strong> The user enters the desired amount to be transferred from their BPI account.</li>
                <li><strong>Authorize Transaction:</strong> The mobile wallet application initiates the <code className="bg-gray-100 text-sm text-red-600 p-1 rounded">[POST] /initiate</code> call to the BPI API.</li>
                <li><strong>BPI Authentication:</strong> The user is redirected to the BPI online banking login page within a secure web view to enter their credentials.</li>
                <li><strong>Enter OTP:</strong> Upon successful login, BPI sends a One-Time Password (OTP) to the user's registered mobile number. The user enters the OTP on the provided screen. This is handled via the <code className="bg-gray-100 text-sm text-red-600 p-1 rounded">[POST] /otp</code> endpoint.</li>
                <li><strong>Confirm Transaction:</strong> The user reviews the transaction details (amount, source account, destination wallet) and confirms the transfer. The application then calls the <code className="bg-gray-100 text-sm text-red-600 p-1 rounded">[POST] /process</code> endpoint.</li>
                <li><strong>Transaction Success:</strong> BPI processes the transaction, and upon successful completion, the mobile wallet application receives a success response.</li>
                <li><strong>Update Wallet Balance:</strong> The mobile wallet application updates the user's wallet balance with the top-up amount.</li>
                <li><strong>Notify User:</strong> The user receives a notification from the mobile wallet application confirming the successful top-up.</li>
            </OrderedList>
        </Section>

        <Section title="Alternative Flows & Exceptions">
            <UnorderedList>
                <li><strong>Insufficient Funds:</strong> If the user's BPI account has insufficient funds, the API will return an error, and the mobile wallet application will display an "Insufficient Funds" message to the user.</li>
                <li><strong>Invalid OTP:</strong> If the user enters an incorrect OTP, the API will return an error. The user will be prompted to re-enter the OTP. After multiple failed attempts, the transaction may be locked.</li>
                <li><strong>User Cancels Transaction:</strong> The user can choose to cancel the transaction at any point before final confirmation. The mobile wallet application will redirect the user back to their main wallet screen.</li>
                <li><strong>API Timeout/Error:</strong> If the BPI API is unavailable or returns an error, the mobile wallet application will display a generic error message and suggest the user try again later.</li>
                <li><strong>Transaction Status Check:</strong> If the transaction is pending or its status is unclear, the mobile wallet application can use the <code className="bg-gray-100 text-sm text-red-600 p-1 rounded">[GET] /status</code> endpoint to retrieve the final status of the transaction.</li>
                <li><strong>Transaction Reversal:</strong> In case of a confirmed but failed transaction, the partner application can initiate a reversal using the <code className="bg-gray-100 text-sm text-red-600 p-1 rounded">[POST] /reversal</code> endpoint.</li>
            </UnorderedList>
        </Section>
        
        <Section title="Postconditions">
                <UnorderedList>
                <li><strong>On Success:</strong> The user's mobile wallet balance is increased by the specified amount, and their BPI account balance is debited accordingly. A record of the transaction is available in both the user's mobile wallet history and their BPI account statement.</li>
                <li><strong>On Failure:</strong> The user's mobile wallet and BPI account balances remain unchanged. An error message is displayed to the user explaining the reason for the failure.</li>
            </UnorderedList>
        </Section>
    </>
);


export const UseCaseModal: React.FC<UseCaseModalProps> = ({ isOpen, onClose, useCase }) => {
    if (!isOpen) return null;

    const title = useCase === 'bills-payment'
        ? 'API Use Case: Bills Payment'
        : 'API Use Case: Fund Top-Up';

    const content = useCase === 'bills-payment'
        ? <BillsPaymentContent />
        : <FundTransferContent />;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4" 
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="use-case-title"
        >
            <div 
                className="bg-white rounded-lg shadow-2xl w-full max-w-3xl h-[90vh] flex flex-col" 
                onClick={(e) => e.stopPropagation()}
            >
                <header className="flex items-center justify-between p-5 border-b border-gray-200 sticky top-0 bg-white rounded-t-lg">
                    <h2 id="use-case-title" className="text-2xl font-bold text-gray-900">{title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 transition-colors" aria-label="Close Use Case">
                        <CloseIcon className="w-7 h-7" />
                    </button>
                </header>
                <main className="overflow-y-auto p-6">
                    {content}
                </main>
            </div>
        </div>
    );
};
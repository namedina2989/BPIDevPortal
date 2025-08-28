import React from 'react';
import { CloseIcon } from './Icons';


interface TermsOfServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
            {children}
        </div>
    </section>
);

const SubSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mt-4">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <div className="pl-4 mt-2 space-y-3">{children}</div>
    </div>
);


export const TermsOfServiceModal: React.FC<TermsOfServiceModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const sections = [
        {
            title: "1. Definitions",
            content: (
                <>
                    <SubSection title="1.1 Unless the context otherwise requires, I agree that the following terms when used in this Agreement shall have the meaning indicated below:">
                        <p><strong>“Account/s”</strong> means the bank account/s of the authorized user that were opened by such user with the Bank of the Philippine Islands (BPI) and/or the BPI Family Savings Bank (BFSB), such as, but not limited to, deposits, BPI Credit Cards, loans, investments and such other account/s, which are made accessible by the Bank to the authorized user through the BPI Online Banking Services.</p>
                        <p><strong>“Biometric Login”</strong> means one of the Bank’s authentication methods and the authorized user’s alternative unique identification in place of the Username and Password, which allows the authorized user to log in to the BPI Mobile app installed in such authorized user’s Linked Device via the authorized user’s biometrics, e.g. the authorized user’s electronic face identification or any of the authorized user’s fingerprints, provided that such biometrics are saved by the authorized user in the said Linked Device’s settings.</p>
                        <p><strong>“BPI Credit Card/s”</strong> means any of the following: BPI Blue Mastercard, BPI Gold Mastercard, BPI e-Credit Mastercard, BPI Edge Mastercard, Petron-BPI Mastercard, BPI Amore Cashback Card, BPI Amore Platinum Cashback Card, Visa Signature Card, Platinum Rewards Mastercard, BPI Corporate Mastercard and such other BPI Credit Cards as the Bank may deem appropriate to include, as the same may be amended or modified by the Bank from time to time, issued for the use of the cardholder and is non-transferable.</p>
                        <p><strong>“BPI Mobile app”</strong> means the software application of the Bank that is designed to run on a smartphone, tablet or such other portable device providing clients and/or authorized users with services similar to those which can be accessed through personal computers.</p>
                        <p><strong>"BPI Online Banking Services"</strong> means any service, financial or otherwise, electronically provided by the Bank through the use of the online banking facility, which may be through the Bank’s official website, mobile app, online partners, and such other online platforms deemed appropriate by the Bank for the purpose.</p>
                        <p><strong>“BPI Online Partner/s”</strong> means individuals or entities contractually authorized, under a duty of confidentiality, to offer the BPI Online Banking Services functions to complement the services in their platforms or applications. An authorized user, with his/her Login Credentials, may avail of the BPI Online Banking Services through the BPI Online Partner's platform or application subject to these Online Banking Terms and Conditions.</p>
                        <p><strong>“BPI Website”</strong> means the informational website of the Bank &lt; www.bpi.com.ph &gt; where guests can explore and discover the various products, services, facilities and offerings of the Bank, as well as the transactional website of the Bank &lt;online.bpi.com.ph&gt; where authorized users can log in to use and/or access the BPI Online Banking Services.</p>
                        <p><strong>“Enrolled Account/s”</strong> means the authorized user’s Account/s that is/are registered and enrolled by the authorized user in accordance with these Terms and Conditions and forming part of the Account/s which is/are accessible to such authorized user through the BPI Online Banking Services.</p>
                        <p><strong>“Force Majeure”</strong> means circumstances beyond the Bank’s reasonable control, including, without limitation, acts of God, natural disasters, calamities, earthquakes, fire, floods, wars, civil or military disturbances, sabotage, acts of terrorism, terrorist attacks, criminal acts or willful misconduct by any person (other than the Bank’s or its officers or employees), epidemics, pandemic, riots, interruptions, loss or malfunction of utilities or facilities, power outages, electrical or mechanical failure, computer hardware or software failure, system failure or system downtime, network or telecommunication failure, causes or acts attributable to third persons or parties, labor disputes, strikes, walk-outs, riots, lock-outs, rebellion or acts of civil or military authority or governmental actions, and other similar occurrences.</p>
                        <p><strong>"Intellectual Property Rights"</strong> means any (i) names, logos, registered and unregistered trademarks, and service marks, (ii) patents and patent applications, (iii) business methods, inventions, and discoveries that may be patentable, (iv) software and computer code, and (v) copyrights in both published works and unpublished works. Intellectual Property Rights shall include all Intellectual Property Rights registered under the Bank's name, duly licensed to the Bank by an affiliate or subsidiary of the Bank or by a third party.</p>
                        <p><strong>“Linked Device”</strong> means an internet-enabled mobile device/s paired with a Username for logging in to the BPI Mobile app. The linking of the mobile device/s of an authorized user with his/her Username is authenticated using the OTP. Mobile device/s may be linked to only one Username at any given time. As such, only the Username linked via OTP to the mobile device/s may log in to the BPI Mobile app installed in the said mobile device/s.</p>
                        <p><strong>“Login Credentials”</strong> means my Username and Password.</p>
                        <p><strong>“Mobile Key”</strong> means one of the Bank’s authentication methods and the authorized user’s alternative to the OTP to authenticate and authorize online banking transactions, which allows the authorized user to complete his/her transactions using biometrics (fingerprint or facial ID) or a PIN.</p>
                        <p><strong>“Nominated Account”</strong> means any one of the authorized user’s Enrolled Account/s that the authorized user has elected as subject of the specific transaction being processed by the authorized user through the BPI Online Banking Services.</p>
                        <p><strong>“One-Time PIN”</strong> means one of the Bank’s authentication methods and also referred to as the “OTP”, which is a security code that is only valid for a single transaction and is intended to add an extra layer of security. For each transaction wherein the OTP is required by the Bank, the OTP is sent via text message to the authorized user’s Registered Mobile Number and the authorized user will be prompted by the online banking facility to directly input the OTP on the space provided therein in order to authorize, confirm and complete the corresponding transaction.</p>
                        <p><strong>"Password"</strong> means a string of special characters, letters, and/or numbers, created and nominated by the authorized user, which when used in conjunction with the Username, serves as the authorized user’s unique identification for the purpose of authenticating and accessing any and all the BPI Online Banking Services.</p>
                        <p><strong>“PIN”</strong> means the personal identification number nominated by the authorized user.</p>
                        <p><strong>“Push notification”</strong> means an automated message sent to client’s mobile device which may include announcements, account and transaction notifications, marketing messages and location-based alerts, among others.</p>
                        <p><strong>“Registered Mobile Number”</strong> refers to the mobile number provided by the authorized user to BPI and is the mobile number reflected in the authorized user’s Bank documents, such as the signature card and the personal information sheet, as such documents may be updated by the authorized user from time to time in accordance with the Bank’s information updating guidelines. Any OTP, as defined herein, to be sent by the Bank will be sent to this mobile number. Local and international mobile numbers may be elected as an authorized user’s registered mobile number.</p>
                        <p><strong>"Username"</strong> means a string of special characters, letters, and/or numbers nominated by the authorized user, which when used in conjunction with the Password, serves as the authorized user’s single unique identification for the purpose of authenticating and accessing any and all of the BPI Online Banking Services.</p>
                    </SubSection>
                    <SubSection title="1.2 Headings used herein are for convenience and reference only and shall not affect the meaning or interpretation of this Agreement.">
                        <p>Unless the context otherwise requires, words denoting the singular shall include the plural and vice versa, and words denoting persons shall include individuals, corporations, partnerships, joint ventures, trusts, unincorporated organizations and any political subdivision, agency or instrumentality. Any reference to a law or statute shall be construed as a reference to such law or statute as the same may have been, or may from time to time be, amended, substituted or re-enacted.</p>
                    </SubSection>
                </>
            )
        },
        {
            title: "2. ACCESS TO BPI ONLINE BANKING SERVICES",
            content: (
                <>
                    <p><strong>2.1</strong> The Bank has provided sufficient instructions and/or guidelines on how to use the BPI Online Banking Services... I hereby hold the Bank free and harmless, and shall indemnify/reimburse the Bank, from any and all claims, liabilities, costs, payments, damages and expenses, arising from or in connection with my access and use of an internet connection and/or the internet-enabled device, including the Linked Device and the web browser.</p>
                    <p><strong>2.2</strong> Through the BPI Online Banking Services that may be provided by the Bank under this Agreement, I may be able to access any of my Enrolled Account/s through the BPI Website and/or the BPI Mobile app using my Login Credentials or, for the BPI Mobile app, my biometrics, provided that in the latter case, only if and when Biometric Login is available and enabled.</p>
                    <p><strong>2.3</strong> Although the BPI Online Banking Services are designed to be accessible seven (7) days a week, twenty-four (24) hours a day, I understand and accept that, at certain times, any one, some or all of the BPI Online Banking Services may not be available due to Force Majeure, system maintenance or system downtime... I agree that the Bank shall in no event be held liable for any delay, non-performance or failure to perform any of its obligations under this Agreement, as well as any and all claims, liabilities, costs, payments, damages and expenses, for reasons due to, arising from or in connection with, directly or indirectly, any such Force Majeure, scheduled and announced system maintenance or system downtime.</p>
                    <p><strong>2.4</strong> I further agree that should I register any of my Accounts as an Enrolled Account, the Bank, at its option, is authorized to automatically register any and all my other Account/s and link with the earlier registered Enrolled Account, without need for further authorization or consent on my part... The Bank, however, reserves the right, at its discretion, to require my manual enrollment to the BPI Online Banking Services of my other Account/s, regardless of whether such an Account is linked with any of the existing registered Enrolled Account/s, as it may deem fit and appropriate.</p>
                    <p><strong>2.5</strong> I agree that by registering and/or enrolling any, some, or all my Account/s to the BPI Online Banking Services, I likewise authorize all other products under my name such as, but not limited to, my BPI / BFSB credit cards and/or loans to be automatically viewable whenever BPI Online Banking Services are accessed using my Login Credentials or Biometrics Login... I agree to hold the Bank free and harmless and keep indemnified from any and all liabilities, damages, claims, suits, costs, assessments and expenses arising from or in connection therewith.</p>
                    <p><strong>2.6</strong> As the Bank may require me to input an OTP in order for me to complete my transaction/s via any, some or all of the BPI Online Banking Services, I agree to immediately update the Bank of any changes to my Registered Mobile Number in accordance with the Bank’s information updating guidelines... I hereby agree that in no event shall the Bank be held liable for sending any such OTP/s to the mobile number reflected as my Registered Mobile Number in the Bank’s records at the time the Bank sent such OTP/s.</p>
                    <p><strong>2.7</strong> The Bank reserves the right and is authorized to suspend, terminate, remove, disable or discontinue access to or use of the BPI Online Banking Services (or any part thereof) at any time without prior notice... In any such event, I agree that the Bank shall in no event be liable to me or any person for any and all claims, liabilities, costs, payments, damages and expenses, arising from or in connection with the suspension, termination, removal, disabling or discontinuance of the BPI Online Banking Services (or any part thereof).</p>
                    <p><strong>2.8</strong> The Bank reserves the right and is authorized, in its sole discretion, to initiate reversal of a transaction and debit and/or cause the debiting of my Account/s at any time and with notice in case (i) a deposit, credit or any inward flow of funds appears to be due to an error or mistake; (ii) there is a written claim that said transaction is a result of a fraudulent act... or (iv) such other circumstances or cases analogous or similar to any of the foregoing.</p>
                </>
            )
        },
        {
            title: "3. USE OF PASSWORD, BIOMETRIC LOGIN AND OTHER AUTHENTICATION METHOD/S",
            content: (
                <>
                    <p><strong>3.1</strong> I agree not to let anyone know of my Password. It is understood that the Password is known only to me and as such, any transaction using my Password shall be binding upon me...</p>
                    <p><strong>3.2</strong> I agree to assume full responsibility for all transactions made in my Enrolled Account/s through the use of my Login Credentials, Biometric Login, and any of the Bank’s authentication method/s...</p>
                    <p><strong>3.3</strong> I agree to secure at all times all my Linked Devices and immediately inform the Bank through its established guidelines and procedures if any of those devices are no longer in my possession...</p>
                    <p><strong>3.4</strong> If Biometric Login is enabled on my BPI Mobile app, I agree that any biometrics saved in my Linked Device’s settings can be used to access the BPI Online Banking Services and my Enrolled Account/s...</p>
                    <p><strong>3.5</strong> I further agree and undertake to change my Password from time to time as I deem necessary... Should I determine that my Password has been compromised, I shall immediately change my Password through BPI Online Banking Services’ Password Reset facility...</p>
                    <p><strong>3.6</strong> I agree that the Bank, at its sole discretion, is entitled to act on the instructions received via any and all of the BPI Online Banking Services which the Bank reasonably believes emanated from me...</p>
                </>
            )
        },
    ];

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4" 
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="terms-of-service-title"
        >
            <div 
                className="bg-white rounded-lg shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col" 
                onClick={(e) => e.stopPropagation()}
            >
                <header className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-lg">
                    <h1 id="terms-of-service-title" className="text-2xl font-bold text-gray-900">Terms and Services</h1>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 transition-colors" aria-label="Close Terms of Service">
                        <CloseIcon className="w-7 h-7" />
                    </button>
                </header>
                <main className="overflow-y-auto p-6">
                     <div className="text-gray-600 space-y-4">
                        <p>This Online Banking Terms and Conditions (the “Online Banking Terms and Conditions” or “Agreement”) sets forth the specific terms and conditions which shall govern my use and operation of the BPI Online Banking Services, as below defined, of Bank of the Philippine Islands (the “Bank”), its website, applications and offerings. By availing of or using the BPI Online Banking Services, I (also referred in this Agreement as the “authorized user” or “client”) agree to be bound by and accept these Online Banking Terms and Conditions.</p>
                        {sections.map(section => (
                            <Section key={section.title} title={section.title}>
                                {section.content}
                            </Section>
                        ))}
                         <Section title="4. BPI ONLINE BANKING SERVICES to 17. GOVERNING LAW AND VENUE">
                            <p>The remaining sections covering BPI Online Banking Services details, Partners, Customer Service, Communications, and other legal agreements have been omitted for brevity but would be included in a full implementation.</p>
                        </Section>
                        <div className="mt-6 flex items-start">
                            <input id="terms" name="terms" type="checkbox" className="h-4 w-4 mt-1 rounded border-gray-300 text-bpi-red focus:ring-bpi-red" required />
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="text-gray-500">
                                    I agree to the 
                                    
                                        Terms of Service
                                    
                                </label>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

import React from 'react';
import { Page } from '../types';

interface OpenBankingPageProps {
  setCurrentPage: (page: Page) => void;
}

const DocSection: React.FC<{ title: string; children: React.ReactNode; isFirst?: boolean }> = ({ title, children, isFirst = false }) => (
    <section className={isFirst ? "mt-2" : "mt-10"}>
        <h2 className="text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200">{title}</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">{children}</div>
    </section>
);

const SubHeading: React.FC<{ title: string; children?: React.ReactNode }> = ({ title, children }) => (
    <>
        <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">{title}</h3>
        {children}
    </>
);

const CodeBlock: React.FC<{ code: string; language?: string }> = ({ code, language = 'json' }) => (
    <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto text-sm font-mono my-4">
        <code>{code.trim()}</code>
    </pre>
);

const DocTable: React.FC<{ headers: string[]; children: React.ReactNode }> = ({ headers, children }) => (
    <div className="overflow-x-auto my-4 border border-gray-200 rounded-md">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    {headers.map(header => (
                        <th key={header} scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-sm">
                {children}
            </tbody>
        </table>
    </div>
);

export const OpenBankingPage: React.FC<OpenBankingPageProps> = ({ setCurrentPage }) => {
    return (
        <main className="bg-white text-gray-800 font-sans">
             <div className="bg-purple-100 border-b border-purple-200">
                <div className="container mx-auto px-6 py-4">
                    <p className="text-sm text-purple-800">
                        <button onClick={() => setCurrentPage('documentation')} className="font-semibold hover:underline">Documentation</button>
                        <span className="mx-2">/</span>
                        <span className="text-gray-600">Open Banking Core API</span>
                    </p>
                </div>
            </div>
            <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-6">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-none">
                    <h1 className="text-4xl font-black text-gray-900 mb-2">BPI PARTNER API 2.0</h1>
                    <p className="text-lg text-gray-500 mb-8">API Contract 2.0.16</p>

                    <DocSection title="Revision History">
                        <DocTable headers={["Version", "Date", "Author", "Changes"]}>
                            <tr><td className="px-4 py-2">1.0.2</td><td className="px-4 py-2">01/15/2024</td><td className="px-4 py-2">Marc Amorsolo</td><td className="px-4 py-2">Initial Draft</td></tr>
                            <tr><td className="px-4 py-2">1.0.3</td><td className="px-4 py-2">01/22/2024</td><td className="px-4 py-2">Marc Amorsolo</td><td className="px-4 py-2">Re-sized Scope/s and basepaths</td></tr>
                            <tr><td className="px-4 py-2">1.0.4</td><td className="px-4 py-2">02/12/2024</td><td className="px-4 py-2">Marc Amorsolo</td><td className="px-4 py-2">Added Reversal to the FundTopUp Journey</td></tr>
                            <tr><td className="px-4 py-2">1.0.5</td><td className="px-4 py-2">03/18/2024</td><td className="px-4 py-2">Marc Amorsolo</td><td className="px-4 py-2">Removed reversal on the FundTopUp Journey</td></tr>
                        </DocTable>
                    </DocSection>

                    <DocSection title="Open Banking">
                        <p>The Open Banking initiative, is a BPI initiated project to build an Open API infrastructure to meet following business requirement(s):</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Enable third party developers to build applications and services around the financial institution.</li>
                            <li>Enable access to third party partners to consume bank services.</li>
                        </ul>
                    </DocSection>

                    <DocSection title="Benefits of Open Banking">
                        <p>Open Banking is a secure way to give Partners access to Bank's financial information. This opens a way to new products and services, improved customer experience, new revenue streams, and a sustainable service model that could help small to medium-sized businesses to get a better deal.</p>
                    </DocSection>

                    <DocSection title="Partner On-Boarding">
                        <SubHeading title="Prerequisites">
                            <p>UAT / PROD</p>
                            <ol className="list-decimal pl-6 space-y-2 mt-2">
                                <li>Public IPs (for IP Whitelisting)</li>
                                <li>Public Certificate</li>
                                <li>re-direct URIs</li>
                                <li>Merchant details</li>
                                <li>Partner API Checklist</li>
                                <li>VPN form (for VPN connection)</li>
                            </ol>
                        </SubHeading>
                        <SubHeading title="Firewall Policies">
                            <p>Please ensure that the following address names are whitelisted in your firewall:</p>
                            <DocTable headers={["IP", "Description"]}>
                                <tr><td className="px-4 py-2 font-mono" colSpan={2}><b>OAuth</b></td></tr>
                                <tr><td className="px-4 py-2 font-mono">oauth-uat.bpi.com.ph</td><td className="px-4 py-2">UAT OAuth provider (This should be accessed via an IP not Whitelisted to BPI) (203.161.188.227)</td></tr>
                                <tr><td className="px-4 py-2 font-mono">oauth-prod.bpi.com.ph</td><td className="px-4 py-2">Production OAuth provider (This should be accessed via an IP not Whitelisted to BPI) (203.161.188.179)</td></tr>
                                <tr><td className="px-4 py-2 font-mono" colSpan={2}><b>Transactional</b></td></tr>
                                <tr><td className="px-4 py-2 font-mono">api-uat.bpi.com.ph</td><td className="px-4 py-2">API UAT Gateway (203.161.188.234)</td></tr>
                                <tr><td className="px-4 py-2 font-mono">api-prod.bpi.com.ph</td><td className="px-4 py-2">Production API Gateway (203.177.34.241)</td></tr>
                            </DocTable>
                        </SubHeading>
                        <SubHeading title="Connection Details">
                            <p>After undergoing through business requirements and a technical assessment from BPI, partners can start integration activities with BPI. A site to site VPN is one of the standard connectivity and security requirement for a BPI partner connection. After policies are in place, the API key which consists of the client id and the client secret would be provided. However in order for a customer transactions to successfully push through, customer authorization would need to be granted via the Oauth v2 protocol. There is also a registration process for the customer to grant access to the application provider.</p>
                            <p>An alternative method of establishing connectivity is through an IP whitelisted connection.</p>
                        </SubHeading>
                    </DocSection>

                    <DocSection title="3-Legged OAuth">
                        <p>OAuth 2.0 is a protocol that allows a user to grant limited access to BPI Partner API without exposing their credentials.</p>
                        <p>All BPI APIs which has Customer data are secured using OAuth 2.0 - Authorization code grant.</p>
                        <SubHeading title="High level flow for Authorization Code Grant:">
                            <ol className="list-decimal pl-6 space-y-2">
                                <li>Partner application opens a browser/webview and opens the /authorize endpoint of BPI</li>
                                <li>BPI login page is presented to the User</li>
                                <li>User enters the BPI Online Banking Credentials and Accepts the terms and conditions</li>
                                <li>The User is redirected back to Partner application - redirect URL with an authorization code query parameter</li>
                                <li>Partner application then calls the /token endpoint of BPI to retrieve the access token based on the authorization code</li>
                            </ol>
                        </SubHeading>
                        <SubHeading title="[GET] /authorize">
                            <p>This endpoint yields BPI login page where the user is required to provide the BPI Online Banking Credentials and Accepts the terms and conditions.</p>
                            <DocTable headers={["Parameter Name", "Data Type", "Description", "Sample Value"]}>
                                <tr><td className="px-4 py-2">client_id</td><td className="px-4 py-2">String</td><td className="px-4 py-2">Client Id issued as part of the onboarding</td><td className="px-4 py-2 font-mono">asf-8g2f-of15-4e62-9070-ege6e8gfgcae</td></tr>
                                <tr><td className="px-4 py-2">response_type</td><td className="px-4 py-2">String</td><td className="px-4 py-2">Identifies Authorization code grant - <b>code</b></td><td className="px-4 py-2 font-mono">code</td></tr>
                                <tr><td className="px-4 py-2">scope</td><td className="px-4 py-2">String</td><td className="px-4 py-2">Identifies Features/APIs for which Partner is requesting access. Values are spaces separated</td><td className="px-4 py-2 font-mono">transactionalAccountsForBillsPay fundTopUp</td></tr>
                                <tr><td className="px-4 py-2">redirect_uri</td><td className="px-4 py-2">String</td><td className="px-4 py-2">URL for redirection. Registered as part of onboarding</td><td className="px-4 py-2 font-mono">https://localhost</td></tr>
                                <tr><td className="px-4 py-2">state</td><td className="px-4 py-2">String</td><td className="px-4 py-2">An (optional) parameter used by the application to store request-specific data. State parameter should not contain any sensitive information as they might be stored in the browser's history and server access logs (as a reminder, the state is transmitted via a query parameters). The state parameter should be seeded with a secure random (this avoids CSRF attacks)</td><td className="px-4 py-2 font-mono">xcoivjuywkdflhvusyegkch</td></tr>
                            </DocTable>
                        </SubHeading>
                         <SubHeading title="[POST] /token">
                            <p>This endpoint completes the 3-Oauth workflow and allows to generate access token based on the Authorization Code. Access token expiry is 30 minutes. Refresh token is valid for 30 days, and can be used to generate a maximum of 1000 access tokens.</p>
                            <CodeBlock code={`curl -X POST \\
    https://REPLACE_WITH_ADDRESS/{basepath}/token \\
    -H 'Content-Type: application/x-www-form-urlencoded' \\
    -d 'client_id=REPLACE_WITH_CLIENT_ID&client_secret=REPLACE_WITH_CLIENT_SECRET&grant_type=authorization_code&code=REPLACE_WITH_CODE '`} language="bash"/>
                        </SubHeading>
                    </DocSection>

                    <DocSection title="Accounts">
                        <SubHeading title="Base path for Accounts">
                             <CodeBlock code={`/bpi/api`} language="text" />
                        </SubHeading>
                        <SubHeading title="[GET] /transactionalAccounts">
                            <p>This endpoint returns the list of active Consumer and Savings accounts for the Client held with BPI.</p>
                            <h4 className="font-semibold mt-4">Header</h4>
                            <DocTable headers={["Parameter Name", "Data Type", "Description", "Sample Value"]}>
                                <tr><td className="px-4 py-2">Authorization</td><td className="px-4 py-2">String</td><td className="px-4 py-2">Bearer access token</td><td className="px-4 py-2 font-mono">Bearer a-AbC123...</td></tr>
                                <tr><td className="px-4 py-2">x-ibm-client-id</td><td className="px-4 py-2">String</td><td className="px-4 py-2">Client ID issued as part of the onboarding</td><td className="px-4 py-2 font-mono">...</td></tr>
                            </DocTable>
                             <h4 className="font-semibold mt-4">Sample Response (HTTP Code: 200)</h4>
                             <CodeBlock code={`{
    "status": "success",
    "code": "0",
    "description": "Success",
    "body": {
        "transactionalAccounts": [
            {
                "accountNumber": "533XXXXX7899",
                "accountNumberToken": "933ef8e8722b0761cdc8efba0dd40b9a",
                "displayOrder": "001",
                "accountPreferredName": "MY CHECKING ACCOUNT",
                "institution": "BPI",
                "accountType": "CHECKING ACCOUNT"
            }
        ]
    }
}`} />
                        </SubHeading>
                    </DocSection>

                     <DocSection title="Fund Top Up">
                        <SubHeading title="Base path for Fund To Up">
                            <CodeBlock code={`/api/fundTopUp`} language="text" />
                        </SubHeading>

                        <SubHeading title="[POST] /initiate">
                            <p>This endpoint initiates the fund top up process...</p>
                            <DocTable headers={["Field Name", "Required", "Data Type", "Length", "Description"]}>
                                <tr><td className="px-4 py-2">merchantTransactionReference</td><td className="px-4 py-2">Yes</td><td className="px-4 py-2">String</td><td className="px-4 py-2">50</td><td className="px-4 py-2">Unique transaction reference from the merchant</td></tr>
                                <tr><td className="px-4 py-2">accountNumberToken</td><td className="px-4 py-2">Yes</td><td className="px-4 py-2">String</td><td className="px-4 py-2">60-1000</td><td className="px-4 py-2">Token for the account number</td></tr>
                                <tr><td className="px-4 py-2">amount</td><td className="px-4 py-2">Yes</td><td className="px-4 py-2">String</td><td className="px-4 py-2">100</td><td className="px-4 py-2">Amount in Local Currency</td></tr>
                            </DocTable>
                        </SubHeading>
                    </DocSection>
                </div>
            </div>
        </div>
        </main>
    );
};

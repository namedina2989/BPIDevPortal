
import React, { useState } from 'react';
import { Page } from '../types';
import { ChevronDownIcon, QuestionMarkCircleIcon } from '../components/Icons';
import { ApiPlayground } from '../components/ApiPlayground';

interface BillsPaymentPageProps {
  setCurrentPage: (page: Page) => void;
}

const jsonRequestSample = `{
  "senderRefId": "12345678",
  "tranRequestDate": "2015-10-03T15:29:16.333",
  "biller": {
    "id": "1234",
    "name": "Telecom Biller"
  },
  "amount": {
    "currency": "PHP",
    "value": "100"
  },
  "remarks": "Payment remarks",
  "particulars": "Payment particulars",
  "references": [
    {
      "index": "1",
      "name": "VISA Card Number",
      "value": "4079253400002323"
    }
  ]
}`;

const curlRequestSample = `curl -X POST \\
  https://api.bpi.com.ph/partners/v2/payments/single \\
  -H 'Authorization: Bearer <token>' \\
  -H 'x-ibm-client-id: <client-id>' \\
  -H 'x-ibm-client-secret: <client-secret>' \\
  -H 'x-partner-id: <partner-id>' \\
  -H 'Content-Type: application/json' \\
  -d '${jsonRequestSample.replace(/\n/g, '')}'`;

const jsonResponse200 = `{
  "ubpTranId": "UB2541110131423",
  "createdAt": "2015-10-03T15:29:16.333",
  "state": "Payment Succesful",
  "senderRefId": "12345678"
}`;

const jsonResponse400 = `{
  "errors": [
    {
      "code": "400",
      "message": "Bad Request",
      "description": "The request could not be understood by the server due to malformed syntax."
    }
  ]
}`;


const ParameterRow: React.FC<{
    name: string;
    type: string;
    required?: boolean;
    description?: string;
    children?: React.ReactNode;
    isCollapsible?: boolean;
    level?: number;
}> = ({ name, type, required = false, description, children, isCollapsible = false, level = 0 }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="grid grid-cols-12 gap-4 py-3 border-b border-gray-200 text-sm">
                <div className="col-span-4" style={{ paddingLeft: `${level * 24}px` }}>
                    <div className="flex items-center">
                        {isCollapsible ? (
                            <button onClick={() => setIsOpen(!isOpen)} className="mr-1 text-gray-500">
                                <ChevronDownIcon className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-0' : '-rotate-90'}`} />
                            </button>
                        ) : (
                            <span className="w-4 inline-block mr-1 text-gray-400">{level > 0 && '└'}</span>
                        )}
                        <span className="font-mono text-gray-700 font-medium">{name}</span>
                    </div>
                </div>
                <div className="col-span-3 text-gray-500 font-mono">{type} {required && <span className="text-red-500 font-bold ml-2">Required</span>}</div>
                <div className="col-span-5 text-gray-600">
                    {description}
                </div>
            </div>
            {isCollapsible && isOpen && <div className="border-l border-gray-200">{children}</div>}
        </div>
    );
};

const ResponseBlock: React.FC<{
    statusCode: string;
    statusText: string;
    color: 'green' | 'red';
    children: React.ReactNode;
}> = ({ statusCode, statusText, color, children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const colorClasses = {
        green: 'bg-green-50 text-green-800',
        red: 'bg-red-50 text-red-800'
    };

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)} className={`w-full flex items-center justify-between p-3 rounded-t-md ${colorClasses[color]}`}>
                <div className="flex items-center font-bold">
                    <ChevronDownIcon className={`w-4 h-4 mr-3 transition-transform ${isOpen ? 'rotate-0' : '-rotate-90'}`} />
                    <span>{statusCode} {statusText}</span>
                </div>
            </button>
            {isOpen && (
                <div className="border border-t-0 border-gray-200 rounded-b-md p-4">
                    {children}
                </div>
            )}
        </div>
    );
};

const CodeSamplePanel: React.FC = () => {
    const [activeRequestTab, setActiveRequestTab] = useState('json');
    const [activeResponseTab, setActiveResponseTab] = useState('200');

    return (
        <div className="sticky top-24 bg-[#2d3748] text-white rounded-lg p-6">
            <div>
                <div className="flex justify-between items-center mb-4">
                    <select className="bg-gray-800 border border-gray-600 rounded-md py-2 px-3 text-sm w-full focus:ring-bpi-red focus:border-bpi-red">
                        <option>POST /partners/v2/payments/single</option>
                    </select>
                </div>
                <h3 className="font-bold text-lg">Request Sample</h3>
                <div className="mt-2 flex space-x-1 bg-gray-900 p-1 rounded-md">
                    <button onClick={() => setActiveRequestTab('json')} className={`w-full text-center text-sm font-semibold py-1.5 rounded ${activeRequestTab === 'json' ? 'bg-red-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>JSON</button>
                    <button onClick={() => setActiveRequestTab('curl')} className={`w-full text-center text-sm font-semibold py-1.5 rounded ${activeRequestTab === 'curl' ? 'bg-yellow-500 text-black' : 'text-gray-300 hover:bg-gray-700'}`}>cURL</button>
                </div>
                <div className="mt-2 bg-black rounded p-4 text-xs font-mono overflow-x-auto max-h-80">
                    <pre><code>{activeRequestTab === 'json' ? jsonRequestSample : curlRequestSample}</code></pre>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="font-bold text-lg">Response Sample</h3>
                <div className="mt-2 flex space-x-1 bg-gray-900 p-1 rounded-md">
                    <button onClick={() => setActiveResponseTab('200')} className={`w-full text-center text-sm font-semibold py-1.5 rounded ${activeResponseTab === '200' ? 'bg-red-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>200</button>
                    <button onClick={() => setActiveResponseTab('400')} className={`w-full text-center text-sm font-semibold py-1.5 rounded ${activeResponseTab === '400' ? 'bg-yellow-500 text-black' : 'text-gray-300 hover:bg-gray-700'}`}>400</button>
                </div>
                <div className="mt-2 bg-black rounded p-4 text-xs font-mono overflow-x-auto max-h-60">
                    <pre><code>{activeResponseTab === '200' ? jsonResponse200 : jsonResponse400}</code></pre>
                </div>
            </div>
        </div>
    );
};

const BillsPaymentDocumentation: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-7">
                    <div className={`relative transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[9999px]' : 'max-h-[1200px] overflow-hidden'}`}>
                        {/* Header */}
                        <section>
                            <div className="flex space-x-4 mb-4">
                                <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-md">POST</span>
                                <span className="text-gray-800 font-semibold">Pay bills online via partners</span>
                            </div>
                            <div className="flex space-x-4">
                                <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-md">GET</span>
                                <span className="text-gray-800 font-semibold">Inquire billing company details</span>
                            </div>
                            <h1 className="text-4xl font-bold text-red-600 mt-6">Partner Bills Payment</h1>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </section>

                        {/* Parameters */}
                        <section className="mt-12">
                            <h2 className="text-3xl font-bold mb-4">Parameters</h2>
                            <div className="flex items-center space-x-2 mb-4">
                                <h3 className="text-xl font-semibold text-gray-700">Header Parameters</h3>
                                <QuestionMarkCircleIcon className="w-5 h-5 text-gray-400" />
                            </div>
                            <div className="border border-gray-200 rounded-md">
                                <ParameterRow name="accept" type="string" required description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                                <ParameterRow name="content-type" type="string" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                                <ParameterRow name="x-ibm-client-id" type="string" required description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                                <ParameterRow name="x-ibm-client-secret" type="string" required description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                                <ParameterRow name="authorization" type="string" required description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                                <ParameterRow name="x-partner-id" type="string" required description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                            </div>
                        </section>

                        {/* Request Body */}
                        <section className="mt-12">
                            <h3 className="text-xl font-semibold text-gray-700 border-t pt-6">REQUEST BODY</h3>
                            <p className="mt-2 text-gray-600">Payment object that includes payment details</p>
                            <div className="mt-4 border border-gray-200 rounded-md">
                                <ParameterRow name="senderRefId" type="string" />
                                <ParameterRow name="tranRequestDate" type="string" />
                                <ParameterRow name="biller" type="biller" isCollapsible>
                                    <ParameterRow name="id" type="string" level={1} />
                                    <ParameterRow name="name" type="string" level={1} />
                                </ParameterRow>
                                <ParameterRow name="amount" type="amount" isCollapsible>
                                    <ParameterRow name="currency" type="string" level={1} />
                                    <ParameterRow name="value" type="string" level={1} />
                                </ParameterRow>
                                <ParameterRow name="remarks" type="string" />
                                <ParameterRow name="particulars" type="string" />
                                <ParameterRow name="references" type="Array of object" isCollapsible>
                                    <ParameterRow name="index" type="string" level={1} />
                                    <ParameterRow name="name" type="string" level={1} />
                                    <ParameterRow name="value" type="string" level={1} />
                                </ParameterRow>
                            </div>
                        </section>

                        {/* Responses */}
                        <section className="mt-12">
                            <h2 className="text-3xl font-bold mb-4">Responses</h2>
                            <div className="space-y-4">
                                <ResponseBlock statusCode="201" statusText="Created" color="green">
                                    <h4 className="font-semibold mb-2">RESPONSE SCHEMA</h4>
                                    <div className="border border-gray-200 rounded-md">
                                        <ParameterRow name="ubpTranId" type="string" />
                                        <ParameterRow name="createdAt" type="string" />
                                        <ParameterRow name="state" type="string" />
                                        <ParameterRow name="senderRefId" type="string" />
                                    </div>
                                </ResponseBlock>
                                <ResponseBlock statusCode="403" statusText="Forbidden" color="red">
                                    <h4 className="font-semibold mb-2">RESPONSE SCHEMA</h4>
                                    <div className="border border-gray-200 rounded-md">
                                        <ParameterRow name="errors" type="Array of object" isCollapsible>
                                                <ParameterRow name="code" type="string" level={1} />
                                                <ParameterRow name="message" type="string" level={1} />
                                                <ParameterRow name="description" type="string" level={1} />
                                        </ParameterRow>
                                    </div>
                                </ResponseBlock>
                            </div>
                        </section>
                        
                            {!isExpanded && <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white to-transparent pointer-events-none" />}
                    </div>
                    
                    <div className="mt-8 text-center">
                        <button 
                            onClick={() => setIsExpanded(!isExpanded)} 
                            className="text-bpi-red font-bold py-2 px-6 border-2 border-bpi-red rounded-full hover:bg-bpi-red hover:text-white transition-all duration-300"
                        >
                            {isExpanded ? 'See Less' : 'See More'}
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-5 mt-12 lg:mt-0">
                    <CodeSamplePanel />
                </div>
            </div>
        </div>
    );
}

// --- Components for API Contract Page ---

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

const BillsPaymentApiContract: React.FC = () => {
    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-6">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-none">
                    <h1 className="text-4xl font-black text-gray-900 mb-2">BPI PARTNER API 2.0</h1>
                    <p className="text-lg text-gray-500 mb-8">API Contract 2.0.16</p>

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
                </div>
            </div>
        </div>
    );
};

const billsPaymentHistoryData = [
    {
        version: "v2.0.16",
        date: "March 15, 2024",
        description: "Added support for new biller categories and enhanced the validation for reference numbers to reduce payment errors.",
    },
    {
        version: "v2.0.15",
        date: "January 10, 2024",
        description: "Implemented additional security checks and improved the error messaging for failed transactions.",
    },
    {
        version: "v2.0.14",
        date: "November 05, 2023",
        description: "Initial release of the Partner Bills Payment API, enabling third-party partners to facilitate bill payments.",
    },
];

const BillsPaymentApiHistory: React.FC = () => {
    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-6">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b">Partner Bills Payment - API Version History</h1>
                    <div className="space-y-8">
                        {billsPaymentHistoryData.map((item, index) => (
                            <div key={index} className="flex flex-col sm:flex-row gap-6">
                                <div className="sm:w-1/4">
                                    <div className="flex items-center">
                                        <span className={`text-lg font-bold ${index === 0 ? 'text-bpi-red' : 'text-gray-800'}`}>{item.version}</span>
                                        {index === 0 && <span className="ml-3 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">Latest</span>}
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                                </div>
                                <div className="sm:w-3/4">
                                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                                    <button className="mt-3 text-sm font-semibold text-bpi-red hover:underline">
                                        View Documentation &rarr;
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


export const BillsPaymentPage: React.FC<BillsPaymentPageProps> = ({ setCurrentPage }) => {
    const [activeTab, setActiveTab] = useState('documentation');

    return (
        <main className="bg-white text-gray-800 font-sans">
             <div className="bg-purple-100 border-b border-purple-200">
                <div className="container mx-auto px-6 py-4">
                    <p className="text-sm text-purple-800">
                        <button onClick={() => setCurrentPage('documentation')} className="font-semibold hover:underline">Documentation</button>
                        <span className="mx-2">/</span>
                        <span className="text-gray-600">Partner Bills Payment</span>
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        <button
                            onClick={() => setActiveTab('documentation')}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                                activeTab === 'documentation'
                                    ? 'border-bpi-red text-bpi-red'
                                    : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
                            }`}
                        >
                            Documentation
                        </button>
                        <button
                            onClick={() => setActiveTab('playground')}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                                activeTab === 'playground'
                                    ? 'border-bpi-red text-bpi-red'
                                    : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
                            }`}
                        >
                            API Playground
                        </button>
                         <button
                            onClick={() => setActiveTab('contract')}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                                activeTab === 'contract'
                                    ? 'border-bpi-red text-bpi-red'
                                    : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
                            }`}
                        >
                            API Contract
                        </button>
                        <button
                            onClick={() => setActiveTab('history')}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                                activeTab === 'history'
                                    ? 'border-bpi-red text-bpi-red'
                                    : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
                            }`}
                        >
                            History
                        </button>
                    </nav>
                </div>
            </div>
            
            {activeTab === 'documentation' && <BillsPaymentDocumentation />}
            {activeTab === 'playground' && <ApiPlayground />}
            {activeTab === 'contract' && <BillsPaymentApiContract />}
            {activeTab === 'history' && <BillsPaymentApiHistory />}
        </main>
    );
};

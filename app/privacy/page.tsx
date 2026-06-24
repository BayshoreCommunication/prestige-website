import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Prestige Medical & Physical Therapy",
  description:
    "Read our Privacy Policy to understand how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 md:px-10 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-8 text-[#1a1a1a]">Privacy Policy</h1>

      {[
        {
          title: "1. Purpose of This Policy",
          text: `This Privacy Policy is designed to help you understand:</br></br>
<ul class="list-disc pl-10">          
<li>What information we collect and how we collect it</li></br>


<li>How that information is used and shared</li></br>


<li>How we store and protect your personal data</li></br>


<li>What rights you have regarding your information</li></br>


<li>How to contact us with questions or concerns</li></br> 
</ul>

We respect your trust and handle all information responsibly, in compliance with applicable privacy and data protection laws.
`,
        },
        {
          title: "2. Information We Collect",
          text: `We collect two main types of information: Personal Information and Non-Personal Information.</br></br>
<strong>A. Personal Information</strong/> </br></br>
Personal Information refers to data that can identify you personally, such as:</br></br>
<ul class="list-disc pl-10"> 
<li>Name, email address, and phone number</li></br>


<li>Mailing or billing address</li></br>


<li>Date of birth or age (if provided)</li></br>


<li>Health-related information voluntarily submitted through contact or appointment forms</li></br>


<li>Insurance information (only if shared during appointment scheduling)</li></br>


<li>Any other details you choose to provide through the website</li></br>
</ul>

You may provide this information when you:</br></br>
<ul class="list-disc pl-10"> 
<li>Fill out contact or appointment forms</li></br>


<li>Request information or subscribe to updates</li></br>


<li>Communicate with us via email or phone</li></br>


<li>Participate in promotions, surveys, or feedback forms</li></br>
</ul>

<strong>B. Non-Personal Information</strong></br></br>
This includes information that cannot identify you directly, such as:</br></br>

<ul class="list-disc pl-10"> 
<li>Browser type and version</li></br>


<li>Device information and operating system</li></br>


<li>IP address and general location data</li></br>


<li>Pages visited, time spent on site, and referral sources</li></br>


<li>Cookies and tracking data used for analytics</li></br>
</ul>

We use this data to improve site performance, monitor traffic patterns, and enhance user experience

`,
        },
        {
          title: "3. How We Collect Information",
          text: `We gather information through several methods:</br></br>
<ul class="list-disc pl-10">
<li>Directly from you: When you complete forms or communicate with us.</li></br>


<li>Automatically: Through browser cookies, log files, and analytics tools.</li></br>


<li>From third parties: Such as scheduling platforms, analytics services, or marketing partners that assist with website performance and appointment management.</li></br>
</ul>

All information is collected in accordance with applicable laws and used only for legitimate business purposes.

`,
        },
        {
          title: "4. How We Use Your Information",
          text: `
          We use collected information for the following purposes:</br></br>
<ol type="1" class="pl-10 list-decimal">
  <li>
    <strong>Patient Communication:</strong><br />
    To contact you regarding appointments, reminders, inquiries, or treatment-related updates.
  </li></br>

  <li>
    <strong>Service Improvement:</strong><br />
    To analyze site performance, identify user needs, and enhance our services and website design.
  </li></br>

  <li>
    <strong>Customer Support:</strong><br />
    To respond to your messages and provide assistance when needed.
  </li></br>

  <li>
    <strong>Legal Compliance:</strong><br />
    To comply with applicable healthcare, privacy, and data protection regulations.
  </li></br>

  <li>
    <strong>Marketing (optional):</strong><br />
    To send educational content, newsletters, or promotional updates, only if you have consented.
  </li></br>

  <li>
    <strong>Internal Recordkeeping:</strong><br />
    To maintain accurate business and patient records for service management.
  </li></br>
</ol>


We do not sell, rent, or trade your personal information under any circumstances.

`,
        },
        {
          title: "5. Legal Basis for Processing",
          text: `Depending on your location and applicable data laws, we process your information under the following legal bases:</br></br>
<ul class="list-disc pl-10"> 
<li><strong>Consent:</strong> When you voluntarily provide information through our forms or subscribe to communications.</li></br>


<li><strong>Contractual necessity:</strong> When data is required to fulfill a service request or appointment.</li></br>


<li><strong>Legitimate interest:</strong> For analytics, website improvement, and business operations.</li></br>


<li><strong>Legal obligation:</strong> When we must retain or disclose information for regulatory or legal purposes.</li>
`,
        },
        {
          title: "6. Cookies and Tracking Technologies",
          text: `Our website uses cookies and related technologies to enhance user experience and analyze traffic. Cookies are small files stored on your device that help us remember user preferences and optimize performance.</br></br>
We use:</br></br>
<ul class="list-disc pl-10">
<li><strong>Essential cookies</strong> to enable basic site functionality.</li></br>


<li><strong>Analytics cookies</strong> (e.g., Google Analytics) to understand how visitors interact with our site.</li></br>


<li><strong>Functional cookies</strong> to store preferences and settings.</li></br>
</ul>

You can manage or disable cookies through your browser settings. However, certain parts of the site may not function properly if you block them.</br></br>
We do not use cookies for intrusive advertising or behavioral tracking.

`,
        },
        {
          title: "7. Data Retention",
          text: `We retain personal information only for as long as necessary to fulfill the purposes described in this policy or as required by law.</br></br>
For example:</br></br>
<ul class="list-disc pl-10">
<li>Contact inquiries may be retained for up to one year.</li></br>


<li>Patient or appointment records are retained according to applicable healthcare retention laws.</li></br>


<li>Analytics data may be stored for shorter periods, depending on third-party provider settings.</li>

</ul>
`,
        },
        {
          title: "8. Data Security",
          text: `We take appropriate administrative, physical, and technical measures to protect your information from unauthorized access, loss, misuse, or alteration.</br></br>
Security measures include:</br></br>
<ul class="list-disc pl-10">
<li>Encrypted transmission of data (SSL/HTTPS)</li></br>


<li>Restricted internal access to personal information</li></br>


<li>Secure data storage and backup systems</li></br>


<li>Staff training on data protection practices</li></br>

</ul>
While we use industry-standard safeguards, no online system can guarantee 100% security. Users are encouraged to take precautions, such as avoiding sharing sensitive details via unsecured email.
.
`,
        },
        {
          title: "9. Sharing and Disclosure of Information",
          text: `We may share your personal data only in the following cases:</br></br>
<ul class="list-disc pl-10">
<li><strong>With service providers</strong> who help operate our website, schedule appointments, or process data securely.</li></br>


<li><strong>For legal reasons,</strong> when required by law, subpoena, or court order.</li></br>


<li><strong>To protect rights and safety,</strong> when disclosure is necessary to prevent fraud, security breaches, or harm to others.</li></br>


<li><strong>In business transfers,</strong> such as a merger or acquisition, where user information may be transferred as part of the transaction.</li></br>
</ul>

All third parties handling data on our behalf are required to protect it in compliance with applicable privacy standards.

`,
        },
        {
          title: "10. Third-Party Services and Links",
          text: `Our website may include links to third-party platforms, such as social media pages, scheduling portals, or health resources.</br></br>
We are not responsible for the privacy practices, policies, or content of these external sites. Once you leave our website, you are subject to the privacy policies of the third party. We encourage you to review those policies before sharing personal data

`,
        },
        {
          title: "11. Patient Health Information",
          text: `If you become a patient of Prestige Medical & Physical Therapy, your medical and health-related information is governed by federal privacy laws such as <strong>HIPAA (Health Insurance Portability and Accountability Act)</strong> in the United States.</br></br>
This Privacy Policy applies primarily to website visitors. A separate Notice of Privacy Practices is available at our clinic, which explains how we use and protect patient medical information as required by HIPAA regulations.
`,
        },
        {
          title: "12. Your Rights and Choices",
          text: `You have several rights concerning your personal data, depending on your location and applicable law:</br></br>
<ul class="list-disc pl-10">
<li><strong>Right to access:</strong> You may request a copy of the personal data we hold about you.</li></br>


<li><strong>Right to correction:</strong> You can ask us to update or correct inaccurate information.</li></br>


<li><strong>Right to deletion:</strong> You may request that we delete your information, subject to legal obligations.</li></br>


<li><strong>Right to withdraw consent:</strong> You may opt out of receiving marketing or communications at any time.</li></br>


<li><strong>Right to restriction:</strong> You may request limited processing under certain conditions.</li></br>


<li><strong>Right to portability:</strong> You can request a copy of your data in a structured, electronic format.</li></br>

</ul>

To exercise any of these rights, contact us using the information provided at the end of this policy. We may need to verify your identity before processing your request.

`,
        },
        {
          title: "13. Email Communications and Marketing",
          text: `If you subscribe to our email list, we may send newsletters, updates, or promotions related to our services. You can opt out at any time by clicking the “unsubscribe” link at the bottom of any email or by contacting us directly.</br></br>
We will not send marketing emails without your prior consent.
`,
        },
        {
          title: "14. Children’s Privacy",
          text: `Our website is not intended for children under the age of 13. We do not knowingly collect or store information from minors.</br></br>
If we become aware that we have collected personal information from a child under 13 without parental consent, we will delete it promptly. Parents or guardians who believe their child has provided such data may contact us for immediate action.

`,
        },
        {
          title: "15. International Users",
          text: `Our website is operated from the United States. If you are visiting from outside the U.S., please note that your information may be transferred to and processed in the U.S., where data protection laws may differ from those in your country.</br></br>
By using our website, you consent to the transfer and processing of your information in the United States in accordance with this Privacy Policy.

`,
        },
        {
          title: "16. Changes to This Privacy Policy",
          text: `Prestige Medical & Physical Therapy reserves the right to update or revise this Privacy Policy at any time. Any changes will be reflected with an updated “Effective Date” at the top of the page.</br></br>
We encourage visitors to check this page periodically to stay informed of how we protect and handle information. Continued use of our website after updates are posted will signify your acceptance of those changes.

`,
        },
        {
          title: "17. Contact Us",
          text: `If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact us:</br></br>
<strong>Prestige Medical & Physical Therapy</strong></br>
Email: prestigemedlmarketing@gmail.com</br>
Phone: (813) 243-2500</br>
Address: 8313 W. Hillsborough Ave. Suite 330 Tampa, FL 33615</br></br>
We will review your request and respond as promptly as possible.

`,
        },
        {
          title: "18. Acknowledgment",
          text: `By using our website, you acknowledge that you have read and understood this Privacy Policy and agree to its terms. You also acknowledge that online communications carry inherent risks, and you accept those risks when voluntarily submitting personal information through the website.
`,
        },
        {
          title: "19. Final Statement",
          text: `Prestige Medical & Physical Therapy is committed to protecting your privacy and ensuring transparency in how we handle information. We collect only what is necessary, use it responsibly, and protect it to the best of our ability.</br></br>
Your trust is essential to us. We will continue to evaluate and improve our privacy and security practices to maintain that trust.

`,
        },
      ].map((section, i) => (
        <section key={i} className="mb-8">
          <h2 className="text-2xl font-semibold text-[#222] mb-2">
            {section.title}
          </h2>
          {/* <p className="whitespace-pre-line text-gray-700">{section.text}</p> */}

          <div
            className="text-gray-700"
            dangerouslySetInnerHTML={{ __html: section.text }}
          />
        </section>
      ))}
    </main>
  );
}

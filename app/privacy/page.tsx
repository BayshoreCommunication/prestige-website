"use client";

// export const metadata = {
//   title: "Disclaimer | Prestige Medical & Physical Therapy",
//   description:
//     "Read the full Disclaimer outlining the terms, responsibilities, and limitations for using the Prestige Medical & Physical Therapy website.",
// };

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
          title: "2.Information We Collect",
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
          title: "3.How We Collect Information",
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
          title: "4.How We Use Your Information",
          text: `
          We use collected information for the following purposes:</br></br>
<ol type="1" class="pl-10">
<strong>Patient Communication:</strong></br>
 To contact you regarding appointments, reminders, inquiries, or treatment-related updates.</br></br>


<strong>Service Improvement:</strong></br>
 To analyze site performance, identify user needs, and enhance our services and website design.</br></br>


<strong>Customer Support:</strong></br>
 To respond to your messages and provide assistance when needed.</br></br>


<strong>Legal Compliance:</strong></br>
 To comply with applicable healthcare, privacy, and data protection regulations.</br></br>


<strong>Marketing (optional):</strong></br>
 To send educational content, newsletters, or promotional updates, only if you have consented.</br></br>


<strong>Internal Recordkeeping:</strong></br>
 To maintain accurate business and patient records for service management.</br></br>
</ol>

We do not sell, rent, or trade your personal information under any circumstances.

`,
        },
        {
          title: "5.Legal Basis for Processing",
          text: `Depending on your location and applicable data laws, we process your information under the following legal bases:</br></br>
<ul class="list-disc pl-10"> 
<li><strong>Consent:</strong> When you voluntarily provide information through our forms or subscribe to communications.</li></br>


<li><strong>Contractual necessity:</strong> When data is required to fulfill a service request or appointment.</li></br>


<li><strong>Legitimate interest:</strong> For analytics, website improvement, and business operations.</li></br>


<li><strong>Legal obligation:</strong> When we must retain or disclose information for regulatory or legal purposes.</li>
`,
        },
        {
          title: "6.Cookies and Tracking Technologies",
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
          title: "8.Data Security",
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
          title: "9.Sharing and Disclosure of Information",
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
          title: "11. Copyright and Intellectual Property",
          text: `All text, images, graphics, logos, videos, and other materials on this website are the property of Prestige Medical & Physical Therapy, unless otherwise noted. They are protected by copyright, trademark, and other intellectual property laws.</br></br>
You may download or print portions of the site for personal, non-commercial use only. You may not modify, reproduce, distribute, transmit, or create derivative works from any part of the site without prior written permission.</br></br>
Unauthorized use of the website’s materials may violate copyright and trademark laws and could result in legal consequences.
`,
        },
        {
          title: "12. User Responsibility",
          text: `By using this website, you agree to use it responsibly and only for lawful purposes. You must not attempt to gain unauthorized access to the site, interfere with its functionality, or upload harmful code.</br></br>
You are responsible for any consequences arising from your actions on this site, including reliance on information provided or content shared with others.
`,
        },
        {
          title: "13. No Substitute for In-Person Evaluation",
          text: `Every patient’s medical condition is unique. Online educational resources cannot replace an in-person evaluation by a licensed physical therapist or physician. Even with similar symptoms, two individuals may require completely different treatments.</br></br>
We encourage you to contact our clinic to schedule an evaluation for accurate assessment and a personalized care plan.
`,
        },
        {
          title: "14. Updates and Revisions",
          text: `This Disclaimer may be updated periodically to reflect new laws, organizational changes, or updated practices. The revised version will take effect immediately upon posting. We encourage you to review this page regularly to stay informed of any updates.</br></br>
Your continued use of the website after changes have been posted signifies your acceptance of those updates.
`,
        },
        {
          title: "15. Jurisdiction and Governing Law",
          text: `This Disclaimer and any dispute related to your use of the website shall be governed by and interpreted in accordance with the laws of the State of Florida, without regard to its conflict of law principles.</br></br>
Any disputes arising from or relating to this Disclaimer or website use shall be resolved exclusively in the appropriate state or federal courts located in Florida.
`,
        },
        {
          title: "16. Contact Information",
          text: `If you have any questions, concerns, or requests related to this Disclaimer or your use of the website, please contact us directly at:</br></br>
<strong>Prestige Medical & Physical Therapy</strong></br>
Email: prestigemedlmarketing@gmail.com</br>
Phone: (813) 243-2500</br>
Address: 8313 W. Hillsborough Ave. Suite 330 Tampa, FL 33615</br></br>
We value transparency and will make every effort to address inquiries promptly.
`,
        },
        {
          title: "17. Acceptance of Disclaimer",
          text: `By using this website, you acknowledge that you have read this Disclaimer, understand its terms, and agree to be bound by them. If you do not accept these terms, please refrain from using the site and any related services.</br></br>
Your continued use constitutes your ongoing acceptance of this Disclaimer and any future updates.
`,
        },
        {
          title: "18. Final Statement",
          text: `Prestige Medical & Physical Therapy is dedicated to patient care, education, and transparency. Our goal is to provide resources that empower visitors to make informed health decisions while emphasizing the importance of professional evaluation.</br></br>
This website is intended to supplement, not replace, in-person medical consultation. We encourage all users to take proactive steps toward their health by consulting licensed healthcare professionals for individualized guidance.
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

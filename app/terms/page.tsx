"use client";

// export const metadata = {
//   title: "Disclaimer | Prestige Medical & Physical Therapy",
//   description:
//     "Read the full Disclaimer outlining the terms, responsibilities, and limitations for using the Prestige Medical & Physical Therapy website.",
// };

export default function TermsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 md:px-10 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-8 text-[#1a1a1a]">Terms of Service</h1>

      {[
        {
          title: "1. Purpose of These Terms",
          text: `These Terms explain the rules that apply when you use our Website. They are meant to protect both you (the user) and Prestige Medical & Physical Therapy by setting clear expectations about what you can and cannot do, how your information is handled, and how we limit our liability.</br></br>
This agreement applies to all visitors, patients, and users who access the Website in any way, whether through a computer, tablet, mobile device, or another platform.
`,
        },
        {
          title: "2.Changes to the Terms",
          text: `Prestige Medical & Physical Therapy reserves the right to modify, update, or replace these Terms at any time without prior notice. The most current version will always be available on this page.</br></br>
Your continued use of the Website after any changes are posted means you accept the revised Terms. We encourage you to review this page regularly to stay informed.

`,
        },
        {
          title: "3.Eligibility",
          text: `To use this Website, you must be at least 18 years old or have permission from a parent or guardian. By using the Website, you confirm that you meet this requirement and that you agree to these Terms either for yourself or for the minor you represent.
`,
        },
        {
          title: "4.Website Content and Use",
          text: `
          The content on this Website, including text, images, graphics, videos, and educational material, is provided for informational and educational purposes only. It is not intended to be and should not be taken as medical advice, diagnosis, or treatment.</br></br>
You may view, download, or print materials for personal, non-commercial use, provided you do not remove any copyright or proprietary notices.</br></br>
You may not:</br></br>
<ul class="list-disc pl-10">
<li>Copy, reproduce, distribute, or sell any content from the Website without written permission.</li></br>


<li>Attempt to gain unauthorized access to the Website or its servers.</li></br>


<li>Upload malware, scripts, or harmful content.</li></br>


<li>Use the Website for any illegal, deceptive, or misleading activity.</li></br>
</ul>

Unauthorized use may result in termination of access and possible legal action.

`,
        },
        {
          title: "5. No Medical or Professional Relationship",
          text: `Using this Website does not create a doctor-patient or therapist-patient relationship between you and Prestige Medical & Physical Therapy or any member of our staff.</br></br>
All information provided here is general and does not account for your personal health condition or history. If you need medical advice, please contact a licensed healthcare provider or schedule an appointment with our clinic.

`,
        },
        {
          title: "6.Appointment Scheduling and Communications",
          text: `Our Website may include forms that allow you to request appointments or contact our office. Submitting a request does not guarantee a confirmed appointment. You will receive confirmation by phone or email from our staff once scheduling is finalized.</br></br>
We make every effort to respond quickly, but we cannot guarantee immediate replies or availability.</br></br>
Electronic messages sent through the Website are not encrypted unless stated otherwise. They may not be secure, so please avoid sending sensitive or confidential information through online forms unless requested by our staff.
`,
        },
        {
          title: "7.User Accounts (if applicable)",
          text: `If you create an account or use a portal to manage appointments, you are responsible for keeping your login credentials confidential. You also accept responsibility for all activity that takes place under your account.</br></br>
You agree to notify us immediately if you suspect unauthorized access. We reserve the right to suspend or terminate accounts that violate these Terms.
`,
        },
        {
          title: "8. Intellectual Property Rights",
          text: `All materials on this Website, including text, graphics, images, videos, software, and logos, are owned by Prestige Medical & Physical Therapy or its licensors. They are protected by copyright, trademark, and intellectual property laws.</br></br>
You may not use, reproduce, or distribute any material from the Website for commercial purposes without prior written consent. Unauthorized use may lead to legal consequences.

`,
        },
        {
          title: "9.Third-Party Links and Services",
          text: `Our Website may include links to third-party websites or services. These links are provided for your convenience.</br></br>
We do not control or endorse third-party content, and we are not responsible for their accuracy, privacy practices, or policies. Visiting a third-party site is at your own risk, and we encourage you to review their terms and policies before providing personal information.
`,
        },
        {
          title: "10.Privacy and Data Protection",
          text: `Your use of this Website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.</br></br>
By using this Website, you acknowledge and accept our Privacy Policy. You can view it through the link available on our site.

`,
        },
        {
          title: "11. Educational and Informational Use Only",
          text: `This Website and its content are meant to educate visitors about physical therapy, wellness, and rehabilitation. The material provided here should not replace professional medical evaluation or treatment.</br></br>
Do not attempt exercises, stretches, or rehabilitation techniques from this site without consulting a qualified healthcare provider. Prestige Medical & Physical Therapy is not responsible for injuries or health complications caused by misuse of the information provided here.

`,
        },
        {
          title: "12.Testimonials and Results",
          text: `Patient testimonials and stories featured on this Website are personal experiences shared with permission. They represent individual outcomes and are not a promise or guarantee of results for all patients.</br></br>
Your treatment results may differ due to various factors such as your condition, lifestyle, and commitment to your therapy plan.
`,
        },
        {
          title: "13.No Warranties",
          text: `The Website and its content are provided on an "as is" and "as available" basis. Prestige Medical & Physical Therapy makes no representations or warranties of any kind, whether express or implied.</br></br>
We do not guarantee that:</br></br>
<ul class="list-disc pl-10">
<li>The Website will always be available or error-free.</li></br>


<li>The content is accurate, complete, or up to date.</li></br>


<li>Any technical issues will be corrected promptly.</li></br>
</ul>

To the fullest extent allowed by law, we disclaim all implied warranties, including merchantability, fitness for a particular purpose, and non-infringement.

`,
        },
        {
          title: "14.Limitation of Liability",
          text: `To the maximum extent permitted by law, Prestige Medical & Physical Therapy and its staff, affiliates, and representatives will not be liable for any damages or losses that result from your use of the Website.</br></br>
This includes, but is not limited to:</br></br>
<ul class="list-disc pl-10">
<li>Data loss or service interruptions</li></br>


<li>Personal injury caused by reliance on information from the site</li></br>


<li>Unauthorized access to your data</li></br>


<li>Technical errors or bugs</li></br>
</ul>

If you are dissatisfied with any part of the Website, your only solution is to stop using it.

`,
        },
        {
          title: "15.Indemnification",
          text: `You agree to protect, defend, and hold harmless Prestige Medical & Physical Therapy and its team from any claims, losses, or damages that arise from your use of the Website, violation of these Terms, or infringement of any third-party rights.</br></br>
This agreement remains in effect even after you stop using the Website.

`,
        },
        {
          title: "16.Service Availability and Modifications",
          text: `We reserve the right to update, suspend, or discontinue any part of the Website at any time without notice.</br></br>
We may also change content, tools, or access permissions as needed. Prestige Medical & Physical Therapy is not responsible for any inconvenience or loss caused by temporary or permanent unavailability of the Website.

`,
        },
        {
          title: "17.Termination",
          text: `We may terminate or restrict your access to the Website if we believe you have violated these Terms or engaged in harmful behavior.</br></br>
Once terminated, your right to use the Website ends immediately. Provisions related to intellectual property, limitation of liability, and indemnification will continue to apply.

`,
        },
        {
          title: "18.Governing Law and Jurisdiction",
          text: `These Terms are governed by the laws of the State of Florida, without regard to its conflict of law principles.</br></br>
Any disputes related to these Terms or your use of the Website must be brought before the state or federal courts located in Florida. By using this Website, you consent to the jurisdiction of those courts.

`},{
  title: "19.Dispute Resolution",
  text: `If a disagreement arises, please contact us first to seek a resolution.</br></br>
If we cannot resolve the matter informally, the dispute may be submitted to binding arbitration in accordance with Florida law, unless prohibited by applicable regulations.


`},{
  title: "20.Severability",
  text: `If any part of these Terms is found invalid or unenforceable, the remaining sections will continue in full effect.</br></br>
The failure to enforce a specific clause does not waive our right to enforce it later.


`},{
  title: "21.Entire Agreement",
  text: `These Terms, together with our Privacy Policy and Disclaimer, represent the full agreement between you and Prestige Medical & Physical Therapy concerning the Website.</br></br>
All prior discussions or agreements are replaced by this version.


`},{
  title: "22.Contact Information",
  text: `If you have any questions or concerns about these Terms, please contact us at:</br></br>
<strong>Prestige Medical & Physical Therapy</strong></br>
Email: prestigemedlmarketing@gmail.com</br>
Phone: (813) 243-2500</br>
Address: 8313 W. Hillsborough Ave. Suite 330 Tampa, FL 33615</br></br>
We are happy to clarify any part of this agreement.


`},{
  title: "23. International Use",
  text: `Our Website is operated from the United States. If you access it from outside the country, you are responsible for following local laws.</br></br>
We make no claim that the Website or its content is suitable or legal for use in other countries.


`},{
  title: "24. Electronic Communications",
  text: `By using our Website or contacting us online, you agree to receive communications electronically. These messages may include notices, policy updates, and other important information.</br></br>
You agree that electronic communications meet any legal requirements for written notice.


`},{
  title: "25. No Waiver",
  text: `If we do not enforce any part of these Terms immediately, it does not mean we waive our right to do so later.

`},{
  title: "26. Feedback and Suggestions",
  text: `We welcome feedback about our Website and services. By submitting ideas or suggestions, you grant us the right to use them freely without obligation or compensation. This helps us improve our patient experience.

`},{
  title: "27.Language and Interpretation",
  text: `These Terms are written in plain English for clarity. Section titles are included only to make navigation easier and have no legal effect. Words like “include” or “including” mean “without limitation.”

`},{
  title: "28.Acceptance of Terms",
  text: `By using our Website, you confirm that you have read, understood, and agreed to these Terms. Your continued use after updates are posted means you accept the revised version.</br></br>
If you do not agree, please stop using the Website and its services.


`},{
  title: "29.Final Statement",
  text: `Prestige Medical & Physical Therapy aims to provide helpful and reliable information while maintaining a safe online experience. These Terms ensure responsible use, protect user rights, and preserve the integrity of the Website.</br></br>
We appreciate your trust and cooperation in following these guidelines. Thank you for visiting Prestige Medical & Physical Therapy online.


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

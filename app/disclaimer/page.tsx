import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Prestige Medical & Physical Therapy",
  description:
    "Read the full Disclaimer outlining the terms, responsibilities, and limitations for using the Prestige Medical & Physical Therapy website.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 md:px-10 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-8 text-[#1a1a1a]">Disclaimer</h1>

      {[
        {
          title: "1. Introduction",
          text: `The purpose of this Disclaimer is to clearly define the limits of liability, the intended use of information provided on the site, and the responsibilities of both the organization and visitors. If you do not agree with any part of this Disclaimer, we ask that you discontinue use of this website immediately.`,
        },
        {
          title: "2. General Information Only",
          text: `All content on this website, including articles, videos, blog posts, educational materials, graphics, and other resources is provided for <strong>general informational and educational purposes only.</strong> While Prestige Medical & Physical Therapy makes every effort to ensure the information is accurate and current, it should not be relied upon as a substitute for professional medical advice, diagnosis, or treatment.</br></br>

The information presented is designed to help visitors better understand physical therapy, rehabilitation, wellness, and related health topics. However, every individual’s situation is unique. What applies to one person may not apply to another. Therefore, you should always seek the advice of a licensed healthcare professional or physician with any questions you may have regarding a medical condition, injury, or treatment plan.</br></br>

Never disregard professional medical advice or delay seeking care because of something you have read or seen on this website.
`,
        },
        {
          title: "3. No Doctor–Patient Relationship",
          text: `Use of this website does not create a doctor–patient or therapist–patient relationship between you and Prestige Medical & Physical Therapy, or between you and any of its healthcare providers, staff, or affiliates.</br></br>

Contacting us through website forms, emails, or phone calls does not establish such a relationship until you have formally scheduled an appointment, completed required documentation, and received confirmation of acceptance as a patient.</br></br>

Until that process is completed, all communications should be considered informational and not as part of a formal medical record.
`,
        },
        {
          title: "4. Professional Advice and Medical Care",
          text: `
          <p>The content on this website is <strong>not intended to diagnose, treat, cure, or prevent any medical condition or disease.</strong> While we may share information about treatment techniques, exercises, or recovery recommendations, such material is educational in nature and not a specific prescription for any individual. </br></br>

Physical therapy and rehabilitation should only be conducted under the supervision of licensed professionals who have assessed your specific medical condition. Performing exercises or following advice from online resources without professional guidance may result in injury or worsening of symptoms.</br></br>

Always consult with a healthcare professional before beginning any new fitness, therapy, or rehabilitation program.</p>
`,
        },
        {
          title: "5. Accuracy of Information",
          text: `Prestige Medical & Physical Therapy strives to ensure that all information presented on the website is accurate, complete, and up to date. However, medical knowledge evolves rapidly, and new research or clinical experience may render existing content outdated or incomplete.</br></br>
We make no warranties or guarantees regarding the accuracy, reliability, timeliness, or completeness of the content. Any reliance you place on the information from this website is done solely at your own risk.</br></br>
We reserve the right to modify, update, or remove content at any time without notice.
`,
        },
        {
          title: "6. External Links and Third-Party Content",
          text: `Our website may contain links to external websites, social media platforms, or third-party resources that are provided solely for convenience and reference. Prestige Medical & Physical Therapy does not control or endorse these external sites and is not responsible for their content, accuracy, privacy practices, or policies.</br></br>
Accessing third-party websites through links on our site is done at your own discretion and risk. We recommend reviewing the terms and privacy policies of any third-party websites you visit.</br></br>
The inclusion of a link does not imply endorsement, sponsorship, or affiliation with the linked organization.
`,
        },
        {
          title: "7. Testimonials and Patient Stories",
          text: `Testimonials and patient success stories featured on our website represent the experiences of individual patients. These accounts are shared with permission and reflect those individuals’ personal results.</br></br>
Please understand that results vary based on individual health conditions, treatment plans, compliance, and many other factors. The outcomes described in testimonials are <strong> not guaranteed </strong> or typical for every patient.`,
        },
        {
          title: "8. No Guarantee of Results",
          text: `While our practice is committed to providing quality care and evidence-based physical therapy, we cannot guarantee any specific outcomes or improvements. Physical rehabilitation outcomes depend on a wide range of factors including, but not limited to, the patient’s condition, age, overall health, adherence to prescribed exercises, and the nature of the injury or illness.</br></br>
All treatment and recovery involve inherent risks. We encourage open communication between patients and clinicians to ensure safe, effective care, but we disclaim liability for results that differ from expectations.
`,
        },
        {
          title: "9. Limitation of Liability",
          text: `To the fullest extent permitted by law, Prestige Medical & Physical Therapy, its owners, employees, contractors, affiliates, and representatives are not liable for any loss, injury, claim, damage, or liability resulting from:</br></br>
<ul class="list-disc pl-10">
<li>Your reliance on information provided through this website</li></br>


<li>Any error or omission in the content</li></br>


<li>Any interruption, delay, or malfunction of the website</li></br>


<li>Any unauthorized access to or use of our servers or stored information</li></br>


<li>Any third-party links, advertisements, or services</li></br>
</ul>


You agree that your use of this website is at your sole risk. We provide the website “as is” and “as available” without warranties of any kind, express or implied.</br></br>
Under no circumstances shall Prestige Medical & Physical Therapy be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website or services
`,
        },
        {
          title: "10. No Warranty",
          text: `We make no warranty that the website will always be available, error-free, or secure. We do not guarantee that defects will be corrected or that the site or its servers are free of viruses or harmful components.</br></br>
While we take reasonable precautions to protect the integrity of our website, users should always maintain their own protective measures, such as antivirus software and secure internet practices.
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

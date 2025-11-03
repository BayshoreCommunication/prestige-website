import Image from "next/image";
import Link from "next/link";

// Service data with detailed content
const serviceData: Record<
  string,
  {
    title: string;
    desc: string;
    image: string;
    content: string;
  }
> = {
  "physio-therapy": {
    title: "Physio Therapy",
    desc: "Personalized Treatment That Restores Strength, Mobility, and Confidence",
    image: "/images/canhelp/img11.png",
    content: `
      <p>Personalized Treatment That Restores Strength, Mobility, and Confidence </br>

At Prestige Medical & Physical Therapy, we understand that every injury  and every patient  is unique. Our licensed physiotherapists take a one-on-one approach to restore movement, reduce pain, and help you return to your active life safely and quickly.</br>

Whether you’re recovering from an auto accident, sports injury, surgery, or chronic pain, our team designs a custom rehabilitation plan tailored to your specific needs and goals.</br> 

Our Physiotherapy Services Include</br> 

<li><strong>Injury Rehabilitation : </strong> Restore movement, reduce inflammation, and rebuild strength after accidents or trauma. </li>     

<li><strong>Manual Therapy : </strong> Hands-on techniques that relieve stiffness, muscle tightness, and joint restrictions. </li>                                 

<li><strong>Therapeutic Exercise : </strong> Targeted stretching and strengthening routines to improve balance, coordination, and flexibility. </li>                                      

<li><strong>Pain Management : </strong> Evidence-based modalities including ultrasound therapy, electrical stimulation, and heat/cold therapy. </li>                                           

<li><strong>Post-Surgical Recovery : </strong> Accelerate healing and regain function safely under medical supervision. </li>                                                                 

<li><strong>Spinal and Posture Correction : </strong> Techniques to realign your body, improve mobility, and prevent future injuries. </li></br>                                                                    

<strong>Why Choose Prestige for Physio Therapy </strong></br> </br>                                                                                                                        

<li><strong>Comprehensive, Doctor-Guided Care :</strong> Our physiotherapists work directly with medical doctors, chiropractors, and rehabilitation specialists.</li>                                                                                                                                 

<li><strong>State-of-the-Art Equipment :</strong> From advanced therapeutic machines to digital motion analysis, we use the latest tools for faster results.</li>                                                                                                                                     

<li><strong>Personalized Treatment Plans :</strong> Every session is designed around your condition, progress, and recovery goals.</li>                                                                                                                                                           

<li><strong>Same-Day Appointments & No Upfront Costs :</strong> Get the care you need  when you need it most.</li></br>                                                                                                                                                                                       

<strong>Common Conditions We Treat</strong></br> </br>                                                                                                                                                                                                                                                         

<li>Whiplash & Auto Accident Injuries</li>                                                                                                                                                                                                                                                  

<li>Back & Neck Pain</li>                                                                                                                                                                                                                                                               

<li>Joint Stiffness or Muscle Weakness</li>                                                                                                                                                                                                                                                     

<li>Sports Injuries</li>                                                                                                                                                                                                                                                                    

<li>Post-Surgical Recovery</li>                                                                                                                                                                                                                                                                         

<li>Arthritis or Chronic Pain Conditions</li>                                                                                                                                                                                                                                                                          

<li>Regain Your Mobility  and Your Life</li></br>                                                                                                                                                                                                                                                                               

At Prestige, our mission is simple: to help you move better, feel stronger, and live pain-free.</br>                                                                                                                                                                                                                                                                                               
If pain or limited mobility is holding you back, our physiotherapy team is ready to help you take the next step toward full recovery.</br></br>                                                                                                                                                                                                                                                                           

📞 Call (813) 243-2500 or book your appointment online today to start your personalized physiotherapy program.</br>                                                                                                                                                                                                                                                                                           
</p>
    `,
  },
  "digital-radiography": {
    title: "Digital Radiography",
    desc: "Accurate Imaging for Faster, Smarter Diagnosis",
    image: "/images/canhelp/img22.png",
    content: `
      <p>At <strong>Prestige Medical & Physical Therapy</strong>, precision is at the heart of everything we do. Our digital radiography (X-ray) technology allows our medical team to capture clear, high-resolution images of bones and soft tissues  instantly and safely.</br>
Whether you’ve been involved in an auto accident, suffered a sports injury, or are experiencing chronic pain  , our digital X-rays provide the insight needed to create a personalized treatment plan that targets the root cause of your discomfort.</br></br>

<strong>What Is Digital Radiography?</strong></br></br>
Digital radiography is the modern evolution of traditional X-rays.</br>                     
 Instead of using film, we capture images electronically  allowing for faster results, greater accuracy, and lower radiation exposure. The images can be instantly viewed, shared, and enhanced for precise analysis.</br>

<ul><strong>Benefits of Digital Radiography</strong></br>  </br>         
<li><strong>Immediate Results :</strong> Images appear instantly on-screen for same-day diagnosis.</li>


<li><strong>Enhanced Image Clarity :</strong> High-definition visuals help detect even subtle fractures or misalignments.</li>


<li><strong>Reduced Radiation :</strong> Safer for patients compared to traditional X-rays.</li>


<li><strong>Digital Storage :</strong> Your X-rays are securely stored and easily shared with your care team for coordinated treatment.</br>


<li><strong>Better Patient Experience :</strong> Quick, comfortable, and efficient imaging process.</li></br>



<ul><strong>When Digital X-Rays Are Recommended</strong></br></br>
Our physicians may order digital X-rays to:</br></br>
<li>Evaluate injuries from auto accidents or falls</li>


<li>Detect bone fractures or joint dislocations</li>        


<li>Assess spine alignment and posture issues</li>


<li>Monitor healing progress during physical therapy or chiropractic care</li>


<li>Identify degenerative conditions, such as arthritis or disc problems</li>  </br>



<strong>Why Choose Prestige</strong></br></br>
<li><strong>On-Site Digital Imaging :</strong> No need to visit another facility  we perform all imaging in-house.</li>


<li><strong>Doctor-Led Analysis :</strong> Results are reviewed by licensed physicians and integrated directly into your treatment plan.</li></br>

<strong>Seamless Care Coordination :</strong> Our medical, chiropractic, and physiotherapy teams collaborate using the same imaging data for optimal outcomes.</br></br>

<strong>Fast. Safe. Accurate.</strong></br></br>
At Prestige, our goal is to make diagnosis and recovery as efficient as possible.</br>
 With advanced digital radiography, we help you get clear answers  and the right treatment  without delay.</br> </br>                             
📞 Call (813) 243-2500 or schedule an appointment online to get your digital X-ray today.</br>
</p>
    `,
  },
  "individual-treatment-plans": {
    title: "Individual Treatment Plans",
    desc: "Care Designed Around You",
    image: "/images/canhelp/img33.png",
    content: `
      <p>At <strong>Prestige Medical & Physical Therapy</strong>, we believe that no two patients are the same  and neither are their injuries. Every recovery journey begins with a personalized treatment plan designed specifically for your body, your condition, and your goals.</br>
Our multidisciplinary team of medical doctors, chiropractors, and physical therapists works together to assess your injuries, identify the underlying causes, and build a plan that delivers long-term relief  not just temporary fixes.</br></br>

<strong>What an Individual Treatment Plan Includes</strong></br></br>
Each plan is custom-built after a thorough medical evaluation and digital imaging review. It may include:
<li><strong>Physiotherapy & Rehabilitation Exercises :</strong> to restore mobility and strength</li>


<li><strong>Chiropractic Adjustments :</strong> to realign the spine and improve nerve function</li>


<li><strong>Pain Management Therapies :</strong> including trigger-point injections and soft tissue treatments</li>


<li><strong>Posture & Movement Correction :</strong> to prevent reinjury and improve daily performance</li>


<li><strong>Home Exercise Guidance :</strong> for faster progress between appointments</li></br>



<strong>Our Process</strong></br>  </br>         
<li><strong>Comprehensive Evaluation :</strong> We begin with a full medical assessment and digital radiography (X-ray) to identify the exact source of pain.</li>


<li><strong>Custom Plan Design :</strong> Our doctors and therapists collaborate to build a treatment roadmap that targets your unique needs.</li>


<li><strong>Ongoing Adjustments :</strong> As you recover, your plan evolves  ensuring steady progress and lasting results.</li></br>



<strong>Why Choose Prestige</strong></br>  </br>                             
<li><strong>Doctor-Guided Collaboration :</strong> Your care team communicates daily to ensure consistency and safety.</li>


<li><strong>All-In-One Facility :</strong> Medical care, imaging, and therapy under one roof.</li>


<li><strong>Results-Focused Approach :</strong> Every plan is designed to help you heal faster and stay stronger for life.</li></br>



<ul><strong>Your Recovery, Personalized</strong></br></br>
At Prestige, we don’t believe in one-size-fits-all care. We believe in your plan  built for your body, your injury, and your future.</br>  </br>                            
📞 Call (813) 243-2500 or book your appointment online to start your individualized treatment plan today.</br>   
</ul>
</p>
    `,
  },
  "injury-rehabilitation": {
    title: "Injury Rehabilitation",
    desc: "Recover Stronger. Move Better. Live Pain-Free.",
    image: "/images/canhelp/img44.png",
    content: `
      <p>At <strong>Prestige Medical & Physical Therapy</strong>, our goal is simple  to help you recover fully and return to your daily life with confidence. Whether you’ve been injured in an auto accident, suffered a sports injury, or are dealing with chronic pain, our injury rehabilitation programs are designed to restore your mobility, strength, and overall well-being.
Our team of medical doctors, physical therapists, and chiropractors work together to create a personalized recovery plan that addresses both your symptoms and their root causes.

<ul><strong>What We Offer</strong></br></br>
Our comprehensive rehabilitation approach includes:</br></br>
<li><strong>Manual Therapy :</strong> Hands-on techniques to reduce stiffness, restore range of motion, and relieve pain.</li>


<li><strong>Therapeutic Exercise :</strong> Custom routines to rebuild strength, balance, and flexibility.</li>


<li><strong>Pain Management Therapies :</strong> Ultrasound, electrical stimulation, and other modalities for faster recovery.</li>


<li><strong>Postural & Functional Training :</strong> Corrective exercises to prevent reinjury and improve body mechanics.</li>


<li><strong>Home Exercise Programs :</strong> Personalized guidance to continue progress between sessions.</li></br>



<strong>Common Injuries We Treat</strong></br></br>
<li>uto Accident Injuries (Whiplash, Back & Neck Pain)</li>


<li>Muscle Strains & Ligament Sprains</li>


<li>Joint Pain or Limited Mobility</li>


<li>Sports Injuries</li>      


<li>Post-Surgical Recovery</li>


<li>Chronic or Repetitive Motion Injuries</li></br>



<strong>Why Choose Prestige</strong></br></br>
<li><strong>Integrated Medical Team:</strong> Doctors, chiropractors, and physical therapists collaborate for complete care.</li>


<li><strong>State-of-the-Art Equipment:</strong> Advanced therapy tools and digital imaging for accurate assessment.</li>


<li><strong>Tailored Recovery Plans:</strong> Every treatment is customized for your condition, goals, and comfort level.</li>


<li><strong>No Upfront Costs for Auto Injury Patients:</strong> Get the care you need immediately.</li></br>



<ul><strong>Rebuild. Restore. Renew.</strong></br> </br>             
At Prestige, recovery isn’t just about healing an injury  it’s about getting your life back. Our injury rehabilitation specialists are committed to helping you move freely, live pain-free, and stay strong for the future.</br>   </br>   
📞 Call (813) 243-2500 or book your appointment online to begin your recovery today.</br>
</ul>
</p>
    `,
  },
  "constant-neck-and-back-pain": {
    title: "Constant Neck and Back Pain",
    desc: "Align Your Spine. Restore Your Health.",
    image: "/images/canhelp/img55.png",
    content: `
        <p>
        At Prestige Medical & Physical Therapy, our chiropractic care is designed to relieve pain, improve mobility, and support overall wellness. Our licensed chiropractors provide safe, effective, and personalized spinal adjustments to help you recover from injuries, reduce discomfort, and regain proper body alignment.<br/>

Whether you’re experiencing back pain, neck pain, or postural issues from an auto accident or chronic strain, our team develops a custom treatment plan to address the root cause  not just the symptoms.<br/>

Our Chiropractic Services Include<br/>

<li><strong>Spinal Adjustments :</strong> Restore proper alignment, reduce tension, and improve nervous system function.</li>

<li><strong>Soft Tissue Therapy :</strong> Relieve muscle tightness and improve flexibility.</li>

<li><strong>Posture Correction :</strong> Techniques and exercises to enhance spinal alignment and prevent future injuries.</li>

<li><strong>Pain Management Support :</strong> Integrated with medical evaluations, physiotherapy, and rehabilitation.</li>        

<li><strong>Rehabilitation Exercises :</strong> Strengthen supporting muscles for lasting relief and better function.</li><br/>

<strong>Why Choose Prestige for Chiropractic Care</strong><br/><br/>

<li><strong>Doctor-Guided Treatment :</strong> Chiropractors work closely with our medical team for safe, coordinated care.</li>

<li><strong>Customized Plans :</strong> Every adjustment and therapy session is tailored to your injury and recovery goals.</li>

<li><strong>Comprehensive Approach :</strong> Combine chiropractic care with physiotherapy, imaging, and rehabilitation for optimal results.</li>

<li><strong>Same-Day Appointments & No Upfront Costs:</strong> Get the care you need without delays.</li><br/>          

<strong>Start Your Recovery Today</strong></br><br/>

<ul>Chiropractic care at Prestige isn’t just about easing pain  it’s about restoring balance, improving function, and helping you live comfortably again. </br><br/>

📞 Call (813) 243-2500 or book your appointment online to schedule your chiropractic consultation today.</br>
</ul></br>

</p>
    `,
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const service = serviceData[params.slug];

  if (!service) {
    return {
      title: "Service not found",
      description: "No service available.",
    };
  }

  return {
    title: `${service.title} | Prestige Medical & Physical Therapy`,
    description: service.desc,
  };
}

export default function ServiceDetail({
  params,
}: {
  params: { slug: string };
}) {
  const service = serviceData[params.slug];

  if (!service) {
    return (
      <div className="max-w-[1640px] mx-auto px-8 py-16 text-center">
        <h2 className="text-2xl font-bold">Service not found</h2>
        <Link
          href="/services"
          className="text-prestige-yellow hover:underline mt-4 inline-block"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative px-8 w-full mx-auto">
        <div className="absolute inset-0">
          <Image
            src="/images/servicespage/services/bg.png"
            alt="Service Background"
            width={1000}
            height={800}
            className="object-cover object-top w-full h-full z-10"
            priority
          />
          <div className="absolute inset-0 bg-prestige-yellow/10 pointer-events-none z-10"></div>
        </div>

        <div className="relative z-20 flex flex-col justify-center items-start min-h-[300px] md:min-h-[400px] text-white space-y-4 max-w-[1640px] mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            {service.title}
          </h1>
          <div className="flex items-center space-x-2 bg-prestige-yellow px-3 py-1 rounded-full">
            <Link
              href="/"
              className="text-black px-3 py-1 rounded font-semibold transition hover:underline"
            >
              Home
            </Link>
            <span className="text-black">/</span>
            <Link
              href="/services"
              className="text-black hover:underline font-semibold transition"
            >
              Services
            </Link>
            <span className="text-black">/</span>
            <span className="text-black">{service.title}</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-[1640px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <Image
                src={service.image}
                alt={service.title}
                width={800}
                height={400}
                className="w-full h-auto rounded-xl"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6 italic font-bold">
                {service.desc}
              </p>
              <div
                className="text-gray-700 leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-[#1B2639] [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:mb-4 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:ml-0 [&_ul]:mb-4 [&_ul]:pl-0 [&_li]:mb-2 [&_li]:ml-0 [&>li]:list-disc [&>li]:list-inside [&>li]:ml-0 [&>li]:mb-2 [&>li]:pl-0"
                dangerouslySetInnerHTML={{ __html: service.content }}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 rounded-xl p-6 sticky top-8">
              <h3 className="text-2xl font-bold text-[#1B2639] mb-4">
                Need Help?
              </h3>
              <p className="text-gray-700 mb-6">
                Contact us today to learn more about this service or to schedule
                a consultation.
              </p>
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 rounded-full text-sm font-medium bg-prestige-yellow text-black hover:bg-yellow-500 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Get recipient email
    const recipientEmail =
      process.env.CONTACT_EMAIL || "prestigemedlmarketing@gmail.com";

    // Prepare email content
    const emailSubject = subject || `Contact Form Submission from ${name}`;
    const emailHtml = `
      <h2 style="color: #333; font-size: 24px; margin-bottom: 20px;">New Contact Form Submission</h2>
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
        <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
        <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
        ${
          phone
            ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>`
            : ""
        }
        ${
          subject
            ? `<p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>`
            : ""
        }
        <p style="margin: 10px 0;"><strong>Message:</strong></p>
        <div style="background-color: #fff; padding: 15px; border-left: 4px solid #fbbf24; margin-top: 10px;">
          ${message.replace(/\n/g, "<br>")}
        </div>
      </div>
      <p style="margin-top: 20px; color: #666; font-size: 14px;">
        This is an automated message from the Prestige Medical & Physical Therapy contact form.
      </p>
    `;

    // Send email using Gmail SMTP
    if (process.env.GMAIL_USER && process.env.GMAIL_PASSWORD) {
      try {
        // Create transporter
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD,
          },
        });

        // Send email
        await transporter.sendMail({
          from: `"Prestige Medical Website" <${process.env.GMAIL_USER}>`,
          to: recipientEmail,
          replyTo: email,
          subject: emailSubject,
          html: emailHtml,
        });

        console.log("Email sent successfully to:", recipientEmail);
      } catch (emailError: any) {
        console.error("Error sending email via Gmail:", emailError);

        // Provide helpful error message
        let errorMessage = "Failed to send email. ";
        if (emailError.code === "EAUTH") {
          errorMessage +=
            "Gmail authentication failed. Please check your Gmail credentials in .env.local";
        } else {
          errorMessage += emailError.message || "Unknown error";
        }

        return NextResponse.json(
          {
            error: errorMessage,
          },
          { status: 500 }
        );
      }
    } else {
      // If no Gmail credentials are configured, log it (for development)
      console.log("=== NEW CONTACT FORM SUBMISSION ===");
      console.log("To:", recipientEmail);
      console.log("Subject:", emailSubject);
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone:", phone || "Not provided");
      console.log("Subject:", subject || "Not provided");
      console.log("Message:", message);
      console.log("===============================");
      console.log(
        "NOTE: GMAIL_USER and GMAIL_PASSWORD not configured in .env.local"
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully! We'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        error: "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}

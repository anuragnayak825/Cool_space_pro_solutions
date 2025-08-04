import React from "react";
import Layout from "./Layout/Layout";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="w-full min-h-screen bg-white text-gray-800 py-16 px-6 sm:px-10 md:px-20 lg:px-20 italic xl:px-20">
        <div className="max-w-7xl space-y-12">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-blue-700"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            className="text-lg leading-relaxed text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            At <strong>CoolSpac Pro Solution</strong>, your privacy is our top
            priority. This Privacy Policy explains how we collect, use, and
            protect the personal data you share when you use our website and
            services.
          </motion.p>

          <Section title="Information We Collect">
            <p className="mb-4">
              We may collect personal information such as:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Your name, phone number, and email address</li>
              <li>Company or residential details</li>
              <li>Service preferences</li>
              <li>Any information shared via our contact or service request forms</li>
              <li>When you contact us by phone or email</li>
              <li>When you subscribe to newsletters or promotions</li>
            </ul>
            <p className="mt-4">
              We also collect non-personal data (e.g., IP address, browser
              type, pages visited) to improve functionality and your user
              experience.
            </p>
          </Section>

          <Section title="How We Use Your Information">
            <ul className="list-disc ml-6 space-y-2">
              <li>Deliver and manage air conditioning services</li>
              <li>Respond to service inquiries and support requests</li>
              <li>Enhance our site’s usability and customer experience</li>
              <li>
                Send updates, offers, or maintenance alerts (with your consent)
              </li>
            </ul>
            <p className="mt-4">
              We never sell or rent your information. It’s only shared with
              trusted partners (like technicians/logistics) when necessary to
              complete our services and under legal compliance.
            </p>
          </Section>

          <Section title="Data Security">
            <p>
              We follow best practices to ensure your personal data is secure,
              including:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Secure digital storage and encryption</li>
              <li>Access control protocols</li>
              <li>Limited disclosure and IP address masking</li>
            </ul>
          </Section>

          <Section title="Your Rights">
            <p>
              You may request to view, update, or delete your personal
              information at any time. To opt out of marketing, simply use the
              "unsubscribe" link in our emails or contact us directly.
            </p>
          </Section>

          <Section title="Contact Us">
            <p className="mb-2">
              For questions regarding our Privacy Policy, please reach out to:
            </p>
            <ul className="ml-6 space-y-2">
              <li>
                <strong>Email:</strong> info@coolspacprosolution.com
              </li>
              <li>
                <strong>Phone:</strong> +60 11-2441 9414
              </li>
            </ul>
          </Section>

          <p className="text-sm text-gray-500 pt-8 border-t mt-12">
            Last updated: August 2025
          </p>
        </div>
      </div>
    </Layout>
  );
}

function Section({ title, children }) {
  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold text-blue-600">{title}</h2>
      <div className="text-base leading-relaxed text-gray-700">{children}</div>
    </motion.div>
  );
}

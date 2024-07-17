// src/app/servicepage/[id]/page.jsx
import React from "react";
import Service1 from "@/app/(components)/Service1";

export async function generateStaticParams() {
  // Define the slugs for which pages should be generated at build time
  const slugs = ["service1", "service2", "service3", "service4"];
  return slugs.map((slug) => ({ id: slug }));
}

const fetchServiceContent = (slug) => {
  switch (slug) {
    case "service1":
      return {
        title: "CyberDefense Model",
        description: `The best way to ensure the effectiveness of policies and regulations is to
guarantee that they are applicable, inclusive, and specific to the environment for which they are`,
        image:"/images/6.jpg",
      };
    case "service2":
      return {
        title: "CyberDefense Reach",
        description: `This is a vital education and awareness service of the business, central
to our mission. Our goal is to provide cybersecurity education and awareness programs to
individuals of all ages (students, youths, adults, and the elderly) as well as businesses, including
staff, executives, and other stakeholders. We aim to promote best practices for staying safe
online through workshops, webinars, conferences, and special events with the sole objective of
fostering a cybersecurity mindset shift.
In addition, this service will involve running Positive Digitalization campaigns to promote the
benefits of technology for personal growth, business development, and social advancement,
utilizing our website, social media platforms, blogs, and events.

`
,
image:"/images/7.jpg",
      };
    case "service3":
      return {
        title: "CyberDefense Seek",
        description: ` this service is dedicated to advancing cybersecurity professionals at all
levels, including aspiring, beginners, intermediate, and experts. This service aims to bridge the
gap between theoretical knowledge and practical skills by providing hands-on training,
industry-recognized certification opportunities through strategic partnerships, internships, job
placements, and a platform for innovation. Our goal is to ensure that professionals excel in their
careers.
`,
image:"/images/8.jpg",
      };
    case "service4":
      return {
        title: "CyberDefense Assist",
        description: ` This service focuses on integrating cybersecurity principles and
practices into everyday life and business operations, we will form strategic partnerships with
cybersecurity companies, initiatives, and businesses that utilize digitalization in their operations.
The service will promote products and services of cybersecurity businesses and initiatives to
further increase their reach.This service also aims to assist individuals and businesses
streamline their digital operations by conducting security assessments, including vulnerability
assignments and penetration testing. The primary goal is to ascertain the exact level of security
required for optimal protection, while ensuring cost-effectiveness to avoid unnecessary burden.
The service will also engage in awareness campaigns to enlighten individuals and businesses
whose operations can be optimized with technology for increased productivity.`,
image:"/images/9.jpg",
      };
    default:
      return {
        title: "Service Not Found",
        description: "The requested service does not exist.",
      };
  }
};

const ServicePage = ({ params }) => {
  const { id } = params;
  const serviceContent = fetchServiceContent(id);

  return <Service1 serviceContent={serviceContent} />;
};

export default ServicePage;

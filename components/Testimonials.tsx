"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "This community gave me a space to explore projects I genuinely care about. The transparency and voluntary participation model is exactly what I was looking for.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces",
    name: "Priya Lakshmi",
    role: "Community Member",
  },
  {
    text: "Joining this community was the best decision I made. I've connected with like-minded people who share my values and passion for meaningful work.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
    name: "Karthik Suresh",
    role: "Community Member",
  },
  {
    text: "The ethical approach and lack of financial pressure here is refreshing. I can contribute when I want, how I want, without any hidden agendas.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces",
    name: "Meera Devi",
    role: "Community Member",
  },
  {
    text: "This community helped me find collaborators for my sustainable food project. The support and genuine interest from members has been incredible.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces",
    name: "Arjun Ravi",
    role: "Project Lead",
  },
  {
    text: "I love that I can participate in projects that align with my values without any financial obligations. This is how communities should work.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces",
    name: "Divya Nithya",
    role: "Community Member",
  },
  {
    text: "The collaborative spirit here is genuine. Members support each other's ideas and work together to bring meaningful projects to life.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces",
    name: "Vijay Anand",
    role: "Community Member",
  },
  {
    text: "Being part of this community has opened doors to opportunities I never expected. The focus on purpose over profit is exactly what I needed.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces",
    name: "Kavitha Shruti",
    role: "Community Member",
  },
  {
    text: "The transparency in how this community operates is remarkable. No hidden fees, no pressure—just people working together on things that matter.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces",
    name: "Raj Ganesh",
    role: "Community Member",
  },
  {
    text: "I've found my tribe here. People who care about making a difference and are willing to collaborate voluntarily. It's been transformative.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=faces",
    name: "Anjali Deepika",
    role: "Community Member",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="section-padding bg-gray-50 relative">
      <div className="container-custom z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter">
            What Members Say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our community members have to say about their experience.
          </p>
        </motion.div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
                question: "What services does DY Developments offer?",
                answer: "We offer a wide range of services, including custom software development, mobile app development, web development, cloud solutions, UI/UX design, software consultancy, and system maintenance."
            },
            {
                question: " How can we start a project with DY Developments?",
                answer: "Starting a project with us is simple! Just reach out to us through our contact form or email. We’ll discuss your needs, goals, and how we can create a tailored solution for your business."
            },
            {
                question: " Do you work with small businesses or only large corporations?",
                answer: "We work with businesses of all sizes. Whether you’re a startup or a large enterprise, we tailor our solutions to meet your specific needs and objectives."
            },
            {
                question: "How long does it take to develop a custom software solution?",
                answer: "The timeline varies depending on the complexity of the project. After an initial consultation, we’ll provide a detailed timeline and ensure transparent communication throughout the development process."
            },
            {
                question: "What kind of support do you provide after the software is launched?",
                answer: "We offer ongoing maintenance and support services to ensure your software remains updated, secure, and optimized post-launch. Our team is always available to assist with any issues or improvements."
            }
        ]
    }
};

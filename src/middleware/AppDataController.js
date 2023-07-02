import { AutoFixHigh, Storage, EmojiEvents, Forest, LunchDining, Terminal, Theaters } from "@mui/icons-material";

const getEducationHomePageContent = () => {
    return ([
        {
            title: "University of Maryland, College Park",
            subtitle: 'BS, Computer Engineering (2023 - 2027)',
            activities: {
                Courses: [
                    {
                        name: "MATH140 (Calculus I)",
                        description: "Introduction to calculus, including functions, limits, continuity, derivatives and applications of the derivative, sketching of graphs of functions, definite and indefinite integrals, and calculation of area."
                    },
                    {
                        name: "CMSC131 (Object Oriented Programming I)",
                        description: "Programming done in Java, Emphasizes understanding and implementation of applications using object-oriented techniques. Develops skills such as program design and testing as well as implementation of programs using a graphical IDE."
                    }
                ]
            }
        },
        {
            title: "Ryan International School, Navi Mumbai",
            subtitle: 'Grades 1 and 12 (2010 - 2022)',
            activities: {
                "Leadership" : [
                    {
                        icon: <Theaters />,
                        name: "School Media Leader",
                        description: "I led an 11-member team which won the best country profile award among 100+ participating schools in the Indian Model United Nations (INMUN)" 
                    }, {
                        icon: <AutoFixHigh />,
                        name: "VFX and Media Production Leader",
                        description: "I led and mentored an 8-member team to stage the first-ever 3D Mapping dance. The performance was a huge success and 2000+ people experienced it on Graduation Day at school."
                    }, {
                        icon: <Terminal />,
                        name: "Primary Software Developer",
                        description: "Created an automatic form filler using C# which helped reduce the effort of manually filling 10 subject-specific forms for each of the 400+ students at senior-high-school"
                    }
                ],
                "Awards": [
                    {
                        icon: <EmojiEvents />,
                        name: "Tech Whiz Award",
                        description: "Awarded to one student from all grades in High School who has exceptional technological skills and who has made an immense, positive technological impact to the school"
                    }, {
                        icon: <EmojiEvents />,
                        name: "Tech Savvy Award",
                        description: "Awarded to a student who has extraordinary mentoring skills and who stands out in technology-related practical knowledge and experience among all students from High School"
                    }
                ],
                "Clubs and Community Service": [
                    {
                        icon: <Forest />,
                        name: "Enivronmental Awareness Club",
                        description: "Designed and exhibited a working model of a solar-powered LED lantern to demonstrate the benefits of renewable energy sources such as carbon footprint reduction & cost savings. Planted saplings, awareness by walks to avoid use of non-biodegradables"
                    },
                    {
                        icon: <LunchDining />,
                        name: "Orphan Support Intiative",
                        description: "Part of the 'Food Bucket' initiative which was a donation drive organized by the school to support orphans and to strive for a no-hunger society."
                    }
                ]
            }
        }
    ]);
}

const getSkillsHomePageContent = () => {
    return ([
        {
            title: "Networking and Administration",
            subtitle: '',
            activities: {
                "Service Deployment": [
                    {
                        icon: <Storage />,
                        name: "Docker Containerization",
                        description: "Experienced with deploying and configuring a simple Docker Environment on Linux. Managed 10+ containers in a personal environment. Built projects and created their images using Dockerfile."
                    }
                ]
            }
        },
        {
            title: "Computer Programming",
            subtitle: '',
            activities: {
                
            }
        }
    ]);
}

const getIntroductionHomePageContent = () => {
    return ([
        "a Networking Enthusiast", 
        "a Software Developer", 
        "a SysAdmin", 
        "a Terp!"
    ]);
}

export default { getEducationHomePageContent, getIntroductionHomePageContent, getSkillsHomePageContent }
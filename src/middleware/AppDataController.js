import { AutoFixHigh, Storage, EmojiEvents, Forest, LunchDining, Terminal, Theaters, Policy, Public, Memory, Lan, VpnLock, Forum, Code, CloudSync, DesktopWindows, DevicesOther, Visibility, Sync, HourglassTop, Dvr, RocketLaunch, Email, LinkedIn, Twitter, Reddit, GitHub, YouTube } from "@mui/icons-material";
import { Box } from "@mui/material";
import { getCurrentTheme } from "./AppThemeController";

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
            subtitle: 'Grades 1 and 12 (2010 - 2022), Press to Expand',
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
            title: "Networking",
            subtitle: '',
            activities: {
                "Configuration and Deployment": [
                    {
                        icon: <Lan />,
                        name: "Deploying Networks",
                        description: "Thorougly understand core Networking Concepts — Routing and Switching, VLANs, Wireless Networks, TCP/IP Stack, Ethernet Standards, etc. Experienced in Designing and Deploying SOHO Networks with ~30 Clients."
                    },
                    {
                        icon: <VpnLock />,
                        name: "Network Services",
                        description: "Experienced in deploying OpenVPN, DNS and DHCP Servers (using dnsmasq), NTP Servers and Configuring Routers and Firewalls to aid controlled access to the network via a VPN."
                    }
                ],
            }
        },
        {
            title: "System Administration",
            subtitle: '',
            activities: {
                "Operating Systems": [
                    {
                        icon: <Memory />,
                        name: "Windows",
                        description: "Advanced Knowledge in Configuring Windows versions XP through 11. Experienced with Group Policies, Windows Registry, Firewall, Services, Disk Management and other Administrative Features."
                    }, 
                    {
                        icon: <Memory />,
                        name: "Linux (Ubuntu Server and Desktop)",
                        description: "My Daily Driver. Familiar with most Shell Commands, Permissions, Users and Groups, Package Managers, Netplan, etc. Experienced in Installing and Configuring Ubuntu Server to application needs."
                    }
                ],
                "Service Deployment": [
                    {
                        icon: <Policy />,
                        name: "Active Directory Services",
                        description: "Samba and Windows Server based Active Directory Services. I've Configured Windows and Deployed Group Policies considering Security and Access Control concepts as the basis."
                    },
                    {
                        icon: <Storage />,
                        name: "Docker Containerization",
                        description: "Experienced with deploying and configuring a simple Docker Environment on Linux (Docker CLI and Portainer). Managed 10+ containers in a personal environment. Built projects and created their images using Dockerfile."
                    },
                    {
                        icon: <CloudSync />,
                        name: "BackupPC Server",
                        description: "Configured a central, automatic, incremental backup server using BackupPC on Linux. Deployed and Managed a server capable serving 10 clients with 3000GB compressed data on Disk."
                    },
                    {
                        icon: <Public />,
                        name: "The Apache Web Server",
                        description: "Expierienced in Installing and Configuring apache2 to application requirements. Deployed Reverse Proxies, Load Balancing, SSL and more."
                    }
                ]
            }
        },
        {
            title: "Computer Programming",
            subtitle: '',
            activities: {
                "Developer Forums": [
                    {
                        icon: <Forum />,
                        name: "StackOverflow",
                        description: "Reached ~16000 People with 60+ Answers, 20+ Badges and 680+ Repuation. Priviledged to Upvote, Flag and Review Questions and Answers on the Plaftorm."
                    }
                ],
                "Programming Languages": [
                    {
                        icon: <Code />,
                        name: "Rust",
                        description: "Understand Core Concepts and Used Async frameworks like Tokio. A notable project involes a VNC Server (Remote Framebuffer Protocol) written from scratch. Interacts Directly with X11 (on Linux), Windows GDI, Services and other Win32 APIs. Captures UAC Prompts and the Login Screen on Windows. Transport methods include TCP and Websocket (Protocol Implemented without Libraries). Read more at the Open-source Section."
                    },
                    {
                        icon: <Code />,
                        name: "JavaScript",
                        description: "Experienced in developing and deploying MERN Stacks, Proficient in NodeJS, MongoDB, Electron and the ReactJS Framework. Notable Projects involve an Android app for Veyon, a Classroom Management Platform with Assignments, Tests, Notes and a Live-class platform with a Chat, Collaborative Canvas and Video Conferencing."
                    },
                    {
                        icon: <Code />,
                        name: "Java",
                        description: "Understand Core OOP Concepts. Experienced in developing Java Console and Java Swing Applications. Created a proprietary Windows Elevation Provider. This eliminated unintentional malware installation among users. It prevents a user from gaining administrative priviledges unless approved by the IT Department on a realtime per-request basis. The approval method involved OTPs sent via Email, Telegram and other IM Platforms. All Java Based Clients would connect to a NodeJS based server for processing requests."
                    },
                    {
                        icon: <Code />,
                        name: "Vala",
                        description: "Introduced to Vala while developing applications for elementaryOS (A Linux Distro). Developed an open-source Pomodoro Timer with a sleek User Interface. Read more at https://about.atheesh.org/opensource/ordne"
                    }
                ]
            }
        }
    ]);
}

const getOpenSourceHomePageContent = () => {
    return ([
        {
            title: "Open Source Contributions",
            subtitle: 'https://github.com/candiedoperation',
            activities: {
                "Computer Software": [
                    {
                        icon: <DesktopWindows />,
                        name: "SpifyRFB",
                        description: "Spify is a VNC Server based on Remote Framebuffer Protocol written from scratch. On Linux, it interacts directly with the X11 server to capture the screen and to emit Keyboard and Mouse events from the remote endpoint. On Windows, the Spify Daemon runs as a Service (Directly interacting with Win32 Services API). It provides a WebAPI for the Spify WebClient, uses the Win32 API to detect Logon Events, Enumerate Console and RDP Sessions and spawn a Spify Protocol instance with appropriate priviledges. Owing to the presence of the Daemon, it captures UAC Prompts and Logon Screens. Natively supports TCP and Websocket (noVNC) transports. Supports Industry Standard VNC protocols, encodings and mechanisms. Know more at https://about.atheesh.org/opensource/spifyrfb-v2"
                    },
                    {
                        icon: <Dvr />,
                        name: "Spify Web Client",
                        description: "The Spify Web Client interacts with the WebAPI provided by the Spify Daemon. It's client side is built with ReactJS and the server relies on NodeJS, Express and MongoDB. Authentication methods support native and LDAP. Supports organizing computers into locations thereby, providing access to specific LDAP Groups or native roles. The frontend poses an intuitive UI, featuring the MaterialUI Framework, with thumbnails, quick settings and click-to-expand cards for every computer. DockerFile and Deploy Images at https://about.atheesh.org/opensource/spify-deploy. Know more about the Frontend at https://about.atheesh.org/opensource/spify and the backend at https://about.atheesh.org/opensource/spify-server"
                    },
                    {
                        icon: <Visibility />,
                        name: "Monitoring Center, An app for Veyon",
                        description: "Veyon, developed by veyon.io, provides a platform to monitor computer screens in a classroom environment. To bridge the gap further, I developed an Android / iOS Client (React Native) for Veyon. This facilitates a hassle-free experience among teachers and administrators to monitor computers on-the-go. Available on the Amazon Appstore. Know more at https://about.atheesh.org/opensource/Monitoring-Center"
                    },
                    {
                        icon: <Sync />,
                        name: "Status Center",
                        description: "A simple and intuitive React Native app that helps you check the status of services hosted by your server. It's a wrapper around Telnet and uses TCP Connections to check whether the service responds on connection. Available on the Amazon Appstore. Know more at https://about.atheesh.org/opensource/Status-Center"
                    },
                    {
                        icon: <HourglassTop />,
                        name: "Ordne",
                        description: "A simple Pomodoro timer with a Modern, Clean and Beautiful User Interface. Written in Vala for elementaryOS, follows elementaryOS style guidelines and implements it's Granite UI Framework. Published on the their Flathub Repo. Know more at https://about.atheesh.org/opensource/ordne"
                    },
                    {
                        icon: <CloudSync />,
                        name: "BackupPC GUI for Windows",
                        description: "An easy-to-use app that helps configure backup paths and security options while implementing a cross-platform BackupPC Client. Facilitates a GUI for deploying a BPC Client and registering it with the BackupPC Server. It's under development and you can Know more at https://about.atheesh.org/opensource/BackupPC-Desktop-Client"
                    },
                    {
                        icon: <RocketLaunch />,
                        name: "Fliger Launcher for Linux",
                        description: "Fliger is an electron-based, open source launcher for Linux. Features a Blazing-fast Search, Realtime file preview, App Launcher, Math, Unit Conversion and other addons, all in a single search bar. It's under development and aims to be the Linux standard for Spotlight. Know more at https://about.atheesh.org/opensource/fliger-legacy"
                    }
                ],
            }
        },
        {
            title: "Statistics",
            subtitle: 'from GitHub',
            activities: {},
            dynamic: [ 
                <Box sx={{ "@media print": { width: '50%' }, width: { xs: '100%', md: '50%' }, filter: (getCurrentTheme() == "light") ? 'unset' : 'invert(1) hue-rotate(100deg)', flexGrow: 1 }}><img style={{ height: '100%', width: '100%' }} src="https://github-readme-stats.vercel.app/api?username=candiedoperation&show_icons=true&rank_icon=percentile&show=reviews,discussions_started,discussions_answered&include_all_commits=true&disable_animations=true" /></Box>,
                <Box sx={{ "@media print": { width: '50%' }, width: { xs: '100%', md: '50%' }, padding: '14px', filter: (getCurrentTheme() == "light") ? 'unset' : 'invert(1) hue-rotate(100deg)', flexGrow: 1 }}><img style={{ height: '100%', width: '100%' }} src="https://github-readme-stats.vercel.app/api/top-langs/?username=candiedoperation&layout=donut&disable_animations=true&exclude_repo=spify-worker" /></Box>,
            ]
        }
    ]);
}

const getContactHomePageContent = () => {
    return({
        "Email": {
            icon: <Email />,
            content: "howdy@atheesh.org",
            redirect: "mailto:howdy@atheesh.org"
        },
        "LinkedIn": {
            icon: <LinkedIn />,
            content: "atheesht",
            redirect: "https://ca.linkedin.com/in/atheesht",
        },
        "StackOverflow": {
            icon: <Forum />,
            content: "Atheesh Thirumalairajan",
            redirect: "https://stackoverflow.com/users/14176786/atheesh-thirumalairajan?tab=topactivity"
        },
        "Twitter": {
            icon: <Twitter />,
            content: "@cand_operation",
            redirect: "https://twitter.com/cand_operation"
        },
        "Reddit": {
            icon: <Reddit />,
            content: "candiedoperation",
            redirect: "https://reddit.com/user/candiedoperation"
        },
        "GitHub": {
            icon: <GitHub />,
            content: "candiedoperation",
            redirect: "https://github.com/candiedoperation"
        },
        "GitLab": {
            icon: <Code />,
            content: "candiedoperation",
            redirect: "https://gitlab.com/candiedoperation"
        },
        "YouTube": {
            icon: <YouTube />,
            content: "@atheesh",
            redirect: "https://youtube.com/@atheesh"
        }
    });
}

const getIntroductionHomePageContent = () => {
    return ([
        "a Networking Enthusiast", 
        "a Software Developer", 
        "a SysAdmin", 
        "a Terp!"
    ]);
}

export default { getEducationHomePageContent, getIntroductionHomePageContent, getSkillsHomePageContent, getOpenSourceHomePageContent, getContactHomePageContent }
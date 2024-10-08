import { AutoFixHigh, Storage, EmojiEvents, Forest, LunchDining, Terminal, Theaters, Policy, Public, Memory, Lan, VpnLock, Forum, Code, CloudSync, DesktopWindows, DevicesOther, Visibility, Sync, HourglassTop, Dvr, RocketLaunch, Email, LinkedIn, Twitter, Reddit, GitHub, YouTube, WorkspacePremium, Computer } from "@mui/icons-material";
import { Box } from "@mui/material";
import { getCurrentTheme } from "./AppThemeController";

const getEducationHomePageContent = () => {
    return ([
        {
            title: "University of Maryland, College Park",
            subtitle: 'B.S. in Computer Science (GPA 3.9/4.0, CS Honors Program)',
            activities: {
                "Leadership" : [
                    {
                        icon: <Terminal />,
                        name: "Director | App Development Club",
                        description: "I lead a six person team that creates new products and services for the club’s internal use in areas ranging from Talent Acquisition to Stakeholder Interaction. Furthermore, I lead talent acquisition for Technical Innovations, designed interviews and selected the best people from a highly competitive pool of 300+ applicants."
                    },
                    {
                        icon: <Terminal />,
                        name: "Mentor and Judge | BitCamp 2024",
                        description: "I mentored 30+ teams on all parts of the software development lifecycle and I was a part of the judging panel that selected the best project from over 40 projects under the App Development Track."
                    }
                ],
            }
        },
    ]);
}

const getSkillsHomePageContent = () => {
    return ([
        {
            title: "Networking",
            subtitle: '',
            activities: {
                "Certifications": [
                    {
                        icon: <WorkspacePremium />,
                        name: "Cisco Certified Network Associate (CCNA, 200-301)",
                        description: "Credential ID: e48328b11c294fa3ad80eb909046dbef, Credly: https://www.credly.com/badges/06d70ce4-c14e-4b29-a6f4-e4388f098e08"
                    },
                ],
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
                        icon: <Computer />,
                        name: "tacOS",
                        description: "Actively developing tacOS, an x86-64 operating system using C++ and Assembly. Wrote the kernel from scratch with implementations for Multiboot Compliance, Physical and Virtual Memory Management and support for ACPI, IO/APIC, Text Video output, Keyboard Input and Kernel interrupts. Know more at https://github.com/candiedoperation/tacos"
                    },
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
            redirect: "https://www.linkedin.com/in/atheesht",
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
        "a CompSci Major",
        "a Terp!"
    ]);
}

export default { getEducationHomePageContent, getIntroductionHomePageContent, getSkillsHomePageContent, getOpenSourceHomePageContent, getContactHomePageContent }
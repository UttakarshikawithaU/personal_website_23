import {
  Award,
  Briefcase,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Phone,
  type LucideIcon,
} from 'lucide-react';

export const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const profile = {
  name: 'Uttakarshika U.',
  tagline: 'Data Engineer | Graduate Research Assistant',
  about:
    "I am a Graduate Research Assistant at Bosch Global Software Technologies, leading an innovative multimodal AI-powered breast cancer screening project. I graduated in 2024 from IIIT, Raichur, with a B.Tech in CSE. I am a highly motivated individual with a strong interest in leveraging data to solve complex problems and drive real-world impact. Currently, I am pursuing a Postgraduate Diploma in Big Data Analysis at C-DAC, enhancing my skills in big data engineering and analytics. I am actively seeking data analyst roles to apply my skills and passion for hands-on industry experience.",
  contact: {
    email: {
      label: 'cs20b1023@iiitr.ac.in',
      href: 'mailto:cs20b1023@iiitr.ac.in',
      icon: Mail,
    },
  },
  social: {
    linkedin: {
      href: 'https://www.linkedin.com/in/uttakarshikawithau/',
      icon: Linkedin,
    },
    github: {
      href: 'https://github.com/UttakarshikawithaU',
      icon: Github,
    },
  },
};

export type TimelineEvent = {
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  icon: LucideIcon;
  tags?: string[];
};

export const timeline: TimelineEvent[] = [
  {
    title: 'Data Engineer',
    subtitle: 'IAV India Tech',
    date: 'Jul 2025 - Present',
    description: 'Full-time position as a Data Engineer.',
    icon: Briefcase,
  },
  {
    title: 'Data Engineer Trainee',
    subtitle: 'Tata Technologies Limited',
    date: 'Apr 2025 - Jun 2025',
    description: 'Full-time trainee role focusing on data engineering principles.',
    icon: Briefcase,
  },
  {
    title: 'Learning SnowflakeDB',
    subtitle: 'LinkedIn',
    date: 'Apr 2025',
    description:
      'Completed certification for SnowflakeDB, covering databases and data warehousing.',
    icon: Award,
  },
  {
    title: 'Postgraduate Diploma, Big Data Analysis',
    subtitle: 'Centre for Development of Advanced Computing (C-DAC)',
    date: 'Aug 2024 - Feb 2025',
    description:
      'Acquired in-depth knowledge in big data engineering, data processing, storage solutions, and advanced analytical techniques.',
    icon: GraduationCap,
    tags: ['Big Data Analytics', 'PySpark', 'Hadoop', 'NoSQL'],
  },
  {
    title: 'Graduate Research Assistant',
    subtitle: 'Bosch Global Software Technologies',
    date: 'Jul 2024 - Dec 2024',
    description:
      'Spearheaded a research initiative for a multimodal AI-powered breast cancer screening system, achieving 96.8% accuracy and reducing second screening time by 80%. Deployed the system on AWS for large-scale use.',
    icon: Briefcase,
    tags: ['AI', 'PyTorch', 'Docker', 'AWS', 'Computer Vision'],
  },
  {
    title: 'Bachelor of Technology - BTech, CSE',
    subtitle: 'Indian Institute of Information Technology, Raichur',
    date: 'Dec 2020 - Jun 2024',
    description:
      'Graduated with a degree in Computer Science and Engineering, with a focus on machine learning, deep learning, NLP, and data science.',
    icon: GraduationCap,
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image: {
    src: string;
    hint: string;
  };
};

export const projects: Project[] = [
  {
    title: 'An Open-Source Framework for Breast Cancer Diagnosis',
    description:
      'Spearheaded an AI-driven breast cancer screening initiative, achieving 97% diagnostic accuracy using FNAC data. Deployed the system at scale using Streamlit and Docker.',
    tags: ['AI/ML', 'PyCaret', 'Grad-CAM', 'SHAP', 'Streamlit', 'Docker', 'AWS'],
    link: 'https://www.linkedin.com/in/uttakarshikawithau/details/projects/',
    image: {
      src: 'https://picsum.photos/seed/medtech/600/400',
      hint: 'software engineering',
    },
  },
  {
    title: 'Crab Pulsar Spin-Down Analysis',
    description:
      'Analyzed AstroSat data for the Bhartiya Antariksh Hackathon using Astropy, NumPy, and Matplotlib to study the complex spin-down behavior of the Crab Pulsar.',
    tags: ['Data Science', 'Astropy', 'NumPy', 'Matplotlib', 'Python'],
    github: 'https://github.com/UttakarshikawithaU/Bhartiya-Antariksh-Hackathon_ISRO',
    image: {
      src: 'https://picsum.photos/seed/dataviz/600/400',
      hint: 'data visualization',
    },
  },
  {
    title: 'LeetCode 50-Day Challenge',
    description:
      'Completed a 50-day LeetCode challenge, placing in the top 6.9% of users by tackling daily coding problems and mastering data structures and algorithms.',
    tags: ['Algorithms', 'Data Structures', 'Problem Solving'],
    link: 'https://www.linkedin.com/in/uttakarshikawithau/recent-activity/all/',
    image: {
      src: 'https://picsum.photos/seed/coding/600/400',
      hint: 'code screen',
    },
  },
  {
    title: 'HackerRank Profile',
    description:
      'Achieved 4-star ratings in Python, SQL, and Problem Solving on HackerRank, demonstrating strong foundational coding and database skills.',
    tags: ['Python', 'SQL', 'Problem Solving'],
    link: 'https://www.hackerrank.com/profile/cs20b1023',
    image: {
      src: 'https://picsum.photos/seed/backend/600/400',
      hint: 'server code',
    },
  },
];

export type Skill = {
  name: string;
  level: number;
};

export const skills: Skill[] = [
  { name: 'Big Data Analytics', level: 95 },
  { name: 'PySpark', level: 90 },
  { name: 'Python', level: 90 },
  { name: 'SQL', level: 85 },
  { name: 'Machine Learning', level: 88 },
  { name: 'Deep Learning', level: 80 },
  { name: 'Data Visualization', level: 85 },
  { name: 'Docker', level: 75 },
];

export type Recommendation = {
  name: string;
  title: string;
  text: string;
  avatar: string;
  avatarHint: string;
};

export const recommendations: Recommendation[] = [
  {
    name: 'Suresh Chavhan',
    title: 'Assistant Professor, IISER, SMIEEE',
    text: "Uttakarshika consistently demonstrated exceptional abilities in concept comprehension, lab execution, and content creation. One of her standout strengths is her efficiency in producing high-quality content. Her positive attitude, strong work ethic, and commitment to excellence make her a true asset.",
    avatar: 'https://picsum.photos/seed/rec1/100/100',
    avatarHint: 'professional man',
  },
  {
    name: 'Dr. Dubacharla Gyaneshwar, Ph.D.',
    title: 'Assistant Professor, IIIT Raichur',
    text: 'As a graduate student, Uttakarshika demonstrated a keen interest in pursuing the research problem as part of her academic project. She actively engaged in disciplined and thoughtful discussions... Her hard work and commitment resulted in the successful completion of the work.',
    avatar: 'https://picsum.photos/seed/rec2/100/100',
    avatarHint: 'professor portrait',
  },
];
// All site content lives here. Edit this file to update the site.

export const profile = {
  name: 'Yaseen Younus',
  initials: 'YT',
  role: 'Senior DevSecOps Engineer',
  company: 'Okta',
  location: 'Chicago, IL',
  timezone: 'America/Chicago',
  email: 'yaseenyounus1@gmail.com',
  tagline: 'I build secure, automated cloud platforms that teams can ship on with confidence.',
  focus: ['Cloud', 'DevSecOps', 'SRE', 'Platform', 'Automation'],
  careerStart: 2018,
  url: 'https://yaseen.tech',
  description:
    'Yaseen Younus — Senior DevSecOps Engineer in Chicago. Cloud, platform engineering, SRE and automation.',
};

export type Social = { label: string; href: string; icon: string; handle?: string };

export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/yaseenyounus', icon: 'github', handle: 'yaseenyounus' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yaseenyounus/', icon: 'linkedin', handle: 'yaseenyounus' },
  { label: 'Medium', href: 'https://medium.com/@yaseenyounus', icon: 'medium', handle: '@yaseenyounus' },
  { label: 'YouTube', href: 'https://youtube.com/@yaseenxtech', icon: 'youtube', handle: '@yaseenxtech' },
  { label: 'X', href: 'https://x.com/yaseenxtech', icon: 'x', handle: '@yaseenxtech' },
  { label: 'Instagram', href: 'https://www.instagram.com/yaseenxtech/', icon: 'instagram', handle: '@yaseenxtech' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@yaseenxtech', icon: 'tiktok', handle: '@yaseenxtech' },
];

export type Job = {
  role: string;
  company: string;
  href: string;
  start: string;
  end: string;
  type: 'Full-time' | 'Contract';
  location: string;
};

export const experience: Job[] = [
  { role: 'Senior DevSecOps Engineer', company: 'Okta', href: 'https://www.okta.com/', start: 'Jun 2025', end: 'Present', type: 'Full-time', location: 'Remote' },
  { role: 'Lead Technical Consultant', company: 'Perficient', href: 'https://www.perficient.com/', start: 'Aug 2024', end: 'Jun 2025', type: 'Full-time', location: 'Remote' },
  { role: 'Senior DevSecOps Engineer', company: 'BridgeView', href: 'https://www.bridgeviewit.com/', start: 'Aug 2023', end: 'Aug 2024', type: 'Contract', location: 'Remote' },
  { role: 'DevOps Engineer', company: 'Amazon Web Services', href: 'https://aws.amazon.com/', start: 'Sep 2022', end: 'Jun 2023', type: 'Full-time', location: 'Remote' },
  { role: 'Site Reliability Engineer', company: 'Everbridge', href: 'https://www.everbridge.com/', start: 'May 2021', end: 'Sep 2022', type: 'Full-time', location: 'Remote' },
  { role: 'DevOps / Platform Engineer', company: 'Abbott', href: 'https://www.abbott.com/', start: 'Jun 2018', end: 'May 2021', type: 'Full-time', location: 'North Chicago, IL' },
];

export const education = [
  { degree: 'M.S. Data Science & Artificial Intelligence', school: 'Northwestern University', href: 'https://www.northwestern.edu/', years: '2020 — 2023' },
  { degree: 'B.A. Computer Science & Math', school: 'Lake Forest College', href: 'https://www.lakeforest.edu/', years: '2017 — 2019' },
];

export const stack = [
  'AWS', 'Terraform', 'AWS CDK', 'Python', 'Go', 'TypeScript', 'Docker',
  'ECS / Fargate', 'CodePipeline', 'GitHub Actions', 'CloudFront', 'IAM', 'CI/CD', 'Observability',
];

// Image file names refer to src/assets/certs/<file>.png
export const certifications = [
  { name: 'AWS Solutions Architect — Professional', file: 'aws-sa-pro' },
  { name: 'AWS DevOps Engineer — Professional', file: 'aws-devops-pro' },
  { name: 'AWS Security — Specialty', file: 'aws-security-specialty' },
  { name: 'AWS Solutions Architect — Associate', file: 'aws-sa-associate' },
  { name: 'AWS SysOps Administrator — Associate', file: 'aws-sysops-associate' },
  { name: 'AWS Developer — Associate', file: 'aws-dev-associate' },
  { name: 'HashiCorp Terraform Associate', file: 'terraform-certified' },
  { name: 'AWS Cloud Practitioner', file: 'aws-cloud-practitioner' },
  { name: 'PCEP — Certified Entry-Level Python Programmer', file: 'pcep-entry-level' },
  { name: 'AWS Knowledge: Architecting', file: 'aws-knowledge-architecture' },
  { name: 'AWS Knowledge: Cloud Essentials', file: 'aws-knowledge-cloud-essentials' },
  { name: 'AWS Cloud Quest: Security', file: 'aws-cloud-quest-security' },
  { name: 'AWS Cloud Quest: Solutions Architect', file: 'aws-cloud-quest-sa' },
  { name: 'AWS Cloud Quest: Serverless Developer', file: 'aws-cloud-quest-serverless-developer' },
  { name: 'AWS Cloud Quest: Cloud Practitioner', file: 'aws-cloud-quest-cloud-practitioner' },
];

export const credly = 'https://www.credly.com/users/yaseenyounus';

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  links: { label: string; href: string }[];
};

export const openSource = {
  title: 'AWS CDK Examples',
  repo: 'aws-samples/aws-cdk-examples',
  href: 'https://github.com/aws-samples/aws-cdk-examples',
  blurb: 'Reference infrastructure I contributed to the official AWS samples — used by developers learning to ship on AWS with code.',
  langs: ['Go', 'Python', 'TypeScript'],
  year: '2023',
};

export const projects: Project[] = [
  {
    title: 'Container CI/CD to Fargate',
    blurb: 'CodePipeline that builds a Docker image and deploys it to ECS on Fargate.',
    tags: ['CodePipeline', 'ECS', 'Docker'],
    links: [
      { label: 'Go', href: 'https://github.com/aws-samples/aws-cdk-examples/tree/main/go/codepipeline-build-deploy' },
      { label: 'Python', href: 'https://github.com/aws-samples/aws-cdk-examples/tree/main/python/codepipeline-build-deploy' },
      { label: 'TypeScript', href: 'https://github.com/aws-samples/aws-cdk-examples/tree/main/typescript/codepipeline-build-deploy' },
    ],
  },
  {
    title: 'Static Site on AWS',
    blurb: 'S3, CloudFront, Route 53 and ACM — wired up end to end.',
    tags: ['S3', 'CloudFront', 'Route 53'],
    links: [{ label: 'Go', href: 'https://github.com/aws-samples/aws-cdk-examples/tree/main/go/static-site' }],
  },
  {
    title: 'ECS Cluster + ALB',
    blurb: 'An ECS cluster served behind an Application Load Balancer.',
    tags: ['ECS', 'ALB', 'VPC'],
    links: [{ label: 'Go', href: 'https://github.com/aws-samples/aws-cdk-examples/tree/master/go/ecs/cluster-alb' }],
  },
];

export type Post = { title: string; blurb: string; href: string; date: string };

export const posts: Post[] = [
  {
    title: 'Getting Started with Python',
    blurb: 'A beginner’s guide to the basics.',
    href: 'https://medium.com/python-in-plain-english/getting-started-with-python-8015c0da19c2',
    date: '2024-10-09',
  },
  {
    title: 'Setting up Python on macOS',
    blurb: 'Installing and configuring Python the right way.',
    href: 'https://medium.com/@yaseenyounus/setting-up-python-on-mac-c030e0f99bf1',
    date: '2024-09-28',
  },
  {
    title: 'Hello, World!',
    blurb: 'Kicking off the blog.',
    href: 'https://medium.com/@yaseenyounus/hello-world-5cd846d385',
    date: '2024-09-14',
  },
];

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

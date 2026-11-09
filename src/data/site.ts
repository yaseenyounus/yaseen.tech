// All site content lives here. Edit this file to update the site.

export const profile = {
  name: 'Yaseen Younus',
  first: 'Yaseen',
  last: 'Younus',
  role: 'Senior DevSecOps Engineer',
  company: 'Okta',
  location: 'Chicago, IL',
  timezone: 'America/Chicago',
  email: 'yaseenyounus1@gmail.com',
  url: 'https://yaseen.tech',
  intro:
    'I design and automate secure cloud platforms. 8+ years across AWS, Okta, Everbridge and Abbott, keeping infrastructure fast, reliable and locked down.',
  careerStart: 2018,
  description: 'Yaseen Younus, Senior DevSecOps Engineer at Okta. Cloud, platform engineering, SRE and security automation. Chicago.',
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/yaseenyounus' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yaseenyounus/' },
  { label: 'Medium', href: 'https://medium.com/@yaseenyounus' },
  { label: 'YouTube', href: 'https://youtube.com/@yaseenxtech' },
  { label: 'X', href: 'https://x.com/yaseenxtech' },
  { label: 'Instagram', href: 'https://www.instagram.com/yaseenxtech/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@yaseenxtech' },
];

export const experience = [
  { id: 'okta', start: '2025', end: 'Now', role: 'Senior DevSecOps Engineer', short: 'Sr. DevSecOps', company: 'Okta', href: 'https://www.okta.com/', type: 'Full-time', location: 'Remote' },
  { id: 'perficient', start: '2024', end: '2025', role: 'Lead Technical Consultant', short: 'Tech Consultant', company: 'Perficient', href: 'https://www.perficient.com/', type: 'Full-time', location: 'Remote' },
  { id: 'bridgeview', start: '2023', end: '2024', role: 'Senior DevSecOps Engineer', short: 'Sr. DevSecOps', company: 'BridgeView', href: 'https://www.bridgeviewit.com/', type: 'Contract', location: 'Remote' },
  { id: 'aws', start: '2022', end: '2023', role: 'DevOps Engineer', short: 'DevOps Eng.', company: 'AWS', href: 'https://aws.amazon.com/', type: 'Full-time', location: 'Remote' },
  { id: 'everbridge', start: '2021', end: '2022', role: 'Site Reliability Engineer', short: 'SRE', company: 'Everbridge', href: 'https://www.everbridge.com/', type: 'Full-time', location: 'Remote' },
  { id: 'abbott', start: '2018', end: '2021', role: 'DevOps / Platform Engineer', short: 'Platform Eng.', company: 'Abbott', href: 'https://www.abbott.com/', type: 'Full-time', location: 'North Chicago, IL' },
];

export const education = [
  { years: '2020–23', degree: 'M.S. Data Science & AI', school: 'Northwestern University', href: 'https://www.northwestern.edu/' },
  { years: '2017–19', degree: 'B.A. Computer Science & Math', school: 'Lake Forest College', href: 'https://www.lakeforest.edu/' },
];

export const stack = ['AWS', 'Terraform', 'CDK', 'Python', 'Go', 'TypeScript', 'Docker', 'ECS', 'CI/CD', 'IAM'];

// Contributions to github.com/aws-samples/aws-cdk-examples
export const projects = [
  {
    title: 'Pipeline to Fargate',
    blurb: 'CodePipeline builds a Docker image and ships it to ECS on Fargate.',
    services: ['CodePipeline', 'ECS'],
    links: [
      { label: 'Go', href: 'https://github.com/aws-samples/aws-cdk-examples/tree/main/go/codepipeline-build-deploy' },
      { label: 'Python', href: 'https://github.com/aws-samples/aws-cdk-examples/tree/main/python/codepipeline-build-deploy' },
      { label: 'TS', href: 'https://github.com/aws-samples/aws-cdk-examples/tree/main/typescript/codepipeline-build-deploy' },
    ],
  },
  {
    title: 'Static Site Stack',
    blurb: 'S3 origin behind CloudFront, with Route 53 DNS and an ACM certificate.',
    services: ['S3', 'CloudFront', 'Route 53'],
    links: [{ label: 'Go', href: 'https://github.com/aws-samples/aws-cdk-examples/tree/main/go/static-site' }],
  },
  {
    title: 'ECS Cluster + ALB',
    blurb: 'An ECS cluster and service fronted by an Application Load Balancer.',
    services: ['ECS', 'ALB', 'VPC'],
    links: [{ label: 'Go', href: 'https://github.com/aws-samples/aws-cdk-examples/tree/master/go/ecs/cluster-alb' }],
  },
];

export const posts = [
  { date: '2024.10', title: 'Getting Started with Python', href: 'https://medium.com/python-in-plain-english/getting-started-with-python-8015c0da19c2' },
  { date: '2024.09', title: 'Setting up Python on macOS', href: 'https://medium.com/@yaseenyounus/setting-up-python-on-mac-c030e0f99bf1' },
  { date: '2024.09', title: 'Hello, World!', href: 'https://medium.com/@yaseenyounus/hello-world-5cd846d385' },
];

// file = src/assets/certs/<file>.png
export const certifications = [
  { name: 'Solutions Architect', level: 'Professional', file: 'aws-sa-pro' },
  { name: 'DevOps Engineer', level: 'Professional', file: 'aws-devops-pro' },
  { name: 'Security', level: 'Specialty', file: 'aws-security-specialty' },
  { name: 'Solutions Architect', level: 'Associate', file: 'aws-sa-associate' },
  { name: 'SysOps Administrator', level: 'Associate', file: 'aws-sysops-associate' },
  { name: 'Developer', level: 'Associate', file: 'aws-dev-associate' },
  { name: 'Terraform', level: 'Associate', file: 'terraform-certified' },
  { name: 'Cloud Practitioner', level: 'Foundational', file: 'aws-cloud-practitioner' },
  { name: 'PCEP Python', level: 'Entry', file: 'pcep-entry-level' },
  { name: 'Architecting', level: 'Knowledge', file: 'aws-knowledge-architecture' },
  { name: 'Cloud Essentials', level: 'Knowledge', file: 'aws-knowledge-cloud-essentials' },
  { name: 'Security', level: 'Cloud Quest', file: 'aws-cloud-quest-security' },
  { name: 'Solutions Architect', level: 'Cloud Quest', file: 'aws-cloud-quest-sa' },
  { name: 'Serverless Developer', level: 'Cloud Quest', file: 'aws-cloud-quest-serverless-developer' },
  { name: 'Cloud Practitioner', level: 'Cloud Quest', file: 'aws-cloud-quest-cloud-practitioner' },
];

export const credly = 'https://www.credly.com/users/yaseenyounus';

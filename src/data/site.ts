// All site content lives here. Edit this file to update the site.

export const profile = {
  name: 'Yaseen Younus',
  role: 'Senior DevSecOps Engineer at Okta',
  email: 'yaseenyounus1@gmail.com',
  url: 'https://yaseen.tech',
  bio: [
    'I work on cloud infrastructure, platform engineering and security automation. Before Okta I was at AWS, Everbridge and Abbott.',
    'I have a master’s in Data Science & AI from Northwestern and live in Chicago.',
  ],
  description: 'Yaseen Younus, Senior DevSecOps Engineer at Okta. Based in Chicago.',
};

export const links = [
  { label: 'GitHub', href: 'https://github.com/yaseenyounus' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yaseenyounus/' },
  { label: 'Medium', href: 'https://medium.com/@yaseenyounus' },
];

export const socials = [
  ...links,
  { label: 'YouTube', href: 'https://youtube.com/@yaseenxtech' },
  { label: 'X', href: 'https://x.com/yaseenxtech' },
  { label: 'Instagram', href: 'https://www.instagram.com/yaseenxtech/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@yaseenxtech' },
];

export const experience = [
  { years: '2025 – Now', role: 'Senior DevSecOps Engineer', company: 'Okta', href: 'https://www.okta.com/' },
  { years: '2024 – 2025', role: 'Lead Technical Consultant', company: 'Perficient', href: 'https://www.perficient.com/' },
  { years: '2023 – 2024', role: 'Senior DevSecOps Engineer', company: 'BridgeView', href: 'https://www.bridgeviewit.com/' },
  { years: '2022 – 2023', role: 'DevOps Engineer', company: 'AWS', href: 'https://aws.amazon.com/' },
  { years: '2021 – 2022', role: 'Site Reliability Engineer', company: 'Everbridge', href: 'https://www.everbridge.com/' },
  { years: '2018 – 2021', role: 'DevOps / Platform Engineer', company: 'Abbott', href: 'https://www.abbott.com/' },
];

export const education = [
  { years: '2020 – 2023', degree: 'M.S. Data Science & AI', school: 'Northwestern University', href: 'https://www.northwestern.edu/' },
  { years: '2017 – 2019', degree: 'B.A. Computer Science & Math', school: 'Lake Forest College', href: 'https://www.lakeforest.edu/' },
];

// Contributions to github.com/aws-samples/aws-cdk-examples
export const projects = [
  {
    title: 'CodePipeline to ECS Fargate',
    note: 'Build a Docker image and deploy it to Fargate',
    links: [
      { label: 'Go', href: 'https://github.com/aws-samples/aws-cdk-examples/tree/main/go/codepipeline-build-deploy' },
      { label: 'Python', href: 'https://github.com/aws-samples/aws-cdk-examples/tree/main/python/codepipeline-build-deploy' },
      { label: 'TypeScript', href: 'https://github.com/aws-samples/aws-cdk-examples/tree/main/typescript/codepipeline-build-deploy' },
    ],
  },
  {
    title: 'Static site on S3 + CloudFront',
    note: 'With Route 53 and ACM',
    links: [{ label: 'Go', href: 'https://github.com/aws-samples/aws-cdk-examples/tree/main/go/static-site' }],
  },
  {
    title: 'ECS cluster behind an ALB',
    note: 'Cluster, load balancer and service',
    links: [{ label: 'Go', href: 'https://github.com/aws-samples/aws-cdk-examples/tree/master/go/ecs/cluster-alb' }],
  },
];

export const posts = [
  { date: 'Oct 2024', title: 'Getting Started with Python', href: 'https://medium.com/python-in-plain-english/getting-started-with-python-8015c0da19c2' },
  { date: 'Sep 2024', title: 'Setting up Python on macOS', href: 'https://medium.com/@yaseenyounus/setting-up-python-on-mac-c030e0f99bf1' },
  { date: 'Sep 2024', title: 'Hello, World!', href: 'https://medium.com/@yaseenyounus/hello-world-5cd846d385' },
];

export const certifications = [
  'AWS Solutions Architect Professional',
  'AWS DevOps Engineer Professional',
  'AWS Security Specialty',
  'AWS Solutions Architect Associate',
  'AWS SysOps Administrator Associate',
  'AWS Developer Associate',
  'HashiCorp Terraform Associate',
  'AWS Cloud Practitioner',
  'PCEP Python Programmer',
];

export const credly = 'https://www.credly.com/users/yaseenyounus';

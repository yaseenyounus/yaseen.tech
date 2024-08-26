---
title: "AWS CDK Go - Static Site with S3, CloudFront, Route 53 & Certificate Manager"
description: "AWS CDK Go example shared on GitHub that demonstrates how to deploy a static site on AWS with S3, CloudFront, Route 53, and Certificate Manager."
draft: false
date: 2023-03-21

showWordCount: false
showReadingTime: false

externalUrl: "https://github.com/aws-samples/aws-cdk-examples/tree/main/go/static-site"

tags: ["aws", "cdk", "go"]
---

This AWS Cloud Development Kit (CDK) Go example demonstrates how to host a static site in an S3 Bucket and serve content using a CloudFront Distribution.

This example allows you configure a Route 53 subdomain in an existing Hosted Zone that you control. The subdomain will be pointed to the CloudFront Distribution to access the static content.

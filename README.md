<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://aws.amazon.com/free/">
    <img src="images/logo.png" alt="Logo" width="500">
  </a>

  <h1 align="center">AWS Challenge</h1>
  <!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#goal">Goal</a></li>
    <li><a href="#expectations">Expectations</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li>
      <a href="#challenge">Challenge</a>
      <ul>
        <li><a href="#launch-ec2-instance">Launch EC2 Instance</a></li>
        <li><a href="#web-service-powershell-script">Web Service Powershell Script</a></li>
        <li><a href="#s3-bucket">S3 Bucket</a></li>
        <li><a href="#lambda-automation">Lambda Automation</a></li>
        <li><a href="#completion-testing">Completion Testing</a></li>
      </ul>
    </li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>
</p>

<!-- Goal for Challenge -->
## Goal:
The goal of this challenge is to create a **“Hello World”** web service that is automatically updated using AWS Lambda

<!-- Expectations for Challenge -->
## Expectations:
It is likely that you have never used some of the technologies needed to complete this challenge. That is
OK! You can use any resources at your disposal to complete the challenge and learn these new
technologies. Full completion of the project is encouraged but not required. The purpose of the
challenge is to expose you to common problems that you will experience as a DevOps Engineer and
gauge your ability to troubleshoot those issues as well as your ability to learn new technologies.

<!-- Cloning for Challenge -->
### Getting Started

1. Clone the repo
2. Follow the Instructions and Document as much as you want
3. Add any bells and whistles that you'd like to add

<!-- Challenge Summary & Steps -->
## Challenge:
> To complete this challenge, you will need to sign up for a free AWS account:
https://aws.amazon.com/free/. <br> Ensure you are using “free tier” options for all of the services during
this challenge

#### Launch EC2 Instance:
- [ ] For your web service, you will launch an EC2 instance from the AWS gallery. Please use
**Microsoft Windows Server 2012 R2 Base image** with size _**t2.micro**_.

#### Web Service Powershell Script:
- [ ] On the newly launched EC2 instance, write a powershell script that does the following:
  1. Installs IIS
      - [ ] Done?
  2. Create a simple “Hello World” website that runs in IIS
      - [ ] Done?
  3. Home directory for website should be C:\ANCILE
      - [ ] Done?
  4. Everything running on HTTP port 80 is fine for this challenge and website doesn’t need to be visible outside of the VM itself
      - [ ] Done?

#### S3 Bucket:
1. Create new S3 Bucket with public read access
      - [ ] Done?
2. Enable Static Website Hosting on S3 bucket with index.html as the index document.
      - [ ] Done?
3. Upload a test index.html file to the S3 bucket
      - [ ] Done?
4. Update IIS “Hello World” website to display the contents of the S3 website
      - [ ] Done?

#### Lambda Automation:
1. Create a Python AWS Lambda function that writes the current time to the index.html inside
of the S3 bucket created above. In turn, the web service IIS website should show the
current time each time the Lambda function is run.
    - [ ] Done?
  * Choose “Create new role from template(s)
    - [ ] Done?
      * Select “S3 object read-only permissions from Policy templates drop down
        - [ ] Done?
          * In AWS IAM under “Roles” select role you just created
            - [ ] Done?
              * Attach polices “AmazonS3FullAccess” (you will need this to be able to write to the S3 bucket
                - [ ] Done?

#### Completion Testing:
1. When you are done, you should be able to run a Lambda function which automatically updates
index.html inside of S3, which in turn displays current time on the IIS Website.
2. The website should look like this:
[![Example Screen Shot][example-screenshot]](#)

### Built With

<p align="center">
This section lists major frameworks/tools/software that will be used in this specific challenge<br>
<img src="https://p2zk82o7hr3yb6ge7gzxx4ki-wpengine.netdna-ssl.com/wp-content/uploads/aws-free-tier.png" width="100" height="100"><img src="https://mdbcdn.b-cdn.net/img/Marketing/general/logo/big/mdb.png" height="100"><img src="https://cdn.shopify.com/s/files/1/0855/1446/products/Microsoft_Windows_Server_2012_R2_Standard_1024x1024.png?v=1623383879" width="100">
<img src="https://docs.signalfx.com/en/latest/_images/integration_microsoftiis.png" width="100">
<img src="https://rapidapi.com/blog/wp-content/uploads/2018/06/logo-2582748_640.png" width="100">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" width="100">
<img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_640.png" width="100">
</p>
<br>

* [AWS Services/Free Tier](https://aws.amazon.com/free)
* [Fluent Design for Bootstrap 4](https://github.com/mdbootstrap/bootstrap-fluent-design)
* [Microsoft Windows Server 2012 R2 Base image](https://aws.amazon.com/windows/products/ec2/server2012r2/)
* [Microsoft IIS](https://www.iis.net/)
* [HTML 5](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [JavaScript](https://www.javascript.com/)
* [CSS 3](https://developer.mozilla.org/en-US/docs/Web/CSS)

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Ola B. - [@olabamisaiye](https://twitter.com/olabamisaiye) - contact@olabamisaiye.me

Challenge Link: [https://github.com/hola-there/aws_challenge](https://github.com/hola-there/aws_challenge)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Animate.css](https://daneden.github.io/animate.css)
* [Loaders.css](https://connoratherton.com/loaders)
* [Slick Carousel](https://kenwheeler.github.io/slick)
* [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
* [Sticky Kit](http://leafo.net/sticky-kit)
* [JVectorMap](http://jvectormap.com)
* [Font Awesome](https://fontawesome.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/hola-there/aws_challenge.svg?style=for-the-badge
[contributors-url]: https://github.com/hola-there/aws_challenge/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/hola-there/aws_challenge.svg?style=for-the-badge
[forks-url]: https://github.com/hola-there/aws_challenge/network/members
[stars-shield]: https://img.shields.io/github/stars/hola-there/aws_challenge.svg?style=for-the-badge
[stars-url]: https://github.com/hola-there/aws_challenge/stargazers
[issues-shield]: https://img.shields.io/github/issues/hola-there/aws_challenge.svg?style=for-the-badge
[issues-url]: https://github.com/hola-there/aws_challenge/issues
[license-shield]: https://img.shields.io/github/license/hola-there/aws_challenge.svg?style=for-the-badge
[license-url]: https://github.com/hola-there/aws_challenge/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/ola-bamisaiye/
[example-screenshot]: images/screenshot.png

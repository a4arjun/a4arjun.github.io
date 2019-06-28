---
title: Creating a website or blog with GitHub and Jekyll
categories: Jekyll
---

Starting a website is easy. There are lot of free services and tools are available to get started with. It only takes patience, interest and enthusiasm to start a website. In this article, you'll learn how to start a website with GitHub, a well-known software repo.

<h2>About GitHub and Jekyll</h2>
GitHub is one of the widely used software repo by developers and organizations. It lets you host your code for free. You can create both public and private repositories to host your code. Public means, anyone can access it, download and suggest modifications if any. Private means, your code is just yours. GitHub isn't just only for hosting your code, but also lets you create your own websites. It is made possible by <a href="https://jekyllrb.com/">Jekyll</a>.
Jekyll is like a framework written in Ruby which lets you create dynamic website out of static pages. It's simple to use and easy to get started with.
How is about a site with a sub-domain yourname.github.io? Well. Let's begin.

<h2>STEP 1 : Signing up.</h2>
Go to <a href="http://github.com">http://github.com</a>.<br/><br/>
<img src="/img/post_create_github_blog/signup.JPG" width="100%"><br/>
<p>Click sign up. If you have an existing account, you can proceed to login page.<p> Signing up is simple as we do in Facebook or Google. Choose a username, enter a password and provide your email. That's it.
<p>Check your email and verify your account.

<h2>STEP 2 : Creating a repository</h2>
Click the plus <b>'+'</b> icon on the top.<br/><br/>
<img src="/img/post_create_github_blog/newrepo.JPG" width="100%"><br/>
<p> Choose New repository from the drop-down. 
<p>A repository is like a work folder or a project. You can give any name for your repository in usual cases. Like I said, it's just like a work folder(a unique work folder) . <p>But, in this case, we need to take an extra care while giving a name. <p>The name of our repo should be in the form such that : <i>yourusername.github.io</i> . <p>Yes. you must name your repo like this. For example, my username is "<i>arjun</i>". So, I must name my repo as "<i>arjun.github.io</i>".<p> I can't give a name like "mysite.github.io" or "website.github.io". But, it is possible to add a custom domain name later. <p> Am I confusing? ;-) .

<h2>STEP 3 : Creating website.</h2>
You will see multiple options after creating a repo like shown in the picture below.<br/><br/>
<img src="/img/post_create_github_blog/firstscreen.JPG" width="100%"><br/><br/>
<p>You can clone your existing website from another repo or you can upload your website from your computer via browser. <p>In this case, we're going to clone a website from an existing repo located at <a href="https://github.com/a4arjun/gracle-jekyll-template">github.com/a4arjun/gracle-jekyll-template</a>.<br/><br/>
<img src="/img/post_create_github_blog/import.JPG" width="100%"><br/><p>We can create our own, but let's discuss it later.
To find Jekyll templates, you can use search bar of github (You can google such a way "jekyll templates"). 
<p>You can use the theme I've created. It’s free for personal and commercial purposes. It's bootstrap and originally designed by <a href="http://startbootstrap.com">Startbootstrap</a>. <p>Now you can visit your website by http://yourusername.github.io
<br/>
<h2>STEP 4 : Customizing</h2>
Wait! What? No styles and working urls? Looking weird? Don't worry. Open your repo. On that, open the file named “<i>config.yml</i>” and change the paths accordingly. Reload your site.
<p>
In future, you'll learn about adding pages and posts, creating your own templates for your Jekyll website, more advanced functions etc.. <p><br>Thanks for reading.<br/><br/>

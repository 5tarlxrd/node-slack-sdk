---
title: Getting Started
permalink: /getting-started
redirect_from: /getting_started
order: 1
---

This tutorial will show you how to use the packages in this Node Slack SDK to get a simple Slack app running. If you've
never used the Slack APIs before, you're in the right place. Welcome, and let's get started!

## Create a Slack app

The first step is to [register a new app](https://api.slack.com/apps/new) with Slack at the API website. Give your app a
fun name and choose a Development Slack Workspace. We recommend using a workspace where you aren't going to disrupt real
work getting done -- you can create a new one for free. After you create an app, you'll be greeted with some basic information.

In this guide we'll be **calling a method of Web API** to post a message to a channel. The Web API is the foundation of
the Slack Platform, and almost every Slack app uses it. Aside from posting messages, the Web API allows your app to call
[methods](https://api.slack.com/methods) that can be used for everything from creating a channel to updating a user's
status. Before we can call any methods, we need to configure our new app with the proper permissions.

## Getting a token to use the Web API

Navigate to "OAuth & Permissions" and scroll down to the section for scopes. Slack describes the various permissions
your app could obtain from an installing user as **scopes**. There are [over 60 scopes](https://api.slack.com/scopes)!
Some are broad and authorize your app to access lots of data, while others are very specific and let your app touch just
a tiny sliver. Your users (and their IT admins) will have opinions about which data your app should access, and only
agree to install the app if the data permissions seem reasonable, so we recommend finding the scope(s) with the least
amount of privilege for your app's needs. In this guide we will use the Web API to post a message. The scope required
for this is called `chat:write:user`. Use the dropdown or start typing its name to select and add the scope, then click
"Save Changes".

Now our app has described which scope it desires in the workspace, but nobody has authorized those scopes for your
workspace yet. Scroll up and click "Install App". You'll be taken to your app installation page. This page is asking you
for permission to install the app in your development workspace with specific capabilities. That's right, the
development workspace is like every other workspace -- apps must be authorized by a user each time it asks for more
permissions.

Go ahead and click "Authorize". This will install the app on the workspace and generate the token we'll need.

When you return to the "OAuth & Permissions" page copy the "OAuth Access Token" (it should begin with `xoxp`). Treat
this value like a password and keep it safe. The Web API uses tokens to to authenticate the requests your app makes. In
a later step, you'll be asked to use this token in your code.

## Set up your local project

If you don't already have a project, let's create a new one. In an empty directory, you can initialize a new project
using the following command:

```shell
$ npm init
```

You'll be prompted with a series of questions to describe your project, and you can accept the defaults if you aren't
picky. After you're done, you'll have a new `package.json` file in your directory.

Install the `@slack/web-api` package and save it to your `package.json` dependencies using the following command:

```shell
$ npm install @slack/web-api
```

Create a new file called `tutorial.js` in this directory and add the following code:

```javascript
const { WebClient } = require('@slack/web-api');

console.log('Getting started with Node Slack SDK');
```

Back at the command line, run the program using the following command:

```shell
$ node tutorial.js
Getting started with Node Slack SDK
```

If you see the same output as above, we're ready to start.

## Sending a message with the Web API

In this guide we'll post a simple message that contains the current time. We'll also follow the best practice of keeping
secrets outside of your code (do not hardcode sensitive data).

Store the access token in a new environment variable. The following example works on Linux and MacOS; but [similar
commands are available on Windows](https://superuser.com/a/212153/94970). Replace the value with OAuth Access Token that
you copied earlier.

```shell
$ export SLACK_TOKEN=xoxp-...
```

Re-open `tutorial.js` and add the following code:

```javascript
// Create a new instance of the WebClient class with the token read from your environment variable
const web = new WebClient(process.env.SLACK_TOKEN);
// The current date
const currentTime = new Date().toTimeString();

(async () => {
  // Use the `auth.test` method to find information about the installing user
  const res = await web.auth.test()

  // Find your user id to know where to send messages to
  const userId = res.user_id

  // Use the `chat.postMessage` method to send a message from this app
  await web.chat.postMessage({
    channel: userId,
    text: `The current time is ${currentTime}`,
  });

  console.log('Message posted!');
})();
```

This code creates an instance of the `WebClient`, which uses an access token to call Web API methods. The program reads
the app's access token from an environment variable. Then the [auth.test](https://api.slack.com/methods/auth.test)
method is called on the `WebClient` to find the installing user's ID. Lastly, the
[chat.postMessage](https://api.slack.com/methods/chat.postMessage) method is called using the found user ID as the
`channel` argument to send a simple message.

Run the program. The output should look like the following:

```shell
$ node tutorial.js
Getting started with Node Slack SDK
Message posted!
```

Look inside Slack to verify a message was sent to you in a DM.

## Next Steps

You just built your first Slack app with Node.js! 🎉💃🌮

There's plenty more to learn and explore about this SDK and the Slack platform. Here are some ideas about where to
look next:

* Dive into the [`@slack/events-api`](https://slack.dev/node-slack-sdk/events_api) package to learn how your app can
  listen for events happening inside Slack. You'll need a URL where your app can receive events, and the [local
  development tutorial](https://slack.dev/node-slack-sdk/tutorials/local-development) can help you set one up.

* This tutorial only used two of **over 130 Web API methods** available. [Look through
  them](https://api.slack.com/methods) to get ideas about what to build next!

* Tokens are an important part of using the Slack platform. New apps are recommended to start with a Bot User, which
  allows the app to use a bot token. Learn about the [different types of
  tokens](https://api.slack.com/docs/token-types).

* You now know how to build a Slack app for a single workspace, [learn how to implement Slack
  OAuth](https://api.slack.com/docs/oauth) to make your app installable in many workspaces. If you are using
  [Passport](http://www.passportjs.org/) to handle authentication, you may find the
  [`@aoberoi/passport-slack`](https://github.com/aoberoi/passport-slack) strategy package helpful.

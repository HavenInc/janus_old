# janus
## Haven Full-Stack Engineering Applicant Exercise
> In ancient Roman religion and myth, Janus (/ˈdʒeɪnəs/; Latin: Ianus, pronounced [ˈjaː.nus]) is the god of beginnings and transitions, and thereby of gates, doors, doorways, passages and endings. He is usually depicted as having two faces, since he looks to the future and to the past.

## Overview
The skeleton provided here is a barebones [Strongloop/Loopback](https://docs.strongloop.com/display/public/LB/Getting+started+with+LoopBack) application. The only addition is the `Person` model, which extends the built-in `User` model, and allows the use of all the built-in methods that ship with the Loopback `User` model. You are not required to use the `Person` model, but please think of API security and use Slack payload tokens to secure the receiving end.

## The Mini Project
Create a small app that will communicate with a Slack channel.

### Option 1
Create an API that responds to a specific Slack channel when a specific trigger word is used in a message.

### Option 2
Create a small form with fields for *channel* and *message*. When this form is submitted, it posts a message to the specified channel.

## Getting Started
- Clone this repository.
- Set up a [Slack](https://slack.com) account and then familiarize yourself with the [Integration Documentation](https://slack.com/integrations), specifically the Outgoing Webhooks and Bots to get information out of Slack and to your API. Hint: look for npm libraries to jump start development.
-
- Document tradeoffs/shortcuts in the interest of time; this exercise should not take more than 2-3 hours for basic functionality.

## Bonus
- Add a login form so that the for is only accessible from behind authentication.
- What would be an interesting way to present the app to the engineering team?

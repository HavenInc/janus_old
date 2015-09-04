# janus
## Haven Full-Stack Engineering Applicant Exercise
> In ancient Roman religion and myth, Janus (/ˈdʒeɪnəs/; Latin: Ianus, pronounced [ˈjaː.nus]) is the god of beginnings and transitions, and thereby of gates, doors, doorways, passages and endings. He is usually depicted as having two faces, since he looks to the future and to the past.

## Overview
The skeleton provided here is a barebones [Strongloop/Loopback](https://docs.strongloop.com/display/public/LB/Getting+started+with+LoopBack) application. The only addition is the `Person` model, which extends the built-in `User` model, and allows the use of all the built-in methods that ship with the Loopback `User` model. You are not required to use the `Person` model, but please think of API security and use Slack payload tokens to secure the receiving end.

## The Mini Project
Create a small [Slack](https://slack.com) Bot that will respond to commands from a Slack #channel. The commands can be as simple as a small pre-canned conversation that only knows about a few trigger words, or a service that will launch something based on commands written in a specific Slack channel. One example of a service launcher would be to get the weather for a certain zipcode, or spawn a server via the AWS API using Boto.

## Definition of Complete
This app will be considered complete as long as there is some round trip between Slack and your custom bot API. 100% completion is not required to be considered for a position, but be prepared to talk through what it would take to complete!

## Getting Started
- Fork this repo if you will be using the Loopback skeleton provided. **You can use a different framework if you are more familiar with it (create your own public repo).** Flask and Sinatra are recommended alternatives.
- Set up a [Slack](https://slack.com) account and then familiarize yourself with the [Integration Documentation](https://slack.com/integrations), specifically the Outgoing Webhooks to get information out of Slack and to your API.
- An Amazon AWS micro instance is recommended for its $0 price tag. Heroku, DigitalOcean, or Rackspace are also options. Slack cannot communicate with your localhost, so a publically accessible server is required.
- You do not need to support SSL.
- Support 3 "trigger words" that send different responses back to the same Slack #channel
- Please include at least 1 unit test of your bot API code
- Document tradeoffs in the interest of time; this exercise should not take more than 3 hours.

## Bonus
- When your app is in MVP v0.0.1 state, create a pull request on this repository. Make sure you do not commit passwords and configuration tokens and the like to github. **This repository is public!**
- What would be an interesting way to present the app to the engineering team?

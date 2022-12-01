# What's Peka, and why?

Live DEMO (in Spanish for now) ---> https://peka.ares.uy/

The main idea behind this project is to potentially leave something for the community while I get a decent amount of frontend practice, and hopefully some backend as well when we start implementing the chat/messaging system (still deciding how we'll tackle this one).

Peka (from Finn mythology Pekko/Pekka, god of crops) is a very simple social network, with the intention of allowing people that grow vegetables/fruits in their gardens to trade with each other, since it's very easy to have excess of X or Y vegetable while not being able to grow or have enough of another one, and where we live, it's quite common for people to plant at least one or two things in their garden.
Although I didn't have the knowledge to start tackling it when I started my coding journey, I thought it'd be an interesting thing to do, but now's the time! I also brought a great friend of mine along with me on this journey, since everything is more fun with friends, and he'll be taking care of most of the backend while I study Node, which will allow me to pick his brain about some of the stuff.

## Objective and how the app will work

Our goal is to give users an extremely easy and straightforward way to both post and browse 'offers' of fruits/vegetales/garden so they can trade products that people may be producing at home. These also include seedlings and seeds. Once a user has found something they'd like to trade, we want to make it as easy as possible to get both users in touch so they can discuss the trade details, exchange info, etc.
Say I planted a bit too many lettuces at the same time, so they're all ready to be harvested but I can't eat them all. I could log in to Peka, posting them by making an offer, and then also browse things that I'd be interested in trading for however many lettuces I wanna trade. We would like to avoid money, and people buying and selling through the app, since one of the main goals is for the existence of such system/app to promote people to work on their gardens and growing a larger % of their food.

### New concepts to implement

Since Peka is a fairly ambitious project, I thought it'd be a good idea to start implementing a couple of new concepts:

- styled-components for styling. Took some time deciding between these and TailwindCSS, I really liked some aspects of styled Cs so we're going with it for now.
- Context API. While I have tinkered a bit with Context in the past, given the size of this project, it'll definitely be useful/needed, which makes this a great opportunity for getting more familiar with it.

### Little gif showcase:

![peka-](https://user-images.githubusercontent.com/73081185/204346793-6f4328e1-3482-4669-b38d-ec27977bde1c.gif)

### Running the project locally

After cloning the repo, make sure you install all dependencies by going to the directory's location on your terminal and running `npm i`. Then you can run the app locally by executing `npm start`!
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

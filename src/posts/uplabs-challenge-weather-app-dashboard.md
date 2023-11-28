---
title: >-
  Weather App Dashboard
tldr: >-
  For UpLabs weather app challenge, I designed a dashboard with simpleWeather.js that told the week's forecast.
slug: uplabs-challenge-weather-app-dashboard
date: git Last Modified
datePublish: 2018-01-28
image:
  url: /images/weather-app-preview.png
  alt: Final screenshot of my weather app named Forecast It
  credit: When it worked, this is what my weather app looked like!
comments:
  twitter: https://twitter.com/m2creates/status/957864453311119360
  codepen: https://codepen.io/m2creates/details/ypdemZ
  uplabs: https://www.uplabs.com/posts/what-s-the-weather-right-now/
seo:
  title: >-
    🌤 Weather App Dashboard
  desc: For UpLabs weather app challenge, I built a dashboard that tells me the weather with the legacy Yahoo! API.
  image:
    url: /images/weather-app-preview.png
    alt: Final screenshot of my weather app named Forecast It
category:
  - app
tags:
  - api
  - design
  - challenge
uses:
  - HTML5
  - CSS3
  - JavaScript
post_type: article
---

{% UpLabs { title: 'Weather App Challenge', prompt: 'Rethink a Weather App dashboard for iOS, Android, VR or Web.', challengers: '373', results: 'https://www.uplabs.com/challenges/weather-app-challenge/results', submission: 'https://www.uplabs.com/posts/what-s-the-weather-right-now/', placement: 'Honorable mention' } %}

**The challenge:** make a [weather app dashboard](https://www.uplabs.com/challenges/weather-app-challenge). **My goal:** make a weather app dashboard that *actually* tells me the weather.

> Update (2019-01-07): It would appear that the original [Codepen](https://codepen.io/m2creates/pen/ypdemZ) no longer works due to [Yahoo! retiring their API](https://github.com/monkeecreate/jquery.simpleWeather/issues/308). I'm leaving this post up since you can still see how the dashboard code was written.

Background/Disclaimer: I built this is about 2 days after work to try and practice my limited working knowledge with JavaScript and meet the challenge deadline. I hope my code isn’t too much of an eyesore 🤗

For the past several months, I’ve been learning the ins and outs of how to build relational records in Airtable and extract the data with a custom plugin for a messaging system. Based on criteria that matches in a message, the plugin finds the related data in Airtable and shows it to you in a streamlined format.

Using this knowledge, I started the UpLabs weather app dashboard challenge with the desire to have real data feeding into my design. In my opinion, drawing something pretty is not the hard part. I wanted this mini web app to be clean, crisp, materialized, and tell me the real-time weather for wherever I happen to be. Also, I wouldn’t need to start from scratch in Airtable since weather feeds are fairly common. I just had to find one I could use.

I jumped right in to researching the best option for real-time weather data. I landed on [Yahoo! Weather](https://developer.yahoo.com/weather/documentation.html) since it seemed pretty straight forward and, just in case my design went viral or something, it wouldn’t hit a rate limit cap rendering the whole thing useless. Continuing down this rabbit hole of about 50 tabs I now had open, I found [simpleWeather.js](https://monkeecreate.github.io/jquery.simpleWeather/) by [James Fleeting](https://twitter.com/fleetingftw). It looked like he’d already done most of the heavy lifting with his jQuery-driven library and the challenge had a rapidly approaching deadline. I found the [CDN](https://cdnjs.com/libraries/jquery.simpleWeather) (and all the dependencies) and got to work mapping out the data I wanted in the app.

Reminder: simpleWeather.js was retired on 2019-01-04 after weather.yahooapis.com and query.yahooapis.com for Yahoo Weather API were retired. [[source]](https://github.com/monkeecreate/jquery.simpleWeather/issues/308)

A couple hours later the weather app now had a default location, the current temperature (I prefer metric, so in Celsius), the weather code described as text (i.e. “cloudy”), wind direction and speed, the time for sunrise and sunset, and a 10 day forecast for high and low. My primary objective was complete: data!

Secondary data objective: use my location. I’m in Albuquerque, NM, but if I go off somewhere I’d like to still use my app. Using browser checking for geolocation, there’s an option to allow your browser to use your current location. The app then updates based on the approximate latitude and longitude of the IP Address to the closest feed.

Now I needed icons. Ideally the icons would update auto-magically based on the temperature and weather code. Yahoo! Weather has a specific set of codes used to determine if it is sunny, cloudy, raining, etc. Several tabs later (and increasingly sluggish Chrome), I stumbled into [Weather Icons](http://erikflowers.github.io/weather-icons/) by [Erik Flowers](https://twitter.com/erik_flowers). Not only are these icons gorgeous, but they came with weather code mapping for Yahoo! Weather. ***Victory!***

Just because something has the logic you mean doesn’t mean it’s easy to “install” though. After many rounds of trial and error, I eventually realized there were multiple pieces to this icon set so it’d work with the JavaScript I’d already laid out. I probably also included far too much bloat (which I will prune and optimize in the coming months). I ended up with 2 more CDNs, an @import, and lots of reading about how Erik wrote the mapping criteria. Once I finished yelling at my computer, Codepen, and my own ineptitude, the magic kicked in with the primary weather code displayed as the correct icon! Sunrise and sunset were easy since those never needed to change. Wind direction was a different story. The icon classes were correct, the JavaScript was correct, but the icon refused to deviate from North. Fun fact: Yahoo! Weather tells you wind direction in uppercase (facepalm). `.lowerCase()` fixed the problem and now the compass arrow will always point in the right direction. ***Victory once more!***

You’ll notice the live version has a 5-day forecast though I mentioned it had 10 when I began. For me, the weather 10 days from now is pointless. Weather is variable and changes frequently. I opted to hide everything beyond 5 days for simplicity and better accuracy.

The final “design” touches were flexbox, [Material Palette](http://materialpalette.com/) colors, good ol’ Lato with Material Icon support, and responsiveness.

![Final screenshot of weather app called Forecast It](/images/weather-app-preview.png "Screenshot of Forecast It")

This simple web app probably won’t win any major design awards, but this challenge gave me a new context to experiment in using APIs, JavaScript, (initially convoluted) icon mapping, and real-time data feeds. Now I need to tie in Airtable to complete my obsession. Perhaps I’ll calculate lunar cycles and astronomical events so my dashboard can remind me to take advantage of clear night skies for amateur astrophotography. 🚀

Until the next experiment, I hope this post-build brain dump was mildly entertaining and/or educational if you decide to build a weather app.

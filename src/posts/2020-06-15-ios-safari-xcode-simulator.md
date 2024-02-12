---
title: Debug iOS Safari with Xcode Simulator and Web Inspector
tldr: How I debug CSS for iOS Safari on my MacBook Pro.
slug: debug-ios-safari-xcode-simulator
datePublish: 2020-06-15
image:
  url: /images/xcode-simulator-step-5.png
  alt: melaniemagdalena.com as seen on iOS Safari simulator
  credit: 
seo:
  title: Debug iOS Safari with Xcode Simulator and Web Inspector
  desc: Learn to debug iOS Safari using Xcode Simulator on a Mac, a helpful guide for web designers and developers without an iOS device.
  image:
    url: /images/xcode-simulator-step-5.png
    alt: melaniemagdalena.com as seen on iOS Safari simulator
category:
tags:
  - debugging
uses:
  - Xcode Simulator
post_type: article
---

If you're like me and don’t have an iOS device, you can use Xcode Simulator to view and debug mobile Safari from your Mac.

Why would you need to simulate mobile Safari? Phones in general don't even have web inspectors for debugging. Have you ever had a CSS quirk on an iPhone and no iPhone to test with? I have.

As a lifelong Android user and web designer by trade, I regularly need to preview, test, or fix things for iOS Safari. Thankfully my MacBook has a way to simulate iOS devices so that I can preview and debug mobile Safari! Likewise, it can simulate older and newer iOS versions if needed.

The following steps may vary for newer and older versions of macOS, Xcode, and Safari. This guide uses:

* MacBook Pro (Retina, 15-inch, Mid 2015)
* macOS Mojave version 10.14.6
* Xcode version 11.3.1
* Safari version 13.1.1

## Step 1: Open Xcode and Launch Simulator

From your Applications, launch Xcode. (Optionally, update Xcode if it yells at you when you try to open it.)

Once Xcode opens, navigate to **Open Developer Tool** > **Simulator** from the Mac toolbar.

{% Image {
  src: '/images/xcode-simulator-step-1.png',
  alt: 'Launch Simulator from Xcode',
  caption: 'In Xcode from the Mac toolbar: Xcode > Open Developer Tool > Simulator',
  fit: 'contain'
} %}

If you’re a Spotlight user (which I am not), just search for Simulator and bypass launching Xcode altogether.

## Step 2: Adjust the Simulator

A simulated device should pop up on your screen and begin loading. From the Mac toolbar, you can adjust the simulator via **Hardware** > **Devices** and select the OS and Device. You can pick from various iPhones and iPads in the **iOS** dropdown.

{% Image {
  src: '/images/xcode-simulator-step-2.png',
  alt: 'Select device type',
  caption: 'In Simulator from the Mac toolbar: Hardware > Device > Select OS > Select Device',
  fit: 'contain'
} %}

If you need something different, select Manage Devices for a suite of additional options:

* Under Devices, add a device connected through USB.
* Under Simulators, add a new simulator by selecting a device and iOS version (or install an additional iOS version runtime).

{% Image {
  src: '/images/xcode-simulator-step-3.1.png',
  alt: 'Use Device Manager to select a physical device from USB',
  caption: 'Simulator will open this window to choose a different device. Use the (+) symbol to add a connected device from USB.',
  fit: 'contain'
} %}

{% Image {
  src: '/images/xcode-simulator-step-3.2.png',
  alt: 'Create a Simulator',
  caption: 'Toggle to Simulators to create a new one. Give it a name, pick a device, and pick an OS version.',
  fit: 'contain'
} %}

You can choose to use the simulation at the actual device size (instead of your screen's full height). Assign it via the Mac toolbar under Window to Physical Size.

{% Image {
  src: '/images/xcode-simulator-step-4.png',
  alt: 'Select Simulator size',
  caption: 'From Simulator in the Mac toolbar: Window > Physical Size',
  fit: 'contain'
} %}

## Step 3: Simulate iOS Safari

In the Simulator, open up mobile Safari. Navigate to the appropriate page you’d like to interact with via Safari Web Inspector.

On your Mac, open up Safari. In the Mac toolbar under **Develop**, select the **Simulator** option beneath your device’s name. Pick the iOS Safari tab loaded in the Simulator. Web Inspector will launch to start debugging mobile Safari!

{% Image {
  src: '/images/xcode-simulator-step-5.png',
  alt: 'Select a webpage view in Simulator',
  caption: 'From Safari on Mac: Device > Select Simulator > Select the webpage open in the Simulator',
  fit: 'contain'
} %}

## Step 4: Use Web Inspector to Debug Mobile Safari

Now you can go about your business and hopefully resolve whatever brought you down this rabbit hole to begin with. Debug mobile Safari just like you normally would for desktop Safari.

{% Image {
  src: '/images/xcode-simulator-step-6.png',
  alt: 'Safari Dev Tools',
  caption: 'Use the Safari Web Inspector as you would normally.',
  fit: 'contain'
} %}

## Additional Resources

Need more help?

* Visit Apple's [Simulator Help](https://help.apple.com/simulator/mac/11.0/)
* Visit Apple's [Safari Developer Help](https://support.apple.com/guide/safari-developer/welcome/mac)

Other guides that may be helpful:

* [Debugging Your iPhone Mobile Web App With Safari Dev Tools](https://medium.com/better-programming/debugging-your-iphone-mobile-web-app-using-safari-development-tools-71240657c487) by Matthew Croak on Medium \[Premium Article\]
* [How to Use Web Inspector to Debug Mobile Safari (iPhone or iPad)](https://appletoolbox.com/use-web-inspector-debug-mobile-safari/) by SK on Apple Toolbox

## Simulator Bonuses

In the Simulator, from the Mac toolbar under **File** you can take a **New Screen Shot**, or use CMD+S.

{% Image {
  src: '/images/xcode-simulator-step-7.png',
  alt: 'Screenshot tool',
  caption: 'Take a screenshot in Simulator via the menu option under File > New Screenshot or use the keyboard shortcut CMD+S.',
  fit: 'contain'
} %}

For a how-to on more features and functionality offered in the Simulator, browse the **Help** section. I kind of want a Force Touch track pad now...

{% Image {
  src: '/images/xcode-simulator-step-8.png',
  alt: 'Apple Help documentation',
  caption: 'Use the Simulator Help option to learn more about what it can do and how to do it.',
  fit: 'contain'
} %}

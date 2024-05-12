---
title: 'NoPlaceForHate'
status: 'published'
author:
  name: 'Shaishav Shah'
  picture: 'https://avatars.githubusercontent.com/u/38801683?v=4'
slug: 'noplaceforhate'
description: 'A chrome extension harnessing AI to instantly detect and block online hate speech, promoting a safer and more inclusive browsing experience.'
coverImage: '/images/gallery-Y3Mz.jpg'
category: 'AI Powered Browser Extension'
publishedAt: '2024-05-12T16:36:37.189Z'
---

# No Place For Hate - A Safer Browsing Experience

## **Inspiration**

The inspiration behind our project, "No Place For Hate," stems from the growing need to foster a safer and more inclusive online environment, particularly on social media platforms.

## **What it does**

"No Place For Hate '' is a chrome extension that utilizes Koala AI and builds upon existing models to detect and flag hate speech, misinformation, and harmful content. The individual sliders control the hate sensitivity for specific categories, 0 being the most restrictive, 100 being the most lenient.

## **How we built it**

Introducing "No Place For Hate," our innovative creation for the hackathon, seamlessly blending cutting-edge Language Model technologies with an elegant front-end UI designed as a Chrome extension. Our journey involved overcoming numerous challenges to ensure a smooth experience for new users.

Initially, the responsiveness of Language Model processes posed a hurdle, necessitating a strategic approach to asynchronous execution. We optimized our backend to enhance concurrency, incorporating worker objects and leveraging the power of `asyncio` for a more responsive performance.

Transitioning to the front-end, we faced the task of dealing with vast amounts of data on each website—thousands of Nodes, each containing text. To address this, we developed low-latency caching algorithms and implemented duplicate filtering, minimizing unnecessary calls to the backend.

Scaling our system to handle large web pages that utilized infinite scroll, we implemented queue schedulers to facilitate efficient API calls in batches, ensuring optimal performance.

Lastly, updating the Document Object Model (DOM) proved to be a nuanced process. Handling thousands of elements required a unique approach—instead of removal, we opted for adding CSS tags, preserving seamless interaction, particularly with hovering functionality.

Our journey with "No Place For Hate" has been a testament to our dedication to creating a user-friendly, efficient, and impactful solution.

## **What we learned**

Throughout the development process, we gained valuable insights into the complexities of content moderation, the importance of fairness in AI models, and the challenges associated with mitigating biases.

We learned a vital lesson about optimizing our code. Frequent backend calls during DOM updates caused performance issues, leading to lag and occasional crashes in our Chrome extension. To solve this, we optimized by using Chrome's caching for efficient tracking of previously parsed text, resulting in improved performance and stability.

For the LLMs, we learned how different models are made and how they are used for different purposes. Many models are made with Natural Language Processing which help us with Text-Generation, Text-Moderation, Sentiment Analysis, Language Translation, Question-Answering Systems. Many models are not that efficient because those models are not trained with diverse data.

## **What's next for No Place For Hate**

In the future, we would like to use more models for fairness. Being able to cross-reference results on multiple models will allow us to reduce model biases and increase accuracy on parsed text.

Moving forward, we will extend the tool's capabilities beyond text analysis to include image and video content moderation, addressing a broader range of potential harmful content.

## **Built With**

- css
- fastapi
- html5
- javascript
- Koala AI

## **Try it out**

- [GitHub Repo](https://github.com/moxil-shah/AltaML-Bogosort)
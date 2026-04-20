---
title: The part of AI product work that is still mostly taste
description: AI can generate, classify, summarize, and autocomplete, but none of that replaces judgment.
publishDate: 2026-02-07
tags:
  - AI
  - product
  - machine learning
draft: false
---

A lot of AI discourse still assumes that once the model is good enough, the product is basically inevitable.

I do not buy that.

Models matter. Latency matters. evals matter. Cost matters. But there is a large chunk of AI product work that is still fundamentally about judgment: where to place the feature, how to frame trust, when to ask for user confirmation, how much output is enough, what kind of error is acceptable, and when “technically works” is still a bad experience.

That chunk is mostly taste.

Not decorative taste. Product taste.

## Capability is not the same as fit

An AI feature can be objectively impressive and still feel wrong in the product.

You can see this when a tool inserts generated text before you have expressed intent, or when it offers a summary that is longer than the thing it summarized, or when it speaks with the confidence of a manager who has not read the document. The model may be performing well in a benchmark sense. The product is still annoying.

This is why I think AI teams should spend less time asking “can the model do this?” and more time asking:

- Should the product do this here?
- What does the user need before they trust the output?
- Which failure mode would feel acceptable?
- Which failure mode would feel creepy?

That is not a purely technical set of questions. It is product craft.

## People do not want intelligence. They want leverage.

Most users are not chasing the abstract idea of machine intelligence. They want relief.

They want the tool to remove a step, reduce a decision, speed up a draft, highlight the weird part, or stop making them do repetitive nonsense with their own wrists. If the system feels intelligent but does not create leverage, it becomes a demo with a billing plan.

This is why some of the best AI experiences are almost modest. They help quietly. They reduce friction without insisting on being the main character of the interface.

In other words, the product often wins by exercising restraint.

## Taste shows up in the boundaries

One of the most underrated parts of AI product design is deciding where the model should **not** act.

Should the assistant draft the full reply, or just surface the missing points?
Should the coding tool write the file, or show a patch for review?
Should the summarizer compress everything, or let the user steer the level of abstraction?

The answer is rarely “always automate.”

There is usually a line where the system goes from helpful to presumptuous. Great products know where that line is. Great teams revisit it constantly because the line moves with user sophistication, model quality, and context.

## The trust loop is the actual product

If I had to reduce AI UX to one sentence, it would be this: users are continuously deciding whether the system deserves another chance.

That means the trust loop matters more than the raw output alone. Explanations, previews, citations, confirmation steps, reversible actions, and clear failure states are not ornamental. They are how the product earns repetition.

When those pieces are missing, even good outputs feel fragile.

Here is the kind of interface logic I keep wanting to see:

```ts
if (confidence < 0.72 || actionIsHardToUndo) {
  requireHumanReview();
} else {
  showSuggestionWithClearSource();
}
```

The exact number is fake, obviously. The principle is not.

## What I think this means for builders

If you are building with AI right now, taste is not a luxury layer you add after the model is good. It is part of the product from the start.

You need judgment about where the feature belongs, what the output should feel like, which errors matter most, and how much cognitive load the user is willing to absorb in exchange for leverage.

That is why two teams can access roughly similar model capability and still ship wildly different experiences. One ships a feature that feels overbearing, vague, and weirdly proud of itself. The other ships something people adopt quickly because it is humble, legible, and useful.

The gap is not just engineering quality. It is taste.

And unfortunately for anyone hoping for a cleaner formula, taste still has to be practiced the old way: by paying attention.

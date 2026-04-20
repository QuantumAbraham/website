---
title: Learning in public without turning your brain into a vending machine
description: Notes on sharing work online without reducing every idea to content bait.
publishDate: 2026-03-18
tags:
  - learning in public
  - writing
  - developer notes
draft: false
---

There is a version of “learning in public” that is genuinely useful.

It looks like someone documenting a real problem, sharing a practical takeaway, admitting what they still do not understand, and leaving a trail for the next person who hits the same wall at 11:47 p.m. That version is generous. It makes the internet better.

There is another version that feels like your thoughts have been recruited by a growth strategy.

Every half-formed idea becomes a thread. Every bug becomes a brand moment. Every tiny realization is flattened into a life lesson with a hook, a CTA, and the vague scent of optimization. At that point you are not learning in public. You are content-farming your own curiosity.

I think about this a lot because I like writing on the internet, and I also like having a brain that is still capable of wandering somewhere interesting without immediately asking whether the result is postable.

## The useful version starts with documentation, not performance

When I write notes from a side project, a bug, or a talk I attended, the most valuable parts are usually the least glamorous ones:

- What I expected to happen
- What actually happened
- Which assumption broke
- What I changed
- What I would do differently next time

That structure is plain, almost boring, and extremely effective. It respects the reader. It also keeps me honest because it forces the writing to stay attached to the work.

I have found that the moment I start drafting for applause instead of clarity, the writing gets worse. The tone becomes inflated. The take becomes more absolute than the evidence allows. The whole thing starts sounding like a person trying to win the algorithm instead of explain a thing.

## Good public notes leave room for uncertainty

One of my favorite habits is writing sentences like:

> I think this is true, but I have only seen it in two projects so far.

That sentence does not make me look omniscient. It does make me more trustworthy.

The internet quietly trains people to sound finished. Finished opinions. Finished lessons. Finished frameworks. But most real technical work is unfinished for a very long time. Good notes should preserve some of that texture. They should sound like a person mid-journey, not a statue unveiling itself.

This matters even more in AI and ML conversations, where a lot of discourse is made of two ingredients: hype and recency. If you are learning in public in a fast-moving space, the best service you can provide is context. What did you test? What scale? What constraints? What failed?

Without that, “I learned X” is often just “I had one interesting afternoon.”

## Public writing should help future-you too

I revisit old notes more often than I expected.

Sometimes I am looking for a command I forgot. Sometimes I want to remember why a design choice felt correct at the time. Sometimes I just need proof that a thing which feels obvious now once cost me three evenings and a small amount of dignity.

That is another reason I like writing in public when it is done well: it creates an external memory system. Not polished enough to be documentation for a whole company, but structured enough to rescue me from re-learning the same lesson every four months.

Even a short post can do that if it includes specifics.

```ts
type LearningNote = {
  context: string;
  failedAssumption: string;
  fix: string;
  nextQuestion: string;
};
```

That tiny mental template has improved my writing more than any advice about “growing an audience.”

## A good test: would I still write this if nobody clicked?

This question filters a lot.

Would I still post this if it got fourteen views, one bookmark, and no flattering replies? If the answer is yes, there is a decent chance the piece is anchored in something real. If the answer is no, I might be trying to publish the performance of insight rather than the thing itself.

That does not mean audience does not matter. It does. Writing is communication. I want people to read, respond, disagree, and build on the ideas. But audience should shape how clearly I say a thing, not whether I needed to say it in the first place.

## What I try to optimize for now

I try to share work that is:

- specific enough to be useful
- humble enough to be updated later
- personal enough to sound human
- practical enough that it came from doing, not merely observing

That combination feels sustainable. It keeps the internet fun. It also keeps the act of learning connected to curiosity instead of turning it into a quota.

There is already more than enough noise online. I would rather leave behind a good trail of notes than an impressive stack of empty takes.

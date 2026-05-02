---
title: >-
  Ostrom's Commons and Your Inventory
tldr: >-
  Governance rules should match the stakes of the asset — ABC segmentation is Ostrom's proportionality principle made operational.
slug: abc-inventory-segmentation
draft: false
datePublish: 2026-03-10
image:
  url:
  alt:
  credit:
seo:
  title: >-
    Ostrom's Commons and Your Inventory
  desc: Why differentiated governance rules outperform uniform policy
  image:
    url:
    alt:
domain: operational-systems
axes:
  signal_model: model
  stability_drift: stability
  internal_external: external
intended_audience: bridge
growth_stage: evergreen
category: analytical-portfolio
thread: supply-chain-analytics
tags:
  - abc-segmentation
  - ostrom
  - commons
  - inventory-management
  - supply-chain
  - institutional-design
  - pareto
post_type: article
links:
  - label: Google Sheets
    desc: DataCo · 180k+ records
    url: https://docs.google.com/spreadsheets/d/1b_2eUZ4Z4jHYeswNNvz2vWW4XRR6mRE-MNIll28LSsQ/view
    type: sheets
  - label: Looker Studio Dashboard
    desc: Pareto · Tier Distribution · Policy Table
    url: https://lookerstudio.google.com/reporting/9e6e6866-4dec-4eb4-8b60-542783b0c85f
    type: looker
---

Here is a management assumption so common it rarely gets examined: all inventory should be managed the same way.

Same review cycle. Same replenishment process. Same level of attention from the planning team. The logic seems fair. Consistent processes are easier to train, easier to audit, and easier to defend when something goes wrong. Uniformity feels like rigor.

But when you actually look at the data, uniform inventory policy turns out to be one of the more expensive assumptions a warehouse can make. Because the products in your catalog are not equal, and treating them as if they are means spending the most attention on the things that matter least.

ABC segmentation is the standard fix for this. What I want to argue here is that it is also something more interesting: it is an application of institutional design principles that Elinor Ostrom spent her career developing, applied to a problem she almost certainly never thought about directly.

---

## What Ostrom Was Actually Studying

Elinor Ostrom won the Nobel Prize in Economics in 2009 for her work on how communities govern shared resources. The dominant theoretical view before her research was that shared resources -- fisheries, grazing lands, irrigation systems -- were doomed to overuse because no individual had an incentive to conserve what everyone could access freely. The solution, in that framing, was either privatization or central government control.

Ostrom went and looked at actual communities managing actual shared resources and found something more complicated. Many of them had developed their own governance systems that worked better than either market allocation or top-down regulation. And the systems that worked best shared a set of design principles. Among the most important: rules should be matched to local conditions. Proportional obligations. Graduated sanctions that fit the stakes.

The communities that failed were often ones that had uniform rules imposed from outside without accounting for the actual variation in the resource and the actual behavior of the people using it.

That is, in a compressed form, the argument for ABC segmentation.

---

## Your Catalog Is Not a Commons, But the Logic Transfers

A product catalog is not a fishery. Your inventory manager is not a fishing community. But the core institutional problem is the same: you have a collection of assets with dramatically different stakes attached to them, and you need governance rules that reflect those different stakes rather than ignoring them.

When I ran ABC segmentation on the DataCo supply chain dataset -- 118 unique SKUs across 180,000+ order records -- the finding was sharper than the classic 80/20 rule suggests it should be. Seven SKUs, 6% of the catalog, accounted for 77% of total spend. The remaining 95 SKUs in the C tier shared 5% of spend between them.

Think about what uniform policy means in that context. It means spending the same review cycle, the same replenishment attention, and the same planning overhead on a product responsible for $17,543 in annual spend as on the Field and Stream Sportsman 16 Gun Fire Safe, which logged over $6.2 million. It means treating every row in your inventory the same way because the process is simpler to administer, while the actual risk and value are distributed extremely unevenly.

That is not rigor. That is misallocated attention.

---

## The Pareto Curve as Institutional Argument

The visual output of ABC segmentation is a Pareto curve: cumulative spend percentage plotted against SKU rank. In the DataCo dataset, that curve bends sharply. The first seven data points shoot the line past 77% of total spend. Then the curve flattens dramatically across the remaining 111 SKUs.

That shape is not a curiosity. It is an argument about where your institutional energy should go.

The 7 A-tier SKUs need weekly review, tight reorder point monitoring, higher safety stock buffers, and close supplier relationships. Those products are where a stockout creates real financial exposure. They are also where the investment in careful management has the highest return.

The 95 C-tier SKUs need quarterly review and minimal buffer. Most of them will not generate a meaningful stockout problem. The cost of a stockout on a C-tier item is almost always lower than the ongoing cost of managing it as if it were an A item. Applying A-tier attention to C-tier products is the operational equivalent of insuring a $50 bicycle at the same premium as a car.

B-tier sits in between: monthly review, standard replenishment, moderate attention. The tier exists precisely because the rule needs to be proportional, not binary.

This is Ostrom's proportionality principle made operational. The governance rule should match the stakes of the asset.

---

## The EA Counterargument and Why It Mostly Misses

Effective altruism, in its most systematic framing, would push back here. If you are optimizing for total value, and A-tier items represent 77% of that value, then maybe you should be putting 77% of your resources into A-tier management and almost nothing into C-tier. Full triage. Concentrate entirely where the stakes are highest.

That argument is coherent as far as it goes. But it assumes that C-tier items can be safely ignored without operational consequences, and that is not quite right. A stockout on a C-tier item can still block a production run, frustrate a customer, or create a gap in a product family that affects the perception of A-tier items nearby. The C tier is low stakes on average. It is not zero stakes always.

More practically: the people who manage C-tier inventory are the same people who manage A-tier inventory. Completely abandoning process for 80% of your SKU catalog does not free up 80% of your team's time. It creates chaos that spills over into the 20% you actually care about.

Ostrom's proportionality principle is not "ignore the low-stakes resources." It is "apply governance rules proportional to the stakes." Quarterly review with minimal buffer is still governance. It is just calibrated to what the situation actually requires.

---

## What This Connects to in P5

If you read the previous essay in this series, you will remember that safety stock is a hedge against irreducible demand uncertainty. ABC segmentation tells you which SKUs that hedge matters most for.

A-tier items are the ones where demand variability is most expensive. A stockout on a $6 million SKU is not the same event as a stockout on a $17,000 SKU. Which means your service level target -- the Z-score you feed into the safety stock formula -- should logically vary by tier. A items at 98% service level. B items at 95%. C items at 90%, or lower if the cost structure supports it.

Running both analyses on the same dataset makes this connection explicit. Your ABC tiers become the governance layer that tells your safety stock calculator what level of protection each SKU deserves. The two projects are not separate analyses. They are two parts of the same institutional system: one that identifies what matters most, and one that determines how much buffer to hold against the uncertainty in getting it.

---

## The Uniform Policy Trap

I want to name the appeal of uniform policy directly, because it is real and the people who implement it are not wrong to value what it offers.

Uniform policy is auditable. It is easy to explain. It does not require the person running the process to make judgment calls that could be second-guessed later. When something goes wrong, you can point to the process and say it was followed consistently.

What it cannot do is match governance rules to the actual variation in your catalog. And in a catalog where 6% of SKUs drive 77% of spend, the cost of that mismatch is not theoretical. It shows up as planning hours spent on products that do not need them, and as under-attention to the products that do.

Ostrom's contribution was to show, empirically, that communities which built proportional and context-sensitive rules consistently outperformed communities that imposed uniform ones. The evidence was from fisheries and irrigation systems and Swiss alpine meadows. But the design principle was general.

Your inventory is not a commons. But the rule still applies.

---

*This essay is part of a portfolio project series examining where standard analytical tools intersect with questions of system design, institutional theory, and the limits of optimization.*

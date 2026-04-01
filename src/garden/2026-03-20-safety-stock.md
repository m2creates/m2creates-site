---
title: >-
  Why Every Warehouse Needs a Little Hayek
tldr: Safety stock as an operational response to the knowledge problem
slug: safety-stock-epistemological-problem
draft: false
datePublish: 2026-03-20
image:
  url:
  alt: 
  credit: 
seo:
  title: >-
    Why Every Warehouse Needs a Little Hayek
  desc: Safety stock as an operational response to the knowledge problem
  image:
    url:
    alt:
category: field-notes
growth: budding
thread: from-the-field
tags:
  - analytics
post_type: article
links:
  # - label: Project breakdown
  #   desc: Safety Stock
  #   url: /work/portfolio-safety-stock
  #   type: breakdown
  - label: Google Sheets
    desc: DataCo · 180k+ records
    url: https://docs.google.com/spreadsheets/d/1b_2eUZ4Z4jHYeswNNvz2vWW4XRR6mRE-MNIll28LSsQ/view
    type: sheets
  - label: Looker Studio Dashboard
    desc: Replenishment Queue · Carrying Cost by Category
    url: https://lookerstudio.google.com/reporting/572b225d-5dba-43f5-a505-c61e916c3e2b
    type: looker
---

There is a formula that gets taught in every supply chain fundamentals course, referenced in every inventory management job description, and used every day in warehouses that have never heard of Friedrich Hayek. It looks like this:

**Safety Stock = Z × σ × √L**

Where Z is your service level Z-score, σ is the standard deviation of demand, and L is your lead time in days. You pick a service level (95% is standard, which gives you a Z of 1.65), you calculate how much demand varies, you account for how long it takes to get more product, and you get a number. That number is the buffer you keep on hand to cover uncertainty.

Most people who use this formula think of it as a technical problem with a technical solution. I want to argue that it is something more interesting than that. It is a philosophical position about the limits of knowledge, encoded in a spreadsheet.

---

## What Hayek Was Actually Saying

Friedrich Hayek's 1945 essay "The Use of Knowledge in Society" is usually taught in economics courses as an argument against central planning. That reading is accurate, but it undersells how broadly the insight applies. Hayek's core claim was this: the information required to coordinate complex systems is dispersed, tacit, and local. No single person or institution can gather it all. The person on the ground knows things the planner in the office does not, and much of what they know cannot be easily communicated upward because it is not the kind of knowledge that travels well through formal channels. It lives in experience, in relationships, in the feel of a situation.

This is not an argument that planning is bad. It is an argument that any plan that does not account for the limits of its own information is fragile. Systems that assume they can centralize all relevant knowledge will eventually encounter the knowledge they missed, usually at the worst possible moment.

Now think about a warehouse.

---

## The Warehouse as a Knowledge Problem

Every inventory system is trying to answer the same question: how much of this thing do I need, and when do I need to order more? The data you feed into that question looks clean on a spreadsheet. Historical sales, average daily demand, supplier lead times. But the real system is messier than the data suggests.

Demand is not stable. A local event drives a spike in one product. A supplier ships late because of something that happened three tiers up their own supply chain and never got communicated to you. A forecast that was accurate for six months stops being accurate because a competitor ran a promotion you did not know about. A product that moved reliably through summer slows down in fall for reasons that feel obvious in retrospect and were invisible in advance.

None of this is a failure of effort or intelligence. It is a description of how demand actually works. The information that would let you predict it perfectly is dispersed across millions of individual decisions made by customers, competitors, suppliers, and logistics networks. You do not have access to all of it. You never will.

The question is not how to eliminate that uncertainty. The question is how to build a system that handles it gracefully.

---

## Safety Stock Is the Honest Answer

Here is what I find remarkable about the safety stock formula: it does not pretend.

A demand forecast pretends, a little. It says: here is what I expect will happen. A reorder point says: here is when I expect to need more product. Both are useful. Both are also wrong with some regularity, and the forecast knows it will be wrong and says it anyway.

Safety stock does something different. It starts from the standard deviation of demand, which is a direct measurement of how much the actual numbers have varied from what was expected. It does not ask why demand varied. It does not try to explain the variance or account for it or predict when it will happen again. It simply says: this system produces uncertainty at a certain rate, and we are going to hold buffer inventory proportional to that uncertainty.

That is the knowledge problem made operational. You cannot eliminate the uncertainty, so you engineer resilience into the system. You accept that you will be wrong and you build the hedge before you need it.

The Z-score you choose is how honest you want to be about the cost of that hedge. At 95% service level (Z = 1.65), you are saying: I am willing to stockout roughly 5% of the time in order to avoid carrying more buffer than that. At 98% (Z = 2.05), you are buying more protection at higher carrying cost. There is no theoretically correct answer. There is only your organization's tolerance for stockouts weighed against your tolerance for carrying cost, expressed as a number.

---

## What the Calculator Actually Showed

For this project, I built a safety stock and reorder point calculator in Google Sheets using the DataCo Smart Supply Chain dataset, which contains over 180,000 order line records across hundreds of SKUs. The model calculates average daily demand, demand standard deviation, safety stock, reorder point, and estimated carrying cost for each product.

One of the more instructive things that happened during the build was how many SKUs came back with a blank standard deviation. Not zero. Blank. Those were products that appeared only once in the entire dataset. You cannot calculate a standard deviation from a single data point. The formula correctly returns nothing, and the safety stock for those SKUs is zero.

That is not a data quality problem. That is the model being honest. A product with one historical order has no observable demand variability. You have no basis for a buffer. If you held safety stock for it anyway, you would be spending money to hedge against uncertainty you have not even measured yet. The formula knows the difference.

The products with high standard deviations are the interesting ones. Those are the SKUs where demand is genuinely volatile. The safety stock formula rewards them with larger buffers, which costs more in carrying cost but reduces the probability of stockouts. The carrying cost column makes that trade-off visible in dollar terms for every SKU. You can look at a product, see that it has a safety stock of 40 units and an estimated annual carrying cost of $620, and ask whether that protection is worth the cost given what you know about that product's customers and its substitutability.

That conversation, between the number and the person looking at it, is where Hayek lives. The formula surfaced the decision. The tacit knowledge about whether the decision is right belongs to the person on the ground.

---

## The EA Tension

I want to be transparent about a tension this project sits inside, because I think it is a real one.

Effective altruism, at its most systematic, asks for the theoretically optimal answer. Maximize expected value. Find the action that produces the most good per dollar. That framework is genuinely useful for a lot of problems, and I take it seriously.

But it runs into trouble with systems like this one because it assumes the information needed to calculate expected value is available. In a warehouse, it is not. You do not know what demand will be. You do not know exactly when your supplier will ship. You do not know what events will disrupt your forecast next quarter. The "theoretically correct inventory level" is not a thing you can calculate, because the inputs that would let you calculate it do not exist.

The Austrian answer is not that optimization is wrong. It is that optimization against irreducible uncertainty looks different from optimization against known quantities. Safety stock is not a failure to optimize. It is the correct optimization given what you actually know.

I think this distinction matters beyond inventory management. A lot of systems fail not because the people running them were not trying to optimize, but because they optimized for the world as their model described it rather than the world as it actually is. The buffer is the acknowledgment that your model has limits. The system that eliminates the buffer because it "should not be necessary" is the system that breaks first.

---

## What This Means in Practice

If you are an inventory planner, the practical takeaway is simpler than the philosophy behind it.

Hold your safety stock. Not as a permanent number, but as a living calculation tied to actual demand variability. When a SKU's standard deviation drops because demand has stabilized, reduce the buffer. When it rises because something in the supply chain got volatile, increase it. Use the formula as a signal that updates when the system changes, not a fixed quantity you set once and forget.

Make the configurable inputs visible. In the calculator I built, service level and holding rate are cells you can change. Changing service level from 1.65 to 2.05 shows you exactly what 98% protection costs across your whole SKU catalog, in dollars. That number gives you something to bring to a conversation about whether the extra protection is worth it. The formula is not the answer. It is the starting point for the right conversation.

And take standard deviation seriously as a metric. Average daily demand is what you expect. Standard deviation is how much you should trust that expectation. A SKU with high average demand and low standard deviation is stable and predictable. A SKU with moderate average demand and high standard deviation is the one that will cause problems. Most people track the first number. The second one is often where the real inventory risk lives.

---

## The Broader Point

Hayek was writing about price systems and socialist calculation. He was not writing about safety stock formulas in supply chain spreadsheets. But the insight translates cleanly: decentralized information cannot be fully aggregated upward, uncertainty is irreducible, and systems that acknowledge their epistemic limits outperform systems that pretend not to have any.

Every buffer in a warehouse is a small institutional acknowledgment of this. The safety stock formula just makes it explicit and quantifiable. It says: we do not know exactly what demand will be, we do not know exactly when our supplier will deliver, and we are holding this many units to cover that uncertainty at this service level and this cost.

That is not a failure of the planning system. That is the planning system working correctly.

---

*This essay is part of a portfolio project series examining where standard analytical tools intersect with questions of system design, institutional theory, and the limits of optimization..*

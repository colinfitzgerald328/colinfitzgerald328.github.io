---
layout: single
title:  "Modeling Social Forces in Microsoft Excel"
date:   2021-02-7 05:04:00 -0800
excerpt: "Visualizing the 400m splits of each athlete in the Men's 3000m run at the Prickly Pear Invitational."
categories: 
  - tutorial
  - pinned

toc: true
--- 

-   [Analysis](#analysis)

**Modeling Social Forces in Microsoft Excel**

> We know that we are heavily influenced by the opinions and decisions
> of others, but how can we create a visual representation of that?

> Recently, for a problem set in my Behavorial Economics course, we were
> asked to create a three dimensional model of social forces. The
> inspiration for this model is derived from [Chapter 2 of Weidlich and
> Haag](https://link.springer.com/chapter/10.1007/978-3-642-81789-2_2).

**Goals:**

> *Reproduce figure 2.7*\
>  *Demonstrate how our result changes when we change κ\\kappaκ*

**Clarification**

> The following words are not my own, but that of my professor, Raymond
> Hawkins. I believe that he does a really good job explaining this
> process so I included his outline of the steps for the process below.
> This is not my work, I only wanted to reproduce it because I was so
> fascinated with this problem set in particular. I find it quite
> interesting to share small snippets of my studies; it is quite a
> privilege.

***From professor Hawkins:***

This involves using the master equation with boundary conditions and
transition probabilities.

To solve the master equation numerically we will use a discretization
known as the Euler approximation:

P(nP(nP(n; ttt + Δ\\DeltaΔttt))) = P(nP(nP(n; ttt))) +
∂P(n;t)∂t\\frac{\\partial P(n; t)}{\\partial t}∂t∂P(n;t)​Δ\\DeltaΔttt

which says that to advance the probability density from time ttt to time
ttt + Δ\\DeltaΔttt one simply adds to P(nP(nP(n; ttt + Δ\\DeltaΔttt)))
the product ∂P(n;t)∂t\\frac{\\partial P(n; t)}{\\partial
t}∂t∂P(n;t)​Δ\\DeltaΔttt. Since ∂P(n;t)∂t\\frac{\\partial P(n;
t)}{\\partial t}∂t∂P(n;t)​Δ\\DeltaΔttt is given by the right-hand side
of the master equation we have, for a chosen time step ttt, a complete
solution: given an initial probability density PPP(nnn;;; 000), the
temporal evolution of PPP(nnn;;; ttt) can be calculated.

The simulation includes:

δ\\deltaδ: *a preference parameter.* A positive value increases the
probability that an individual changes from opinion 2 to opinion 1. A
negative value increases the probability that an individual changes from
opinion 2 to opinion 1.

κ\\kappaκ: *an adapatation parameter.* A positive value increases the
probability of an individual changing to the majority opinion. A
negative value decreases the probability of an individual changing to
the majority opinion.

ν\\nuν: *a flexibility parameter.* Determines the frequency with which
(or time scale over which) opinion changes occur.

In cells B3-B9 we are given variables for the simulation. To be clear:
there are 2N=502N = 502N=50 economic agents with psychological
parameters ν=1,κ=1\\nu = 1, \\kappa = 1ν=1,κ=1 , and δ=0\\delta = 0δ=0.
The variables κ0=0.5\\kappa\_0 = 0.5κ0​=0.5 and δ0=0\\delta\_0 = 0δ0​=0
will be used to specify the probability density p(n;0)p(n; 0)p(n;0) at
t=0t = 0t=0, and the time step for the simulation is Δt=0\\Delta t =
0Δt=0. This simulates a situation where the economy for t\<0t \< 0t\<0
is governed by the variables δ0\\delta\_0δ0​ and κ0\\kappa\_0κ0​ and for
t≥0t \\geq0t≥0 by the variables δ\\deltaδ and κ\\kappaκ.

The steps to complete the simulation are as follows:

> 1.  **The time axis ttt.** We need to specify the time axis to create
>     the graph. The values of the time axis are shown in column A,
>     beginning in cell A25 with t=0t = 0t=0 and increasing by
>     Δt=0.01\\Delta t = 0.01Δt=0.01 until t=6.0t = 6.0t=6.0 is reached
>     in cell A625.

> 2.  **The configuration axis nnn.** We also need to specify the
>     configuration axis for the graph. The values of the configuration
>     axis are shown in row 24, beginning in cell B24 with n=−N=−25n =
>     -N = -25n=−N=−25 and increasing by 1 across row 24 until n=N=25n =
>     N = 25n=N=25 is reached in cell AZ24.

> 3.  **The initial condition.** To simulate the temporal evolution of a
>     probability density we need to provide the *initial condition*, or
>     p(n;0)p(n; 0)p(n;0). There are a variety of ways of getting this
>     of which the simplest is to use the stationary solution:

> pst(n;0)C\\frac{p\_{st}(n; 0)}{C}Cpst​(n;0)​ ===
> CCC(2NN+n){2N}\\choose{N + n}(N+n2N​)exp[\\text
> exp[exp[(2(2(2δ\\deltaδnnn +++ κ0\\kappa\_0κ0​nnn2/\^{2}/2/NNN]]]

> where C=pst(0)(N!)2(2N)!C =
> p\_{st}(0)\\frac{(N!)\^2}{(2N)!}C=pst​(0)(2N)!(N!)2​

> which is Eq. 2.126 of Weidlich & Haag with the normalization factor
> CCC. To calculate the initial condition p(n;0)p(n; 0)p(n;0) we start
> by calculating:

> pst(n;0)C\\frac{p\_{st}(n; 0)}{C}Cpst​(n;0)​ === (2NN+n){2N}\\choose{N
> + n}(N+n2N​)exp[\\text exp[exp[(2(2(2δ\\deltaδnnn +++
> κ0\\kappa\_0κ0​nnn2/\^{2}/2/NNN]]]

> since this puts all the nnn dependence on the right-hand side. These
> values are shown in row 23 (labeled “Prenormalized”) starting in cell
> B23 and continuing until cell AZ23: the Excel function COMBIN was used
> to calculate the binomial coefficient. To calculate the normalization
> factor CCC, note that summing the left-hand side of

> pst(n;0)C\\frac{p\_{st}(n; 0)}{C}Cpst​(n;0)​ === (2NN+n){2N}\\choose{N
> + n}(N+n2N​)exp[\\text exp[exp[(2(2(2δ\\deltaδnnn +++
> κ0\\kappa\_0κ0​nnn2/\^{2}/2/NNN]]]

> yields 1C\\frac{1}{C}C1​ because pst(n;0)p\_{st}(n; 0)pst​(n;0) is a
> normalized probability density that sums to one. Thus, the sum of the
> values we have in row 23 is equal to 1C\\frac{1}{C}C1​ and that sum is
> shown in cell C22. The normalized initial condition, p(n;0)p(n;
> 0)p(n;0) shown in cells B25 to AZ25 is obtained by dividing the
> corresponding cells in row 23 by the value in cell C22.

> 4.  **The Temporal evolution.** To evolve the probability density
>     through time using the Euler algorithm given in the equation:\
>      P(nP(nP(n; ttt + Δ\\DeltaΔttt))) = P(nP(nP(n; ttt))) +
>     ∂P(n;t)∂t\\frac{\\partial P(n; t)}{\\partial
>     t}∂t∂P(n;t)​Δ\\DeltaΔttt
>
>     we need values for ∂p(n;t)/∂t\\partial p(n ; t) / \\partial
>     t∂p(n;t)/∂t which we can get from the master equation in the
>     nearest-neighbor approximation. To this end we need values for
>     w↑w\_{\\uparrow}w↑​ and w↓(n)w\_{\\downarrow}(n)w↓​(n). The
>     results of using the expressions on slide 13 of lecture 5 are
>     shown in the screenshot below:
>
In columns AX-AZ we see in rows 23-25 the calculation described above
for p(n;0)p(n; 0)p(n;0) where 23≤n≤2523 \\leq n \\leq 2523≤n≤25.
Beginning in column BC we see:

> ( a ) The values of w↑(n)w\_{\\uparrow}(n)w↑​(n) in row 22.\
>  ( b ) The values of w↓(n)w\_{\\downarrow}(n)w↓​(n) in row 23.\
>  ( c ) The values of nnn in row 24 (a repeat of those to the left for
> convenience.)\
>  ( d ) The values of ∂p(n;t=0)/∂t\\partial p(n; t = 0) / \\partial
> t∂p(n;t=0)/∂t in cells BC25 through DA25

The values of p(n;t=0.01)p(n; t = 0.01)p(n;t=0.01) in cells B26-AZ26 are
computed from the values in row 25 using the Euler approximation:

P(n;t=0.01)=P(n;t=0)+∂P(n;t=0)∂t×0.01P(n; t = 0.01) = P(n; t = 0) +
\\frac{\\partial P(n; t = 0)}{\\partial t} \\times
0.01P(n;t=0.01)=P(n;t=0)+∂t∂P(n;t=0)​×0.01 ,

and the corresponding ∂p(n;t=0.01)/∂t\\partial p(n; t =0.01) / \\partial
t∂p(n;t=0.01)/∂t are given in cells BC26-DA26. You can extend this to
all t(0.01≤t≤6)t (0.01 \\leq t \\leq 6)t(0.01≤t≤6) - and thus complete
the simulation - by repeating (copying) the calculations in row 26
(columns B to DA) through row 625.

> 5.  **Graphing the result.** The data in the rectangle defined by the
>     cells from A24 to AZ625 can now be graphed.

***End of Professor Hawkins***

Analysis
========

> I decided to include a few screenshots of the simulation, for values
> of κ=0.5,1,1.2\\kappa = 0.5, 1, 1.2κ=0.5,1,1.2, and 1.51.51.5.

Here is the graph for κ=0.5\\kappa = 0.5κ=0.5:

For κ=1\\kappa = 1κ=1:

For κ=1.2\\kappa =1.2κ=1.2:

For κ=1.5\\kappa = 1.5κ=1.5:

Notice how as we increase the value of κ\\kappaκ, the graph becomes more
splintered towards either side. For κ=0.5\\kappa = 0.5κ=0.5, the graph
looks very evenly distributed. However, as κ\\kappaκ increases, we see
the graph start to split into two distinct sides. This illustrates how,
as κ\\kappaκ increases, individuals are more likely to change their
opinion to that of the majority. I’ll end this short analysis with a
quote from the last slide of lecture:

"[a] ‘sound’ banker, alas! is not one who foresees danger andavoids it,
but one who, when he is ruined, is ruined in aconventional way along
with his fellows, so that no one canreally blame him.”– Keynes 1931.

const plans = [
    {
        title: "FORT DOLLAR",
        text: `
          <p class="pb-2">Invest Nigerian currency,</p>
          <p class="pb-2">have it converted to foreign currencies (Dollar, Euros, Pounds) </p>
          <p class="pb-2">Earn an additional 30% interest annually in your desired currency</p>
        `,
        path: '/signup',
        minPrice: 500,
        maxPrice: 1000
    },
    {
        title: "FORT SOCIAL",
        text: `
          <p class="pb-2">Invest with as low as Fifty Thousand Naira (N50,000) </p>
          <p class="pb-2">Get entitled to a monthly data subscription. </p>
          <p class="pb-2">Get 30% interest annually</p>
        `,
        path: '/signup',
        minPrice: 1500,
        maxPrice: 2000
    },
    {
        active: true,
        title: "FORT SHIELD",
        text: `
          <p class="pb-2">Invest a minimum of One Million Naira (N1,000,000) </p>
          <p class="pb-2">Receive 18% ROI annually &</p>
          <p class="pb-2">get a land as Collateral for the period of investment.</p>
        `,
        path: '/signup',
        minPrice: 25000,
        maxPrice: 100000
    },
    {
        title: "FORT BONUS",
        text: `
          <p class="pb-2">Invest a minimum of Five Hundred Thousand Naira (N500,000)</p>
          <p class="pb-2">And get free assets like Mobile Phones, Television, Blender, Fan and many more.</p>
        `,
        path: '/signup',
        minPrice: 2500,
        maxPrice: 3000
    },
    {
        title: "FORT SPECIAL",
        text: `
          <p class="pb-2">Invest a minimum of One Hundred Thousand Naira (N100,000)</p>
          <p class="pb-2">and receive 40% Interest,</p>
          <p class="pb-2">With Half of your interest paid immediately</p>
        `,
        path: '/signup',
        minPrice: 3500,
        maxPrice: 4000
    },
]

export default plans;
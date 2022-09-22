# API Hero - Next.js GitHub Demo

This repository contains a Next.js demo app that interacts with the [GitHub API](https://docs.github.com/en/rest) using [API Hero](https://apihero.run), to fetch the current star count of a repository.

## Getting started

> You'll need an API Hero account to run this demo. Signup for the waitlist [here](https://apihero.run/privateBetaSignup)

Clone the repository and install the dependencies:

```bash
git clone https://github.com/apihero-run/github-stars-demo.git
cd github-stars-demo
npm install
```

Invoke the API Hero CLI to add the GitHub integration to your API Hero account:

```
npx apihero@latest add github
```

After following the prompts, you should be shown a `projectKey`. Edit the `ApiHeroProvider` component in [pages/index.tsx](/pages/index.tsx) and add the `projectKey` prop:

```tsx
export default function App() {
  return (
    <APIHeroProvider projectKey="<your project key here>">
      <Home />
    </APIHeroProvider>
  );
}
```

Now you are ready to run the app with `npm run dev` and visit the app at [http://localhost:3000](http://localhost:3000) and start making requests:

![look to the stars demo](/docs/ShowDontTell.gif)

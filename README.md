This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This is the landing website for the event "Salon Automùne 2024" in Paris - Champs Elysées

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## GOOGLE RECAPATCHA


You must create a new project to create a Recaptcha key pairs 

To do this, Go to [https://console.cloud.google.com/welcome?hl=fr&project=inrealartlanding-3a094](https://console.cloud.google.com/welcome?hl=fr&project=inrealartlanding-3a094)

Click on Inrealartlanding close to "Vous travaillez dans Inrealartlanding".<br>
Then click on "Nouveau projet"

When your project is created, you can create your keys for Google Recaptcha.<br>
Go to the URL [https://www.google.com/recaptcha/admin/create?hl=fr](https://www.google.com/recaptcha/admin/create?hl=fr)
And fullfill all infos to create the Recaptcha. <br>

If you did not deploy the website on Vercel, choose value "localhost" for "domain".<br>
Then, copy the public key and the secret key in the _.env_ file

## OVH DNS

You must now create a subdomain for your landing.
Signin on OVH and go to [https://www.ovh.com/manager/#/web/domain/inrealart.com/zone](https://www.ovh.com/manager/#/web/domain/inrealart.com/zone)

Click on the action menu on the top right "Create a subdomain".
Inspire from the others subdomains and choose : 
 - TTL : By default
 - Type : CNAME
 - Cible : "cname.vercel-dns.com"



https://www.ovh.com/manager/#/web/domain/inrealart.com/zone


## GOOGLE ANALYTICS
Now you must create a "Property" in Google Analytics 4. <br>

See documentation on [https://support.google.com/analytics/answer/9744165?hl=fr#upgrade](https://support.google.com/analytics/answer/9744165?hl=fr#upgrade)



After creating the property with the subdomain of your landing you can get the Google Measurement ID and copy it in the _.env_ file
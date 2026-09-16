const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const siteUrl = configuredUrl ? new URL(configuredUrl).origin : undefined;

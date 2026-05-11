import { z } from "zod";

const SectionHeaderSchema = z.object({
  enable: z.boolean().default(true),
  label: z.string(),
});

export const SiteSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.string(),

    icon: z.string(),
    author: z.string(),

    baseURL: z.string().url(),

    ogImage: z.string(),

    twitter: z.object({
      creator: z.string(),
    }),
  }),

  layout: z.object({
    navbar: z.object({
      left: z.array(
        z.object({
          href: z.string(),
          label: z.string(),
          mobileLabel: z.string().optional(),
        }),
      ),

      right: z.array(
        z.object({
          href: z.string(),
          label: z.string(),
        }),
      ),

      showThemeToggle: z.boolean(),
    }),

    footer: z.object({
      copyrightText: z.string(),
      watermark: z.boolean(),
    }),
  }),

  landing: z.object({
    avatar: z.object({
      url: z.string(),
      alt: z.string(),
      width: z.number(),
      height: z.number(),
    }),

    hero: z.object({
      boldText: z.string(),
      boldurl: z.string(),
      describe: z.object({
        firstPart: z.string(),
        secondPart: z.string(),
        thirdPart: z.string(),
      }),
    }),

    social: z.record(z.string(), z.string()),
    building: z.object({
      enable: z.boolean(),
      label: z.string(),
      project: z.object({
        name: z.string(),
        url: z.string(),
        description: z.string(),
        logo: z.string(),
      }),
      more: z.object({
        url: z.string(),
        label: z.string(),
      }),
    }),

    skills: SectionHeaderSchema.extend({
      items: z.array(z.string()),
    }),

    experience: SectionHeaderSchema.extend({
      items: z.array(
        z.object({
          company: z.string(),

          role: z.string(),

          period: z.string(),

          description: z.string(),

          url: z.string().optional(),
        }),
      ),
    }),

    recentPosts: z.object({
      enable: z.boolean(),
      label: z.string(),
      more: z.object({
        url: z.string(),
        label: z.string(),
      }),
      maxPosts: z.number(),
    }),
  }),
});

export type SiteConfig = z.infer<typeof SiteSchema>;

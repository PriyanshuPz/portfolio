import { error } from "@sveltejs/kit";

const modules = import.meta.glob("../../content/**/*.md", {
  eager: true,
});

export async function load({ params }) {
  const slug = params.slug?.split("/") || [];

  /*
    1. Try exact markdown match
  */
  const path = `../../content/${slug.join("/")}.md`;

  const post: any = modules[path];

  if (post) {
    return {
      type: "post",
      content: post.default,
      meta: post.metadata,
    };
  }

  /*
    2. Try folder index
  */
  if (slug.length === 1) {
    const section = slug[0];

    const posts = Object.entries(modules)
      .filter(([path]) => path.includes(`/content/${section}/`))
      .map(([path, module]: any) => {
        const file = path.split("/").pop()?.replace(".md", "");

        return {
          ...module.metadata,
          slug: `/${section}/${file}`,
        };
      });

    if (posts.length) {
      posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );

      return {
        type: "index",
        title: section,
        posts,
      };
    }
  }

  throw error(404, `Could not find ${params.slug}`);
}

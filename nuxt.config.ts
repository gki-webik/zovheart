export default defineNuxtConfig({
  app: {
    head: {
      title: "Благотворительный фонд Зов Сердца",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "index,follow" },
        {
          name: "description",
          content:
            "Благотворительный фонд Зов Сердца. Россия – это сила! Поддержим наших героев!",
        },
        {
          name: "keywords",
          content: "memes, humor, funny, jokes, entertainment",
        },
        { property: "og:title", content: "Зов сердца" },
        {
          property: "og:description",
          content:
            "Благотворительный фонд Зов Сердца. Россия – это сила! Поддержим наших героев!",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "http://зовсердца.рф" },
        /*  {
          property: "og:image",
          content: "/assets/media/socialWEB.jpeg",
        }, */
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Зов сердца" },
        {
          name: "twitter:description",
          content:
            "Благотворительный фонд Зов Сердца. Россия – это сила! Поддержим наших героев!",
        },
        /* {
          name: "twitter:image",
          content: "/assets/media/socialWEB.jpeg",
        }, */
        { name: "theme-color", content: "#0A1C0C" },
        { name: "msapplication-TileColor", content: "#0A1C0C" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        {
          name: "keywords",
          content:
            "благотворительный фонд, Зов Сердца, помощь военнослужащим, СВО, волонтерство, благотворительность, поддержка армии, гуманитарная помощь",
        },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
        { name: "apple-mobile-web-app-title", content: "Зов сердца" },
        /* {
          name: "msapplication-TileImage",
          content: "/assets/media/browserLogo.png",
        }, */
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "color-scheme", content: "light" },
        { name: "viewport-fit", content: "cover" },
        { name: "bingbot", content: "index,follow" },
        { name: "yandex", content: "index,follow" },
        { name: "og:locale", content: "ru_RU" },
        { name: "og:site_name", content: "Зов сердца" },
      ],
      link: [
        /* { rel: "manifest", href: "/site.webmanifest" },
        {
          rel: "icon",
          type: "image/png",
          href: "/assets/media/logo.png",
        },
        {
          rel: "icon",
          type: "apple-touch-icon",
          href: "/assets/media/logo.png",
        },
        {
          rel: "short icon",
          href: "/favicon.ico",
        }, */
        { rel: "canonical", href: "http://зовсердца.рф" },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "http://зовсердца.рф",
            name: "Зов сердца",
          }),
        },
      ],
    },
  },
  css: [],
  components: true,
  devServer: {
    port: 3000,
  },
  compatibilityDate: "2025-06-01",
});

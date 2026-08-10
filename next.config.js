module.exports = {
  async redirects() {
    return [
      {
        source: "/videos",
        destination: "/videos/UUBTHMWdAFuQ5ynEryDIWdRw",
        permanent: true,
      },
    ];
  },
  images: {
    domains: [
      "localhost",
      "kulliyatulquran.vercel.app",
      "ImamBukhariTrust.com",
      "www.ImamBukhariTrust.com",
      "i.ytimg.com",
      "imam-bukhari-admin-production.up.railway.app",
    ],
  },
};

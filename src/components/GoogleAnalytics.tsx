import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-JETXPZ4ZT3`}
      />
      <Script
        id="gtm-script"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-JETXPZ4ZT3');
              `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;

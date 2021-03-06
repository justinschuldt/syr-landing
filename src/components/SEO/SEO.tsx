import React from 'react';
import Helmet, { HelmetProps } from 'react-helmet';
import { injectIntl, InjectedIntlProps } from 'gatsby-plugin-intl';
import { Location } from '@reach/router';

type Props = {
  /** Description text for the description meta tags */
  description?: string;
} & HelmetProps &
  InjectedIntlProps;

/**
 * An SEO component that handles all element in the head that can accept
 */
const SEO: React.FC<Props> = ({ children, description = '', title, intl }) => {
  const metaDescription = description || 'Homemade food marketplace';

  return (
    <Location>
      {({ location }) => (
        <Helmet
          htmlAttributes={{
            lang: intl.locale,
          }}
          title={title}
          titleTemplate="%s | Website"
        >
          <meta property="description" content={metaDescription} />

          {/* OG tags */}
          <meta
            property="og:url"
            content={process.env.GATSBY_SITE_URL + location.pathname}
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:locale" content={intl.locale} />
          <link
            rel="icon"
            href={process.env.GATSBY_SITE_URL + '/favicon.ico'}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={process.env.GATSBY_SITE_URL + '/apple-touch-icon.png'}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={process.env.GATSBY_SITE_URL + '/favicon-32x32.png'}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={process.env.GATSBY_SITE_URL + '/favicon-16x16.png'}
          />
          <link
            rel="manifest"
            href={process.env.GATSBY_SITE_URL + '/site.webmanifest'}
          />
          {children}
        </Helmet>
      )}
    </Location>
  );
};

export default injectIntl(SEO);

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {
  injectIntl,
  FormattedMessage,
  InjectedIntlProps,
} from 'gatsby-plugin-intl';

import { Layout } from '~/components/Layout';
import { SEO } from '~/components/SEO';

import { ReactComponent as SyrIcon } from '~/icons/syr.svg';

const Card = styled.div`
    min-width: 350px;
    padding: 1.5rem;
    text-align: center;
    background-color: #f7fafc;
    border-radius: 0.5rem;
    box-shadow: 2px 4px 12px 3px rgba(249,249,249,0.25);
}`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: #201b21;
`;

const LangLink = styled.a`
  margin: 6px;
  color: rgba(255, 255, 255, 0.8);
`

const Index: React.FC<InjectedIntlProps> = ({ intl }) => {
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'homepage.title' })} />
      <Container>
        <Card>
          <div
            css={css`
            display: flex;
            justify-content: space-around;
            `}
          >
            <SyrIcon css={css`
              width: 120px;
              margin-right: auto;
              margin-left: auto;
              display: inline-block;
              fill: red;
              `} />
          </div>

          {/* TODO - icon & link to the marketplace? */}
          {/* <a
            href="https://github.com/justinschuldt/syr-landing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon
              css={css`
                width: 35px;
                margin-right: auto;
                margin-left: auto;
                display: inline-block;
                fill: black;
                transition: fill 0.2s ease-in-out;

                &:hover {
                  fill: #5d71e4;
                }
                `}
              />
          </a> */}
          <FormattedMessage id="greeting" />
        </Card>
        <div
          css={css`
          display: flex;
          justify-content: space-between;
          width: 270px;
          margin-top: 8px;
          `}
        >
          <div><LangLink href="/en" hrefLang="en">English</LangLink></div>
          <div><LangLink href="/es" hrefLang="es">Español</LangLink></div>
          <div><LangLink href="/zh" hrefLang="zh">中文</LangLink></div>
        </div>
      </Container>
    </Layout>
  );
};

export default injectIntl(Index);

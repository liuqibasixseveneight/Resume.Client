import { FC } from 'react';

import { List, Text } from '../../../ui';
import { listItems } from './listItems';

const AboutSectionContent: FC = () => {
  return (
    <>
      <Text paddingBottom='0.8rem'>
        Hey there! I'm Riz, a Frontend Developer with a{' '}
        <strong>passion for creating web experiences.</strong>
      </Text>

      <Text paddingBottom='0.8rem'>
        I'm currently working at a{' '}
        <a
          href='https://www.cluedin.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          start-up
        </a>
        , and spend most of my working time{' '}
        <strong>creating user interfaces</strong>. Outside of work, I like to
        experiment with and learn new technologies such as d3, Three.js, and
        React Three Fiber.
      </Text>

      <Text paddingBottom='0.8rem'>
        Here are some of the technologies I've been working with recently:
      </Text>

      <List isUnordered listItems={listItems} />
    </>
  );
};

export default AboutSectionContent;

import { type FC, useRef, useEffect } from 'react';

import { Blob } from './Blob';
import { Blur } from './Blur';
import { Wrapper } from './Wrapper';
import { getTheme } from '../../../../utils';

const CursorBlob: FC = () => {
  const blobRef = useRef<HTMLDivElement | null>(null);

  const theme = getTheme();
  const {
    background: backgroundPrimary,
    text: textPrimary,
    highlight: highlightPrimary,
    link: linkPrimary,
  } = theme?.palette?.primary;

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;

    if (blobRef.current) {
      blobRef.current.style.left = `${clientX}px`;
      blobRef.current.style.top = `${clientY}px`;
    }
  };

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      handleMouseMove(event);
    };

    document.body.addEventListener('mousemove', onMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <Wrapper>
      <Blob
        ref={blobRef}
        $backgroundPrimary={backgroundPrimary}
        $textPrimary={textPrimary}
        $highlightPrimary={highlightPrimary}
        $linkPrimary={linkPrimary}
      />
      <Blur />
    </Wrapper>
  );
};

export default CursorBlob;

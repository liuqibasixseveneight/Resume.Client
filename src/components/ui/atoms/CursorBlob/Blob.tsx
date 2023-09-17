import styled, { keyframes } from 'styled-components';

const blobRotation = keyframes`
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
`;

export const Blob = styled.div<{
  $backgroundPrimary: string;
  $textPrimary: string;
  $highlightPrimary: string;
  $linkPrimary: string;
}>`
  animation: ${blobRotation} 20s infinite;
  aspect-ratio: 1;
  background: linear-gradient(
    to right,
    ${({ $backgroundPrimary }) => $backgroundPrimary},
    ${({ $textPrimary }) => $textPrimary},
    ${({ $highlightPrimary }) => $highlightPrimary},
    ${({ $linkPrimary }) => $linkPrimary}
  );
  background-color: #ffffff;
  border-radius: 50%;
  filter: blur(100px);
  height: 300px;
  left: 50%;
  position: absolute;
  top: 50%;
  translate: -50% -50%;
`;

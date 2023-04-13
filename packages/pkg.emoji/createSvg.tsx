export const createSvg = (unicode: string, title?: string) => (
  <svg width="25" height="25">
    <use href={`/emojis.svg#${unicode}`}>
      <title>{title}</title>
    </use>
  </svg>
);

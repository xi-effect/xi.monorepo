import { VideoPlayer } from 'pkg.components.videoplayer';
import { Button } from 'pkg.inputs.button';
import { useState } from 'react';

const testVideoUrls = [
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
];

const TestComponents = () => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleToggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleToggleIndex = () => {
    setIndex((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <>
      <Button onClick={handleToggleOpen} variant="text">
        Open video
      </Button>

      <Button onClick={handleToggleIndex} variant="text">
        change video
      </Button>

      {open && <VideoPlayer url={testVideoUrls[index]} onClose={handleToggleOpen} />}
    </>
  );
};

export default TestComponents;

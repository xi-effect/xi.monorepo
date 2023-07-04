import { VideoPlayer } from 'pkg.components.videoplayer';
import { Button } from 'pkg.inputs.button';
import { useState } from 'react';

const videoUrls = [
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
];

const TestComponents = () => {
  const [selectedVideo, setSelectedVideo] = useState(0);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {!open && (
        <>
          <Button onClick={handleOpen}>Open video</Button>

          <Button onClick={() => setSelectedVideo((prev) => (prev === 0 ? 1 : 0))}>
            change video
          </Button>
        </>
      )}

      {open && <VideoPlayer url={videoUrls[selectedVideo]} onClose={handleClose} />}
    </>
  );
};

export default TestComponents;

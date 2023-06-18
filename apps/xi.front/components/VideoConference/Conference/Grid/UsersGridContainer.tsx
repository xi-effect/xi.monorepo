import React, { RefObject, useEffect, useState, useTransition } from 'react';
import { CircularProgress, Stack, useMediaQuery } from '@mui/material';
import { observer } from 'mobx-react';
import { useStore } from 'store/connect';
import { ConferenceUserT } from 'store/media/mediaSt';
import Arrows from './Arrows';
import UsersGrid from './UsersGrid';
import { StateViewT } from '../Conference';

type UsersLayoutT = {
  boxRef: RefObject<HTMLDivElement>;
};

type CardT = {
  width: number;
  height: number;
};

export type CardSizeT = {
  card: CardT;
  speaker: CardT;
};

const UsersGridContainer: React.FC<UsersLayoutT & StateViewT> = observer((props) => {
  const { boxRef, stateView } = props;

  const rootStore = useStore();

  const [view] = stateView;

  const {
    mediaSt: {
      conferenceGridData: { users },
      conferenceControlBar: { members, chat },
    },
  } = rootStore;

  const tablet = useMediaQuery('(max-width:700px)');

  const mobile = useMediaQuery('(max-width:375px)');

  const [loading, startTransition] = useTransition();

  const [currentPage, setCurrentPage] = useState<number>(0);

  const [loadingSimulation, setLoadingSimulation] = useState<boolean>(false);

  const [usersPerPage, setUsersPerPage] = useState<ConferenceUserT[][]>([]);

  const [cardSize, setCardSize] = useState<CardSizeT>({
    card: {
      width: 0,
      height: 0,
    },
    speaker: {
      height: 0,
      width: 0,
    },
  });

  const computeCardForDesktop = () => {
    const p = 96;

    const box = boxRef.current;

    const currentWidth = window.innerWidth;

    const gridInfo = {
      card: {
        width: 0,
        height: 0,
      },
      speaker: {
        width: 0,
        height: 0,
      },
      numberOfCardsInRow: 0,
    };

    if (currentWidth <= 1456 && currentWidth >= 1192) {
      gridInfo.numberOfCardsInRow = 6;
    } else if (currentWidth <= 1192 && currentWidth >= 996) {
      gridInfo.numberOfCardsInRow = 5;
    } else if (currentWidth <= 996 && currentWidth >= 700) {
      gridInfo.numberOfCardsInRow = 4;
    } else {
      gridInfo.numberOfCardsInRow = 7;
    }

    if (box) {
      if (view === 'speaker') {
        const cardHeight = Math.floor((box.clientHeight / 100) * 30);

        const cardWidth = Math.floor((cardHeight / 9) * 16);

        const speakerWidth = Math.floor((box.clientWidth / 100) * 70);

        const speakerHeight = Math.floor((speakerWidth / 16) * 9);

        gridInfo.card = { width: cardWidth, height: cardHeight };

        gridInfo.speaker = { width: speakerWidth, height: speakerHeight };

        if (members || chat) {
          gridInfo.numberOfCardsInRow = Math.floor(((box.clientWidth / 100) * 70 - p) / cardWidth);

          gridInfo.speaker = {
            width: Math.floor((speakerWidth / 100) * 70),
            height: Math.floor((gridInfo.speaker.width / 16) * 9),
          };
        } else {
          gridInfo.numberOfCardsInRow = Math.floor((box.clientWidth - p) / cardWidth);
        }
      } else {
        const width = Math.floor((currentWidth - p) / gridInfo.numberOfCardsInRow);

        gridInfo.card = {
          width,
          height: Math.floor((width / 16) * 9),
        };
      }
    }

    setCardSize({ card: gridInfo.card, speaker: gridInfo.speaker });

    return gridInfo;
  };

  const computeCardForMobileAndTablet = () => {
    const p = 25;

    const currentWidth = window.innerWidth;

    const width = Math.floor((currentWidth - p) / 3);

    if (currentWidth < 375) {
      setCardSize((g) => ({
        ...g,
        card: { width, height: width },
      }));
    } else {
      setCardSize((g) => ({
        ...g,
        card: {
          width,
          height: Math.floor((width / 16) * 9),
        },
      }));
    }
  };

  const computeCardsForGrid = () => {
    setLoadingSimulation(true);

    setCurrentPage(0);

    if (mobile || tablet) {
      computeCardForMobileAndTablet();
    } else {
      computeUsersPerPage();
    }

    setTimeout(() => {
      setLoadingSimulation(false);
    }, 300);
  };

  const computeUsersPerPage = () => {
    const p = 96;

    const result: any[][] = [];

    const box = boxRef.current;

    const {
      numberOfCardsInRow,
      card: { width, height },
    } = computeCardForDesktop();

    const computedGridInfo = {
      maxCard: 0,
      cardInWidth: 0,
      cardInHeight: 0,
    };

    if (box) {
      if (members || chat) {
        computedGridInfo.cardInWidth = Math.floor(((box.clientWidth / 100) * 70 - p) / width);
      } else {
        computedGridInfo.cardInWidth = Math.floor((box.clientWidth - p) / width);
      }

      computedGridInfo.cardInHeight = Math.floor(box.clientHeight / height);

      if (computedGridInfo.cardInHeight > 5) {
        computedGridInfo.maxCard = 5 * computedGridInfo.cardInWidth;
      } else {
        computedGridInfo.maxCard = computedGridInfo.cardInHeight * computedGridInfo.cardInWidth;
      }

      const maxElementsOnPage = view === 'tile' ? computedGridInfo.maxCard : numberOfCardsInRow;

      const pages = Math.ceil(users.length / maxElementsOnPage);

      if (maxElementsOnPage) {
        for (let i = 0; i < pages; i += 1) {
          if (result.length) {
            result.push(users.slice(i * maxElementsOnPage, maxElementsOnPage * (i + 1)));
          } else {
            result.push(users.slice(0, maxElementsOnPage));
          }
        }
      }

      setUsersPerPage(result);
    }
  };

  const updateUsersGrid = () =>
    startTransition(() => {
      if (tablet || mobile || users.length <= 4) {
        setUsersPerPage([users]);
      }

      computeCardsForGrid();
    });

  const dependencyForUpdateUsersGrid = tablet ? [users] : [users, view, members, chat];

  useEffect(updateUsersGrid, dependencyForUpdateUsersGrid);

  useEffect(() => {
    window.addEventListener('resize', updateUsersGrid);

    return () => {
      window.removeEventListener('resize', updateUsersGrid);
    };
  }, []);

  return (
    <Stack
      sx={{
        p: tablet ? '0 8px' : '0 48px',
        transition: 'width 0.3s linear',
        overflowY: tablet ? 'scroll' : 'initial',
        width: !tablet && (members || chat) ? '70%' : '100%',

        height: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        position: 'relative',
        justifyContent: 'center',
        alignContent: tablet ? 'baseline' : 'center',
      }}
    >
      {!tablet && (
        <Arrows
          currentPage={currentPage}
          maxPage={usersPerPage.length}
          setCurrentPage={setCurrentPage}
        />
      )}

      {loading || loadingSimulation ? (
        <CircularProgress sx={{ top: '50%', left: '50%', position: 'absolute' }} />
      ) : (
        <UsersGrid
          cardSize={cardSize}
          stateView={stateView}
          usersCount={users.length}
          users={usersPerPage[currentPage]}
        />
      )}
    </Stack>
  );
});

export default UsersGridContainer;

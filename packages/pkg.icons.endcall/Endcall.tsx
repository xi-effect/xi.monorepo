import { SvgIcon } from '@mui/material';

export type EndcallProps = {
  [key: string]: any;
};

export const Endcall = ({ ...props }: EndcallProps) => (
  <SvgIcon {...props}>
    <path
      d="M10.94 5.943a81.74 81.74 0 0 1-.66.059 16.841 16.841 0 0 0-5.249 1.362c-.659.289-1.749.855-2.113 1.097a3.718 3.718 0 0 0-1.487 2.103c-.083.312-.09.421-.09 1.556-.001 1.049.009 1.256.07 1.479.22.796.724 1.408 1.455 1.765.511.25.79.286 2.048.266.933-.015 1.096-.028 1.31-.098a2.78 2.78 0 0 0 1.835-1.912c.036-.132.078-.455.093-.719l.028-.478.413-.13a12.69 12.69 0 0 1 1.767-.401c.661-.103 2.619-.103 3.28 0a12.69 12.69 0 0 1 1.767.401l.413.13.028.478c.015.264.057.587.093.719a2.78 2.78 0 0 0 1.835 1.912c.214.07.377.083 1.31.098 1.258.02 1.537-.016 2.048-.266.56-.274.989-.696 1.247-1.225.262-.54.279-.663.279-1.999 0-.872-.015-1.26-.054-1.42-.192-.783-.613-1.505-1.143-1.962-.316-.272-.601-.451-1.316-.823-2.081-1.083-3.957-1.66-6.247-1.92-.486-.056-2.596-.107-2.96-.072m2.48 2.039c2.199.211 4.083.784 5.988 1.823.639.349.808.477.974.736.231.361.26.489.286 1.259.042 1.263-.018 1.55-.369 1.749-.151.085-.202.09-1.016.09-.793.001-.871-.005-1.033-.084a.776.776 0 0 1-.282-.245c-.1-.152-.108-.198-.131-.786-.034-.831-.138-1.103-.589-1.533-.284-.271-.412-.337-1.048-.543a13.751 13.751 0 0 0-2.42-.556c-.69-.101-2.87-.101-3.56 0-.926.136-1.601.291-2.42.556-.636.206-.764.272-1.048.543-.447.426-.555.704-.589 1.509-.029.693-.079.843-.336 1.014-.161.106-.161.106-1.064.116-.876.011-.908.008-1.062-.08-.351-.201-.411-.485-.37-1.75.025-.77.054-.895.287-1.259.166-.259.335-.387.974-.736 1.878-1.024 3.781-1.608 5.936-1.822.75-.075 2.123-.075 2.892-.001"
      fillRule="evenodd"
    />
  </SvgIcon>
);

import React from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const impulse = keyframes`
    0% {
        background: #B4BDFF;
        transform: scale(1);
        animation-timing-function: cubic-bezier(1,0,0.7,1);
    }
    40% {
        background: #445AFF;
        transform: scale(1.5);
        animation-timing-function: cubic-bezier(0.3,0,0,1);
    }
    72.5% {
        background: #B4BDFF;
        transform: scale(1);
        animation-timing-function: linear;
    }
    100% {
        background: #B4BDFF;
        transform: scale(1);
    }
`;

type WrapperProps = {
    size: number;
    sizeUnit: string;
}

const Wrapper = styled.div(({ size, sizeUnit }: WrapperProps) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: `${size}${sizeUnit}`,
    height: `${size / 5}${sizeUnit}`,
}));

type BallProps = {
    y: number;
    x: number;
    sizeUnit: string;
    size: number;
    frontColor: string;
    index: number;
};

const Ball = styled.div(({ y, x, sizeUnit, size, frontColor, index }: BallProps) => ({
    position: 'absolute',
    top: `${y}${sizeUnit}`,
    left: `${x}${sizeUnit}`,
    width: `${size / 5}${sizeUnit}`,
    height: `${size / 5}${sizeUnit}`,
    borderRadius: '50%',
    backgroundColor: frontColor,
    animation: `${impulse} 1.25s linear infinite`,
    animationDelay: `${index * 0.125}s`,
}));


const getBalls = ({ countBalls, frontColor, size, sizeUnit }: any) => {
    const balls: React.ReactNode[] = [];
    for (let i = 0; i < countBalls; i += 1) {
        balls.push(
            <Ball
                frontColor={frontColor}
                size={size}
                x={i * (size / 5 + size / 5)}
                y={0}
                key={i.toString()}
                index={i}
                sizeUnit={sizeUnit}
            />,
        );
    }
    return balls;
};

export type SpinnerProps = {
    size?: number;
    frontColor?: string;
    backColor?: string;
    sizeUnit?: string;
};

export const Spinner = ({ size = 96, frontColor = '#ffffff', sizeUnit = 'px' }: SpinnerProps) => {
    const countBalls = 3;
    return (
        <Wrapper size={size} sizeUnit={sizeUnit}>
            {getBalls({
                countBalls,
                frontColor,
                size,
                sizeUnit,
            })}
        </Wrapper>
    );
};

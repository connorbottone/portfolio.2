import React from 'react';
import FormData from '@/components/Formdata';

const Grid = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [flipDirection, setFlipDirection] = React.useState('rotateY(180deg)');

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setIsFlipped(true);
    setFlipDirection(getFlipDirection(index));
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsFlipped(false);
    setFlipDirection('rotateY(180deg)');
  };

  const getFlipDirection = (index) => {
    const column = index % 8;
    const row = Math.floor(index / 8);

    if (column === 0 && row !== 3) {
      // Left side (blue)
      return hoveredIndex === index ? 'rotateY(0)' : 'rotateY(180deg)';
    } else if (row === 0 && column !== 7) {
      // Top side (orange)
      return hoveredIndex === index ? 'rotateX(0)' : 'rotateX(-180deg)';
    } else if (column === 7 && row !== 3) {
      // Right side (black)
      return hoveredIndex === index ? 'rotateY(0deg)' : 'rotateY(-180deg)';
    } else if (row === 3 && column !== 0) {
      // Bottom side (green)
      return hoveredIndex === index ? 'rotateX(0)' : 'rotateX(180deg)';
    }

    return 'flipDirection(180deg)';
  };

  return (
    <div style={{ position: 'relative', width: '200px', height: '200px' }}>
      <div
        style={{
          width: '80%',
          height: '80%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transform: isFlipped ? flipDirection : 'rotateY(0)',
          transition: 'transform 0.6s',
          boxShadow: isFlipped ? '0 0 8px 2px rgba(0, 0, 0, 0.5)' : 'none',
          animation: isFlipped ? 'glowing 15s ' : 'none',
        }}
      >
        
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backfaceVisibility: 'hidden',
          }}
        >
          <img
            src="/bcks.gif"
            alt="Background Image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        {!isFlipped && (
          <div
            style={{
              position: 'absolute',
              top: '110%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'White', // Change link text color
              zIndex: 1,
            }}
          > <p style={{ animation: 'colorCycle 4s infinite' }}> @2023</p>
          <br />
       
                     
                    
                      <br />
                      
                 
          </div>
        )}
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            backfaceVisibility: 'hidden',
            transform: flipDirection,
            backgroundImage: 'url(/demo.gif)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
          
        
        
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '80%',
          height: '80%',
          display: 'grid',
          opacity:0,
          gridTemplateColumns: 'repeat(8, 1fr)',
          pointerEvents: 'none', // Disable pointer events on the grid container
        }}  
      > 
       
        {Array.from({ length: 32 }, (_, index) => {
          const column = index % 8;
          const row = Math.floor(index / 8);

          let backgroundColor = 'transparent';

          if (column === 0 && row !== 3) {
            // Left side (blue)
            backgroundColor = hoveredIndex === index ? 'blue' : 'transparent';
          } else if (row === 0 && column !== 7) {
            // Top side (orange)
            backgroundColor = hoveredIndex === index ? 'orange' : 'transparent';
          } else if (column === 7 && row !== 3) {
            // Right side (black)
            backgroundColor = hoveredIndex === index ? 'black' : 'transparent';
          } else if (row === 3 && column !== 0) {
            // Bottom side (green)
            backgroundColor = hoveredIndex === index ? 'green' : 'transparent';
          }

          return (
            <div
              key={index}
              style={{
                height: '100%',
                backgroundColor: backgroundColor,
                border: '1px solid black',
                pointerEvents: 'auto', // Enable pointer events on each grid section
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
      <style>
        {`
        @keyframes glowing {
          0% {
            box-shadow: 0 0 12px 5px rgba(0, 0, 0, 0.8);
          }
          50% {
            box-shadow: 0 0 12px 5px rgba(0, 0, 0, 0.8);
          }
          100% {
            box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.5);
          }
        }
        @keyframes colorCycle {
            0% {
              color: red;
            }
            25% {
              color: blue;
            }
            50% {
              color: green;
            }
            75% {
              color: orange;
            }
            100% {
              color: red;
            }
          }
        }
        
        `}
      </style>
    </div>
  );
};

export default Grid;

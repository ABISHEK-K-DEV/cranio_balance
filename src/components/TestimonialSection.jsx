import { useRef, useState } from 'react';
import './TestimonialSection.css';
import playIcon from '../assets/play-icon.svg';
import quotesIcon from '../assets/quotes-icon.svg';
import reviewStarIcon from '../assets/review-star-icon.svg';
import Christa from '../assets/Videos/CristaHolzl.mp4';
import Manuela from '../assets/Videos/manuela.mp4';
import Diana from '../assets/Videos/DianaMogytych.mp4';
import Robert from '../assets/Videos/RobertHolzl.mp4';

const TestimonialSection = () => {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const videoRefs = useRef({});
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const handleVideoPlay = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      if (playingVideoId === id) {
        video.pause();
        setPlayingVideoId(null);
      } else {
        // Pause any currently playing video
        if (playingVideoId && videoRefs.current[playingVideoId]) {
          videoRefs.current[playingVideoId].pause();
        }
        video.play().then(() => {
          setPlayingVideoId(id);
        }).catch(err => {
          console.error('Play error:', err);
        });
      }
    }
  };

  const handleMouseDown = (e) => {
    // Don't start dragging if clicking on play button or video
    if (e.target.closest('.play-button') || e.target.closest('.testimonial-video')) {
      return;
    }
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const testimonials = [
    {
      id: 1,
      name: "Diana Mogytych",
      role: "Pensionist",
      videoDuration: "1:58",
      videoQuote: '"Weil es einfach urgut tut"',
      videoTag: "Chronic Stress",
      textQuote: "Am Anfang war ich sehr skeptisch – doch schon nach wenigen Minuten verflog die Skepsis und verwandelte sich in wachsende Begeisterung, weil es einfach so gut tut. Ich vergleiche es mit einer Phase kurz vor dem Einschlafen – irrsinnig entspannt.",
      textTag: "Chronische Schmerzen",
      bgGradient: "linear-gradient(to bottom, #8a8a8a, #2c2c2c)",
      videoSrc: Diana
    },
    {
      id: 2,
      name: "Christa Hölzl",
      role: "Masseurin",
      videoDuration: "1:42",
      videoQuote: '"Es war nicht nur eine tolle Erfahrung, sondern etwas...”',
      videoTag: "Migraine Relief",
      textQuote: "Nach drei Sitzungen sind meine Schulter-, Knie- und Rückenschmerzen wie von Zauberhand verschwunden.",
      textTag: "Schulter- und Knieschmerzen",
      bgGradient: "linear-gradient(to bottom, #d5a3b2, #4a3b42)",
      videoSrc: Christa
    },
    {
      id: 3,
      name: "Manuela Anderkoll",
      role: "Pflege- und Betreuungsheim",
      videoDuration: "2:10",
      videoQuote: '"Nach nur drei Monaten, kann ich alleine aus dem Rollstuhl auf...”',
      videoTag: "Sleep & Anxiety",
      textQuote: "Nach drei Monaten regelmäßiger craniosacraler Arbeit kann ich ein paar Schritte machen, alleine aus dem Rollstuhl aufstehen und schon einige Sekunden frei stehen. Vor der Therapie war das nicht möglich.",
      textTag: "Regeneration nach Unfall",
      bgGradient: "linear-gradient(to bottom, #a3b2d5, #3b424a)",
      videoSrc: Manuela
    },
    {
      id: 4,
      name: "Robert Hölzl",
      role: "Pensionist",
      videoDuration: "1:15",
      videoQuote: '"Weil es einfach gut tut...”',
      videoTag: "Chronic Stress",
      textQuote: "Am Anfang war ich sehr skeptisch – doch schon nach wenigen Minuten verflog die Skepsis und verwandelte sich in wachsende Begeisterung, weil es einfach so gut tut. Ich vergleiche es mit einer Phase kurz vor dem Einschlafen – irrsinnig entspannt.",
      textTag: "Chronische Schmerzen",
      bgGradient: "linear-gradient(to bottom, #b2d5a3, #424a3b)",
      videoSrc: Robert
    }
  ];

  const renderStars = () => {
    return (
      <div className="stars-container">
        {[...Array(5)].map((_, i) => (
          <img key={i} src={reviewStarIcon} alt="Star" className="star-icon" />
        ))}
      </div>
    );
  };

  return (
    <section className="testimonial-section" id="testimonials">
      <div className="testimonial-header">
        <div className="header-titles">
          <span className="section-label">Was andere berichten</span>
          <h2>Cranio Sacral Erfahrungen</h2>
        </div>
        
        <div className="review-summary-box">
          <div className="review-score-container">
            <div className="review-score">5.0</div>
            <div className="review-stars-wrapper">
              {renderStars()}
            </div>
          </div>
          <div className="review-divider"></div>
          <div className="review-based-on">
            Based on<br/>
            <strong>200+ reviews</strong>
          </div>
        </div>
      </div>

      <div className="testimonial-carousel">
        <div 
          className={`testimonial-track ${isDragging ? 'dragging' : ''}`}
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {testimonials.map((item) => (
            <div className="testimonial-column" key={item.id}>
              {/* Video Card */}
              <div className="video-card" style={{ background: item.bgGradient }}>
                <video 
                  ref={(el) => { 
                    if (el) {
                      videoRefs.current[item.id] = el;
                    }
                  }}
                  className="testimonial-video"
                  src={item.videoSrc}
                  playsInline
                  muted={true}
                  loop
                  preload="auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (playingVideoId === item.id) {
                      handleVideoPlay(item.id);
                    }
                  }}
                />
                
                <div className="video-overlay"></div>
                <div className="video-duration">{item.videoDuration}</div>
                
                <button 
                  className={`play-button ${playingVideoId === item.id ? 'playing' : ''}`}
                  aria-label={playingVideoId === item.id ? "Pause video" : "Play video"}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleVideoPlay(item.id);
                  }}
                >
                  {playingVideoId === item.id ? (
                    <div className="pause-icon">
                      <span></span>
                      <span></span>
                    </div>
                  ) : (
                    <img src={playIcon} alt="Play" />
                  )}
                </button>
                
                <div className="video-card-content">
                  {renderStars()}
                  <p className="video-quote">{item.videoQuote}</p>
                  
                  <div className="video-footer">
                    <span className="person-name">{item.name}</span>
                    <span className="tag video-tag">{item.videoTag}</span>
                  </div>
                </div>
              </div>

              {/* Text Card */}
              <div className="text-card">
                <img src={quotesIcon} alt="Quote" className="quote-icon-img" />
                <p className="full-text-quote">{item.textQuote}</p>
                
                <div className="text-card-bottom">
                  <div className="text-card-footer">
                    <div className="person-info">
                      <span className="person-name">{item.name}</span>
                      <span className="person-role">{item.role}</span>
                    </div>
                    <span className="tag text-tag">{item.textTag}</span>
                  </div>
                  
                  <div className="text-card-stars">
                    {renderStars()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

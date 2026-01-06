import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/ui/button';
import Card from '../components/ui/card';
import React from 'react';

interface ImageItem {
  src: string;
  alt: string;
}

const IMAGES: ImageItem[] = [
  { src: 'https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png', alt: 'Logo' },
  { src: 'https://garberbrosinc.com/websites/garberbrosinc/images/home-vessels.jpg', alt: 'Home vessels' },
  { src: 'https://garberbrosinc.com/websites/garberbrosinc/images/home-employment.jpg', alt: 'Home employment' },
  { src: 'https://garberbrosinc.com/websites/garberbrosinc/images/home-contact.jpg', alt: 'Home contact' },
  { src: 'https://garberbrosinc.com/;%20%20%20%20%20%20%20%20//if%20we%20have%20the%20properties%20from%20the%20settings%20we%20pass%20them%20in%20and%20set%20up%20the%20resizer%20%20%20%20%20%20%20%20%20%20%20%20%20content%20=%20content%20+', alt: 'Asset 5' },
  { src: 'https://garberbrosinc.com/;%20%20%20%20%20%20%20%20//if%20we%20have%20the%20properties%20from%20the%20settings%20we%20pass%20them%20in%20and%20set%20up%20the%20resizer%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20content%20=%20content%20+', alt: 'Asset 6' },
  { src: "https://garberbrosinc.com/%27/Images/Transparent.html", alt: 'Transparent slide' }
];

export default function HomePage(): JSX.Element {
  const images = Array.isArray(IMAGES) ? IMAGES : [];
  const firstSix = images.slice(0, 6);
  const rest = images.slice(6);

  return (
    <>
      <section className="container hero" aria-labelledby="hero-heading">
        <div className="hero-card">
          <h1 id="hero-heading">Garber Bros, Inc.</h1>
          <p>
            For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of marine transportation services for the offshore oil and gas industry. We pride ourselves on supplying the absolute best marine services to all types of industries. Contact Garber Bros Inc. for all your marine transportation and service needs.
          </p>
          <div style={{ marginTop: 16 }}>
            <Button href="/vessels">View Our Fleet of Vessels</Button>
          </div>
        </div>
        <div className="hero-media" role="img" aria-label="Hero media">
          {firstSix && firstSix[1] ? (
            (() => {
              const safeSrc = encodeURI(firstSix[1].src);
              return (
                <Image src={safeSrc} alt={firstSix[1].alt} width={900} height={520} style={{ width: '100%', height: '100%', objectFit: 'cover' }} unoptimized />
              );
            })()
          ) : null}
        </div>
      </section>

      <section className="container" aria-labelledby="tiles-heading">
        <h2 id="tiles-heading" style={{ marginTop: 10 }}>Explore</h2>
        <div className="tiles">
          <Card className="tile">
            <h3>Our Vessels</h3>
            <a href="/vessels">
              {(() => {
                const item = images[1];
                const safeSrc = encodeURI(item.src);
                return <Image src={safeSrc} alt={item.alt} width={400} height={220} unoptimized />;
              })()}
            </a>
            <p>Garber Bros Inc has an elite fleet of vessels of use in all types of projects.</p>
            <a href="/vessels">View Our Vessels »</a>
          </Card>

          <Card className="tile">
            <h3>Employment</h3>
            <a href="/websites/garberbrosinc/images/application.pdf">
              {(() => {
                const item = images[2];
                const safeSrc = encodeURI(item.src);
                return <Image src={safeSrc} alt={item.alt} width={400} height={220} unoptimized />;
              })()}
            </a>
            <p>Interested in working at Garber Bros? Download our employment application.</p>
            <a href="/websites/garberbrosinc/images/application.pdf">View Our Employment Application »</a>
            <div style={{ marginTop: 8 }}>
              <a href="http://www.goodhiring.com/garberbrosinc/apply/open">Open Application Portal</a>
            </div>
          </Card>

          <Card className="tile">
            <h3>Contact Us</h3>
            <a href="/contact">
              {(() => {
                const item = images[3];
                const safeSrc = encodeURI(item.src);
                return <Image src={safeSrc} alt={item.alt} width={400} height={220} unoptimized />;
              })()}
            </a>
            <p>To contact Garber Bros Inc regarding vessel availability, click here.</p>
            <a href="/contact">Contact Garber Bros Inc »</a>
            <div style={{ marginTop: 8 }}>
              <a href="contact.aspx">Contact (legacy)</a>
            </div>
          </Card>
        </div>
      </section>

      <section className="container" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading">Gallery</h2>
        <p>Image thumbnails and assets from the original site.</p>
        <div className="gallery-grid">
          {Array.isArray(firstSix) ? (Array.isArray(firstSix) ? firstSix : []).map((img, idx) => {
            const safeSrc = encodeURI(img.src);
            return (
              <div key={idx} style={{ borderRadius: 6, overflow: 'hidden' }}>
                <Image src={safeSrc} alt={img.alt} width={240} height={140} unoptimized />
              </div>
            );
          }) : null}
        </div>

        {rest.length > 0 ? (
          <div style={{ marginTop: 18 }}>
            <h3>More</h3>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {(Array.isArray(rest) ? rest : []).map((img, i) => {
                const safeSrc = encodeURI(img.src);
                return (
                  <div key={i} style={{ width: 160, height: 90, borderRadius: 6, overflow: 'hidden' }}>
                    <Image src={safeSrc} alt={img.alt} width={160} height={90} unoptimized />
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}

        <div style={{ marginTop: 18 }}>
          <a href="javascript:previousSlide6347994()">Prev</a>
          {' '}
          <a href="javascript:nextSlide6347994()">Next</a>
        </div>

        <div style={{ marginTop: 12 }}>
          <a href="#">Back to top</a>
        </div>
      </section>

      <section className="container" aria-labelledby="info-heading" style={{ marginTop: 28, marginBottom: 28 }}>
        <h2 id="info-heading">About</h2>
        <p>
          For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of marine transportation services for the offshore oil and gas industry.
        </p>
      </section>
    </>
  );
}

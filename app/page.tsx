import Link from "next/link";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaCompass,
  FaGlobeAmericas,
  FaHeart,
  FaPlane,
  FaRegClock,
  FaStar,
  FaUmbrellaBeach,
} from "react-icons/fa";

const destinations = [
  {
    name: "Amalfi Coast",
    country: "Italy",
    days: "7 days",
    price: "$1,890",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1100&q=85",
    tag: "MOST LOVED",
  },
  {
    name: "Kyoto in Bloom",
    country: "Japan",
    days: "9 days",
    price: "$2,450",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1100&q=85",
    tag: "LIMITED DATES",
  },
  {
    name: "Marrakech Escape",
    country: "Morocco",
    days: "5 days",
    price: "$1,240",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1100&q=85",
    tag: "CULTURE PICK",
  },
];
const stories = [
  {
    title: "The slow side of the Amalfi Coast",
    location: "ITALY · 6 MIN READ",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "A first-timer’s guide to Kyoto",
    location: "JAPAN · 8 MIN READ",
    image:
      "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-inner wrap">
          <div className="hero-copy">
            <div className="eyebrow light">
              <span /> THE WORLD, YOUR WAY
            </div>
            <h1>
              Go beyond
              <br />
              the <em>ordinary.</em>
            </h1>
            <p>
              Thoughtful trips for curious people. Discover places that stay
              with you long after you come home.
            </p>
            <a className="button button-coral" href="#trips">
              Explore our trips <FaArrowRight />
            </a>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            <span>
              Small groups. Big stories.
              <br />
              Always made personal.
            </span>
          </div>
        </div>
        <div className="hero-bottom wrap">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
          <span>01 — 03</span>
        </div>
      </section>

      <section className="search-section wrap" aria-label="Find your trip">
        <div className="search-intro">
          <span>YOUR NEXT CHAPTER</span>
          <h2>Where to next?</h2>
        </div>
        <form className="search-card" action="#trips">
          <label>
            <span>DESTINATION</span>
            <select defaultValue="">
              <option value="" disabled>
                Anywhere in the world
              </option>
              <option>Italy</option>
              <option>Japan</option>
              <option>Morocco</option>
            </select>
          </label>
          <label>
            <span>WHEN</span>
            <select defaultValue="">
              <option value="" disabled>
                Choose your dates
              </option>
              <option>Spring 2027</option>
              <option>Summer 2027</option>
              <option>Autumn 2027</option>
            </select>
          </label>
          <label>
            <span>TRAVEL STYLE</span>
            <select defaultValue="">
              <option value="" disabled>
                What feels like you?
              </option>
              <option>Culture & food</option>
              <option>Nature & outdoors</option>
              <option>Slow travel</option>
            </select>
          </label>
          <button className="search-button" type="submit">
            <FaCompass /> <span>Find my trip</span>
          </button>
        </form>
      </section>

      <section className="section wrap" id="trips">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span /> CURATED FOR YOU
            </div>
            <h2>Places with a pull.</h2>
          </div>
          <a className="text-link" href="#journeys">
            View all journeys <FaArrowRight />
          </a>
        </div>
        <div className="trip-grid">
          {destinations.map((trip) => (
            <article className="trip-card" key={trip.name}>
              <div
                className="trip-image"
                style={{ backgroundImage: `url("${trip.image}")` }}
              >
                <span className="trip-tag">{trip.tag}</span>
                <button className="heart" aria-label={`Save ${trip.name}`}>
                  <FaHeart />
                </button>
                <span className="image-rating">
                  <FaStar /> {trip.rating}
                </span>
              </div>
              <div className="trip-info">
                <div className="trip-place">
                  <div>
                    <span>{trip.country}</span>
                    <h3>{trip.name}</h3>
                  </div>
                  <span className="trip-arrow">
                    <FaExternalLinkAlt />
                  </span>
                </div>
                <div className="trip-meta">
                  <span>
                    <FaRegClock /> {trip.days}
                  </span>
                  <span>
                    From <b>{trip.price}</b>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto" id="journeys">
        <div className="manifesto-image" />
        <div className="manifesto-copy">
          <div className="eyebrow light">
            <span /> TRAVEL, THOUGHTFULLY
          </div>
          <h2>
            See more.
            <br />
            <em>Feel more.</em>
            <br />
            Be more.
          </h2>
          <p>
            We believe the best journeys are the ones that bring you closer—to a
            place, its people, and a little more of yourself.
          </p>
          <a className="button button-outline" href="#about">
            The Travel Boss difference <FaArrowRight />
          </a>
          <div className="manifesto-signature">
            Made for the <span>curious.</span>
          </div>
        </div>
      </section>

      <section className="perks wrap" id="about">
        <div className="perks-head">
          <div className="eyebrow">
            <span /> THE GOOD STUFF
          </div>
          <h2>
            Travel that feels
            <br />
            like <em>you.</em>
          </h2>
        </div>
        <div className="perk-list">
          <div className="perk">
            <span className="perk-icon">
              <FaGlobeAmericas />
            </span>
            <div>
              <h3>Local, always</h3>
              <p>
                Meet the people who know their home best. Our local hosts make
                every stop mean more.
              </p>
            </div>
          </div>
          <div className="perk">
            <span className="perk-icon">
              <FaUmbrellaBeach />
            </span>
            <div>
              <h3>Room to breathe</h3>
              <p>
                Small groups, thoughtful pacing, and space to follow the moment
                wherever it leads.
              </p>
            </div>
          </div>
          <div className="perk">
            <span className="perk-icon">
              <FaPlane />
            </span>
            <div>
              <h3>Every detail, handled</h3>
              <p>
                From the first hello to the ride home, the little things are
                already taken care of.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stories wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span /> FIELD NOTES
            </div>
            <h2>For the love of elsewhere.</h2>
          </div>
          <a className="text-link" href="#stories">
            Read all stories <FaArrowRight />
          </a>
        </div>
        <div className="story-grid" id="stories">
          {stories.map((story) => (
            <a href="#stories" className="story-card" key={story.title}>
              <div
                className="story-image"
                style={{ backgroundImage: `url("${story.image}")` }}
              />
              <div className="story-info">
                <span>{story.location}</span>
                <h3>{story.title}</h3>
                <FaArrowRight />
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="newsletter">
        <div className="newsletter-inner wrap">
          <div>
            <div className="eyebrow light">
              <span /> A LITTLE INSPIRATION
            </div>
            <h2>
              Good things are
              <br />
              just around the <em>world.</em>
            </h2>
          </div>
          <form action="#newsletter">
            <label htmlFor="email">
              Occasional notes for the curious. No noise, just nice.
            </label>
            <div className="email-row">
              <input
                id="email"
                type="email"
                placeholder="Your email address"
                required
              />
              <button type="submit" aria-label="Subscribe">
                <FaArrowRight />
              </button>
            </div>
            <small>
              By subscribing, you agree to receive occasional travel inspiration
              from Travel Boss.
            </small>
          </form>
        </div>
      </section>
    </>
  );
}

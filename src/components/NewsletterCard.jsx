export default function NewsletterCard() {
  return (
    <>
      <div className="newsletter-card-wrapper">
        <div className="newsletter-card-cta">
          <p></p>
        </div>
        <form className="newsletter-card-form">
          <input type="text" placeholder="Enter Your Email" />
          <input type="submit" value={"Subscribe"} />
        </form>
      </div>
    </>
  );
}

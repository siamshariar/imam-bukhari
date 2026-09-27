export default function Newsletter() {
  return (
    <div className="newsletter">
      <h3 className="newsletter__title">Newsletter</h3>
      <p className="newsletter__subTitle">Subscribe to our mailing list</p>
      <div className="newsletter__email">
        <input type="text" placeholder="Enter Your Email" />
        <button>Sign Up</button>
      </div>
    </div>
  );
}

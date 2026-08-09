export default function AddressDetail() {
  return (
    <div className="addressDetail">
      <div className="addressDetail__wrapper container">
        <div className="addressDetail__left">
          <img className="addressDetail__img" src="/img/logo/logo.png" alt="" />
          <h4 className="addressDetail__title">
            কুল্লিয়ার বর্তমান ক্যাম্পাস, যোগাযোগ ও ঠিকানা
          </h4>
          <ul>
            <li>
              <img
                className="addressDetail__icon"
                src="/img/icons/maps-and-flags.png"
                alt="map icon"
              />
              বাড়ী: ৯ রোড: ৬/এ, সেক্টর: ৫, উত্তরা, ঢাকা।
            </li>
            <li>
              <img
                className="addressDetail__icon"
                src="/img/icons/iphone.png"
                alt="phone icon"
              />
              ফোন: ০১৮৩৪-১৭৭ ৭৬৫, ০৯৬১০ ৯৯১ ৯৯১
            </li>
          </ul>
        </div>
        <div className="addressDetail__right">
          <ul>
            <li>
              <img
                className="addressDetail__icon"
                src="/img/icons/email.png"
                alt="email icon"
              />
              Kulliyatulquran.ac@gmail.com
            </li>
            <li>
              <img
                className="addressDetail__icon"
                src="/img/icons/world-wide-web.png"
                alt="map icon"
              />
              www.ImamBukhariTrust.com
            </li>

            <li>
              <img
                className="addressDetail__icon"
                src="/img/icons/facebook.png"
                alt="map icon"
              />
              facebook.com/kulliyatulquran
            </li>

            <li>
              <img
                className="addressDetail__icon"
                src="/img/icons/twitter.png"
                alt="map icon"
              />
              twitter.com/kulliyatul
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

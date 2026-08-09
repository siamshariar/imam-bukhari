import Snackbar from "@mui/material/Snackbar";
import { useState, useRef } from "react";

const ContactForm = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  // contact
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const nameEl = useRef(null);
  const subjectEl = useRef(null);
  const emailEl = useRef(null);
  const phoneEl = useRef(null);
  const messageEl = useRef(null);

  const handleNameChange = (e) => {
    e.target.classList.remove("error");
    setName(e.target.value.trim());
  };

  const handleSubjectChange = (e) => {
    e.target.classList.remove("error");
    setSubject(e.target.value.trim());
  };

  const handleEmailChange = (e) => {
    e.target.classList.remove("error");
    setEmail(e.target.value.trim());
  };

  const handlePhoneChange = (e) => {
    e.target.classList.remove("error");
    setPhone(e.target.value.trim());
  };

  const handleMessageChange = (e) => {
    e.target.classList.remove("error");
    setMessage(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //console.log('Sending')

    let error = false;

    const pattern =
      /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    if (name === "") {
      nameEl.current.classList.add("error");
      error = true;
    }

    // if (subject === '') {
    // 	subjectEl.current.classList.add('error')
    // 	error = true
    // }

    if (email === "") {
      emailEl.current.classList.add("error");
      error = true;
    }

    if (!pattern.test(email)) {
      emailEl.current.classList.add("error");
      error = true;
    }

    // if (phone === '') {
    // 	phoneEl.current.classList.add('error')
    // 	error = true
    // }

    if (message === "") {
      messageEl.current.classList.add("error");
      error = true;
    }

    if (error) return;

    let data = {
      name,
      subject,
      email,
      phone,
      message,
    };

    fetch("/api/sendMail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      //console.log('Response received')
      if (res.status === 200) {
        //console.log(res)
        setName("");
        setSubject("");
        setEmail("");
        setPhone("");
        setMessage("");

        nameEl.current.value = "";
        // subjectEl.current.value = "";
        emailEl.current.value = "";
        phoneEl.current.value = "";
        messageEl.current.value = "";

        setSnackbarOpen(true);
      }
    });
  };

  return (
    <>
      <form
        action="" //
        method="POST"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="form_group">
          <div className="label_group">
            <label htmlFor="name">নাম</label>
            <input
              id="name"
              type="text"
              placeholder="নাম"
              // value=""
              name="name"
              required
              onChange={(e) => handleNameChange(e)}
              ref={nameEl}
            />
          </div>
        </div>
        <div className="form_group">
          <div className="label_group">
            <label htmlFor="contact_email">ইমেইল</label>
            <input
              id="contact_email"
              type="text"
              placeholder="ইমেইল"
              name="email"
              required
              onChange={(e) => handleEmailChange(e)}
              ref={emailEl}
            />
          </div>
        </div>

        <div className="form_group">
          <div className="label_group">
            <label htmlFor="phone">মোবাইল</label>
            <input
              id="phone"
              // type="tel"
              type="text"
              placeholder="মোবাইল"
              // value=""
              name="phone"
              required
              onChange={(e) => handlePhoneChange(e)}
              ref={phoneEl}
            />
          </div>
        </div>

        <div className="form_group">
          <div className="label_group textarea">
            <label htmlFor="msg">বার্তা</label>
            <textarea
              id="msg"
              placeholder="বার্তা"
              name="message"
              required
              onChange={(e) => handleMessageChange(e)}
              ref={messageEl}
            ></textarea>
          </div>
        </div>

        <div className="submit">
          <button type="submit" name="contact" className="btn btn--primary">
            সাবমিট
          </button>
          <ul className="socials">
            <li>
              <a
                href="https://www.facebook.com/kulliyatulquran"
                className="socials_link"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            {/*<li>*/}
            {/*  <a*/}
            {/*    href="https://www.instagram.com/ivannsantacruz/"*/}
            {/*    className="socials_link"*/}
            {/*    target="_blank"*/}
            {/*  >*/}
            {/*    <svg width="13.4" height="13.4" viewBox="0 0 9 9">*/}
            {/*      <path d="M7.43.911a.658.658 0 100 1.316.658.658 0 000-1.316M4.5 6.33a1.83 1.83 0 110-3.659 1.83 1.83 0 010 3.659m0-4.648a2.818 2.818 0 10-.001 5.637A2.818 2.818 0 004.5 1.682m4.468 5.037c-.024.534-.114.826-.189 1.018-.1.256-.218.439-.41.63a1.697 1.697 0 01-.632.412c-.192.075-.484.165-1.018.19C6.139 8.995 5.966 9 4.5 9c-1.465 0-1.64-.005-2.218-.031-.534-.025-.826-.115-1.019-.19-.256-.1-.439-.218-.63-.411a1.703 1.703 0 01-.412-.631C.146 7.545.057 7.253.032 6.719.006 6.139 0 5.966 0 4.5c0-1.465.006-1.639.032-2.218.025-.535.114-.826.189-1.019.1-.256.22-.439.411-.63C.824.44 1.007.32 1.263.22c.193-.075.485-.164 1.019-.189C2.862.006 3.035 0 4.5 0c1.466 0 1.639.006 2.219.032.534.025.826.114 1.018.189.256.1.439.22.632.411.192.192.31.375.41.631.075.193.165.484.189 1.019.027.58.032.753.032 2.218 0 1.466-.005 1.64-.032 2.219"></path>*/}
            {/*    </svg>*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li>
              <a
                href="#"
                className="socials_link"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@kulliyatulquranbd9275"
                className="socials_link"
                target="_blank"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            {/*<li>*/}
            {/*  <a*/}
            {/*    href="https://www.compass.com/agents/ivan-santacruz/"*/}
            {/*    className="socials_link"*/}
            {/*    target="_blank"*/}
            {/*  >*/}
            {/*    <svg width="16" height="16" viewBox="0 0 60.14 60">*/}
            {/*      <path d="M29.86 0a30 30 0 00.28 60 30.03 30.03 0 0030-30A30 30 0 0029.86 0zm.28 8a22.03 22.03 0 0122 22 22 22 0 11-22-22zm7.18 9.17l-20 20 5.65 5.66 20-20z" />*/}
            {/*    </svg>*/}
            {/*  </a>*/}
            {/*</li>*/}
          </ul>
        </div>
      </form>

      {/* <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Email send successfully"
      /> */}
    </>
  );
};

export default ContactForm;

import { useEffect } from "react";

import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

import db from "../firebase/firestore";

const VisitorTracker = () => {
  useEffect(() => {
    const getVisitor = async () => {
      try {
        const res = await fetch("https://ipwho.is/");
        const data = await res.json();

        console.log(data);

        console.log("Country:", data.country);
        const countryRef = doc(db, "countries", data.country_code);

        const countrySnap = await getDoc(countryRef);

        if (countrySnap.exists()) {
          await updateDoc(countryRef, {
            visits: increment(1),
          });
        } else {
          await setDoc(countryRef, {
            country: data.country,
            code: data.country_code,
            flag: data.flag.emoji,
            visits: 1,
          });
        }
        console.log("Code:", data.country_code);
      } catch (err) {
        console.error(err);
      }
    };

    getVisitor();
  }, []);

  return null;
};

export default VisitorTracker;

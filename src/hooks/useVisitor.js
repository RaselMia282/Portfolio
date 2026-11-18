import { useEffect } from "react";
import { doc, increment, updateDoc, getDoc, setDoc } from "firebase/firestore";
import db from "../firebase/firestore";

const useVisitor = () => {
  useEffect(() => {
    // ১. চেক করো লোকাল স্টোরেজে আগেই সেট করা আছে কি না
    if (localStorage.getItem("portfolio-visited") === "true") {
      console.log("Visitor already counted.");
      return;
    }

    const updateVisitor = async () => {
      try {
        console.log("Attempting to count visitor...");
        
        // ২. ডাটাবেজ আপডেট করো আগে
        const res = await fetch("https://ipwho.is/");
        const data = await res.json();
        const { country_code: code, country, flag } = data;

        await updateDoc(doc(db, "stats", "visitors"), {
          total: increment(1),
        });

        const countryRef = doc(db, "countries", code);
        const snap = await getDoc(countryRef);

        if (snap.exists()) {
          await updateDoc(countryRef, { visits: increment(1) });
        } else {
          await setDoc(countryRef, { code, country, flag: flag.emoji, visits: 1 });
        }

        // ৩. কাজ শেষ হলে তবেই লক করো
        localStorage.setItem("portfolio-visited", "true");
        console.log("Visitor counted successfully!");
        
      } catch (err) {
        console.error("Tracking failed:", err);
      }
    };

    updateVisitor();
  }, []);
};

export default useVisitor;
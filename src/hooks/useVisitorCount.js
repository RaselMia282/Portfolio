import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import db from "../firebase/firestore";

const useVisitorCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(db, "stats", "visitors"),
      (docSnap) => {
        if (docSnap.exists()) {
          setCount(docSnap.data().total);
        }
      }
    );

    return () => unsubscribe();
  }, []);

  return count;
};

export default useVisitorCount;